import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./embla-carousel-buttons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const MobileCarousel = ({ data }) => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
    },
    [Autoplay()]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="embla bg-[#f3f3f3]">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {data.map((item, key) => (
            <div className="embla__slide py-16" key={key}>
              <div className=" flex justify-center">
                <div className="embla__dots z-3 place-center  flex flex-col  justify-items-center">
                  <div className=" flex flex-col items-center">
                    {item.icon}
                    <p className="mt-4">{item.text}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                {scrollSnaps.map((_, key) => (
                  <DotButton
                    key={key}
                    selected={key === selectedIndex}
                    onClick={() => scrollTo(key)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};
