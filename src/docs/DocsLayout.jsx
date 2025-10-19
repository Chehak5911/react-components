import { useState } from "react";
import "./styles.css";

const DocsLayout = ({
  title,
  subtitle,
  preview,
  usageCode,
  examplesCode,
  apiData,
  notes,
}) => {
  // Dynamically show tabs only if data exists
  const availableTabs = [
    usageCode && "usage",
    apiData?.length > 0 && "props",
    examplesCode && "examples",
    notes && "notes",
  ].filter(Boolean);

  const [activeTab, setActiveTab] = useState(availableTabs[0] || "usage");

  const tabLabels = {
    usage: "Usage",
    props: "Props",
    examples: "Examples",
    notes: "Notes",
  };

  return (
    <div className="docs-container">
      {/* Header */}
      <div className="docs-header">
        <h1>{title}</h1>
        <p className="docs-subtitle">{subtitle}</p>
      </div>

      {/* Preview */}
      <div className="docs-content">
        <div className="docs-preview-section">
          <div className="docs-preview-box">{preview}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="docs-tabs-container">
        <div className="docs-tabs">
          {availableTabs.map((tab) => (
            <button
              key={tab}
              className={`docs-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="docs-tab-content">
          {activeTab === "usage" && usageCode && (
            <div className="docs-code-section">
              <h3>Usage</h3>
              <pre className="docs-code-block">
                <code>{usageCode}</code>
              </pre>
            </div>
          )}

          {activeTab === "examples" && examplesCode && (
            <div className="docs-code-section">
              <h3>Examples</h3>
              <pre className="docs-code-block">
                <code>{examplesCode}</code>
              </pre>
            </div>
          )}

          {activeTab === "props" && apiData?.length > 0 && (
            <div className="docs-api-section">
              <h3>Props API</h3>
              <table className="docs-api-table">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {apiData.map((prop, i) => (
                    <tr key={i}>
                      <td>{prop.name}</td>
                      <td>{prop.type}</td>
                      <td>{prop.default}</td>
                      <td>{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "notes" && notes && (
            <div className="docs-notes-section">
              <h3>Notes</h3>
              <p>{notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocsLayout;