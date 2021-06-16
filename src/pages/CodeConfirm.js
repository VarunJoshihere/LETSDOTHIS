import React from 'react';
import style from "../style/phoneConfirm.module.css";
import {Link} from "react-router-dom";

export default function CodeConfirm(){
return(
<div className={style.phoneConfirmContainer}>
    <Link exact to="/get_username" className={style.backBtn}>
        <img src="/images/arrow.png"/>
    </Link>
<div className="text-center">
<h1 style={{width:"100%",maxwidth:"200px",marginBottom:'1em'}}>Enter the code 
that was sent to you
</h1>
<input type="text"
style={{width:'100%',border:"none",textAlign:"center",outline:"none"}}/>
<p className="mt-2">Didnt receive it?<span>TAp to resend</span></p>
</div>
<Link exact to="/allow_notification"
className="primaryBtn d-flex align-items-center"
>Next <img src="/images/nextArrowIcon.svg"/></Link>
</div>
);

}
