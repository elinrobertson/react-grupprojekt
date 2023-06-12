import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import "./OrderComplete.css"


function OrderComplete() {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
    }, 4000);
  }, []);

  return (
    <div className='loadBar'>

        {showLoading ? 
        <div >
            <LoadingOutlined style={{fontSize: '50px'}} />
            <p>Processing Payment</p>
        </div>
        :
        <h2 style={{ color: '#809F8A'}}>Payment Success!!</h2>}
      </div>
  );
}

export default OrderComplete;
