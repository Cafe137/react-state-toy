import { useState } from 'react'

export function Card({ src, name, price, money, setMoney }) {
    const [bought, setBought] = useState(false)

    function handleClick() {
        if (bought) {
            alert('Already bought')
            return
        }
        if (money < price) {
            alert('Cannot afford')
            return
        }
        setBought(true)
        setMoney(money - price)
    }

    return (
        <div className="card" onClick={handleClick}>
            <img src={src} alt="No alt" />
            <p className="title">{name}</p>
            {bought ? <p>Owned</p> : <p>Price: {price}</p>}
        </div>
    )
}
