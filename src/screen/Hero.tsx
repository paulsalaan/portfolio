import { motion } from "framer-motion";
import DummyProfile from "@/assets/dummyprofile.jpg";
import Counter from "@/components/UIComp/CounterProp";

const Hero = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-4 md:gap-6">
        {/* Text Column */}
        <div className="flex flex-col md:gap-1">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="lg:-mb-3"
          >
            <h1 className="text-[1.8rem] font-[Avenir-Black] -tracking-[1.5px] lg:-tracking-[3px] text-black dark:text-white sm:text-[2rem] md:text-[3rem] lg:text-[4rem]">
              Hi, I'm Paul 👋
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
          >
            <p className="relative text-base text-black dark:text-white md:text-[17px] lg:text-[20px] font-inter tracking-tight max-w-[30rem]">
              Just a human who loves crafting clean UI/UX and turning designs
              into code but still learning to get along with CS
              <span className="absolute transform translate-y-[8px] rotate-45">
                S.
              </span>
            </p>
            <div className="flex flex-col md:flex-row gap-2 mt-4">
              {/* <span className="lg:hidden text-zinc-600 dark:text-zinc-300 text-[9.5px] italic font-inter">
                View in laptop for more better viewing and experience
              </span> */}
              <div className="flex items-center gap-2">
                <div className="bg-blue-500 size-1 rounded-full" />
                <Counter to={400} duration={3} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Profile Image on small screens only */}
        <div className="flex-shrink-0 lg:hidden">
          <motion.img
            src={DummyProfile}
            alt="dummy_profile"
            className="size-28 md:size-33 rounded-full object-cover"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
