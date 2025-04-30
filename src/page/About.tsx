import { Steps, Tooltip } from "antd";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { skills } from "../data/MyWork";

const About = () => {
  const head_ref = useRef(null);
  const card_ref = useRef(null);
  const skill_ref = useRef(null);
  const is_head_inView = useInView(head_ref, { once: false });
  const is_card_inView = useInView(card_ref, { once: false });
  const is_skills_inView = useInView(skill_ref, { once: false });

  return (
    <div className="pt-10 p-9">
      <div
        ref={head_ref}
        className="flex justify-between items-center font-bold"
      >
        <motion.div
          className="text-5xl "
          initial={{ opacity: 0, x: -48 }}
          animate={is_head_inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: [0, 0, 0, 1],
          }}
        >
          Hello! My name is Parinyaporn Saengnolad{" "}
        </motion.div>
        <div>(About)</div>
      </div>

      <div className="mt-[30px] text-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>

      {/* card */}
      <div className="flex flex-col justify-center items-center">
        <motion.div
          ref={card_ref}
          initial={{ scale: 0 }}
          animate={is_card_inView ? { scale: 1 } : {}}
          className="rounded-3xl border-2 border-solid border-black p-8 px-10 mt-[40px]"
        >
          <div className="font-black text-3xl rounded-full border-2 border-solid border-black p-2 w-fit px-4">
            My Experience
          </div>
          <div className="mt-4">
            <Steps
              progressDot
              direction="vertical"
              className=" [&_.ant-steps-icon-dot]:!bg-black [&_.ant-steps-item-tail::after]:!bg-[#595959] "
              items={[
                {
                  title: "Frontend Developer Cooperative Education",
                  description: "November 2024 - March 2025 (4 Months)",
                  status: "finish",
                },
                {
                  title:
                    "Teaching Assistant — User Experience Design & Data Structures Courses",
                  description: "June - October 2024 (4 Months)",
                  status: "finish",
                },
                {
                  title: "Frontend Developer Internship ",
                  description: "April - May 2024 (2 Months)",
                  status: "finish",
                },
              ]}
            />
          </div>
        </motion.div>

        <div className="mt-[30px] flex flex-col items-center gap-6 ">
          <div className="text-3xl font-bold">Skills</div>

          <div
            ref={skill_ref}
            className="bg-[#D9D9D9] rounded-full px-4 p-2 flex items-center gap-4 text-5xl"
          >
            {skills.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={is_skills_inView ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.07,
                }}
              >
                <Tooltip placement="bottom" title={item.iconName}>
                  <div className="cursor-pointer">{item.element}</div>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
