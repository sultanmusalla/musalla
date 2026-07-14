"use client";

import { useEffect, useState, useRef } from "react";

const CONFIG = {
  city: "Sultan",
  country: "US",
  method: 2,
};

const PRAYER_ORDER = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;

interface Timings {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  [key: string]: string;
}

export default function Hero() {
  const [timings, setTimings] = useState<Timings | null>(null);
  const [methodName, setMethodName] = useState("—");
  const [dateReadable, setDateReadable] = useState("—");
  const [error, setError] = useState(false);
  const [nextName, setNextName] = useState("Loading…");
  const [countdown, setCountdown] = useState("--:--:--");
  const timingsRef = useRef<Timings | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(
            CONFIG.city
          )}&country=${encodeURIComponent(CONFIG.country)}&method=${CONFIG.method}`
        );
        const data = await res.json();
        timingsRef.current = data.data.timings;
        setTimings(data.data.timings);
        setMethodName(data.data.meta.method.name);
        setDateReadable(data.data.date.readable);
      } catch {
        setError(true);
        setNextName("—");
      }
    }
    load();
  }, []);

  useEffect(() => {
    if (!timings) return;

    function tick() {
      const t = timingsRef.current;
      if (!t) return;
      const now = new Date();
      let next: string | null = null;
      let nextTime: Date | null = null;

      for (const name of PRAYER_ORDER) {
        const clean = t[name].split(" ")[0];
        const [h, m] = clean.split(":").map(Number);
        const d = new Date();
        d.setHours(h, m, 0, 0);
        if (d > now) {
          next = name;
          nextTime = d;
          break;
        }
      }

      if (!next) {
        next = "Fajr";
        const clean = t.Fajr.split(" ")[0];
        const [h, m] = clean.split(":").map(Number);
        nextTime = new Date();
        nextTime.setDate(nextTime.getDate() + 1);
        nextTime.setHours(h, m, 0, 0);
      }

      const diff = Math.max(0, nextTime!.getTime() - now.getTime());
      const hh = String(Math.floor(diff / 3600000)).padStart(2, "0");
      const mm = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      const ss = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");

      setNextName(next);
      setCountdown(`${hh}h ${mm}m ${ss}s`);
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timings]);

  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div className="eyebrow">Ahlan wa Sahlan &mdash; Welcome</div>
        <h1>Sultan Musollah</h1>
        <p className="tagline">
          A place of prayer and muslim neighborhood community. Everyone is welcome to join us for
          daily salah, and the programs that keep our neighbourhood connected.
        </p>

        <div className="board">
          <div className="label">Next Prayer</div>
          <div className="next-name" id="nextName">{nextName}</div>
          <div className="clock" id="countdown">
            {timings ? (
              <>
                {countdown.split(" ").map((part, i) => {
                  const num = part.slice(0, -1);
                  const unit = part.slice(-1);
                  return (
                    <span key={i}>
                      {num}
                      <span className="unit">{unit}</span>{" "}
                    </span>
                  );
                })}
              </>
            ) : (
              "--:--:--"
            )}
          </div>
          <div className="subrow">
            <span id="todayDate">{dateReadable}</span>
            <span id="calcMethod">{error ? "Unavailable" : methodName}</span>
          </div>
          {error && (
            <div className="status-msg">
              Live prayer times unavailable right now — Please contact us or check back later.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
