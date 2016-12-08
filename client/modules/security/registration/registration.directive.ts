/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="../../../../typings/app.d.ts"/>
namespace security.registartion {
    securityModule.directive('fsSpecialChar', [() =>
        ({
            link: (scope: ng.IScope, elem: JQuery, attrs: ng.IAttributes): void => {
                //    alert('Char');
                 elem.bind('keypress', (event) => {
                    if (event.which === 8) {  // Back space button to be functional in Mozilla.
                       return true;
                    }
                    let regex = new RegExp(attrs['fsSpecialChar']);
                    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    if (!regex.test(key)) {
                        event.preventDefault();
                        return false;
                    }
                 });
            }
        })
    ]);
}
