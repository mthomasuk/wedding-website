import React from "react";

import "./Gift.css";

const GiftInfo = () => (
    <div className="GiftInfo-content">
        <p>If you would like to get us something - firstly, thank you very much!</p>
        <p>
            Instead of a physical gift, we&apos;d be over the moon with a contribution to&nbsp;
            our honeymoon in Japan. Just choose something you think we&apos;ll like, and&nbsp;
            check out through PayPal. Nothing catching your eye?&nbsp;
            <a
                href="https://paypal.me/markandrhiannon"
                rel="noopener noreferrer"
                target="_blank"
            >
                Donate through PayPal instead
            </a>.
        </p>
    </div>
);

export default GiftInfo;
