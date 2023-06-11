import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import './styles/index.scss'
import { PostsContextProvider } from './context/PostsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PostsContextProvider>
    <Router >
      <App />
    </Router>

    </PostsContextProvider>
     

  </React.StrictMode>
  
   
)