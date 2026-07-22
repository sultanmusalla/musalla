export default function PrayerTimes() {
  return (
    <section id="prayer-times">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Today&apos;s Schedule</div>
          <h2>Prayer &amp; Iqamah Times</h2>
        </div>

        <div className="times-panel">
          <iframe 
            src="https://timing.athanplus.com/masjid/widgets/embed?theme=3&masjid_id=aAepRkLj&color=D4E5C3" 
            width="100%" 
            height="500" 
            frameBorder={0} 
            allowTransparency={true}
            style={{ mixBlendMode: 'multiply' }}
          ></iframe>
        </div>

        <div className="val" style={{color: "#000000", fontWeight: 500, fontSize: "0.85rem", marginTop: "4px", textAlign: "center"}}>*For Friday Jumuah prayer, please visit <a href="https://monroemosque.com" style={{color: "#d81b60", fontWeight: 500, fontSize: "0.85rem", fontStyle: "bold", textDecoration: "underline"}} target="_blank" rel="noopener noreferrer">Islamic Center of Monroe (ICOM)</a>, located at 19683 US-2, Monroe, WA 98272</div>

      </div>
    </section>
  );
}
