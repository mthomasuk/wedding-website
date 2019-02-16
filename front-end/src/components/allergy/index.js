import React, { Fragment } from "react";

import "./AllergyInfo.css";

const AllergyInfo = ({ onChange }) => (
    <Fragment>
        <div className="AllergyInfo-content">
            <h3>Do you have any allergies, intolerances or special requests?</h3>
            <p>
            Add them here and we&apos;ll pass them on to the chef. If you don&apos;t,
            and you&apos;re with your menu choices, just press Next.
            </p>
            <textarea
                className="AllergyInfo-textarea"
                onChange={onChange}
                placeholder="e.g. Can I have my lamb without mushrooms"
            />
        </div>
    </Fragment>
);

export default AllergyInfo;
