import React from 'react';
import './User.scss';
import userimage from '../../assets/images/emresualp.jpg';


const User = (props) => {
    return (
        <a className="user">
            <div className="user-name">Merhaba, Emre </div>
            <div className="user-img">
                <img alt="" src={userimage}/>
                
            </div>
            

        </a>

    )
}
export default User;