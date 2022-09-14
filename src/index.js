import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);




// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <Router>
//       <App />
//     </Router>
//   </ApolloProvider>,
//   document.getElementById('root')
// );





// root.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
