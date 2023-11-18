import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";


export default function Nav(props) {
    // console.log(props);
    return (
        <div>
            <h3>Navigate</h3>
            <NavLink to='/home'>
                <button>Home</button>
            </NavLink>
            <NavLink to='/about'>
                <button>About</button>
            </NavLink>

            <hr />
            <SearchBar onSearch={props.onSearch} />
            <button onClick={() => props.addRandom()}>Agregar Aleatorio</button>

            <hr />
        </div>
    );
}
