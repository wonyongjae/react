import React, { useState } from 'react';
import '../App.css';

const content = [
    {
        // id: "1",
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        // id: "2",
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    },
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

const UseTabs = () => {
    const { currentItem, changeItem } = useTabs(0, content);

  return (
      <div className="App">
          <h1>Hello</h1>
          {content.map(
            (section, index) => 
            <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
          )}
          <div>{currentItem.content}</div>
      </div>
  );
}

export default UseTabs;