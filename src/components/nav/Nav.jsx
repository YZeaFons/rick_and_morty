import SearchBar from "../searchBar/SearchBar";

export default function Nav(props) {
    // console.log(props);
    return (
        <div>
            <h3>Navigate</h3>
            <SearchBar onSearch={props.onSearch} />
            <hr />
        </div>
    );
}
