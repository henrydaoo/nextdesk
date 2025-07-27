import { useEffect, useState } from "react";

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("gallery");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const images = [
    { src: "/next-1.png", alt: "Open workspace with natural light" },
    { src: "/next-12.png", alt: "Private meeting room" },
    { src: "/next-2.png", alt: "Team collaboration area" },
    { src: "/next-4.png", alt: "Shared working space" },
    { src: "/next-7.png", alt: "Lounge area" },
    { src: "/next-8.png", alt: "Personal desk setup" },
    { src: "/next-9.png", alt: "Networking event" },
    { src: "/next-10.png", alt: "Bright office environment" },
    { src: "/next-3.png", alt: "Modern office interior" },
    { src: "/next-14.png", alt: "Breakout zone" },
    { src: "/next-6.png", alt: "Creative workspace" },
    { src: "/next-16.png", alt: "Community kitchen" },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 fade-in ${isVisible ? "visible" : ""}`}
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Our Spaces
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            A Glimpse Inside NextDesk
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our thoughtfully designed coworking environments, built for
            comfort, collaboration, and productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {" "}
          {/* Responsive grid */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300 fade-in ${
                isVisible ? "visible" : ""
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold text-center px-4">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
