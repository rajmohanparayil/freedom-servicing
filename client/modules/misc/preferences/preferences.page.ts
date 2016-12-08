/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="../../../../typings/app.d.ts"/>

namespace misc.preferences {
    import layout = common.layouts.main;

    @Page({
        selector: 'preferences'
    }, {
        path: '/preferences',
        parent: layout.name
    })
    export class PreferencesPage implements ng.IComponentController {
    }
}
