export interface CityData {
  city: Record<string, string>;
  slug: string;

  cover: {
    title: Record<string, string>;
    subtitle: Record<string, string>;
    image: string;
  };

  intro: {
    text: Record<string, string>;
    image: string;
  };

  places: PlaceData[];
}

export interface PlaceData {
  id: string;

  title: Record<string, string>;
  story: Record<string, string>;

  illustration: string;
  coloring: string;
  download: string;
}
