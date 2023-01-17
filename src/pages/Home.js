
import { Link } from 'react-router-dom';

function Homepage () {
    return (
    <>

    <h1>My Home page</h1>
    <p>
        Go to <Link to = "/products">the List of products</Link>
        </p>
    </>
    );

}

export default Homepage;
