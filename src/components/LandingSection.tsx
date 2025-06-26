import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Flower2 } from 'lucide-react';

interface LandingSectionProps {
  onScrollToNext: () => void;
}

const LandingSection: React.FC<LandingSectionProps> = ({ onScrollToNext }) => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-fruit-peach via-fruit-mint to-fruit-lavender flex items-center justify-center">
      {/* Lotus Watermark */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 animate-float">
          <Flower2 size={120} className="text-lotus-pink" />
        </div>
        <div className="absolute bottom-32 right-32 animate-float" style={{ animationDelay: '2s' }}>
          <Flower2 size={100} className="text-lotus-purple" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
          <Flower2 size={80} className="text-lotus-blue" />
        </div>
      </div>

      <div className="text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-poppins text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            The Fruitful Beginning
            <span className="text-6xl md:text-8xl ml-4">🍇</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <p className="font-poppins text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            In honor of our first week at COFORGE with{' '}
            <span className="font-semibold text-purple-600">Dr. Ritesh Batra sir</span>
          </p>
          <div className="flex items-center justify-center mb-12">
            <Flower2 className="text-lotus-pink mx-2" size={24} />
            <span className="font-poppins text-lg font-medium text-gray-600">Team Lotus</span>
            <Flower2 className="text-lotus-pink mx-2" size={24} />
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onScrollToNext}
          className="bg-gradient-to-r from-lotus-pink to-lotus-purple text-white font-poppins font-medium px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
        >
          Begin the Journey
          <ChevronDown className="ml-2 animate-bounce" size={20} />
        </motion.button>
      </div>
    </section>
  );
};

export default LandingSection;