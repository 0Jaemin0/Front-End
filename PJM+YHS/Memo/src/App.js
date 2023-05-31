import { useEffect, useState } from "react";
import "./App.css";
import MemoEdit from "./MemoEdit";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  const onCreate = (title, emotion, content) => {
    const newItem = {
      title,
      emotion,
      content,
    };
    setData([newItem, ...data]);
    localStorage.setItem("MemoList", JSON.stringify([newItem, ...data]));
  };

  return (
    <div className="App">
      <MemoEdit onCreate={onCreate} />
    </div>
  );
}

export default App;
