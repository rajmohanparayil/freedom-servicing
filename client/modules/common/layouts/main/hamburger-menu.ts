/// <reference path="../../../../../typings/index.d.ts"/>
/// <reference path="../../../../../typings/app.d.ts"/>

namespace common.layouts.main {
    commonModule.directive('fsHamburgerMenu', ['$document', ($document: ng.IDocumentService) => ({
        link: (scope: ng.IScope, elem: JQuery, attrs: IAttributes): void => {
            //console.log(attrs.toggleButtonSelector,attrs.toggleClass);
            let onMenuButtonClicked = ($event: Event) => {
                elem.toggleClass(attrs.toggleClass);
                $event.stopPropagation();
            };

            let onDocumentClicked = () => {
                if (elem.hasClass(attrs.toggleClass)) {
                    elem.removeClass(attrs.toggleClass);
                }
            };
            jQuery('.res_nav').click((e: Event) => {
                e.stopPropagation();
            });

            let toggleButton = $(attrs.toggleButtonSelector);
            toggleButton.on('click', onMenuButtonClicked);
            $document.on('click', onDocumentClicked);

            //Clean up events after element has been destroyed.
            scope.$on('$destroy', () => {
                toggleButton.off('click', onMenuButtonClicked);
                $document.off('click', onDocumentClicked);
            });
        }
    })]);

    interface IAttributes extends ng.IAttributes {
        /**
         * Selector for the toggle button
         */
        toggleButtonSelector: string;

        /**
         * CSS class to apply on the element to toggle the hamburger menu.
         */
        toggleClass: string;
    }
}
