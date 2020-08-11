import React from 'react';
import './SideMenuMin.scss';
import '../SCSS/_icons.scss';

export default function SideMenuMin({ menuItems }) {
  const menu = [...menuItems];
  return (
    <section>
      <div className="sidemenu__min">
        {menu.map((el) => {
          return <button className={`${el.header.iconClass}`}></button>;
        })}
        {/* <button className="sidemenu__min home"></button>
        <button className="sidemenu__min admin"></button> */}
      </div>
    </section>
  );
}
