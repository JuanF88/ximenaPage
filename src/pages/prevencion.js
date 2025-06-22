"use client";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-2 sm:-left-20 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
      aria-label="Anterior"
    >
      <ChevronLeft className="text-pink-600 w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-2 sm:-right-20 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
      aria-label="Siguiente"
    >
      <ChevronRight className="text-pink-600 w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
}


export default function Prevencion() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const videoSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const videos = [
    "https://www.youtube.com/embed/zqrbXrsBz-0?controls=1",
    "https://www.youtube.com/embed/KE6jFdH9jmI?controls=1",
    "https://www.youtube.com/embed/4SM9V9JqU18?controls=1",
    "https://www.youtube.com/embed/E-nB1yhTkZI?controls=1",
    "https://www.youtube.com/embed/VxDK0qPjmuY?controls=1",
    
    
  ];

  return (
<div className="relative flex flex-col min-h-screen overflow-auto">      {/* 🎨 Fondo degradado */}
      <div className="absolute inset-0 -z-30 w-full h-full bg-pink-100 sm:bg-gradient-to-br sm:from-pink-100 sm:via-white sm:to-purple-300 sm:animate-gradient opacity-80" />

      {/* 🫧 Blobs decorativos */}
      <div className="hidden sm:block absolute top-20 left-10 w-80 h-80 bg-pink-300 rounded-full opacity-30 blur-3xl -z-20" />
      <div className="hidden sm:block absolute bottom-30 right-10 w-96 h-96 bg-purple-300 rounded-full opacity-30 blur-3xl -z-20" />
      <div className="hidden sm:block absolute bottom-10 left-10 w-80 h-80 bg-pink-300 rounded-full opacity-30 blur-3xl -z-20" />
      <div className="hidden sm:block absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl -z-20" />

      {/* 📌 Contenido principal */}
      <Header />
      <Analytics />


      <main className="flex-grow pt-40 px-4 sm:px-8 max-w-5xl mx-auto">
<section className="bg-white rounded-3xl shadow-xl p-6 mb-12 transition duration-300">
          <div className="w-full rounded-xl shadow-md relative">
            
            
            {/* Carrusel solo en PC */}
<div className="hidden sm:block">
  <Slider {...videoSettings}>
    {videos.map((src, index) => (
      <div key={index} className="w-full px-4">
        <div className="w-full aspect-[16/9] overflow-hidden rounded-xl">
          <iframe
            src={src}
            title={`Video ${index + 1}`}
            className="w-full h-full rounded-xl"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    ))}
  </Slider>
</div>

<div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory px-2 sm:hidden">
  {videos.map((src, index) => (
    <div key={index} className="flex-shrink-0 w-full snap-center">
      <div className="w-full aspect-[16/9] overflow-hidden rounded-xl">
        <iframe
          src={src}
          title={`Video ${index + 1}`}
          className="w-full h-full rounded-xl"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  ))}
</div>


          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
