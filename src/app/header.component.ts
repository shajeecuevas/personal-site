import { Component } from '@angular/core';

@Component({
    selector: 'header-component',
    template: `
    <div id="margin-top">
            <ul class="nav nav-pills navbar-fixed-top nav-background">
                <a> Shajee Cuevas </a>
                <ul class="nav  nav-pills navbar-right">
                    <li role="presentation" class="active">
                        <a href="#">About Me</a>
                    </li>
                    <li role="presentation">
                        <a href="#">Projects</a>
                    </li>
                    <li role="presentation">
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </ul>
    </div>
    `,
    styleUrls: ['./header.component.less']
})
export class HeaderComponent {

}