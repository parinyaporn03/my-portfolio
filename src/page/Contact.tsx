import type { FormProps } from "antd";
import { Button, ConfigProvider, Form, Input, Tooltip, message } from "antd";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithubAlt, FaFacebook } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const { TextArea } = Input;
type FieldType = {
  name?: string;
  email?: string;
  message?: string;
};
const contact = [
  {
    name: "Email",
    icon: <MdOutlineAlternateEmail />,
    link: "parinyapornsaengnolad@gmail.com",
  },
  {
    name: "Github",
    icon: <FaGithubAlt />,
    link: "https://github.com/parinyaporn03",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/profile.php?id=100012171364958",
  },
];

const Contact = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [is_loading, setIsLoading] = useState(false);
  const ref = useRef(null);
  const is_inview = useInView(ref, { once: false });

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name ?? "");
    formData.append("email", values.email ?? "");
    formData.append("message", values.message ?? "");
    formData.append("access_key", "5a08da92-3a00-407f-94fc-2174e8019667");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    setIsLoading(true);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      messageApi.open({
        type: "success",
        content: "success",
      });
    }
    setIsLoading(false);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="p-9 ">
      <div
        className="font-domain-regular xl:text-[70px] lg:text-[60px] md:text-[45px] sm:text-[35px] max-sm:text-[25px] flex flex-col text-center font-light"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          animate={is_inview ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: [0, 0, 0, 1],
          }}
        >
          FEEL FREE TO REACH OUT
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 38 }}
          animate={is_inview ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: [0, 0, 0, 1],
          }}
        >
          IF ANYTHING CATCHES YOUR EYE!
        </motion.div>
      </div>
      <div className="flex justify-end font-bold py-4">(Contact)</div>

      {/* box */}
      <div className="flex justify-center">
        <div className="inset-shadow-sm bg-slate-200 w-3xl rounded-3xl lg:px-20 md:px-16 sm:px-12 max-sm:p-4 lg:py-14 md:py-12 sm:py-10">
          <div className="bg-white rounded-3xl lg:px-14 md:px-12 sm:px-8 max-sm:p-6 xl:py-14 lg:py-10 md:py-8 sm:py-6 flex flex-col items-center gap-8">
            <div className="font-domain-regular xl:text-4xl md:text-3xl sm:text-2xl max-sm:text-xl font-bold">
              Contact Me
            </div>
            <ConfigProvider
              theme={{
                components: {
                  Input: {
                    activeBorderColor: "black",
                    hoverBorderColor: "black",
                    activeShadow: "0 0 0 2px rgba(0,0,0,0)",
                  },
                },
              }}
            >
              <Form
                className="w-full !font-nata"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item<FieldType> label={null}>
                  <Input
                    placeholder=" To : parinyapornsaengnolad@gmail.com"
                    disabled
                  />
                </Form.Item>

                <Form.Item<FieldType>
                  label={null}
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="Name" />
                </Form.Item>

                <Form.Item<FieldType>
                  name="email"
                  label={null}
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="Email Address" />
                </Form.Item>
                <Form.Item<FieldType>
                  name="message"
                  label={null}
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <TextArea placeholder="Message" />
                </Form.Item>
                {contextHolder}
                <div className="flex justify-center">
                  <Button
                    loading={is_loading}
                    htmlType="submit"
                    className="!font-nata"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </ConfigProvider>

            <div className="flex items-center gap-4 text-4xl text-gray-600">
              {contact.map((item, index) => (
                <Tooltip
                  key={index}
                  placement="bottom"
                  title={item.name}
                  className=" hover:text-black cursor-pointer"
                >
                  <a
                    href={index === 0 ? `mailto:${item.link}` : item.link}
                    target="_blank"
                  >
                    {item.icon}
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
