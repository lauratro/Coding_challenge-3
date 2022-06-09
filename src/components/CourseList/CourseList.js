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
const CourseList=()=> {
    const { loading, error, data } = useQuery(GET_LIST);

if (loading) return "Loading"
if(error) return `Error: ${error.message}`

  return (
    <div>
      {loading && <p>null</p>}
       <pre>Bad: {error.graphQLErrors.map(({ message }, i) => (
        <span key={i}>{message}</span>
      ))}
      </pre></div>
  )
}
export default CourseList