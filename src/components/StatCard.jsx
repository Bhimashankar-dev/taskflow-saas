


function StatCard({ title, value, description, icon, color }) {
  return (
    <article className="stat-card">
      <div className="stat-card-top">
        <div className={`stat-icon ${color}`}>{icon}</div>
        <span className="stat-menu">•••</span>
      </div>

      <p className="stat-title">{title}</p>
      <h2>{value}</h2>
      <p className="stat-description">{description}</p>
    </article>
  );
}

export default StatCard;
