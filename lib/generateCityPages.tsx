import React from "react";
import {
  CityCoverPage,
  CityIntroPage,
  PlaceStoryPage,
  PlaceIllustrationPage,
  PlaceColoringPage
} from "@/components/cities/pages";

import { CityData } from "./types";

export function generateCityPages(city: CityData, lang: string) {
  const pages: React.ReactNode[] = [];

  pages.push(
    <CityCoverPage
      title={city.cover.title[lang]}
      subtitle={city.cover.subtitle[lang]}
      image={city.cover.image}
    />
  );

  pages.push(
    <CityIntroPage
      text={city.intro.text[lang]}
      image={city.intro.image}
    />
  );

  city.places.forEach(place => {
    pages.push(
      <PlaceStoryPage
        title={place.title[lang]}
        story={place.story[lang]}
      />
    );

    pages.push(
      <PlaceIllustrationPage
        title={place.title[lang]}
        image={place.illustration}
      />
    );

    pages.push(
      <PlaceColoringPage
        title={place.title[lang]}
        coloring={place.coloring}
        download={place.download}
      />
    );
  });

  return pages;
}
