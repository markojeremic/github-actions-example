import React from 'react'
import Widecard from '../components/Widecard';

function Education() {
  return (
    <div className="condiv">
            <h1 className="subtopic">Antonije Education</h1>
            <Widecard title="Master Student" where="Faculty of Organizational Sciences | Department of e-business" from="2023" to="now"/>
            <Widecard title="Student" where="Faculty of Organizational Sciences" from="October 2018" to="February 2023"/>
            <Widecard title="High School" where="Valjevska Gimnazija" from="2014" to="2018"/>

            <h1 className="subtopic">Marko Education</h1>
            <Widecard title="Master Student" where="Faculty of Organizational Sciences | Department of e-business" from="2023" to="now"/>
            <Widecard title="Student" where="Faculty of Organizational Sciences" from="October 2018" to="January 2023"/>
            <Widecard title="High School" where="Gimnazija Smederevo" from="2014" to="2018"/>
    </div>
  )
}

export default Education