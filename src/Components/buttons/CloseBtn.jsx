import React from 'react';
import closeBtn from '../../img/menu_btn_close.svg';
import './closeBtn.scss';

export default function CloseBtn() {
  return <input type="image" src={closeBtn} alt="Close Menu Button" />;
}
