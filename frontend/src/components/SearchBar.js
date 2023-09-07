import "./SearchBar.css"
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const SearchBar = () =>
{
    const [ticker, setTicker] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`data/${ticker}`);
    };

    const handleInputChange = (e) => {
        setTicker(e.target.value);
    };

    return(
        <div className="Card">
            <div className="CardInner">
                <label style={{color : "white"}}>
                    Let's search for a ticker!
                </label>
                <div className="SearchContainer">
                    <form
                        className="InputContainer"
                        onSubmit={handleSubmit}
                    >
                        <input
                            placeholder="TSLA or NVDA or AAPL"
                            onChange={handleInputChange} // Added an onChange event
                        />
                    </form>
                    <div
                        className="Icon"
                        onClick={handleSubmit}
                    >
                        <img src="/icons/searchIcon.svg" alt="search icon" style={{color: "#a9b8c9"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;