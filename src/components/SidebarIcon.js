import React from "react";
import Icon from "../images/cat.jpeg";

function SidebarIcon() {
    return (
        <div className="SidebarIcon">
            <img src={Icon} />
            <p>まきまき</p>
        </div>
    );
}

export default SidebarIcon;