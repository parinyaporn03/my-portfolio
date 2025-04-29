import type { FormProps } from "antd";
import { Button, Form, Input, Tooltip } from "antd";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithubAlt, FaFacebook } from "react-icons/fa";
const { TextArea } = Input;
type FieldType = {
  name?: string;
  email?: string;
  message?: string;
};
const contact = [
  { name: "Email", icon: <MdOutlineAlternateEmail /> },
  { name: "Github", icon: <FaGithubAlt /> },
  { name: "Facebook", icon: <FaFacebook /> },
];

const Contact = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="p-9 ">
      <div className="text-[80px] flex flex-col text-center font-light">
        <div>FEEL FREE TO REACH OUT</div>
        <div>IF ANYTHING CATCHES YOUR EYE!</div>
      </div>
      <div className="flex justify-end font-bold py-4">(Contact)</div>
      <div className="flex justify-center">
        {" "}
        <div className="bg-[#EDEDED] w-3xl rounded-3xl px-20 py-14">
          <div className="bg-white rounded-3xl px-20 py-14 flex flex-col items-center gap-8">
            <div className="text-4xl font-bold">Contact Me</div>

            <Form
              className="w-full"
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
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item<FieldType> name="email" label={null}>
                <Input placeholder="Email Address" />
              </Form.Item>
              <Form.Item<FieldType> name="email" label={null}>
                <TextArea placeholder="Message" />
              </Form.Item>
              <div className="flex justify-center">
                <Button htmlType="submit">Submit</Button>
              </div>
            </Form>

            <div className="flex items-center gap-4 text-4xl text-gray-600">
              {contact.map((item, index) => (
                <Tooltip
                  key={index}
                  placement="bottom"
                  title={item.name}
                  className="hover:text-black cursor-pointer"
                >
                  {item.icon}
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
