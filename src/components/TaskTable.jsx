


const tasks = [
  {
    title: "Design the landing page",
    project: "Website Redesign",
    priority: "High",
    status: "In Progress",
    due: "Oct 27, 2026",
  },
  {
    title: "Build authentication UI",
    project: "TaskFlow",
    priority: "High",
    status: "In Progress",
    due: "Oct 28, 2026",
  },
  {
    title: "Write project documentation",
    project: "Portfolio",
    priority: "Medium",
    status: "To Do",
    due: "Oct 30, 2026",
  },
  {
    title: "Review responsive layout",
    project: "Website Redesign",
    priority: "Low",
    status: "Completed",
    due: "Oct 24, 2026",
  },
];

function TaskTable() {
  return (
    <section className="task-section">
      <div className="section-header">
        <div>
          <h2>Recent Tasks</h2>
          <p>Keep track of your latest work.</p>
        </div>

        <button className="secondary-button">View all →</button>
      </div>

      <div className="table-wrapper">
        <table className="task-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Due Date</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task.title}>
                <td>
                  <strong>{task.title}</strong>
                  <span className="project-name">{task.project}</span>
                </td>

                <td>
                  <span
                    className={`priority ${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>
                </td>

                <td>
                  <span
                    className={`status ${task.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {task.status}
                  </span>
                </td>

                <td className="due-date">{task.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TaskTable;
