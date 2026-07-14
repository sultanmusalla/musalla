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
      </div>
    </section>
  );
}
