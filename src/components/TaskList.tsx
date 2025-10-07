import { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string, newDescription: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete, onEdit }) => {
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks available. Start by adding one!</p>;
  }

  return (
    <div className="table-container">
      <table className="task-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th style={{ width: "180px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id} className={task.completed ? "completed-row" : ""}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                {task.completed ? (
                  <span className="status completed">Completed</span>
                ) : (
                  <span className="status pending">Pending</span>
                )}
              </td>
              <td>
                <button
                  className="btn complete"
                  onClick={() => onToggle(task.id)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="btn edit"
                  onClick={() => {
                    const newTitle = prompt("Edit title:", task.title) || task.title;
                    const newDescription =
                      prompt("Edit description:", task.description) ||
                      task.description;
                    onEdit(task.id, newTitle, newDescription);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn delete"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
