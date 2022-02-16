import React, { useRef } from "react";
import "./App.scss";
import Button from "./components/Button";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import GlobalStyle from "./GlobalStyles";
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
    <GlobalStyle>
      <div className="container app">
        <h1 className="title-header">Todo</h1>
        <TodoInput />
        <TodoList />
        <hr></hr>
        <Video ref={videoRef} />
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <hr></hr>
        <Button primary />
        <Button secondary />
      </div>
    </GlobalStyle>
  );
}
