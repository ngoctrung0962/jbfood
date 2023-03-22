import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import IconMenu from "../../assets/img/icon_menu.png";
import IconMemo from "../../assets/img/icon_memo.png";
import IconChallenge from "../../assets/img/icon_challenge.png";
import IconInfo from "../../assets/img/icon_info.png";
const Header = () => {
  const dataMenu = [
    {
      display: "自分の記録",
      path: "/",
      icon: IconMemo,
    },
    {
      display: "チャレンジ",
      path: "/myrecord",
      icon: IconChallenge,
    },
    {
      display: "お知らせ",
      path: "/column",
      icon: IconInfo,
    },
  ];
  return (
    <div className="header">
      <div className="header__logo">
        <Link to={"/"}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="header__right d-flex">
        <ul className="header__menu d-flex ">
          {dataMenu.map((item, index) => (
            <li className="header__menu__item" key={index}>
              <Link to={item.path}>
                <img src={item.icon} alt="img" />
                {item.display}
              </Link>
            </li>
          ))}
        </ul>
        <div className="btn__menu">
          <img src={IconMenu} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
