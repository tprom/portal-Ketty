export function CityCoverPage({ title, subtitle, image }) {
  return (
    <div className="page cover-page">
      <img src={image} alt={title} className="page-image" />
      <h1 className="page-title">{title}</h1>
      <h2 className="page-subtitle">{subtitle}</h2>
    </div>
  );
}
