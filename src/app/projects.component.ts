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
                <a class="projects-link">
                    <div class="caption">
                        <div class="caption-content">
                        <img src="/../assets/img/SFVlogo.png" class="img-responsive" alt="Street Fighter Frame App">
                        </div>
                    </div>
                </a>
            </div>
            <div>
                <div class="col-sm-4 portfolio-item">
                    <a class="projects-link">
                        <div class="caption">
                            <div class="caption-content">
                            </div>
                        </div>
                        <img src="/../assets/img/tek7.png" class="img-responsive" alt="Tekken Tournament Organizer">
                    </a>
                </div>
            </div>
        </div>
    </div>
    `,
    styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {

}