import buttonsImg from '../assets/images/component-buttons.jpg';
import cardsImg from '../assets/images/component-cards.jpg';
import accordionImg from '../assets/images/component-accordion.jpg';
import { TfiLayoutAccordionMerged } from "react-icons/tfi";
import { IoIosRadioButtonOff } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlinePowerInput } from "react-icons/md";


export const components = [
  {
    id: 1,
    image: buttonsImg,
    title: "Buttons",
    description: "A collection of customizable button styles for various actions.",
    category: "UI",
    icon: IoIosRadioButtonOff 
  },
  {
    id: 2,
    image: cardsImg,
    title: "Cards",
    description: "Versatile card components for displaying content and actions.",
    category: "UI",
    icon: CiCreditCard1 
  },
  {
    id: 3,
    image: accordionImg,
    title: "Accordion",
    description: "A collapsible content container for organizing information.",
    category: "UI",
    icon: TfiLayoutAccordionMerged 
  },
  {
    id: 4,
    image: buttonsImg,
    title: "ChipsInput",
    description: "Accessible and customizable modal dialogs for focused user interaction.",
    category: "UI", 
    icon: MdOutlinePowerInput 
  },
];