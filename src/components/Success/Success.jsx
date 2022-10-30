import { Link } from 'react-router-dom';

function Success() {
    return (
        <section id="reviewSection">
            <h1>Thank You!</h1>
            <Link to="/">
                <button id="successButton">Leave New Feedback</button>
            </Link>
        </section>
    );
}

export default Success;