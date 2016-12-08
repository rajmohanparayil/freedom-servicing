/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="../../../../typings/app.d.ts"/>

namespace misc.contact {
    import layout = common.layouts.main;

    @Page({
        selector: 'contact'
    }, {
        path: '/contact',
        parent: layout.name
    })
    export class ContactPage implements ng.IComponentController {
    }
}
