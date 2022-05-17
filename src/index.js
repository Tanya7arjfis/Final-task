import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container maxWidth="lg">
    <Box sx={{ bgcolor: '#eef5fb', p: 3}}> 
    <Provider store={store}>
      <App />
    </Provider>
    </Box>
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
