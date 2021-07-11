import React, { Component } from 'react';
import './App.css';
class App extends Component {

  render() {
    return (
      <div className="App">
        <p>Sample cho toàn bộ lab và project trong môn học Lập Trình Web Front-End với React với đầy đủ dependency.</p>
        <p>Phiên bản React hiện tại trên máy của bạn là: {React.version}</p>
        <p>Phiên bản React đã được sử dụng để thiết kế môn học: 16.14.0.</p>
      </div>
    );
  }
}

export default App;