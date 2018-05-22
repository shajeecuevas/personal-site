import { Component } from '@angular/core';

@Component({
    selector: 'projects-component',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2> Projects </h2>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 portfolio-item">
                <div class="caption">
                    <div class="caption-content">
                    </div>
                </div>
                <img src="/../../img/tek7.png" class="img-fluid" alt="Responsive image">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 portfolio-item">
                <div class="caption">
                    <div class="caption-content">
                    </div>
                </div>
                <img src="/../img/SFVlogo.png" alt="Street Fighter Frame App">
            </div>
        </div>
    </div>
    `,
    styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {

}