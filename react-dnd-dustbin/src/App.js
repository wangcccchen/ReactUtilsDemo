import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend';

import Dustbin from './components/Dustbin';
import Dustbin2 from './components/Dustbin2';
import Box from './components/Box';


// const box = ["Glass", "Banana","Paper"];
// 将 HTMLBackend 作为参数传给 DragDropContext
@DragDropContext(HTMLBackend)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        box: ["Glass", "Banana","Paper"],
        tagValue1: [],
        tagValue2: [],
    };
  }


  handleEndResult = (name,bin) => {
    // console.log(res);
    const { tagValue1, tagValue2 } = this.state;
    bin  === "dustbin1" ? this.setState({
      tagValue1: [name,...tagValue1]
    }) : this.setState({
      tagValue2: [name,...tagValue2]
    })
  }

  handleUpdateBox = (param) => {
    const {box} = this.state;
    this.setState({
      box: param,
    });
  }

  render() {
    const { tagValue1, tagValue2, box } = this.state;
    return (
        <div style={{ paddingLeft: 200, paddingTop: 50, display: 'flex' }}>
            <div style={{ overflow: 'hidden', clear: 'both', height: '500px',width: '200px', border: '1px solid black' }}>
              {box.map(item => 
                <Box name={item} box={box} handleEndResult={this.handleEndResult} handleUpdateBox={this.handleUpdateBox}/>
              )}
            </div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              <Dustbin key="1" tagValue={tagValue1}/> 
              <Dustbin2 key="2" tagValue={tagValue2}/>
            </div>
        </div>
    );
  }
}

export default App;
