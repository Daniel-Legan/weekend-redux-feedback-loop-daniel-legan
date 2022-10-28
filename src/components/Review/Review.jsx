import { Link } from 'react-router-dom';

function Review() {
    return (
        <>
            <h1>REVIEW!</h1>
            <Link to="/success">
                <button type="submit">SUBMIT</button>
            </Link>
        </>
    );
}

export default Review;