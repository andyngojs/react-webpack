import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom

// Tạo component App
function App() {
  return (
    <div>
      <h1>Xin chào các anh em lập trình frontend!</h1>
      <h2>Xin chào các hảo huynh đệ !</h2>
    </div>
  );
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));
