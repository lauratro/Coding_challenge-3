import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider,gql } from "@apollo/client";
const client = new ApolloClient({
  uri: 'https://staging.api.wissenwirkt.com/api/graphql',
  cache: new InMemoryCache(),
  headers: {
   
   "X-Auth-Token":localStorage.getItem('token') ||"",
   "X-Auth-Account-Id":localStorage.getItem("userId") || ""
}
   
});
/* console.log("tok",localStorage.getItem("token"))
   client
  .query({
    query: gql`
      query Learn{
  Learn {
    LearnOpportunities(
      first: 20
    ) {
      edges{node{icon{url},title}
       
      }

    }
 

  }
}
    `
  })
  .then(result => console.log(result));    */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
