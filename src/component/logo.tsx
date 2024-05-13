import { motion } from "framer-motion";

const Logo = () => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl md:text-5xl font-semibold">
        <span className="text-bluish">A</span>
        <span className="text-white">L</span>
        <span className="text-bluish">P</span>
        <span className="text-white">H</span>
        <span className="text-bluish">A</span>
      </h1>
    </motion.div>
  );
};

export default Logo;
