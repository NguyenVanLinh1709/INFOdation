import React from 'react';
import './Content.css';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImg: img1
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentImg: this.getNextImg(this.state.currentImg)
            })
        }, 5000)
    }

    getNextImg(img) {
        switch (img) {
            case img1:
                return img2;
            case img2:
                return img3;
            default:
                return img1;
        }
    }

    render() {
        return (
            <div className='content-container'>
                <img src={this.state.currentImg} alt='img' />
                <div className='know-more'>
                    <h1>Hi! <br />I'm Husky</h1>
                    <button className='btn'>KNOW MORE</button>
                </div>
            </div>
        )
    }
}

export default Content;