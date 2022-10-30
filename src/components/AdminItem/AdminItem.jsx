function AdminItem({ updateFlagged, deleteFeedback, item }) {
    return (
        <tr key={item.id}>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td className="review">
                {/* renders checkbox with flagged boolean result from database */}
                <input className="checkbox" defaultChecked={item.flagged} onClick={() => { updateFlagged(item.id) }} type="checkbox"></input>
                <span className="checkmark"></span>
            </td>
            <td className="close">
                <span onClick={() => { deleteFeedback(item.id) }}>{"\u00D7"}</span>
            </td>
        </tr>
    );
}

export default AdminItem;