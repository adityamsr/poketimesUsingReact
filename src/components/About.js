import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
   return (
       <div className="container">
         <h4 className="center"> About </h4>
         <p> Hey there you are doing great bro and i am proud of you! </p>
       </div>
   )
}

export default Rainbow(About)
//export default About