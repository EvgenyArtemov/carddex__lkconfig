import React from 'react';
import './AppBar.scss';
import bell from '../img/bell.svg';
import message from '../img/message.svg';
import avatar from '../img/avatar.jpg';
import CloseBtn from './buttons/CloseBtn';
import MenuBtn from './buttons/MenuBtn';
import Logotype from './Logotype/Logotype';

export default function Appbar({ isOpen, companyName, userName, isOnline, setOpen }) {
  const clicked = () => {
    console.log('clicked');
  };

  return (
    <header>
      {isOpen ? <CloseBtn onClick={() => console.log('clicked')} /> : <MenuBtn onClick={clicked} />}
      <Logotype />

      <div className="company__info">
        <h2 className="company__info_title">Компания: </h2>
        <h2 className="company__info_name">{companyName}</h2>
      </div>

      <div className="user">
        <div className="user__notifications">
          <img src={bell} alt="notification bell sign" />
          <img src={message} alt="incoming message sign" />
        </div>
        <div className="user__info">
          <p className="user__info_name">{userName}</p>
          <div className="user__info_avatar">
            <img src={avatar} alt="user avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}
