import React from 'react';
import { motion } from 'framer-motion';

function Gallery() {
  const images = [
    {
      src: "/images/leap-meeting-1.jpg",
      alt: "Meeting at LEAP Conference",
      caption: "Meeting Ibrahim Hegazy at LEAP Conference 2025"
    },
    {
      src: "/images/leap-meeting-2.jpg",
      alt: "Another angle from LEAP Conference",
      caption: "Another perspective of our meeting at LEAP Conference"
    },
    {
      src: "/images/award-ceremony-1.jpg",
      alt: "Award Ceremony",
      caption: "Ibrahim Hegazy receiving the Cybersecurity Social Media Influencer Award at Arab Security Conference 2019"
    },
    {
      src: "/images/award-ceremony-2.jpg",
      alt: "Award Ceremony Alternative View",
      caption: "Another view of the Social Media Influencer Award ceremony"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800/30 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="p-4 text-gray-300">{image.caption}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;