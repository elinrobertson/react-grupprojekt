import { useContext, useEffect, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space } from 'antd';
import "./Shipping.css";
import { OrderContext } from '../../../context/OrderContext';

interface ShippingMethod {
    _id: string,
    company: string,
    price: number,
    deliveryTimeInHours: number
}


const ShippingMethod = () => {
  const [value, setValue] = useState<string>("");
  const[shippingMethodes, setShippingMethods]= useState<ShippingMethod[]>([]);
  const { shippingMethod } = useContext(OrderContext)

  useEffect(() =>{
    const getShipping = async () => {
        const res = await fetch('/api/shippingMethod');
        const data = await res.json();
        const sorted: ShippingMethod[] = data.sort((a: ShippingMethod, b: ShippingMethod) => a.deliveryTimeInHours - b.deliveryTimeInHours);
        setShippingMethods(sorted)
    }
    getShipping()
  },[])


  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    shippingMethod(e.target.value)
  };

  return (
    <Radio.Group onChange={onChange}  value={value}>
      <Space direction="vertical">
      {shippingMethodes.map((shipping) => (
        <Radio value={shipping._id} key={shipping._id}>
       
            <div>
                <h3>{shipping.company}</h3>
                <div className="shipping-info">
                <p>{shipping.price} kr</p>
                <h4>{shipping.deliveryTimeInHours}h</h4>
                </div>
            </div>
        </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};


export default ShippingMethod;