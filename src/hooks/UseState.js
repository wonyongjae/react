import React, { useState } from 'react';
import '../App.css';

// new ver // component
const UseState = () => {
  const [item, setItem] = useState(2);
  const increamentItem = () => setItem(item + 1);
  const decreamentItem = () => setItem(item - 1);

  return (
      <div className="App">
          <h1>Hello {item}</h1>
          <h2>Start editing to see some magic happen!</h2>
          <button onClick={increamentItem}>increamentItem</button>
          <button onClick={decreamentItem}>decreamentItem</button>
      </div>
  );
}

// export default UseState;



// old ver // class
class UglyUseState extends React.Component{
    state = {
        item: 1
    }
    render(){
        const { item } = this.state;
        return (
            <div className="App">
                <h1>Hello {item}</h1>
                <h2>Start editing to see some magic happen!</h2>
                <button onClick={this.increamentItem}>increamentItem</button>
                <button onClick={this.decreamentItem}>decreamentItem</button>
            </div>
        );
    }
    increamentItem = () => {
        this.setState(state => {
            return {
                item: state.item + 1
            };
        });
    };
    decreamentItem = () => {
        this.setState(state => {
            return {
                item: state.item - 1
            };
        });
    };
}

export default UglyUseState;