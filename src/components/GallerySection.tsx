import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const GallerySection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const images = [
    { src: "/next-1.webp", alt: "Open workspace with natural light" },
    { src: "/next-12.webp", alt: "Private meeting room" },
    { src: "/next-2.webp", alt: "Team collaboration area" },
    { src: "/next-4.webp", alt: "Shared working space" },
    { src: "/next-7.webp", alt: "Lounge area" },
    { src: "/next-8.webp", alt: "Personal desk setup" },
    { src: "/next-9.webp", alt: "Networking event" },
    { src: "/next-10.webp", alt: "Bright office environment" },
    { src: "/next-3.webp", alt: "Modern office interior" },
    { src: "/next-14.webp", alt: "Breakout zone" },
    { src: "/next-6.webp", alt: "Creative workspace" },
    { src: "/next-16.webp", alt: "Community kitchen" },
  ];

  return (
    <section id="gallery" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
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
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
            hidden: {},
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group hover:shadow-xl"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 40 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 60, damping: 18 }}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
