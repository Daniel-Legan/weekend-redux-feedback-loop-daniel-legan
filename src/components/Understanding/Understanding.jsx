import { Link } from 'react-router-dom';

function Understanding() {
    return (
        <>
            <h1>HOW WELL DID YOU UNDERSTAND TODAY'S CONTENT?</h1>
            <form>
                <input type="text" />
                <Link to="/support">
                    <button type="submit">NEXT</button>
                </Link>
            </form>
        </>
    );
}

export default Understanding;