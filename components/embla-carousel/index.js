import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./embla-carousel-buttons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
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
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map(({ src, alt }, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <div
                    className=""
                    style={
                      {
                        // background: "rgb(0,0,0)",
                        // background:
                        //   "linear-gradient(0deg, rgba(0,0,0,0.25) 0%, rgba(255,255,255,0) 15%)",
                        // zIndex: 2,
                        // position: "absolute",
                        // width: "100%",
                        // height: "100%",
                      }
                    }
                  />
                  <Image
                    className="embla__slide__img object-cover z-0"
                    src={src}
                    alt={alt}
                    layout="fill"
                  />
                  <div className="embla__dots z-3">
                    {scrollSnaps.map((_, index) => (
                      <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </>
  );
};
