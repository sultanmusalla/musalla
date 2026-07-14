const events = [
  {
    day: "05",
    month: "Jul",
    title: "Jumu'ah Khutbah",
    description:
      "Weekly Friday sermon and congregational prayer — all welcome, doors open 30 minutes before.",
  },
  {
    day: "08",
    month: "Jul",
    title: "Children's Qur'an Class",
    description:
      "Weekday evening class for young readers, Tajweed basics and memorisation.",
  },
  {
    day: "12",
    month: "Jul",
    title: "Community Iftar Planning Meeting",
    description:
      "Volunteers meet to plan upcoming community meals and outreach — replace with your real schedule.",
  },
];

export default function Events() {
  return (
    <section id="events">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">What&apos;s On</div>
          <h2>Programs &amp; Announcements</h2>
        </div>
        <div className="events">
          {events.map((e) => (
            <div className="event-card" key={e.title}>
              <div className="event-date">
                <div className="d">{e.day}</div>
                <div className="m">{e.month}</div>
              </div>
              <div>
                <h4>{e.title}</h4>
                <p>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
