import { useEffect, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Input, Radio, Space } from 'antd';
import "./Shipping.css";

interface ShippingMethod {
    _id: string,
    company: string,
    price: number,
    deliveryTimeInHours: number
}


const ShippingMethod = () => {
  const [value, setValue] = useState(0);
  const[methods, setMethods]= useState<ShippingMethod[]>([]);

  useEffect(() =>{
    const getShipping = async () => {
        const res = await fetch('/api/shippingMethod');
        const data = await res.json();
        const sorted = data.sort((a:any, b:any) => a.deliveryTimeInHours - b.deliveryTimeInHours);
        setMethods(sorted)
        setValue(sorted[0]._id)
    }
    getShipping()
  },[])


  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
      {methods.map((shipping) => (
        <Radio value={shipping._id} key={shipping._id}>
       
            <div>
                <h3>{shipping.company}</h3>
                <div className="shipping-info">
                <p>{shipping.price} kr</p>
                <h4>{shipping.deliveryTimeInHours}h</h4>
                </div>
            </div>
            {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};


export default ShippingMethod;