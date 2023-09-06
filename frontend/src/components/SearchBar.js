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
                <label>Search for a Ticker</label>
                <div className="SearchContainer">
                    <div
                        className="Icon"
                        onClick={ handleSubmit() }
                    >
                        <img src="/icons/searchIcon.svg" alt="search icon" />
                    </div>
                    <form className="InputContainer">
                        <input placeholder="TSLA or NVDA or AAPL"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;