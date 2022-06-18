import React from 'react'
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import './ProfileCard.css'
import LogoSearch from '../LogoSearch/LogoSearch'
const ProfileCard= () => {
 return (
    <div className='ProfileCard'>
         <div className="ProfileImages">
             <img src={Cover} alt="" />
             <img src={Profile} alt="" />
          </div>
          <div className="ProfileName">
              <span>Zendaya Mj</span>
              <span>Senior UI/UX Designer</span>
          </div>
          <div className="FollowStatus">
              <hr/>
            <div>
                <div className="follow">
                    <span>6,890</span>
                    <span>following</span>
                </div>
                <div className='vl'></div>
                <div className="follow">
                    <span>6,090</span>
                    <span>follower</span>
                </div>
            </div>
            <hr />  
          </div>
     </div>
 )
}

export default ProfileCard;