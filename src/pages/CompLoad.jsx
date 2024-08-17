import React, { useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';

function CompLoad() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData();
      setLoading(false);
      setTimeout(() => {
        setShowLoader(false);
      }, 500);
    }, 500);
  }, []);

  return (
    <>
      {showLoader && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
          <HashLoader color="white" size={50} />
        </div>
      )}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
        }}
      >
        {data}
      </div>
    </>
  );
}

export default CompLoad;
