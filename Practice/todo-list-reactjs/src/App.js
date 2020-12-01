import React from 'react'
import TodoItem from './Components/TodoItem';
import TrafficLight from './Components/TrafficLight';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      { title: 'Go to the market', isComplete: true },
      { title: 'Go shopping', isComplete: false },
      { title: 'Play sport', isComplete: true }
    ]

    this.changeState = this.changeState.bind(this)
  }

  changeState() {
    console.log('changing....')
    if (this.state.isComplete) {
      this.setState({ isComplete: false })
    } else {
      this.setState({ isComplete: true })
    }
  }

  render() {
    if (this.state.length > 0) {
      return (
        <div>
          {
            this.state.map((item, index) =>
              <TodoItem
                key={index}
                item={item}
                onClick={this.changeState}
              />)
          }
        </div>
      )
    } else {
      return 'Nothing here'
    }
    // return (
    //   <div>
    //     <TrafficLight />
    //   </div>
    // )
  }
}

export default App;
