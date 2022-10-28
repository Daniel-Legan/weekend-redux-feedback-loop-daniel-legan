import { Link } from 'react-router-dom';

function Review() {
    return (
        <>
            <h1>REVIEW!</h1>
            <Link to="/success">
                <button>NEXT</button>
            </Link>
        </>
    );
}

export default Review;