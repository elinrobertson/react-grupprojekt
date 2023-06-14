import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import "./CartLoadbar.css"

interface Next {
next: () => void
}

function CartLoadBar({next}:Next) {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
      setTimeout(() => {
       next();
      },1000);
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

export default CartLoadBar;
