/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="../../../../typings/app.d.ts"/>

namespace misc.faq {
    import layout = common.layouts.anonymous;

    @Page({
        selector: 'faq2'
    }, {
            path: '/faq2',
            parent: layout.name
        })
    export class FaqPage implements ng.IComponentController {
    }
}
