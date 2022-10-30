

function AdminItem({ updateFlagged, deleteFeedback, item }) {
    return (
        <tr key={item.id}>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td onClick={() => { updateFlagged(item.id) }}>{(item.flagged === true) ? 'needs review' : 'okay'}</td>
            <td>
                <button onClick={() => { deleteFeedback(item.id) }}>X</button>
            </td>
        </tr>
    );
}

export default AdminItem;