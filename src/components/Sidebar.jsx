


function Sidebar() {
  const menuItems = [
    { icon: "▦", label: "Dashboard" },
    { icon: "☑", label: "My Tasks" },
    { icon: "▣", label: "Projects" },
    { icon: "⚙", label: "Settings" },
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">T</div>
        <span>TaskFlow</span>
      </div>

      <p className="menu-heading">WORKSPACE</p>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <a
            href="#"
            key={item.label}
            className={`nav-item ${index === 0 ? "active" : ""}`}
            onClick={(event) => event.preventDefault()}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <strong>Stay productive!</strong>
          <p>Keep your tasks organized and achieve more every day.</p>
        </div>

        <div className="sidebar-user">
          <div className="avatar">B</div>
          <div>
            <strong>Your Profile</strong>
            <p>Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
