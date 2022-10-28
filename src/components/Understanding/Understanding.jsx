import { Link } from 'react-router-dom';

function Understanding() {
    return (
        <>
            <h1>UNDERSTANDING!</h1>
            <Link to="/support">
                <button>NEXT</button>
            </Link>
        </>
    );
}

export default Understanding;