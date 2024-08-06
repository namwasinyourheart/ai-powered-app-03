//App.js

import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/SumNavbar';
import Text from './components/Text';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FileSum from './pages/FileSum';
import TextSum from './pages/TextSum';
// import URLSum from './pages/URLSum';

const App = () => {
  return (
    <div className="App">
      <Header/>

      <div className='intro'>
        <p> Summarize any files, documents</p>
        in seconds.
      </div>

      <div class='sub-title'>
        <p>
        AnySum helps you summarize any piece of text 
        into concise, easy to digest content so you can 
        free yourself from information overload.
        </p>
      </div>
      
      <a class='summarize-now' href='#SumNavbar'>Summarize now</a>

      <div className="video-container">
        <iframe
          width="1024"
          height="576"
          src="https://www.youtube.com/embed/FXki6WQSMno" // Replace VIDEO_ID with the actual video ID
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>


      <Router>
        
        <div id = 'main-content' className='main-content'>
        {/* <h1>Enter an Article URL or paste your Text</h1> */}
        <Navbar />
        <Routes>
          <Route id='fileSum' path="/file-sum" element={<FileSum />} />
          <Route path="/text-sum" element={<TextSum />} />
          {/* <Route path="/url-sum" element={<URLSum />} /> */}
        </Routes>
        </div>
      </Router>

      <Text/>

      <Footer/>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


