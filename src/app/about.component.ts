import { Component } from '@angular/core';

@Component({
    selector: 'about-component',
    template: `
    <div class="col-lg-12 margin-top">
        <div class="intro-text">
            <h1 class="name">Welcome!</h1>
            <img class="img-responsive img-circle" src="/../assets/img/croppedPic.png" alt="Akuma">
            <span class="skills">Web Developer - Tech Enthusiast - Gamer</span>
            <hr class="star-light">
        </div>
    </div>
    <h2> Skills </h2>
    <div>
        <p>HTML / CSS / Javascript / React / Angular 2 / Node.js / Jquery / SQL </p>
    </div>
    <h2> Contact Me </h2>
    <p>
        <a class="notransition" href="mailto:shajeecuevas@gmail.com" target="_blank">shajeecuevas@gmail.com</a>    
    </p>
    `,
    styleUrls: ['./about.component.less']
})
export class AboutComponent {

}