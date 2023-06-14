import { Checkbox, Form, Input } from "antd";
import { useContext, useEffect } from "react";
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
  
  const { loggedinUser } = useContext(UserContext);
  const userToOrder =  loggedinUser?.firstName + ' ' + loggedinUser?.lastName
  const [form] = Form.useForm();
  const { saveAddress, address, AddressCheckbox, setCheckboxValue } = useContext(OrderContext)


  useEffect(() => {
    console.log(address);
  }, [address]);


  const checkMarkBox = () => {
    const isAgreementChecked = form.getFieldValue("agreement");
    setCheckboxValue(isAgreementChecked)
  } 
  const getAddressValue = (e: FocusEvent) => {
    const propertyName = (e.target as HTMLInputElement).name
    const value = (e.target as HTMLInputElement).value
    saveAddress({[propertyName]: value});

  }

if (!loggedinUser) {
    return null
  }


  return (
    <>
      <div className="form-div">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="Namn"
            initialValue={userToOrder}
            className="form-item"
          >
            <Input disabled className="disabledInput" />
          </Form.Item>
          <Form.Item
            name="mail"
            label="Mail"
            initialValue={loggedinUser?.email}
            className="form-item"
          >
            <Input disabled className="disabledInput" />
          </Form.Item>

          <Form.Item
            name="street"
            label="Adress"
            initialValue={address.street}
            rules={[
              {
                required: true,
                message: "Var god fyll i gata!",
                whitespace: true,
              },
            ]}
            className="form-item"
          >
            <Input name="street" onChange={(e:any) => getAddressValue(e)} />
          </Form.Item>

          <Form.Item
            name="zipcode"
            label="Postnummer"
            initialValue={address.zipcode}
            rules={[
              {
                required: true,
                message: "Var god fyll i postnummer!",
                whitespace: true,
              },
            ]}
            className="form-item"
          >
            <Input name="zipcode" onChange={(e:any) => getAddressValue(e)} />
          </Form.Item>

          <Form.Item
            name="city"
            label="Ort"
            initialValue={address.city}
            rules={[
              {
                required: true,
                message: "Var god fyll i stad!",
                whitespace: true,
              },
            ]}
            className="form-item"
          >
            <Input name="city" onChange={(e:any) => getAddressValue(e)} />
          </Form.Item>

          <Form.Item
            name="country"
            label="Land"
            initialValue={address.country}
            rules={[
              {
                required: true,
                message: "Var god fyll i land!",
                whitespace: true,
              },
            ]}
            className="form-item"
          >
            <Input name="country" onChange={(e:any) => getAddressValue(e)} />
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
            <Checkbox name="checkbox" onChange={checkMarkBox} defaultChecked={AddressCheckbox}>
              Jag godkänner <a href="" className="terms">köpvillkoren</a>
            </Checkbox>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddressForm;
