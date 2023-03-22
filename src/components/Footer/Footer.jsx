import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const listLink = [
    {
      display: "自分の記録",
      path: "/",
    },
    {
      display: "チャレンジ",
      path: "/2",
    },
    {
      display: "お知らせ",
      path: "/3",
    },
    {
      display: "お知らせ",
      path: "/3",
    },
    {
      display: "お知らせ",
      path: "/4",
    },
    {
      display: "お知らせ",
      path: "/5",
    },
    {
      display: "お知らせ",
      path: "/6",
    },
  ];
  return (
    <div className="footer">
      <ul className="footer__list__link d-flex m-0 p-0">
        {listLink.map((item, index) => (
          <li className="footer__link__item" key={index}>
            <Link to={item.path}>{item.display}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
