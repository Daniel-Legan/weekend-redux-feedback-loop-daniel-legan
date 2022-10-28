import { Link } from 'react-router-dom';

function Comments() {
    return (
        <>
            <h1>ARE THERE ANY COMMENTS YOU WOULD LIKE TO ADD?</h1>
            <form>
                <input type="text" />
                <Link to="/review">
                    <button type="submit">NEXT</button>
                </Link>
            </form>
        </>
    );
}

export default Comments;