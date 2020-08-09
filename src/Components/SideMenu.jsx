import React, { useState } from 'react';
import './SideMenu.scss';

export default function SideMenu() {
  const [closed, setClosed] = useState(true);

  const menuItems = {
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
  };

  function openHandler() {
    setClosed(!closed);
  }
  return (
    <section className="sidemenu">
      <div className={'sidemenu__block' + `${closed ? ' closed' : ''}`} onClick={openHandler}>
        <div className={'sidemenu__title home' + `${closed ? ' closed' : ''}`}>Главная</div>
        <ul className={'sidemenu__list' + `${closed ? ' closed' : ''}`}>
          <li className="sidemenu__list_item sales__history">История скидок</li>
          <li className="sidemenu__list_item payments__history">История платежей</li>
          <li className="sidemenu__list_item dispatch__history">История отгрузок</li>
          <li className="sidemenu__list_item price__list">Прайс-лист</li>
        </ul>
      </div>
    </section>
  );
}
