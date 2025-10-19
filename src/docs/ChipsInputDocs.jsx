import DocsLayout from "./DocsLayout";
import ChipsInput from "../components/ChipsInput/ChipsInput";

const ChipsInputDocs = () => {
  const usageCode = `
import ChipsInput from './ChipsInput';

function Example() {
  return <ChipsInput />;
}
`;

  const examplesCode = `
// Example: Adding and removing chips
// Type a word and press Enter to create a chip.
// Click the 'X' button to remove it.
<ChipsInput />
`;

  return (
    <DocsLayout
      title="Chips Input"
      subtitle="A simple input that lets users add and remove text items as chips."
      preview={<ChipsInput />}
      usageCode={usageCode}
      examplesCode={examplesCode}
      apiData={[]} // No props for now
    />
  );
};

export default ChipsInputDocs;
