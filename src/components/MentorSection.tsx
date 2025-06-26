import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Users } from 'lucide-react';

const MentorSection: React.FC = () => {
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
    <section className="min-h-screen bg-gradient-to-br from-fruit-sage via-fruit-citrus to-fruit-rose py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Star className="text-yellow-500 mx-2" size={32} />
              <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-800">
                To the one who led with wisdom
              </h2>
              <Star className="text-yellow-500 mx-2" size={32} />
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-lotus-pink to-lotus-purple mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20"
          >
            <div className="flex items-center justify-center mb-8">
              <Heart className="text-red-400 animate-pulse" size={40} />
            </div>

            <blockquote className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed italic text-center mb-8">
              " Our journey started on the 18th June and training began on the 23rd. Most of us were strangers, but our trainer, Ritesh Batra sir, brought us together like family. He showed us what it means to be a true communicator and leader. With games, activities, and genuine guidance, he helped us grow and connect. Sir, we are short of words, but thank you for being such a phenomenal mentor."
            </blockquote>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-lotus-pink to-lotus-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="text-white" size={24} />
                </div>
                <p className="font-poppins text-gray-600 font-medium">
                  — With gratitude, Team Lotus
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorSection;