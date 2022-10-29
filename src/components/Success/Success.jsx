import { Link } from 'react-router-dom';

function Success() {
    return (
        <>
            <h1>Thank You!</h1>
            <Link to="/">
                <button>Leave New Feedback</button>
            </Link>
        </>
    );
}

export default Success;