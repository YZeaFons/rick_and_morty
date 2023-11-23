import './Nav.css'
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";


export default function Nav(props) {
    return (
        <div className='navigates'>
            {/* <h3>Navigate</h3> */}
            <NavLink to='/home'>
                <button className='personalButton'>Home</button>
            </NavLink>
            <NavLink to='/about'>
                <button className='personalButton'>About</button>
            </NavLink>
            <NavLink to='/favorites'>
                <button className='personalButton'>Favorites</button>
            </NavLink>
            <button onClick={props.logout} className='personalButton'>LogOut</button>
            <hr />
            <SearchBar onSearch={props.onSearch} addRandom={props.addRandom} />
            <hr />
        </div>
    );
}
