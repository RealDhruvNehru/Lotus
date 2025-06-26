import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image, Heart } from 'lucide-react';

const GallerySection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-fruit-lavender via-fruit-peach to-fruit-sage py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Camera className="text-purple-600 mx-2" size={40} />
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-800">
              Captured Moments
            </h2>
            <Camera className="text-purple-600 mx-2" size={40} />
          </div>
          <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
            Memories from our training journey together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 aspect-square flex flex-col items-center justify-center"
            >
              <div className="w-full h-full bg-gradient-to-br from-lotus-pink/20 to-lotus-purple/20 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-lotus-pink/30">
                <Image className="text-lotus-pink/60 mb-4" size={48} />
                <p className="font-poppins text-lotus-pink/80 text-center text-sm">
                  Memory Placeholder
                </p>
                <p className="font-poppins text-lotus-pink/60 text-center text-xs mt-2">
                  Training moments to be added
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-2xl mx-auto">
            <Heart className="text-red-400 mx-auto mb-4" size={32} />
            <p className="font-poppins text-gray-700 italic text-lg">
              "The best moments are yet to be captured, but the memories we've made together will last forever."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;