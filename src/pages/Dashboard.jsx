


import Topbar from "../components/Topbar";
import Welcome from "../components/Welcome";
import StatCard from "../components/StatCard";
import TaskTable from "../components/TaskTable";

function Dashboard() {
  return (
    <main className="main-content">
      <Topbar />

      <div className="dashboard-content">
        <Welcome />

        <section className="stats-grid">
          <StatCard
            title="Total Tasks"
            value="24"
            description="Across all your projects"
            icon="▦"
            color="blue"
          />

          <StatCard
            title="In Progress"
            value="08"
            description="Tasks currently underway"
            icon="◷"
            color="orange"
          />

          <StatCard
            title="Completed"
            value="16"
            description="Tasks successfully finished"
            icon="✓"
            color="green"
          />
        </section>

        <TaskTable />
      </div>
    </main>
  );
}

export default Dashboard;
