import React, { Fragment } from "react";

import Button from "../button";

import "./Food.css";

const Food = ({
    haveNames,
    hasDeclined,
    confirmAttendance,
    declineToAttend,
}) => (
    <Fragment>
        {haveNames && !hasDeclined && (
            <div className="Landing-content">
                <h3>We&apos;d love to see you at our wedding</h3>
                <p>It&apos;s on <b>September 7th</b> at <b>Walthamstow Wetlands</b>.<br />
                    Can you make it?
                </p>
                <div className="Button-container">
                    <Button
                        title={"Yes - I'll be there"}
                        onClick={confirmAttendance}
                    />
                    <Button
                        title={"No - I can't make it"}
                        onClick={declineToAttend}
                    />
                </div>
            </div>
        )}
        {haveNames && hasDeclined && (
            <div className="Landing-content">
                <p>
                    Sorry to hear you can&apos;t make it!
                    If anything changes, send us an email at&nbsp;
                    <a href="mailto:rhiannon.f.jones@gmail.com">rhiannon.f.jones@gmail</a>
                </p>
            </div>
        )}
    </Fragment>
);

export default Food;
