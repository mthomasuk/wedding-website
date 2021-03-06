import React from "react";

import "./Gift.css";

const AGift = ({
    id, title, subtitle, link, value, img_src,
}) => (
    <div key={id} className="Gift">
        <img src={`/images/${img_src.trim()}`} alt={title} />
        <div className="Gift-Title">{title}</div>
        <div className="Gift-SubTitle">{subtitle}</div>
        <div className="Gift-Link">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >{`Gift this for £${value}`}
            </a>
        </div>
    </div>
);

const Gifts = ({ gifts }) => (
    <div className="GiftList-content">{gifts.map(AGift)}</div>
);

export default Gifts;
