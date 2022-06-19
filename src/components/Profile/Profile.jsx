import React from 'react';
import Myposts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <Myposts posts={props.state.posts} />
    </div>
  )
}

export default Profile;