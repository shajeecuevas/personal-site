import { Component } from '@angular/core';

@Component({
    selector: 'header-component',
    template: `
    <div class="nav-background nav nav-pills navbar-fixed-top">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu
                </button>
                <a class="navbar-brand" href="#page-top">Shajee Cuevas</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav  nav-pills navbar-right">
                        <li role="presentation" class="page-scroll">
                            <a href="#about">About Me</a>
                        </li>
                        <li role="presentation" class="page-scroll">
                            <a href="#projects">Projects</a>
                        </li>
                        <li role="presentation" class="page-scroll">
                            <a href="#blog">Blog</a>
                        </li>
                    </ul>
            </div>
        </div>
    </div>
    `,
    styleUrls: ['./header.component.less']
})
export class HeaderComponent {

}