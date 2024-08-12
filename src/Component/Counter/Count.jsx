import React, { useEffect, useState } from "react";


const Counter = ({count, inc, dec}) =>{

    // const [count, setCount] = useState(0);

    return(
        <div>
            <h2 >Counter</h2>
            <h3>
                {count}
            </h3>
            <button type="button" onClick={inc} className="btn-1">+</button>
            <button type="button" onClick={dec} className="btn-2">-</button>
        </div>
    )
}

export default Counter;