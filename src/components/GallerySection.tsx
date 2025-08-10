
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import img1 from "@/assets/next-1.webp?imagetools";
import img2 from "@/assets/next-12.webp?imagetools";
import img3 from "@/assets/next-2.webp?imagetools";
import img4 from "@/assets/next-4.webp?imagetools";
import img5 from "@/assets/next-7.webp?imagetools";
import img6 from "@/assets/next-8.webp?imagetools";
import img7 from "@/assets/next-9.webp?imagetools";
import img8 from "@/assets/next-10.webp?imagetools";
import img9 from "@/assets/next-3.webp?imagetools";
import img10 from "@/assets/next-14.webp?imagetools";
import img11 from "@/assets/next-6.webp?imagetools";
import img12 from "@/assets/next-16.webp?imagetools";

const GallerySection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });



  const images = [
    { src: img1, alt: "Open workspace with natural light" },
    { src: img2, alt: "Private meeting room" },
    { src: img3, alt: "Team collaboration area" },
    { src: img4, alt: "Shared working space" },
    { src: img5, alt: "Lounge area" },
    { src: img6, alt: "Personal desk setup" },
    { src: img7, alt: "Networking event" },
    { src: img8, alt: "Bright office environment" },
    { src: img9, alt: "Modern office interior" },
    { src: img10, alt: "Breakout zone" },
    { src: img11, alt: "Creative workspace" },
    { src: img12, alt: "Community kitchen" },
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
