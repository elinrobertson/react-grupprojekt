import { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Input, Radio, Space } from 'antd';

interface ShippingMethod {
    _id: string,
    company: string,
    price: number,
    deliveryTimeInHours: number
}

const shippingMethod = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
        <Radio value={4}>
          More...
          {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </Radio>
      </Space>
    </Radio.Group>
  );
};

export default shippingMethod;

/* import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useEffect, useState } from 'react';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const Shipping= () => {
    const[methods, setMethods]= useState<ShippingMethod[]>([]);
    useEffect(() =>{
        const getShipping = async () => {
            const res = await fetch('/api/shippingMethod');
            const data = await res.json();
            setMethods(data)
        }
        getShipping()
    },[])



return (
    <>
    {methods.map((shipping) => (
        <div  style={{ display: 'flex', }}>
            <div>
            <Checkbox onChange={onChange}></Checkbox>
            </div>
            <div>
                <h3>{shipping.company}</h3>
                <p>{shipping.price}</p>
                <h4>{shipping.deliveryTimeInHours}</h4>
            </div>
        </div>
    ))}

    </>
)}

export default Shipping; */