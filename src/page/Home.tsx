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
    <div className="overflow-hidden">
      <Navbar onClick={handleClick} />

      {/* Content */}
      <section id="Home">
        <div className="h-screen p-9 flex items-center ">
          <div className=" flex xl:flex-row w-full items-center xl:justify-between xl:px-12 max-xl:flex-col-reverse ">
            <motion.div
              className="flex justify-center "
              initial={{ opacity: 0, x: -48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0, 0, 0, 1],
              }}
            >
              <div className="flex flex-col gap-7 xl:items-start max-xl:items-center max-xl:mt-20 xl:mt-0">
                <div className="whitespace-nowrap flex items-center sm:text-4xl max-sm:text-3xl gap-4 ">
                  <div>Hi, I'm Bam</div>
                  <div className="h-1 w-12 bg-black "></div>
                  <div>welcome to my space!</div>
                </div>
                <div className="font-bold xl:text-[84px] md:text-[74px] max-md:text-5xl max-md:text-center">
                  Frontend Developer
                </div>
                <div className=" sm:text-3xl max-sm:text-2xl  flex items-center gap-3 border-2 border-solid border-black rounded-full w-fit px-4 py-2">
                  <div>Explor my portfolio</div>
                  <FaCircleArrowDown className="text-slate-700 animate-bounce" />
                </div>
              </div>
            </motion.div>

            {/* Avatar */}
            <motion.div
              className="rounded-4xl border-2 border-solid border-black px-10 pt-10 max-xl:w-fit"
              initial={{ opacity: 0, x: 38 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0, 0, 0, 1],
              }}
            >
              <FaUser className="sm::text-[400px] xl:text-[350px] max-xl:text-[300px] " />
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
    </div>
  );
};

export default Home;
