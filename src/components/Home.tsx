import Navbar from "./Navbar";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import { FaCircleArrowDown, FaUser } from "react-icons/fa6";
import { motion } from "motion/react";

const Home = () => {
  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const id = target.getAttribute("href")?.replace("#", "");
    const element = document.getElementById(String(id));
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar onClick={handleClick} />

      {/* Content */}
      <section id="Home">
        <div className="h-screen  p-9 flex items-center overflow-hidden">
          <div className="flex w-full  items-center justify-between px-12">
            <motion.div
              className=" flex justify-center "
              initial={{ opacity: 0, x: -48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0, 0, 0, 1],
              }}
            >
              <div className="flex flex-col gap-7">
                <div className="flex items-center text-4xl gap-4 ">
                  <div>Hi, I'm Bam</div>
                  <div className="h-1 w-12 bg-black "></div>
                  <div>welcome to my space!</div>
                </div>
                <div className="font-bold text-[84px] ">Frontend Developer</div>
                <div className=" text-3xl  flex items-center gap-3 border-2 border-solid border-black rounded-full w-fit px-4 py-2">
                  <div>Explor my portfolio</div>
                  <FaCircleArrowDown className="text-slate-700 animate-bounce" />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="rounded-4xl border-2 border-solid border-black px-10 pt-10"
              initial={{ opacity: 0, x: 38 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0, 0, 0, 1],
              }}
            >
              <FaUser className="text-[350px] " />
            </motion.div>
          </div>
        </div>
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Works">
        <Works />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
