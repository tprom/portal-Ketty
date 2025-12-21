export function PlaceColoringPage({ title, coloring, download }) {
  return (
    <div className="page coloring-page">
      <h2 className="page-title">{title}</h2>
      <img src={coloring} alt={title} className="page-image" />

      <a href={download} download className="download-link">
        Download high‑resolution version
      </a>
    </div>
  );
}
