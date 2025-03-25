"use client";

import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";

import react from "../../public/logo.svg";

export default function ScrollRotatingImage({
  scrollRef,
}: {
  scrollRef: RefObject<HTMLDivElement | null>;
}) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollY = container.scrollTop;
      setRotation(scrollY / 5);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <Image
        ref={imageRef}
        src={react}
        alt="rotating React logo"
        className="w-32 h-32 transition-transform duration-75 ease-linear"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
}
