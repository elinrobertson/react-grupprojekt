import { useContext, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space } from 'antd';
import "./Shipping.css";
import { OrderContext } from '../../../context/OrderContext';

const ShippingMethod = () => {
  const [value, setValue] = useState<string>("");
  const { shippingMethod, shippingMethodes } = useContext(OrderContext)

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    shippingMethod(e.target.value)
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        {shippingMethodes.map((shipping) => {
          const deliveryTimeInHours = shipping.deliveryTimeInHours;
          const deliveryDate = new Date();
          deliveryDate.setHours(deliveryDate.getHours() + deliveryTimeInHours);
          const formattedDate = deliveryDate.toLocaleTimeString() + " " + deliveryDate.toLocaleDateString();

          return (
            <Radio value={shipping._id} key={shipping._id}>
              <div>
                <h3>{shipping.company}</h3>
                <div className="shipping-info">
                  <p>{shipping.price} kr</p>
                  <h4>Leverans: {formattedDate}</h4>
                </div>
              </div>
            </Radio>
          );
        })}
      </Space>
    </Radio.Group>
  );
};


export default ShippingMethod;