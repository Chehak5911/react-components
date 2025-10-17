import { useParams } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import './componentPage-styles.css';
import Footer from "../../components/Footer/Footer";

const componentsMap = {
  
};

const ComponentPage = () => {
  const { componentName } = useParams();
  const DocComponent = componentsMap[componentName.toLowerCase()];
  return (
    <div className="component-page">
      <Header />
      <SideBar activeComponent={componentName} />
      {
        DocComponent && <DocComponent />
      }
      <Footer />
    </div>
  )
}

export default ComponentPage;