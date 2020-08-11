import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SideMenu.scss';

export default function SideMenuItems({ menuItems }) {
  const [closed, setClosed] = useState(true);

  let checkClosed = `${closed ? ' closed' : ''}`;

  function openHandler() {
    setClosed(!closed);
  }
  return (
    <div className={'sidemenu__block' + `${checkClosed}`} onClick={openHandler}>
      <div className={'sidemenu__title home' + `${checkClosed} ${menuItems.header.iconClass}`}>
        <NavLink to={`/${menuItems.header.iconClass}`}>{menuItems.header.text}</NavLink>
      </div>
      <ul className={'sidemenu__list' + `${checkClosed}`}>
        {menuItems?.items.map((el) => {
          return (
            <li key={`${el.iconClass}`} className={'sidemenu__list_item ' + `${el.iconClass}`}>
              <NavLink to={`/${el.iconClass}`}>{el.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
