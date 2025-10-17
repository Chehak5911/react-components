import { useParams } from "react-router-dom";

const componentsMap = {
  
};

const ComponentPage = () => {
  const { componentName } = useParams();
  const DocComponent = componentsMap[componentName.toLowerCase()];
  return DocComponent ? <DocComponent /> : <p>Component not found</p>;
}

export default ComponentPage;