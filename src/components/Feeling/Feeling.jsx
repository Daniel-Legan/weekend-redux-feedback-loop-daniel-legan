import { Link } from 'react-router-dom';

function Feeling() {
    return (
        <>
            <h1>HOW ARE YOU FEELING?</h1>
            <Link to="/understanding">
                <button>START</button>
            </Link>
        </>
    );
}

export default Feeling;

