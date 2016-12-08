/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="../../../../typings/app.d.ts"/>

namespace security.registration {
    import layout = common.layouts.anonymous;

    @Page({
        selector: 'registration'
    }, {
            path: '/registration',
            parent: layout.name
        })
    export class RegistrationPage implements ng.IComponentController {
        public captchaResponse: string;
        public strength: string = '100';
        public password: string;
        public confirmPassword: string;
        public innerClass: string;
        public outerClass: string;
        public lengthOk: boolean;
        public min1Upper: boolean;
        public min1lower: boolean;
        public min1number: boolean;
        public min1splctr: boolean;
        public noSpaces: boolean;
        public isnewpassword: boolean;
        public passwordsMatch: boolean = false;
        public errorUser: boolean = false;
        public username: string;
        public icon: boolean;
        /*  @ngInject */
        constructor(private $state: ng.ui.IStateService, private $scope: IScope) {
            // an object where gre promise and widget id will be contained
            $scope.info = {};

            $scope.$on('login.response', () => {
                // console.log('from main registration', $scope.response);// response of recaptcha box
            });

            $scope.$on('response', () => {
                // console.log('from response', $scope.response);               // resposne of recaptcha box
            });

            $scope.$on('info', () => {
                $scope.info.promise.then((data: string) => {
                    // console.log($scope.info.widgetId);      // widget id of gre instance
                });
            });
        }
        public passwordMatch = () => {
            if (!angular.equals(this.password, this.confirmPassword)) {
                this.passwordsMatch = true;
            } else {
                this.passwordsMatch = false;
            }
        }
        public validateUserName(): boolean {
            if ('firozpasha' === this.username) {
                // alert('User name is available');
                this.errorUser = false;
            } else if (undefined === this.username) {
                this.errorUser = false;
            } else {
                this.errorUser = true;
            }
            return this.errorUser;
        }
        public minLengthCheck(): boolean {
            if ('firozpasha' === this.username) {
                this.errorUser = false;
                this.icon = true;
                //    alert('Focus out and name length is '+this.username.length);
                return this.errorUser;
            } else {
                this.errorUser = true;
                this.icon = false;
                return this.errorUser;
            }
        }
        public focus() {
            //    alert('User name  '+this.username);
            if (undefined === this.username && this.minLengthCheck() && this.validateUserName()) {
                this.errorUser = true;
            }
            if (this.minLengthCheck() && this.validateUserName()) {
                this.errorUser = true;
            }
            if (this.validateUserName()) {
                this.errorUser = true;
            } else {
                this.errorUser = false;
            }
        }
        public focusBlank() {
            if ('' === this.username || undefined === this.username) {
                this.errorUser = false;
                //  this.icon = true;
            }
        }
        public RegisterUser() {
            if (this.username === 'firozpasha') {
                alert('Welcome James! You Have successfully Registered!');
            }
        }
    }

    interface IScope extends ng.IScope {
        info: {
            promise?: ng.IPromise<string>;
            widgetId?: string;
        };
        response: string;
    }
}
