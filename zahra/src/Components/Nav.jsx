import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
function Nav(){
    const [zahra,setZahra]=useState(0)
    function addNumber(){
        setZahra(zahra +1)
    }
    return(
        <nav>
            <Button onClick={addNumber}>
                click me
            </Button>
            <Button variant="primary">Primary</Button>
            <p>{zahra}</p>
        </nav>
    )
}
export default Nav;