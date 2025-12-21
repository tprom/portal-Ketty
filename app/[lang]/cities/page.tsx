import index from "@/data/cities/index.json";
import Link from "next/link";

export default function CitiesPage({ params }) {
  const { lang } = params;

  return (
    <div className="cities-list">
      {index.map(city => (
        <Link
          key={city.slug}
          href={`/${lang}/cities/${city.slug}`}
          className="city-card"
        >
          {city.slug}
        </Link>
      ))}
    </div>
  );
}
