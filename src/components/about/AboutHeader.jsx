import React from "react";
import mansoorPic from "../../assets/mansoor-pic.jpg";
import { motion } from "framer-motion";

const AboutHeader = () => (
<motion.div
  className="text-center mt-5 mb-12"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <motion.img
    src={mansoorPic}
    alt="Mansoor Profile"
    width={200}
    height={200}
    className="w-[300px] h-[300px] rounded-full mx-auto mb-6 object-cover shadow-xl"
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
  />
</motion.div>

);

export default AboutHeader;
