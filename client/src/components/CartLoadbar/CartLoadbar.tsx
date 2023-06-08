import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import "./CartLoadbar.css"

function LoadBar() {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
    }, 6000);
  }, []);

  return (
    <div className='loadBar'>

        {showLoading ? 
        <div >
            <LoadingOutlined style={{fontSize: '50px'}} />
            <p>Processing Payment</p>
        </div>
        :
        <h2 style={{ color: 'green'}}>Payment Success!!</h2>}
      </div>
  );
}

export default LoadBar;
