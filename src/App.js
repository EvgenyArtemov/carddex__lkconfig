import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Appbar from './Components/Appbar';
import SideMenu from './Components/SideMenu';
import SideMenuMin from './Components/SideMenuMin';
import MainPage from './Components/MainPage';
import PaymentsPage from './Components/PaymentsPage';
import SalesPage from './Components/SalesPage';
import DispatchPage from './Components/DispatchPage';
import PriceListPage from './Components/PriceListPage';

function App() {
  const [open, setOpen] = useState(true);
  const companyName = 'Луис+, ООО';
  const userName = 'Имя пользователя';
  const isOnline = true;

  // menu hierarchy
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
      <Appbar
        isOpen={open}
        setOpen={(open) => setOpen(!open)}
        companyName={companyName}
        userName={userName}
        isOnline={isOnline}
      />
      <main>
        {open && <SideMenu isOpen={open} menuItems={menuItems} />}
        {!open && <SideMenuMin menuItems={menuItems} />}
        <Switch>
          <Route path="/home" exact>
            <MainPage />
          </Route>
          <Route path="/sales__history">
            <SalesPage />
          </Route>
          <Route path="/payments__history">
            <PaymentsPage />
          </Route>
          <Route path="/dispatch__history">
            <DispatchPage />
          </Route>
          <Route path="/price__list">
            <PriceListPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
