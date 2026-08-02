import { Link } from "react-router";

const NavBar = () => {

    return(
        <nav>
            <Link to='/'> Home</Link> {}
            <Link to='/products'> product list</Link>
        </nav>
    )
}

export default NavBar