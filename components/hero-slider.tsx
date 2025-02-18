"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Slide {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    title: "Elegant Evening",
    subtitle: "Dressed to Impress",
    image: "/slide-3.jpg",
    description: "Make a statement with our stunning eveningwear collection.",
    buttonText: "Browse now",
  },
  {
    title: "Timeless Timepiece",
    subtitle: "Elegance Redefined",
    image: "/slide-1.jpg",
    description:
      "Timeless Pieces for the Modern Woman’s Wardrobe. A perfect blend of elegance and functionality for any occasion.",
    buttonText: "Buy now",
  },
  {
    title: "Casual Chic",
    subtitle: "Effortless Style",
    image: "/slide-2.jpg",
    description:
      "Discover versatile outfits perfect for everyday comfort and style.",
    buttonText: "Shop now",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            fill
            priority
            alt={`Slide ${index + 1}`}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
      ))}

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 backdrop-blur-sm" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 backdrop-blur-sm" />

      {/* Navigation dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content wrapper */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="flex h-full items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Placeholder for additional content */}
            <div
              className={`relative lg:block ${
                activeSlide === 2 ? "lg:order-last" : "lg:order-last"
              }`}
            >
              {/* You can add additional content here if needed */}
            </div>

            {/* Text content */}
            <div
              className={`text-white space-y-8 ${
                activeSlide === 2 ? "lg:order-first" : "lg:order-first"
              }`}
            >
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  {slides[activeSlide].title}
                  <br />
                  <span className="text-4xl lg:text-5xl opacity-90">
                    {slides[activeSlide].subtitle}
                  </span>
                </h1>
                <p className="text-lg text-gray-300">
                  {slides[activeSlide].description}
                </p>
              </div>
              <button className="group relative px-8 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors duration-300">
                <Link href="/shop" className="relative z-10">
                  {slides[activeSlide].buttonText}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
