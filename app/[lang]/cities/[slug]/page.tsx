import { getCityData } from "@/lib/getCityData";
import { CityBook } from "@/components/cities/CityBook";

export default function CityPage({ params }) {
  const { lang, slug } = params;

  const city = getCityData(slug);

  return (
    <div className="city-page">
      <CityBook city={city} lang={lang} />
    </div>
  );
}
