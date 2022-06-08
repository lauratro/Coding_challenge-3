import React from 'react'
import { useQuery, gql } from '@apollo/client'
const GET_LIST = gql`
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
`;
export default function CourseList() {
    const { loading, error, data } = useQuery(GET_LIST,{
        
            options: { 
              context: { 
                headers: { 
              /*       "X-Auth-Token": localStorage.getItem('token') ,
                    "X-Auth-Account-Id":localStorage.getItem("userId") */// this header will reach the server
                } 
              },
              // ... other options  
            }
    });

    if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log(data)
  return (
    <div> <pre>Bad: {error.graphQLErrors.map(({ message }, i) => (
        <span key={i}>{message}</span>
      ))}
      </pre></div>
  )
}
