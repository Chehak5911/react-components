import DocsLayout from '../docs/DocsLayout';
import Accordion from '../components/Accordion/Accordion';
import { items } from '../data/items';

const AccordionDocs = () => {
  const usageCode = `const items = [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' }
  ];

  <Accordion items={items} />`;

  const examplesCode = `const faqItems = [
    { title: 'How do I get started?', content: 'Simply install and import the component.' },
    { title: 'Is it customizable?', content: 'Yes! You can style it with CSS or props.' }
  ];

  <Accordion items={faqItems} />`;

  const apiData = 
  [
    { name: 'items', type: 'Array', default: '[]', description: 'Array of { title, content } objects.' },
  ];

  return (
    <DocsLayout
      title="Accordion"
      subtitle="A collapsible content container for organizing information."
      preview={<Accordion items={items} />}
      usageCode={usageCode}
      examplesCode={examplesCode}
      apiData={apiData}
    />
  );
};

export default AccordionDocs;
