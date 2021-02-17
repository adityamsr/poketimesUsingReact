import React from 'react'

const Contact = ( props ) => {
  // this console line will show details
 // console.log(props)
 // this setTimeout will redirect to the about after 3 seconds
//  setTimeout(() => {
//    props.history.push('/about')
//  }, 3000);
   return (
       <div className="container">
         <h4 className="center"> Contact </h4>
         <p> Hey there you are doing great bro and i am proud of you! </p>
       </div>
   )
}

export default Contact