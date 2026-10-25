


function Topbar() {
  return (
    <header className="topbar">
      <div className="breadcrumb">
        Workspace <span>/</span> Dashboard
      </div>

      <div className="topbar-actions">
        <label className="search-box">
          <span>⌕</span>
          <input
            type="search"
            placeholder="Search anything..."
            aria-label="Search anything"
          />
          <span className="search-shortcut">/</span>
        </label>

        <button className="icon-button" aria-label="Notifications">
          ♧
          <span className="notification-dot"></span>
        </button>

        <div className="avatar topbar-avatar">B</div>
      </div>
    </header>
  );
}

export default Topbar;
