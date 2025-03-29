import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div>
      <motion.div 
        id="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-[600px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <img 
            src="https://raw.githubusercontent.com/ibrahimhegazy/podcast/main/podcast.jpg"
            alt="Ibrahim Hegazy at Podcast" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
            <div className="p-12">
              <motion.h2 
                className="text-5xl font-bold mb-6 max-w-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Inspiring the Next Generation of Cybersecurity Experts
              </motion.h2>
              <motion.p
                className="text-xl text-gray-200 max-w-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Through education, mentorship, and sharing real-world experiences in cybersecurity
              </motion.p>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="bg-gray-800/30 p-8 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            I have always been passionate about cybersecurity, but my love for penetration testing truly began after watching 
            Mr. Ibrahim Hegazy's course on YouTube. His deep knowledge and practical approach inspired me to dive deeper into 
            the field. In 2025, I had the incredible opportunity to meet him in person at LEAP. I asked him many questions 
            about ethical hacking, security techniques, and the latest trends in cybersecurity. He generously shared his 
            insights, and it was an unforgettable experience. To make it even more special, I took a photo with him as a 
            cherished memory of that inspiring moment.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;