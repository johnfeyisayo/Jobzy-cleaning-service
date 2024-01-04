import React from 'react';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const FAQ = () => {
  const [accordionItems, setAccordionItems] = useState([
    {
      id: 1,
      question: 'What cleaning services do you offer?',
      answer:
        'If your tutor allows file uploads as a submission type, you can upload a file. lorem ipsum dolor sit',
      isActive: false
    },
    {
      id: 2,
      question: 'Are your cleaners experienced and trustworthy?',
      answer: 'If your tutor allows file uploads as a submission type, you can upload a file...',
      isActive: false
    },
    {
      id: 3,
      question: 'Do I need to provide cleaning supplies?',
      answer: " No you don't have to. All cleaning supplies will be provided by us",
      isActive: false
    },
    {
      id: 4,
      question: 'How do I schedule a cleaning service?',
      answer: 'Check our booking page',
      isActive: false
    },
    {
      id: 5,
      question: 'Are your cleaning services insured',
      answer: 'Yes they are',
      isActive: false
    }
  ]);
  const handleAccordionClick = (itemID) => {
    const updatedAccordionItems = accordionItems.map((item) => {
      if (item.id === itemID) {
        return {
          ...item,
          isActive: !item.isActive
        };
      } else {
        return {
          ...item,
          isActive: false
        };
      }
    });
    setAccordionItems(updatedAccordionItems);
  };
  return (
    <div className="text-center  flex flex-col font-inter   justify-center md:w-[760px] p-2 md:ml-[300px]">
      {accordionItems.map((item) => (
        <div className=" p-2" key={item.id}>
          <div
            className=" border-b-2 border-black   text-left"
            onClick={() => handleAccordionClick(item.id)}>
            <div className="  flex flex-row justify-between border-y-2 ">
              <h3 className=" h-10 pb-2   text-xs md:text-base">{item.question}</h3>

              {item.isActive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            {item.isActive && (
              <div className="">
                <p className="pb-2  md:text-base text-xs text-[#828181]">{item.answer}</p>
              </div>
            )}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
