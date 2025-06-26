import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Flower2, Sparkles, Heart } from 'lucide-react';

const FinalSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-fruit-rose via-fruit-citrus to-fruit-berry py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-float">
          <Sparkles size={60} className="text-yellow-400" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Heart size={50} className="text-red-400" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '3s' }}>
          <Flower2 size={70} className="text-lotus-pink" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Rocket className="text-blue-600 mx-2" size={40} />
              <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-800">
                To New Beginnings
              </h2>
              <Rocket className="text-blue-600 mx-2" size={40} />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-12"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-8">
                <Flower2 className="text-lotus-pink mx-2" size={32} />
                <Sparkles className="text-yellow-400 mx-2" size={32} />
                <Flower2 className="text-lotus-purple mx-2" size={32} />
              </div>
              
              <blockquote className="font-poppins text-2xl md:text-3xl font-medium text-gray-800 italic mb-8 leading-relaxed">
                "Great teams aren't born. They're grown—with trust, time, and a little fruit."
              </blockquote>

              <div className="w-24 h-1 bg-gradient-to-r from-lotus-pink to-lotus-purple mx-auto rounded-full mb-8"></div>

              <p className="font-poppins text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                 We carry with us the lessons learned, 
                friendships forged, and the foundation built during our fruitful beginning.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-lotus-pink/10 to-lotus-purple/10 rounded-xl p-6 border border-lotus-pink/20"
                >
                  <Heart className="text-red-400 mx-auto mb-4" size={32} />
                  <p className="font-poppins text-gray-700 font-medium">
                    Gratitude for our mentor
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-lotus-blue/10 to-lotus-green/10 rounded-xl p-6 border border-lotus-blue/20"
                >
                  <Flower2 className="text-lotus-blue mx-auto mb-4" size={32} />
                  <p className="font-poppins text-gray-700 font-medium">
                    Unity in diversity
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-xl p-6 border border-yellow-400/20"
                >
                  <Sparkles className="text-yellow-500 mx-auto mb-4" size={32} />
                  <p className="font-poppins text-gray-700 font-medium">
                    Bright future ahead
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-lotus-pink to-lotus-purple rounded-2xl p-6 text-white">
              <p className="font-poppins text-lg font-medium mb-2">
                Thank you, Ritesh Batra sir, for this fruitful beginning! 🙏
              </p>
              <p className="font-poppins text-sm opacity-90">
                — Team Lotus
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalSection;