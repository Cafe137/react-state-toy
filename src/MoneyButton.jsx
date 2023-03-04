export function MoneyButton({ setMoney }) {
    function handleClick() {
        setMoney(money => money + 100)
    }
    return (
        <button className="money-button" onClick={handleClick}>
            Give money
        </button>
    )
}
