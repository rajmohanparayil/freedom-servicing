/// <reference path="../../../../../typings/index.d.ts"/>
/// <reference path="../../../../../typings/app.d.ts"/>

namespace common.layouts.anonymous {
    export const name: string = 'anonymous-layout';

    @Layout({name: name})
    export class AnonymousLayout implements ng.IComponentController {
    }
}
