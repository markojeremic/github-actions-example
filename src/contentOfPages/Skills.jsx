import React from 'react'


function Skills() {

const antonijeSkills = ['HTML','CSS','JS','PHP','REACT JS','PYTHON','JAVA','C','C#','XML','JSON'] ;
const markoSkills = ['C++', 'Python', 'Groovy', 'Git', 'GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes', 'Azure', 'CI/CD']

  return (
    <div className="condiv skills">
            <h1 className="subtopic">Antonije Skills</h1>
            <ul>
            {antonijeSkills.map((value)=>{
                return <li><b>{value}</b></li>
            })}
            </ul>

            <h1 className="subtopic">Marko Skills</h1>
            <ul>
            {markoSkills.map((value)=>{
                return <li><b>{value}</b></li>
            })}
            </ul>
            </div>
  )
}

export default Skills