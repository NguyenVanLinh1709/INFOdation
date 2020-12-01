// Mounting
// constructor() - optional, to set up initial state and other initial values
import React from 'react';
import ReactDOM from 'react-dom';
class Constructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    render() {
        return (
            <h4>Demo for constructor {this.state.favoritecolor}</h4>
        );
    }
}

ReactDOM.render(<Constructor />, document.getElementById('constructor'));

// getDerivedStateFromProps() - optional, to set the state object based on the initial props
class DerivedStateFromProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    static getDerivedStateFromProps(props, state) {
        return { favoritecolor: props.favcol };
    }
    render() {
        return (
            <h4>Demo for getDerivedStateFromProps {this.state.favoritecolor}</h4>
        );
    }
}

ReactDOM.render(<DerivedStateFromProps favcol="yellow" />, document.getElementById('getDerivedStateFromProps'));

// render() - required
class _Render extends React.Component {
    render() {
        return (
            <h4>Demo for render</h4>
        )
    }
}
ReactDOM.render(<_Render />, document.getElementById('render'))

// componentDidMount() - optional, where you run statements that requires that the component is already placed in the DOM
class _componentDidMount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'red' }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: 'blue' })
        }, 2000)
    }

    render() {
        return (
            <h4>Demo for componentDidMount {this.state.color}</h4>
        )
    }
}

ReactDOM.render(<_componentDidMount />, document.getElementById('componentDidMount'))

//===================================
//Updating
//getDerivedStateFromProps()
class GetDerivedStateFromProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = { animal: 'cat' }
    }

    static getDerivedStateFromProps(props, state) {
        return { animal: props.anim }
    }

    changeAnimal = () => {
        this.setState({ animal: 'pig' });
    }

    render() {
        return (
            <div>
                <h4>Demo for Updating getDerivedStateFromProps {this.state.animal}</h4>
                <span>cannot change because getDerivedStateFromProps take value from prop of parents</span>
                <br />
                <button type='button' onClick={this.changeAnimal}>Change</button>
            </div>
        )
    }
}

ReactDOM.render(<GetDerivedStateFromProps anim='dog' />, document.getElementById('getDerivedStateFromProps2'))
/*
This example has a button that changes the favorite color to blue,
but since the getDerivedStateFromProps() method is called,
the favorite color is still rendered as yellow
(because the method updates the state
with the color from the favcol attribute).
*/

// shouldComponentUpdate() - specifies whether React should continue with the rendering or not.
class ShouldComponentUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { food: 'rice' }
    }

    shouldComponentUpdate() {
        return true;
    }

    changeFood = () => {
        this.setState({ food: 'noodle' })
    }

    render() {
        return (
            <div>
                <h4>Demo for shouldComponentUpdate with true {this.state.food}</h4>
                <button type='button' onClick={this.changeFood}>changeFood</button>
            </div>
        )
    }
}

ReactDOM.render(<ShouldComponentUpdate />, document.getElementById('shouldComponentUpdate'))

// render()
class Urender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Linh',
            age: 23
        }
    }

    changePeople = () => {
        this.setState({
            name: 'Kieu',
            age: 19
        })
    }

    render() {
        return (
            <div>
                <h4>Demo for Update render {this.state.name} - {this.state.age}</h4>
                <button type='button' onClick={this.changePeople}>changePeople</button>
            </div>
        )
    }
}

ReactDOM.render(<Urender />, document.getElementById('urender'))

// getSnapshotBeforeUpdate() - can take prevert props and state
class GetSnapshotBeforeUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'admin',
            pass: '**'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                user: 'not admin',
                pass: 'not admin pass'
            })
        }, 2000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('div1').innerHTML = 'Before change, user was ' + prevState.user + prevState.pass;
    }

    componentDidUpdate() {
        document.getElementById('div2').innerHTML = 'After update, user is ' + this.state.user + this.state.pass;
    }

    render() {
        return (
            <div>
                <h4>Now user: {this.state.user} - {this.state.pass}</h4>
                <div id='div1'></div>
                <div id='div2'></div>
            </div>
        )
    }
}

ReactDOM.render(<GetSnapshotBeforeUpdate />, document.getElementById('getSnapShot'))

// componentDidUpdate() - called after the component is updated in the DOM.
class ComponentDidUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place: 'Nha Trang'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                place: 'Ninh Hoa'
            }) 
        }, 2000)
    }

    componentDidUpdate() {
        document.getElementById('div').innerHTML = 'After change ' + this.state.place;
    }

    render() {
        return (
            <div>
                <h4>I live in {this.state.place}</h4>
                <div id='div'></div>
            </div>
        )
    }
}

ReactDOM.render(<ComponentDidUpdate />, document.getElementById('component'))

//=================================
//Unmounting
// has only one built-in

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true
        }
    }

    delShow = () => {
        this.setState({
            show: false
        })
    }

    render(){
        let header;
        if (this.state.show){
            header = <Child />
        }
        return(
            <div>
                {header}
                <button type='button' onClick={this.delShow}>Delete Header</button>
            </div>
        )
    }
}

class Child extends React.Component{
    componentWillUnmount(){
        alert ('The component Header is about to be amounted')
    }
    render(){
        return(
            <h4>This is header</h4>
        )
    }
}

ReactDOM.render(<Container />, document.getElementById('remove'))