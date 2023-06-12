import { Checkbox, Form, Input } from "antd";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import "./AddressForm.css";
import { OrderContext } from "../../context/OrderContext";

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
  const { address, setAddress } = useContext(OrderContext)
  // setAddress({
  //   street: "",
  //   zipcode: "",
  //   city: "",
  //   country: ""
  // })

  // console.log(address);


  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const onBlurFunction = (e) => {
    console.log(e.target.name);
    
    setAddress({
      street: "",
      zipcode: "",
      city: "",
      country: ""
    })
  }
  // const newAddress = new address {
  //   street: "",
  //   zipcode: "",
  //   city: "",
  //   country: ""
  // }
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
            initialValue={"hej"}
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
            initialValue="19191"
            rules={[
              {
                required: true,
                message: "Var god fyll i postnummer!",
                whitespace: true,
              },
            ]}
          >
            <Input onBlur={(e) => onBlurFunction(e)} />
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
              Jag godkänner <a href="" className="terms">köpvillkoren</a>
            </Checkbox>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddressForm;
