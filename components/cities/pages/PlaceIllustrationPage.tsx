export function PlaceIllustrationPage({ title, image }) {
  return (
    <div className="page illustration-page">
      <h2 className="page-title">{title}</h2>
      <img src={image} alt={title} className="page-image" />
    </div>
  );
}
