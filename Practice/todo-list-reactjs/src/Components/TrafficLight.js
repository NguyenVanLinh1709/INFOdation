import React from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: RED
        }

        setInterval(() => {
            this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            })
        }, 1000);
    }

    getNextColor(color) {
        switch (color) {
            case RED:
                return YELLOW;
            case YELLOW:
                return GREEN;
            default:
                return RED;
        }
    }

    render() {
        return (
            <div className='TracfficLight'>
                <div className={classNames({ active: this.state.currentColor === RED })}></div>
                <div className={classNames({ active: this.state.currentColor === YELLOW })}></div>
                <div className={classNames({ active: this.state.currentColor === GREEN })}></div>
            </div>
        )

    }
}

export default TrafficLight;