import { Link } from 'react-router-dom';

function Success() {
    return (
        <>
            <h1>SUCCESS!</h1>
            <Link to="/">
                <button>HOME</button>
            </Link>
        </>
    );
}

export default Success;