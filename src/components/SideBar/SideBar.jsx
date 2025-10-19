import { useNavigate } from "react-router-dom";
import { components } from "../../data/components.jsx";
import "./sideBar-styles.css";

const SideBar = ({ activeComponent }) => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Components</h2>
        <p className="sidebar-subtitle">React Library</p>
      </div>

      <nav className="sidebar-nav">
        {components.map((component) => {
          const Icon = component.icon
          const isActive = activeComponent?.toLowerCase() === component.title.toLowerCase();

          return (
            <button
              key={component.id}
              className={`sidebar-item ${isActive ? "sidebar-item-active" : ""}`}
              onClick={() => navigate(`/components/${component.title.toLowerCase()}`)}
            >
              <Icon className="sidebar-icon" size={20} />
              <span className="sidebar-label">
                {component.title.charAt(0).toUpperCase() + component.title.slice(1)}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideBar;
