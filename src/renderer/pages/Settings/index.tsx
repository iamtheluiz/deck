import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { Button } from '@/ui/button';
import { networkInterfaces } from 'os';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/ui/select';

// eslint-disable-next-line react/function-component-definition
const Settings: React.FC = () => {
  const history = useHistory();
  const [addresses, setAddresses] = useState<
    { name: string; address: string }[]
  >([]);
  const [address, setAddress] = useState('');

  function handleNavigateToHome() {
    history.push('/');
  }

  useEffect(() => {
    const nets = networkInterfaces();
    const results = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const name of Object.keys(nets)) {
      // eslint-disable-next-line no-restricted-syntax
      for (const net of nets[name] as any) {
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
        if (net.family === familyV4Value && !net.internal) {
          results.push({
            name,
            address: net.address,
          });
        }
      }
    }

    setAddresses(results);
  }, []);

  return (
    <div className="flex flex-col flex-1 p-2">
      <header>
        <Button variant="outline" onClick={handleNavigateToHome}>
          <FiArrowLeft size={16} />
        </Button>
      </header>
      <div className="flex flex-col justify-center items-center flex-1 w-72 m-auto">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Machine IP
        </h2>
        <QRCode
          value={address !== '' ? `http://${address}:4531` : ''}
          renderAs="svg"
          className="w-full h-auto mt-4"
        />
        <Select onValueChange={(value) => setAddress(value)}>
          <SelectTrigger className="w-full mt-6">
            <SelectValue placeholder="IP" />
          </SelectTrigger>
          <SelectContent>
            {addresses.map((item) => (
              <SelectItem
                value={item.address}
              >{`${item.name} • ${item.address}`}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="leading-7 mt-2 w-full text-center text-muted-foreground">
          Select a IP to connect your deck mobile app.
        </p>
      </div>
    </div>
  );
};

export default Settings;
