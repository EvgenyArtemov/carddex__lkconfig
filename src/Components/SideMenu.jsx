import React, { useState } from 'react';
import SideMenuItems from './SideMenuItems';
import './SideMenu.scss';

export default function SideMenu({ menuItems }) {
  const menu = [...menuItems];

  return (
    <section className="sidemenu">
      {menu.map((el) => {
        return <SideMenuItems menuItems={el} />;
      })}
    </section>
  );
}
