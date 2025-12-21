export function PlaceStoryPage({ title, story }) {
  return (
    <div className="page story-page">
      <h2 className="page-title">{title}</h2>
      <p className="page-text">{story}</p>
    </div>
  );
}
