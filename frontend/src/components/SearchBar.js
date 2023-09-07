import "./SearchBar.css"

const SearchBar = () =>
{

    const inputField = []

    function handleSubmit() {
        return undefined;
    }

    return(
        <div className="Card">
            <div className="CardInner">
                <label>
                    Start Exploring By Finding A Ticker
                </label>
                <div className="SearchContainer">
                    <form className="InputContainer">
                        <input placeholder="TSLA or NVDA or AAPL"/>
                    </form>
                    <div
                        className="Icon"
                        onClick={ handleSubmit() }
                    >
                        <img src="/icons/searchIcon.svg" alt="search icon" style={{color: "white"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;