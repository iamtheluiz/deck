import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import QRCode from 'qrcode.react';

// eslint-disable-next-line react/function-component-definition
const Settings: React.FC = () => {
  const history = useHistory();
  const address = '192.168.0.100';

  function handleNavigateToHome() {
    history.push('/');
  }

  return (
    <div className="flex flex-col flex-1 p-2">
      <header>
        <FiArrowLeft size={16} onClick={handleNavigateToHome} />
      </header>
      <div className="flex justify-center items-center flex-1 w-full">
        <QRCode
          value={`http://${address}:4531`}
          renderAs="svg"
          className="w-64 h-64"
        />
      </div>
    </div>
  );
};

export default Settings;
