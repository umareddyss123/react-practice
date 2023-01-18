
import { Link, useNavigate } from 'react-router-dom';

function Homepage () {
    const navigate = useNavigate();
    function navigateHandler(){
        navigate('/products');

    }
    return (
    <>

    <h1>My Home page</h1>
    <p>
        Go to <Link to = "products">the List of products</Link>.
        </p>
        <p>
            <button onClick={navigateHandler}>
                navigate
            </button>
        </p>
    </>
    );

}

export default Homepage;
