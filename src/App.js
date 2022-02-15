import React, { useRef } from "react";
import "./App.scss";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Video from "./Video";

export default function App() {
  const videoRef = useRef();

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div className="container">
      <h1 className="title-header">Todo</h1>
      <TodoInput />
      <TodoList />
      <hr></hr>
      <Video ref={videoRef} />
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </div>
  );
}
