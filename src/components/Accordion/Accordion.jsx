
import { useState } from 'react';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import './accordion-styles.css';

const Accordion = ({items}) => {
    
    const [activeIndex, setActiveIndex] = useState(null);

    function handleToggle(index){
        activeIndex===index ? setActiveIndex(null) : setActiveIndex(index)
    }
    
    if(!items || items.length === 0 )
        return <div>No items available</div>
    
    return (
        <div className='accordion'>
            {
                items.map((item, index) => {
                    return (
                        <div key={index} className='accordion-item '>
                            <button
                                className='accordion-title'
                                onClick={()=> handleToggle(index)}
                            >
                                {item.title}
                                { activeIndex === index ? <FaChevronUp /> : <FaChevronDown /> }
                            </button>
                            {
                                activeIndex===index && (
                                    <div className='accordion-content'> {item.content} </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordion;