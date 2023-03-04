import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './Card'
import { MoneyButton } from './MoneyButton'
import { MoneyDisplay } from './MoneyDisplay'
import { getJson } from './Utility'

function App() {
    const [money, setMoney] = useState(450)
    const [products, setProducts] = useState([])

    useEffect(() => {
        getJson('https://dummyjson.com/products').then(data => setProducts(data.products))
    }, [])

    return (
        <div className="App">
            <MoneyDisplay money={money} />
            <MoneyButton setMoney={setMoney} />
            {products.map((item, index) => (
                <Card
                    key={index}
                    src={item.thumbnail}
                    name={item.title}
                    price={item.price}
                    money={money}
                    setMoney={setMoney}
                />
            ))}
        </div>
    )
}

export default App
