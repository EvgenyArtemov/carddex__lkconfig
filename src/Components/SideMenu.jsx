import React from 'react';
import SideMenuItems from './SideMenuItems';
import './SideMenu.scss';

export default function SideMenu({ menuItems, isOpen }) {
  const menu = [...menuItems];

  return (
    <section className="sidemenu">
      {menu.map((el) => {
        return <SideMenuItems key={el.header.iconClass} menuItems={el} />;
      })}
    </section>
  );
}
