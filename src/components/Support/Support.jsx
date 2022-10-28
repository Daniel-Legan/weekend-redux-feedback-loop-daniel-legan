import { Link } from 'react-router-dom';

function Support() {
    return (
        <>
            <h1>SUPPORT!</h1>
            <Link to="/comments">
                <button>NEXT</button>
            </Link>
        </>
    );
}

export default Support;