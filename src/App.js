import React, { useState } from 'react';
import './App.scss';
import Appbar from './Components/Appbar';
import SideMenu from './Components/SideMenu';

function App() {
  const [open, setOpen] = useState(false);
  const companyName = 'Луис+, ООО';
  const userName = 'Имя пользователя';
  const isOnline = true;

  return (
    <div className="App">
      <Appbar isOpen={open} companyName={companyName} userName={userName} isOnline={isOnline} />
      <main>
        <SideMenu />
      </main>
    </div>
  );
}

export default App;
