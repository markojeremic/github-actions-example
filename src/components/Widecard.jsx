import React from 'react'

function Widecard({title,where,from,to}) {
  return (
    <div class="widecard">
            <div class="compdet">
            <h3>{title}</h3>
            <h4 class="secondtext">{where}</h4>
            <h4 class="secondtext">{from} - {to}</h4>
            </div>
            </div>
  )
}

export default Widecard