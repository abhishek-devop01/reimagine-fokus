import { motion, useScroll, useTransform } from "framer-motion";

const ScrollMarquee = () => {
  const textContent = "We Are Fokus We Are Fokus We Are Fokus We Are Fokus ";
  const fullMarqueeContent = textContent + textContent; 

  const { scrollYProgress } = useScroll();

  const marqueeTravelDistance = -13000;
  const xMovement = useTransform(scrollYProgress, [0, 1], ["0px", `${marqueeTravelDistance}px`]);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".04"
      className="w-full z-[9] h-54 py-15 rounded-tl-3xl text-white rounded-tr-3xl bg-[#000] overflow-hidden"
    >
      <div className="h-full  border-zinc-400 overflow-hidden flex whitespace-nowrap items-center">
        <motion.h3
          style={{ x: xMovement }}
          className="text-[10vw] tracking-tighter leading-none font-black uppercase pr-18 flex-shrink-0 h-full flex items-center justify-center"
        >
          {fullMarqueeContent}
        </motion.h3>
      </div>
    </div>
  );
};

export default ScrollMarquee;