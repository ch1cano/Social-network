import React from 'react';
import { addPost } from '../../Redux/state';
import Myposts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <Myposts posts={props.state.posts} addPost={props.addPost} />
    </div>
  )
}

export default Profile;