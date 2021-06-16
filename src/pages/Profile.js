import React from "react";
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from "react-icons/ai";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import { Link } from "react-router-dom";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";

export default function Profile(){
return(
<div className={style.profileContainer}>
    <div className={exploreStyle.header}>
    <div className={'${ exploreStyle.head } text-right mb-0'}>
    
    {/* <img src="/images/arrow.png" alt=" " className={style.last}/> */}
    
    <div className={style.actionBtn}>
    <Link to="/home">
    <img src="/images/arrow.png" alt=" " className={style.last}/>
    </Link>
        <BsAt/>
        <BsUpload/>
        <AiOutlineSetting/>
    </div>
    </div>


    </div>
    <img src="/images/user-img.jpg" alt="" className={style.profile_image}/>
    <h4>VARUN JOSHI</h4>
    <p>HEROOOOOOOO</p>
    <div className={style.follow}>
        <p>
            <span>0</span>
            {''}Followers
        </p>
        <p><span>51</span>following</p>
    </div>
    <button>ADD A bio</button>
    <div className="mb-4">
        <button className="mb-4">
        <AiOutlineTwitter/>ADD TWITTER
        </button>
        <button className="mb-4">
        <AiOutlineInstagram/>ADD Instagram
        </button>
        
    </div>
    <div className={style.nominated}>
        <img src="/images/user-img.jpg"/>
        <div>
            <p>JOined 14-July-2020</p>
            <p>Nominated by <span>Anto Mavi</span></p>
        </div>
    </div>
    <p>MEmber of</p>
    <button className={style.addMemberBtn}>
        <BsPlus/>
    </button>
</div>

);


}
