import React from 'react';
import style from "../style/explore.module.css";
import {Link,withRouter} from "react-router-dom";
export default function SubHeader(props) {
    return (
        <div className={style.head}>

        <Link to="/home"><img src="/images/arrow.png" alt=""/></Link> 
        <h3>{props.pageTitile}</h3>
        </div>
    );
}
