import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import Posts from './Posts/Posts';
import About from './About/About';
import './main.css';

export default function Main() {
  const { isLogin } = useContext(UserContext);
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json').then((json) => {
      // console.log(json);
      // console.log(json.data);
      setPosts(json.data);
    });
  }, []);

  return (
    <main>
      {posts !== undefined ? (
        <div className='max-width'>
          <h2 className='a11y-hidden'>Post</h2>
          <ul className='posts'>
            {/* components array로 생성할 곳 */}
            <Posts posts={posts} />
          </ul>
          {isLogin ? <About /> : null}
        </div>
      ) : (
        <h3>로딩중</h3>
      )}
    </main>
  );
}
