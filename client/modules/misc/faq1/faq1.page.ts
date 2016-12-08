/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="../../../../typings/app.d.ts"/>

namespace misc.faq1 {
    import layout = common.layouts.anonymous;

    @Page({
        selector: 'faq1'
    }, {
            path: '/faq1',
            parent: layout.name
        })
    export class FAQ1 implements ng.IComponentController {
        public LoadFAQ(): void {
            window.location.href = 'http://localhost:7709/faq2';
        }
    }
}
