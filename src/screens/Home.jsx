import { motion } from "framer-motion";
import { hero1 } from "../assets";
import Header from "../layout/Header";

const Home = () => {
  return (
    <main className='relative min-h-screen'>
      <div
        className='bg-cover bg-center bg-no-repeat w-full h-screen relative transition-opacity duration-1000 ease-in-out'
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className='absolute top-0 left-0 w-full z-50'>
          <Header />
        </div>
        
        {/* Animated overlay */}
        <motion.div 
          className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8 mt-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block mb-2">The Real Buyer's Guide to</span>
              <span className="text-primary-red">Land & Property in Kenya</span>
            </motion.h1>

            <motion.p 
              className="text-white text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Learn how to avoid scams, spot great deals, and buy confidently.
              <br className="hidden md:block" />
              Get your free expert guide today.
            </motion.p>

            {/* Lead Form */}
            <motion.div 
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl max-w-md mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-6">
                Get Your Free Guide
              </h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none transition-all"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <motion.input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none transition-all"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
                
                <motion.input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none transition-all"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                <motion.button
                  type="submit"
                  className="w-full bg-primary-red text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(246, 36, 39, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Download Your Free Guide
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
