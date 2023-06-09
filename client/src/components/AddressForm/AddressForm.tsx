import { Checkbox, Form, Input } from "antd";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./AddressForm.css";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const AddressForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const { loggedinUser } = useContext(UserContext);

  return (
    <>
      <div className="form-div">
        <div className="userData-div">
          <p>
            {loggedinUser?.firstName} {loggedinUser?.lastName}
          </p>
          <p>{loggedinUser?.email}</p>
        </div>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <Form.Item
            name="street"
            label="Adress"
            rules={[
              {
                required: true,
                message: "Var god fyll i gata!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="zipcode"
            label="Postnummer"
            rules={[
              {
                required: true,
                message: "Var god fyll i postnummer!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="city"
            label="Ort"
            rules={[
              {
                required: true,
                message: "Var god fyll i stad!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="country"
            label="Land"
            rules={[
              {
                required: true,
                message: "Var god fyll i land!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Acceptera köpvillkoren")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              Jag godkänner <a href="">köpvillkoren</a>
            </Checkbox>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddressForm;
