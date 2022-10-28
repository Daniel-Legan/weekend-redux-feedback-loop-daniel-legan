import { Link } from 'react-router-dom';

function Support() {
    return (
        <>
            <h1>HOW WELL DID YOU FEEL SUPPORTED TODAY?</h1>
            <form>
                <input type="text" />
                <Link to="/comments">
                    <button type="submit">NEXT</button>
                </Link>
            </form>
        </>
    );
}

export default Support;