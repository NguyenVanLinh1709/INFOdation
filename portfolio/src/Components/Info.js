import React from 'react';
import avatar from '../img/avatar.jpg';
import facebook from '../img/facebook.png';
import insta from '../img/insta.png';
import inimg from '../img/in.jpg';
import github from '../img/github.png';
import twitter from '../img/twitter.png';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
// import '../../node_modules/font-awesome/css/font-awesome.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './Info.css';

const NAME = 'Husky';
const EMAIL = 'husky123@gmail.com';
const PHONE = '0010010110101';

class Info extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='info'>
                    <img className='avatar' src={avatar} alt='avatar' />
                    <h1>{NAME}</h1>
                    <div className='userInfo'>
                        <i className="fas fa-envelope"></i>
                        <p>{EMAIL}</p>
                    </div>
                    <div className='userPhone'>
                        <i className="fas fa-phone"></i>
                        <p>{PHONE}</p>
                    </div>

                    <div className='intro'>
                        <a className='introduction' href='#'>INTRODUCTION</a>
                        <ul>
                            <li>ABOUT</li>
                            <li>PROJECTS</li>
                            <li>BLOG</li>
                            <li>TIMELINE</li>
                        </ul>
                    </div>

                    <div className='social'>
                        <ul>
                            <li><img src={facebook} alt='' /></li>
                            <li><img src={insta} alt='' /></li>
                            <li><img src={inimg} alt='' /></li>
                            <li><img src={github} alt='' /></li>
                            <li><img src={twitter} alt='' /></li>
                        </ul>
                    </div>
                    <div className='some-infor'>
                        <p>Made by NVL</p>
                        <p>Thanks you for watching</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;