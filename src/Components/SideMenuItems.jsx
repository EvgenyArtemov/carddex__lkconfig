import React, { useState } from 'react';
import './SideMenu.scss';

export default function SideMenuItems({ menuItems }) {
  const [closed, setClosed] = useState(true);

  let checkClosed = `${closed ? ' closed' : ''}`;

  function openHandler() {
    setClosed(!closed);
  }
  return (
    <div className={'sidemenu__block' + `${checkClosed}`} onClick={openHandler}>
      <div className={'sidemenu__title home' + `${checkClosed} + ${menuItems.iconClass}`}>
        {menuItems.header.text}
      </div>
      <ul className={'sidemenu__list' + `${checkClosed}`}>
        {menuItems?.items.map((el) => {
          return <li className={'sidemenu__list_item ' + `${el.iconClass}`}>{el.text}</li>;
        })}
      </ul>
    </div>
  );
}
