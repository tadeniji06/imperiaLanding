import { motion } from "framer-motion";
import { nav } from "../assets";

const Header = ({ className }) => {
  return (
    <motion.nav 
      className='flex justify-between items-center p-4 md:p-6 lg:px-16 xl:px-32 bg-white/95 backdrop-blur-sm shadow-lg'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className='w-32 md:w-40 lg:w-48'
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <img 
          className='object-contain w-full h-full' 
          src={nav} 
          alt="Imperial Landing Logo"
        />
      </motion.div>
      
      <motion.div 
        className="hidden md:flex items-center space-x-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.a 
          href="#home" 
          className="text-gray-700 hover:text-primary-red font-medium transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
        </motion.a>
        <motion.a 
          href="#about" 
          className="text-gray-700 hover:text-primary-red font-medium transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </motion.a>
        <motion.a 
          href="#services" 
          className="text-gray-700 hover:text-primary-red font-medium transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Services
        </motion.a>
        <motion.a 
          href="#contact" 
          className="bg-primary-red text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition-colors"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(246, 36, 39, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button 
        className="md:hidden p-2"
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <motion.span 
            className="block w-full h-0.5 bg-gray-700"
            whileHover={{ scaleX: 1.2 }}
          />
          <motion.span 
            className="block w-full h-0.5 bg-gray-700"
            whileHover={{ scaleX: 1.2 }}
          />
          <motion.span 
            className="block w-full h-0.5 bg-gray-700"
            whileHover={{ scaleX: 1.2 }}
          />
        </div>
      </motion.button>
    </motion.nav>
  );
};

export default Header;
