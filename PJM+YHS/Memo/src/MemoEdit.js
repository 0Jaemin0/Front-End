import { useState, useEffect, React } from "react";

const MemoEdit = ({ onCreate }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const [state, setState] = useState({
    title: "",
    emotion: "",
    content: "",
  });

  const handleState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    alert("저장 성공");
    onCreate(state.title, state.emotion, state.content);
    setState({
      title: "",
      emotion: "",
      content: "",
    });
  };

  return (
    <div className="MemoEdit">
      <h2>오늘의 일기</h2>
      <div>
        <input
          placeholder="제목"
          name="title"
          value={state.title}
          onChange={handleState}
        />
      </div>

      <div className="Btn">
        <button
          className="btn1"
          onClick={() => {
            state.emotion = "emotion/emotion1.png";
          }}
        >
          <img src={env.PUBLIC_URL + "emotion/emotion1.png"}></img>
          <h3>신남</h3>
        </button>

        <button
          className="btn2"
          onClick={() => {
            state.emotion = "emotion/emotion2.png";
          }}
        >
          <img src={env.PUBLIC_URL + "emotion/emotion2.png"}></img>
          <h3>좋음</h3>
        </button>

        <button
          className="btn3"
          onClick={() => {
            state.emotion = "emotion/emotion3.png";
          }}
        >
          <img src={env.PUBLIC_URL + "emotion/emotion3.png"}></img>
          <h3>보통</h3>
        </button>

        <button
          className="btn4"
          onClick={() => {
            state.emotion = "emotion/emotion4.png";
          }}
        >
          <img src={env.PUBLIC_URL + "emotion/emotion4.png"}></img>
          <h3>나쁨</h3>
        </button>

        <button
          className="btn5"
          onClick={() => {
            state.emotion = "emotion/emotion5.png";
          }}
        >
          <img src={env.PUBLIC_URL + "emotion/emotion5.png"}></img>
          <h3>끔찍</h3>
        </button>
      </div>

      <div>
        <textarea
          placeholder="내용작성"
          name="content"
          value={state.content}
          onChange={handleState}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
};

export default MemoEdit;
