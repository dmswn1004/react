import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬독학']);
  let [like, setLike] = useState([0,0,0]);
  // 모달창의 현재 상태 저장 함수 ex) 열림 - true / 닫힘 - false
  let [modal, setModal] = useState(false); 

  [1,2,3].map(function(a){
    return '123'
  })

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>가나다순정렬</button>

      <button onClick={()=>{
        let copy = [...title]; 
        copy[0] = '여자코트 추천';
        setTitle(copy);
      }}>글 수정</button>

      {/* <div className="list">
        <h4>{ title[0] } <span onClick={ ()=> {setLike(like+1)} }>좋아요 👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {/* map()이용해 반복되는 코드 축약 */}
      {
        title.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(!modal)}}>{ title[i] }</h4>
              <span onClick={()=>{
                  let copy = [...like]
                  copy[i] += 1
                  setLike(copy) 
                }}>👍</span> { like[i] }
              <p>2월 17일 발행</p>
            </div>)
        })
      }

      {/* 모달창 띄우기*/}
      {
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

// 컴포넌트 
function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;

