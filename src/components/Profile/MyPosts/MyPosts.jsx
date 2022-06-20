import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = ({ posts }) => {
  const newPostElement = React.createRef();

  const addPost = () => {

    const text = newPostElement.current.value;
    //addPost(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div onClick={addPost}>
          <button>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        {posts.map(({ id, message, likesCount }) => (
          <Post key={id} message={message} likesCount={likesCount} />
        ))}
      </div>
    </div>
  )
}

export default MyPosts;