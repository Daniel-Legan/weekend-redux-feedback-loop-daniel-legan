import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function Admin() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
            .then((response) => {
                dispatch({
                    type: 'SET_FEEDBACK',
                    payload: response.data
                });
            })
            .catch(err => console.error('GET /feedback', err));
    };

    const feedback = useSelector(store => store.feedback);
    console.log(feedback);

    // todo: break feedback into feedbackList and feedbackItem and add conditional rendering to each item
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Flagged</th>
                </tr>
            </thead>
            <tbody>
                {feedback.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.feeling}</td>
                            <td>{item.understanding}</td>
                            <td>{item.support}</td>
                            <td>{item.comments}</td>
                            <td>{item.flagged}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default Admin;