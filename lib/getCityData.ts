import augsburg from "@/data/cities/augsburg.json";
import { CityData } from "./types";

const cities: Record<string, CityData> = {
  augsburg
};

export function getCityData(slug: string): CityData {
  const city = cities[slug];

  if (!city) {
    throw new Error(`City not found: ${slug}`);
  }

  return city;
}
