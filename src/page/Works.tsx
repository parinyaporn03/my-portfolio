import { Tooltip } from "antd";
import { mini_project, works } from "../data/MyWork";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const Works = () => {
  const [is_show, setIsShow] = useState(false);
  const head_ref = useRef(null);
  const is_head_inview = useInView(head_ref, { once: false });
  const ref = useRef(null);
  const is_inview = useInView(ref, { once: false });
  const mini_project_ref = useRef(null);
  const is_mini_project_inview = useInView(mini_project_ref, { once: false });

  return (
    <div className=" p-9 mt-[50px]" ref={head_ref}>
      <div className="font-domain-regular flex items-center max-sm:flex-col max-sm:gap-5">
        <div className=" max-sm:text-4xl sm:text-5xl md:text-6xl font-bold text-center  flex-1/2 ">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            animate={is_head_inview ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: [0, 0, 0, 1],
            }}
          >
            What I’ve been
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 38 }}
            animate={is_head_inview ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: [0, 0, 0, 1],
            }}
          >
            <span className="text-[#9D9D9D]">working on</span> so far
          </motion.div>
        </div>
        <div className="font-bold">(Works)</div>
      </div>

      <div
        className="grid lg:grid-cols-2 max-lg:grid-cols-1 gap-14 p-14 max-sm:p-5 max-sm:gap-5"
        ref={ref}
      >
        {works.map((work, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={is_inview ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.5 + index * 0.07,
            }}
          >
            <a href={work.link} target="_blank">
              <img
                src={`${work.bg}`}
                className="cursor-pointer rounded-3xl ring-1 hover:shadow-xl/20 hover:scale-105 transition-all duration-300"
              />
            </a>
            <div className="flex max-sm:flex-col max-sm:items-center justify-between px-2 pt-1.5">
              <div className="font-domain-regular text-2xl font-bold whitespace-nowrap">
                {work.title}
              </div>

              <div className="flex items-center gap-2 rounded-full px-2 py-1 text-[28px] text-gray-600 ">
                {work.skills.map((skill, index) => (
                  <Tooltip
                    title={`${skill.iconName}`}
                    placement="bottom"
                    key={index}
                  >
                    <div className="hover:text-black cursor-pointer hover:scale-110 transition-all ">
                      {skill.element}
                    </div>
                  </Tooltip>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <div
          className="font-nata rounded-xl border-solid border-2 py-2 px-4 text-lg cursor-pointer hover:bg-slate-200 "
          onClick={() => setIsShow(!is_show)}
        >
          {is_show === true ? "Close" : "Show More"}
        </div>
      </div>

      {/* hidden content */}
      <div ref={mini_project_ref}>
        <AnimatePresence>
          {is_show ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0, transition: { ease: "easeOut" } }}
              exit={{ opacity: 0, y: -8 }}
              className="flex flex-col items-center gap-4 mt-12 "
            >
              <div className="font-domain-regular items-center text-5xl font-bold max-sm:text-4xl max-sm:text-center">
                Skill-Building Projects
              </div>
              <div className="grid xl:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 gap-14 p-14 max-sm:p-5 max-sm:gap-5">
                {mini_project.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={is_mini_project_inview ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.07,
                    }}
                  >
                    <a href={item.link} target="_blank">
                      <div className="[&>.overlay]:hover:opacity-0 cursor-pointer  relative border-2 rounded-3xl overflow-hidden hover:shadow-xl/20 hover:scale-105 hover:grayscale-0 transition-all duration-300">
                        <img src={`${item.bg}`} />
                        <div className="overlay transition-all duration-300 absolute text-white uppercase font-thin top-0 left-0 size-full flex justify-center items-center bg-black/70 ">
                          {item.title}
                        </div>
                      </div>
                    </a>

                    <div className="flex justify-center pt-5">
                      <div>
                        {item.skills.map((skill, index) => (
                          <li key={index} className="font-nata">
                            {skill}
                          </li>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Works;
