import EducationCard from "@/components/UIComp/EducationCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
        >
          <h1 className="font-inter text-lg font-bold mb-4 lg:mb-4">
            Education
          </h1>
        </motion.div>
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          >
            <EducationCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2D3DLCdheSiTlUMIHP9O5e7OC9nBxKg3qoQ&s"
              schoolName="Univerisity of Science and Technology of Southern Philippines"
              description="BS Information Technology"
              schoolYear="2022-Present"
              schoolLink="https://www.ustp.edu.ph"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          >
            <EducationCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPA3ZmCGLRHTMivfsejLtwNNAfIkksaXQiQ&s"
              schoolName="Canitoan National High School"
              description="Information and Communication Technology - NC2 Passer"
              schoolYear="2020-2022"
              schoolLink="https://www.facebook.com/canitoannhs.official/"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Education;
