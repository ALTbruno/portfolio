import { Component } from "react";
import './About.scss';
import photo from './IMG_20190524_084310.jpg'
export default class About extends Component{

    render(){
        return(
            <>
            <div class="about-section" id="about">
                <div class="profile-photo">
                    <img src={photo}></img>
                </div>
                <div class="about-me-text">
                    <p>
                        Hello there! Eu sou o Bruno, um Desenvolvedor Full Stack em ~desenvolvimento. Gosto de ler e aprender coisas novas, Vamos tomar um café?
                    </p>
                </div>
            </div>
            </>
        )
    }

}