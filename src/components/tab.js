import React from "react";
import '../css/style.css'
import { BsArrowsAngleContract,BsThreeDotsVertical } from 'react-icons/bs'
import { FaEquals } from 'react-icons/fa'
import {TbTableShare} from 'react-icons/tb'
function HeaderTab() {
    return (
        <div className="Tabs">
            <div className="center"><BsArrowsAngleContract /></div>
            <div className="center">
                <div className="equals"><FaEquals /></div>
            </div>
            <div className="center"><TbTableShare /></div>
            <div className="center">< BsThreeDotsVertical/></div>
        </div>
    );
}

export default HeaderTab;