import React from 'react';

export default function Test({items}) {
    console.log(items)
    let sum = 0;
     items.forEach(item => {
        sum = sum + item.count * item.price
    })
    console.log(sum)
    return(
        <div>
{sum}
        </div>
    )
}