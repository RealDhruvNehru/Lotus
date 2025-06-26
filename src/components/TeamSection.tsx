import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Flower2 } from 'lucide-react';
import { teamMembers, TeamMember } from '../data/teamData';

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getFruitColor = (fruitName: string) => {
    const colors = {
      'Plum': 'from-purple-400 to-purple-600',
      'Kiwi': 'from-green-400 to-green-600',
      'Strawberry': 'from-red-400 to-red-600',
      'Starfruit': 'from-yellow-400 to-yellow-600',
      'Apple': 'from-red-400 to-green-400',
      'Grapes': 'from-purple-400 to-purple-600',
      'Custard Apple': 'from-green-400 to-green-600',
      'Blueberry': 'from-blue-400 to-blue-600',
      'Pomegranate': 'from-red-400 to-red-600',
      'Mango': 'from-orange-400 to-yellow-400',
      'Guava': 'from-green-400 to-yellow-400',
      'Dragon Fruit': 'from-pink-400 to-purple-400',
      'Orange': 'from-orange-400 to-orange-600',
      'Musk Melon': 'from-orange-300 to-orange-500',
      'Watermelon': 'from-green-400 to-red-400',
      'Gooseberry': 'from-green-400 to-green-600',
      'Cherry': 'from-red-400 to-red-600',
      'Litchi': 'from-pink-400 to-pink-600',
      'Papaya': 'from-orange-400 to-orange-600',
      'Tomato': 'from-red-400 to-red-600',
      'Banana': 'from-yellow-400 to-yellow-600',
      'Jack Fruit': 'from-yellow-400 to-green-400',
      'Pineapple': 'from-yellow-400 to-yellow-600',
    };
    
    return colors[fruitName as keyof typeof colors] || 'from-gray-400 to-gray-600';
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-fruit-berry via-fruit-coral to-fruit-mint py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="text-5xl mr-4">🍉</span>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-800">
              Our Team: Lotus
            </h2>
            <span className="text-5xl ml-4">🍉</span>
          </div>
          <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
            Each member of our team brings their own unique flavor to our collective success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedMember(member)}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${getFruitColor(member.fruitName)} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <span className="text-white font-bold text-lg">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-poppins font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className={`font-poppins text-sm font-medium bg-gradient-to-r ${getFruitColor(member.fruitName)} bg-clip-text text-transparent`}>
                  {member.fruitName}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="text-center">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>

                <div className={`w-20 h-20 bg-gradient-to-r ${getFruitColor(selectedMember.fruitName)} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <span className="text-white font-bold text-2xl">
                    {selectedMember.name.charAt(0)}
                  </span>
                </div>

                <h3 className="font-poppins text-2xl font-bold text-gray-800 mb-2">
                  {selectedMember.name}
                </h3>
                <p className={`font-poppins text-lg font-medium bg-gradient-to-r ${getFruitColor(selectedMember.fruitName)} bg-clip-text text-transparent mb-6`}>
                  {selectedMember.fruitName}
                </p>

                <div className="flex justify-center mb-4">
                  <Flower2 className="text-lotus-pink" size={24} />
                </div>

                <p className="font-poppins text-gray-600 leading-relaxed">
                  {selectedMember.personalNote}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;