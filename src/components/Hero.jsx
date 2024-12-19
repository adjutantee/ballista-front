import React from 'react';
import { motion } from 'framer-motion';
import { GiAk47U, GiCrosshair } from 'react-icons/gi';
import { FaChartLine, FaDatabase } from 'react-icons/fa';

const StatCard = ({ icon: Icon, value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/10 backdrop-blur-lg p-4 rounded-lg"
  >
    <Icon className="w-6 h-6 mb-2 text-primary-300" />
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-primary-200">{label}</div>
  </motion.div>
);

export default function Hero() {
  return (
    <header className="relative min-h-screen bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GiCrosshair className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-semibold text-primary-300">Ballista</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Управление статистикой и его анализ
            </h1>
            
            <p className="text-xl text-primary-100 mb-8">
              Ballista — это платформа для мониторинга и анализа результатов, 
              разработанная для стрелков.
            </p>

            <div className="flex flex-wrap gap-4">
            </div>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <StatCard 
                icon={FaChartLine}
                value="99.9%"
                label="Calculation Accuracy"
              />
              <StatCard 
                // icon={GiRifleScope}
                icon={ GiAk47U}
                value="1000+"
                label="Active Users"
              />
              <StatCard 
                icon={FaDatabase}
                value="50M+"
                label="Data Points Analyzed"
              />
              <StatCard 
                icon={GiCrosshair}
                value="95%"
                label="Performance Improvement"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-500/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </header>
  );
}