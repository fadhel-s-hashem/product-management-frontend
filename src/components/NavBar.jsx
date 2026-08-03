import { Link } from "react-router";

const NavBar = () => {

    return(
        <nav>
            <Link to='/'> Home</Link> {}
            <Link to='/products'> product list</Link> {}
            <Link to='/products/new'> Add product</Link>
        </nav>
    )
}

export default NavBar