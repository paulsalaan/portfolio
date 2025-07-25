import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <>
      <section className="mb-47 space-y-4 lg:space-y-5">
        {/* "Contacts" label */}
        <motion.div
          className="w-full flex items-center justify-center"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.5,
          }}
        >
          <h1 className="font-inter text-sm font-bold bg-black text-white mt-7 px-3 py-1 rounded-md dark:bg-white dark:text-black">
            Contacts
          </h1>
        </motion.div>

        {/* "Get in Touch" title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          <h1 className="font-geist text-4xl tracking-tighter font-bold lg:text-5xl">
            Get in Touch
          </h1>
        </motion.div>

        {/* Description and Links */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.7,
          }}
        >
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <p className="font-inter text-xl lg:text-2xl text-zinc-500 dark:text-zinc-400 text-center">
                Wanna chat or collab? Hit me up via{" "}
                <a
                  href="mailto:paulninosalaan75@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  email
                </a>
                , slide into my{" "}
                <a
                  href="https://www.instagram.com/nine.e_____?igsh=cHhraTVjdXBqM2o1"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Instagram
                </a>{" "}
                DMs, say hi on{" "}
                <a
                  href="https://www.facebook.com/nienvirone"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Facebook
                </a>
                , or connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/paul-ni%C3%B1o-salaan-5699b634a/"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contacts;
