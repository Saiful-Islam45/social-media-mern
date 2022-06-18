import React from 'react';
import Profile from '../../components/ProfileSide/Profile';
import './Home.css'
 function Home() {
    return (
    <div className="home">
        <Profile/>
        <div className='postside'>postside</div>
        <div className='trendside'>trendside</div>
    </div>
    )
};

export default Home;