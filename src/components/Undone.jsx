export default function Undone({tasks, handleCheck})
{
    return(
        tasks.filter((task) => !task.done).map((task) => <div><input type="checkbox" checked={task.done} onChange={() => handleCheck(task.id)} />{task.text}</div>)
    )
}