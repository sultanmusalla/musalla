export default function StarRow({ variant }: { variant: "light" | "dark" }) {
  const star = "M50 4l6.4 19.7 20.7-.4-16.7 12.7 6.4 19.7L50 43.6 33.2 55.7l6.4-19.7L22.9 23.3l20.7.4L50 4z";
  return (
    <div className={`star-row ${variant}`}>
      {[0, 1, 2].map((i) => (
        <svg key={i} viewBox="0 0 100 100">
          <path d={star} />
        </svg>
      ))}
    </div>
  );
}
