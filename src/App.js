import React, { useState } from 'react';
import './App.css';
import Appbar from './Components/Appbar';

function App() {
  const [open, setOpen] = useState(false);
  const companyName = 'Луис+, ООО';
  const userName = 'Имя пользователя';
  const isOnline = true;

  return (
    <div className="App">
      <Appbar isOpen={open} companyName={companyName} userName={userName} isOnline={isOnline} />
    </div>
  );
}

export default App;
