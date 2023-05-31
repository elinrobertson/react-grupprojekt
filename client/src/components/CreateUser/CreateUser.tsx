import { Button, Checkbox, Form, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import "./CreateUser.css"
function CreateUser() {
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <h1>Registrear dig:</h1>

    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Kom ihåg mig</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Logga in
      </Button>
    </Form.Item>
    <div className="registred-div">
      <h3>Redan registrerad?</h3>
      <NavLink to={"/login"}>Tillbaka till Logga in</NavLink>
    </div>
  </Form>
  )
}

export default CreateUser