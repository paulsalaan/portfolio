// screens
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import TechStack from "./TechStack";
import Contacts from "./Contacts";

// ui libraries
import Dock from "../components/Dock/Dock";
import Lanyard from "@/components/Lanyard/Lanyard";
import Stack from "@/components/Stack/Stack";

// icons
import { HiHome } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

// react-modules
import { useState, useEffect } from "react";
import Projects from "./Projects";
import { motion } from "framer-motion";

const Layout = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDark((prev) => !prev);

    const newTheme = !isDark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  };

  const items = [
    {
      icon: <HiHome size={19} />,
      label: "Home",
      onClick: () => {
        window.location.replace("/portfolio/");
      },
    },
    {
      icon: <FaGithub size={18} />,
      label: "GitHub",
      onClick: () => window.open("https://github.com/paulsalaan", "_blank"),
    },
    {
      icon: <RiInstagramFill size={18} />,
      label: "Instagram",
      onClick: () =>
        window.open(
          "https://www.instagram.com/nine.e_____?igsh=cHhraTVjdXBqM2o1",
          "_blank"
        ),
    },
    {
      icon: <FaFacebook size={18} />,
      label: "Facebook",
      onClick: () =>
        window.open("https://www.facebook.com/nienvirone", "_blank"),
    },
    {
      icon: isDark ? <IoIosSunny size={19} /> : <IoIosMoon size={19} />,
      label: isDark ? "Light Mode" : "Dark Mode",
      onClick: toggleTheme,
    },
  ];

  // local-storage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="">
        <div className="relative hidden lg:block">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 z-10 flex justify-center items-start px-4 pointer-events-none">
          <div className="md:max-w-2xl space-y-12 lg:space-y-13 lg:max-w-3xl py-2 px-2 lg:px-5 mt-10 lg:mt-19 w-full pointer-events-auto backdrop-blur-md backdrop-saturate-100 rounded-xl">
            <div className="flex gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Hero />
              </motion.div>
              <div className="hidden lg:flex items-center justify-center w-full max-w-[190px]">
                <div className="relative w-full h-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: 0.8,
                    }}
                  >
                    <Stack
                      randomRotation={true}
                      sensitivity={200}
                      sendToBackOnClick={false}
                      cardDimensions={{ width: 200, height: 200 }}
                      animationConfig={{
                        stiffness: 200, // more speed/snap
                        damping: 30, // a bit more bounce
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <About />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Education />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <TechStack />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <Projects />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
            >
              <Contacts />
            </motion.div>
          </div>
        </div>

        {/* Persistent white blur at bottom */}
        <div className="fixed inset-x-0 bottom-0 z-40 h-16 w-full bg-white dark:bg-black to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none" />

        {/* Dock always at bottom center */}

        <Dock
          className="fixed bottom-6.5 left-1/2 -translate-x-1/2 z-40"
          items={items}
          panelHeight={60}
          baseItemSize={45}
          magnification={52}
        />
      </div>
    </>
  );
};

export default Layout;
