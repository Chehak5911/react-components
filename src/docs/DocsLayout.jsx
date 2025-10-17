import { useState } from 'react';
import './styles.css';

const DocsLayout = ({ 
  title, 
  subtitle, 
  preview, 
  usageCode, 
  examplesCode, 
  apiData 
}) => {
  const [activeTab, setActiveTab] = useState('usage');

  return (
    <div className="docs-container">
      {/* Header Section */}
      <div className="docs-header">
        <h1>{title}</h1>
        <p className="docs-subtitle">{subtitle}</p>
      </div>

      {/* Preview Section */}
      <div className="docs-content">
        <div className="docs-preview-section">
          <div className="docs-preview-box">
            {preview}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="docs-tabs-container">
        <div className="docs-tabs">
          <button 
            className={`docs-tab ${activeTab === 'usage' ? 'active' : ''}`}
            onClick={() => setActiveTab('usage')}
          >
            Usage
          </button>
          <button 
            className={`docs-tab ${activeTab === 'examples' ? 'active' : ''}`}
            onClick={() => setActiveTab('examples')}
          >
            Code Example
          </button>
          <button 
            className={`docs-tab ${activeTab === 'api' ? 'active' : ''}`}
            onClick={() => setActiveTab('api')}
          >
            Props
          </button>
        </div>

        {/* Tab Content */}
        <div className="docs-tab-content">
          {activeTab === 'usage' && (
            <div className="docs-code-section">
              <h3>Basic Usage</h3>
              <pre className="docs-code-block">
                <code>{usageCode}</code>
              </pre>
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="docs-code-section">
              <h3>Example</h3>
              <pre className="docs-code-block">
                <code>{examplesCode}</code>
              </pre>
            </div>
          )}

          {activeTab === 'api' && (
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
        </div>
      </div>
    </div>
  );
};

export default DocsLayout;
