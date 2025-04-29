import { Tooltip } from "antd";
import { mini_project, works } from "../data/MyWork";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const Works = () => {
  const [is_show, setIsShow] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className=" p-9 overflow-hidden mt-[50px]">
      <div className="flex items-center ">
        <div className="text-6xl font-bold text-center  flex-1/2 ">
          <div>What I’ve been</div>
          <div>
            <span className="text-[#9D9D9D]">working on</span> so far
          </div>
        </div>
        <div className="font-bold">(Works)</div>
      </div>
      <div className="grid grid-cols-2 gap-14 p-14" ref={ref}>
        {works.map((work, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.5 + index * 0.07,
            }}
          >
            <img
              src={`${work.bg}`}
              className="cursor-pointer rounded-3xl grayscale hover:grayscale-0 ring-1 hover:shadow-xl/20 hover:scale-105 transition-all duration-300"
            />
            <div className="flex justify-between px-2 pt-1.5">
              <div className="text-2xl font-bold">{work.title}</div>

              <div className="flex items-center gap-2 rounded-full px-2 py-1 text-[28px] text-gray-600">
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
          className="rounded-xl border-solid border-2 py-2 px-4 text-lg cursor-pointer hover:bg-slate-200 "
          onClick={() => setIsShow(!is_show)}
        >
          {is_show === true ? "Close" : "Show More"}
        </div>
      </div>

      {is_show ? (
        <div className="flex flex-col items-center gap-4 mt-12 ">
          <div className="items-center text-5xl font-bold">
            Skill-Building Projects
          </div>
          <div className="grid grid-cols-3 gap-14 p-14">
            {mini_project.map((item, index) => (
              <div key={index}>
                <img
                  src={`${item.bg}`}
                  className="cursor-pointer rounded-3xl grayscale hover:grayscale-0 ring-1 hover:shadow-xl/20 hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Works;
