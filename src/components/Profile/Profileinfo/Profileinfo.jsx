import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://10-raisons.fr/wp-content/uploads/2022/02/10-raisons-s-interesser-aux-nft.jpg' width='500px' alt='content photo??' />
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}

export default ProfileInfo;




