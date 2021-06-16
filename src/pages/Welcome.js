import React from 'react'
import style from '../style/welcome.module.css';
import { Link } from "react-router-dom";

function Welcome() {
    return (
    <div className={style.base}>
    <div className={style.WelcomeContainer}>
<h1>Welcome</h1>
<div className={style.WelcomeInfo}>
<p>We are working on the clubhouse, adding people, help us on this , to make sure nothing breaks</p>
<p>ANybody who wants to interact must go on and do so , no room for lazy rat asses, jump up your asses and do import PropTypes from 'prop-types'
Varun, and everyone here shall be there as supervisors, if any bad behavior is reported , due punishment , even penalty might be inflicted.
</p>
<p>So hello everyone , lets get started with our work , we are now entering a journey of a lifetime and we shall interact , make friends and have the time
    of our life
</p>
</div>
<div className={style.actionBtn}>
    <Link exact to ='/invite' className='primaryBtn d-flex align-items-center mb-3'>
        Get your username{" "}
        {/* <img src */}
    

    </Link>
    <Link>
    Have an invite link? Sign in</Link>
</div>
    </div>
    </div>
    )
}

export default Welcome
