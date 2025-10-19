import { useParams } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AccordionDocs from "../../docs/AccordionDocs";
import ChipsInputDocs from "../../docs/ChipsInputDocs";
import { components } from "../../data/components";
import './componentPage-styles.css';

const componentsMap = {
  accordion : AccordionDocs,
  chipsInput : ChipsInputDocs,
};

const ComponentPage = () => {
  const { componentName } = useParams();
  const DocComponent = componentsMap[componentName];
  return (
    <div className="component-page">
      <Header availableComponents={components} />
        <div className="component-page-container">
          <SideBar activeComponent={componentName} />
          {
            DocComponent && <DocComponent />
          }
        </div>
      <Footer />
    </div>
  )
}

export default ComponentPage;