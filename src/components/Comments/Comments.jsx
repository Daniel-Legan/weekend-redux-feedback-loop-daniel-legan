import { Link } from 'react-router-dom';

function Comments() {
    return (
        <>
            <h1>COMMENTS!</h1>
            <Link to="/review">
                <button>NEXT</button>
            </Link>
        </>
    );
}

export default Comments;