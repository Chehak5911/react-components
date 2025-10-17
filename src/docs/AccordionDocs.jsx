import { useState } from 'react';
import Accordion from '../components/Accordion/Accordion';
import {items} from '../data/items';
import './styles.css';

const AccordionDocs = () => {
  const [activeTab, setActiveTab] = useState('usage');


  return (
    <div className="docs-container">
      <div className="docs-header">
        <h1>Accordion</h1>
        <p className="docs-subtitle">A collapsible content container for organizing information.</p>
      </div>

      <div className="docs-content">
        <div className="docs-preview-section">
          <div className="docs-preview-box">
            <Accordion items={items} />
          </div>
        </div>
      </div>

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

        <div className="docs-tab-content">
          {activeTab === 'usage' && (
            <>
              <div className="docs-code-section">
                <h3>Basic Usage</h3>
                <pre className="code-block">
                  <code>{`const items = [
                  { title: 'Item 1', content: 'Content 1' }, 
                  { title: 'Item 2', content: 'Content 2' }
              ];

                <Accordion props={{ items }} />`}</code>
                </pre>
              </div>
            </>
          )}

          {activeTab === 'examples' && (
            <div className="docs-code-section">
              <pre className="docs-code-block">
                <code>{`const faqItems = [
  {
    title: 'How do I get started?',
    content: 'Simply install the package and import the components you need.'
  },
  {
    title: 'Is it customizable?',
    content: 'Yes, you can customize styles using CSS or props.'
  }
];

<Accordion props={{ items: faqItems }} />`}</code>
                <button className="docs-copy-btn">📋</button>
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
                  <tr>
                    <td>items</td>
                    <td>Array</td>
                    <td>[]</td>
                    <td>Array of objects with title and content properties</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccordionDocs;
