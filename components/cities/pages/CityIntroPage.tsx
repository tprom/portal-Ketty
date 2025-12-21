export function CityIntroPage({ text, image }) {
  return (
    <div className="page intro-page">
      <img src={image} alt="" className="page-image" />
      <p className="page-text">{text}</p>
    </div>
  );
}
