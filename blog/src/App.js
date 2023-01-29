import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, b] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬독학']);
  let [content, setCon] = useState('2월 17일 발행')

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{ title[0] }</h4>
        <p>{content}</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>{content}</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default App;

