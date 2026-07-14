export default function About() {
  const checkIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="#1E7A67" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12l2.5 2.5L16 9" />
    </svg>
  );

  return (
    <section id="about" style={{ background: "#fff" }}>
      <div className="wrap about-grid">
        <div>
          <div className="section-head" style={{ textAlign: "left", marginBottom: "22px" }}>
            <div className="kicker">Our Musollah</div>
            <h2>A Small Hall, A Wide-Open Door</h2>
          </div>
          <p>
            Sultan Musalla has served our neighbourhood as a place for the five
            daily prayers, Jumu&apos;ah, and quiet reflection. We are a modest hall
            by design &mdash; our aim is to make salah easy to reach, not to be
            the biggest building on the block.
          </p>
          <p>
            Volunteers and the local community keep the musollah running:
            cleaning, scheduling imams for Jumu&apos;ah, and organising the classes
            and gatherings that turn a prayer hall into a community.
          </p>
          <ul className="facility-list">
            <li>{checkIcon} Separate wudu (ablution) area for brothers and sisters</li>
            <li>{checkIcon} Dedicated sisters&apos; prayer section</li>
            <li>{checkIcon} Free parking adjacent to the hall</li>
            <li>{checkIcon} Weekly Qur&apos;an class for children and adults</li>
          </ul>
        </div>
        <div className="about-panel">
          <h3>At a Glance</h3>
          <div className="stat"><span>Established</span><b>Add year</b></div>
          <div className="stat"><span>Capacity</span><b>Add number</b></div>
          <div className="stat"><span>Jumu&apos;ah attendance</span><b>Add estimate</b></div>
          <div className="stat"><span>Weekly programs</span><b>Add number</b></div>
        </div>
      </div>
    </section>
  );
}
