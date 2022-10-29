import { useEffect } from 'react';
import axios from 'axios';

function Admin() {

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
            .then((response) => {
                console.log(response);
            })
            .catch(err => console.error('GET /feedback', err));
    };
    
    return (
        <>
            <h1>Admin Page</h1>
        </>
    );
}

export default Admin;