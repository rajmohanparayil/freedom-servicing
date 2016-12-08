/// <reference path="../../../../../typings/index.d.ts"/>
/// <reference path="../../../../../typings/app.d.ts"/>

namespace common.components.anonymousHeader {
    @Component({
        selector: 'fs-anonymous-header',
        templateUrl: '/components/anonymous-header/anonymous-header.html'
    })
    export class AnonymousHeaderComponent implements ng.IComponentController {
public heading: string;
          constructor() {
              this.heading = 'Login';
          }
    }
}
