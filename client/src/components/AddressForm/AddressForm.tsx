import type { CascaderProps } from 'antd';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import { useState } from 'react';




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
    console.log('Received values of form: ', values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);


  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-post"
        rules={[
          { type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

    

      <Form.Item
        name="firstname"
        label="Förnamn"
        rules={[{ required: true, message: 'Var god fyll i förnamn!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastname"
        label="Efternamn"
        rules={[{ required: true, message: 'Var god fyll  efternamn!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="street"
        label="Adress"
        rules={[{ required: true, message: 'Var god fyll i gata!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="zipcode"
        label="Postnummer"
        rules={[{ required: true, message: 'Var god fyll i postnummer!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="city"
        label="Ort"
        rules={[{ required: true, message: 'Var god fyll i stad!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="country"
        label="Land"
        rules={[{ required: true, message: 'Var god fyll i land!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      {/* <Form.Item
        name="address"
        label="Adress"
        rules={[
          { type: 'array', required: true, message: 'Var god fyll i din adress!' },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item> */}

      {/* <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Var god fyll i ditt telefonnummer!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item> */}


      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Jag godkänner <a href="">köpvillkoren</a>
        </Checkbox>
      </Form.Item>
      {/* <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item> */}
    </Form>
  );
};

export default AddressForm;