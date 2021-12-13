import Button from "../Button";
import { useState } from "react";

const SearchBar = ({ searchValues }) => {
    const [currentSearch, setCurrentSearch] = useState("");
    // searchValues.searchTerm;
    // searchValues.setSearchTerm;

    console.log("input: " + currentSearch);

    return (
        <div>
            <input
                type="text"
                value={currentSearch}
                placeholder="search"
                //onInput, whenever key is pressed, will create a new event
                onInput={(event) => setCurrentSearch(event.target.value)}
            ></input>
            <Button
                label="search"
                clickHandler={() => {
                    searchValues.setSearchTerm(currentSearch);
                    setCurrentSearch("");
                }}
            ></Button>
        </div>
    );
};

export default SearchBar;
