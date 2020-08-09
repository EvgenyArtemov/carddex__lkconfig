import React, { useState } from 'react';
import './App.scss';
import Appbar from './Components/Appbar';
import SideMenu from './Components/SideMenu';

function App() {
  const [open, setOpen] = useState(false);
  const companyName = 'Луис+, ООО';
  const userName = 'Имя пользователя';
  const isOnline = true;

  const menuItems = [
    {
      header: {
        text: 'Главная',
        iconClass: 'home',
      },
      items: [
        {
          text: 'История скидок',
          iconClass: 'sales__history',
        },
        {
          text: 'История платежей',
          iconClass: 'payments__history',
        },
        {
          text: 'История отгрузок',
          iconClass: 'dispatch__history',
        },
        {
          text: 'Прайс-лист',
          iconClass: 'price__list',
        },
      ],
    },
    {
      header: {
        text: 'Новости',
        iconClass: 'news',
      },
      items: [
        {
          text: 'Архив',
          iconClass: 'archive',
        },
      ],
    },
    {
      header: {
        text: 'Администрирование',
        iconClass: 'admin',
      },
      items: [
        {
          text: 'Пользователи',
          iconClass: 'users',
        },
        {
          text: 'WEB-приложения',
          iconClass: 'apps',
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Appbar isOpen={open} companyName={companyName} userName={userName} isOnline={isOnline} />
      <main>
        <SideMenu menuItems={menuItems} />
      </main>
    </div>
  );
}

export default App;
