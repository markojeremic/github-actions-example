import React from 'react';
import {Link} from "react-router-dom";



function Navitem({tolink,item}) {



  return (
    <li id={item}>  
                    <Link to={tolink}>{item}</Link>
                    </li>
  )
}

export default Navitem