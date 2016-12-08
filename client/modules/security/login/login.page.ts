/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="../../../../typings/app.d.ts"/>
//declare var grecaptcha: any;
namespace security.login {
    import layout = common.layouts.anonymous;

    @Page({
        selector: 'login'
    }, {
            path: '/',
            parent: layout.name
        })
    export class LoginPage implements ng.IComponentController {
        public captchaResponse: string;
        public userName: string;
        public wpassword: string;
        public storage: string[];
        public count: number = 0;
        //public tokenid: any; commented for now !!!

        public errorMessage: boolean = false;
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

        // public $onInit() {
        //     grecaptcha.render('yourHTMLElementId', {
        //         'sitekey': 'yourSiteKey'
        //     });
        // }
        public validateUser(): void {
            if (this.userName === 'mayanktiwari' && this.wpassword === '1234567') {
                this.errorMessage = false;
                alert('Welcome ! You Have successfully logged in !');
                window.location.href = 'http://localhost:7709/preferences';
            } else if (this.userName === 'jithesh123' && this.wpassword === '111222') {
                this.errorMessage = false;
                alert('Welcome ! You Have successfully logged in !');
                window.location.href = 'http://localhost:7709/preferences';
            } else {
                this.errorMessage = true;
                this.wpassword = '';
                this.count = this.count + 1;
                //alert(this.count);
            }
            if (this.count === 2) {
                //alert('unsuccessful attempts');
                // this.count = 0;
            }
        }
        public RegisterUser(): void {
            window.location.href = 'http://localhost:7709/ssnloannumber';
        }
        public LoadFAQ(): void {
            window.location.href = 'http://localhost:7709/faq1';
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
