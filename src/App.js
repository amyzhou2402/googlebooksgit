import "./App.css";
import BookContainer from "./containers/BookContainer";
import SearchBar from "./components/SearchBar";

//header introducing the page
//form containing search bar, submit button
//grid of books

function App() {
    return (
        <div className="App">
            <h1> Google Books Search</h1>
            <SearchBar></SearchBar>
            <BookContainer></BookContainer>
        </div>
    );
}

export default App;
