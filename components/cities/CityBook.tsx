"use client";

import HTMLFlipBook from "react-pageflip";
import { generateCityPages } from "@/lib/generateCityPages";
import { CityData } from "@/lib/types";

export function CityBook({ city, lang }: { city: CityData; lang: string }) {
  const pages = generateCityPages(city, lang);

  return (
    <div className="city-book-container">
      <HTMLFlipBook
        width={1024}
        height={1325}
        size="stretch"
        minWidth={300}
        maxWidth={1024}
        minHeight={400}
        maxHeight={1325}
        showCover={true}
        className="city-book"
      >
        {pages.map((page, index) => (
          <div key={index} className="book-page">
            {page}
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
