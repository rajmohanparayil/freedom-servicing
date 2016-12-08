/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="../../../../typings/app.d.ts"/>

namespace security.login {
    import layout = common.layouts.anonymous;

    @Page({
        selector: 'ssnloannumber'
    }, {
            path: '/ssnloannumber',
            parent: layout.name
        })
    export class SSNLoanNumber implements ng.IComponentController {
        public ssnValid: boolean = false;
        public showLoanNumber: boolean = false;
        public loanNumberValid: boolean = false;
        public loannumber: string;
        public ssn1: string;
        public ssn2: string;
        public ssn3: string;
        public enableNextBtn: boolean = false;

        /*  @ngInject */
        constructor(private $state: ng.ui.IStateService) {
        }
        public checklength() {
            if (this.ssn1.length < 3 && this.ssn2.length < 2 && this.ssn3.length < 4) {
                this.ssnValid = true;
                this.showLoanNumber = false;
                this.enableNextBtn = false;
            }
            if (angular.equals(this.ssn1, '123') && angular.equals(this.ssn2, '45')
                && angular.equals(this.ssn3, '6789')) {
                //    alert('1ok');
                this.ssnValid = false;
                this.showLoanNumber = true;
                this.enableNextBtn = true;
            } else {
                this.ssnValid = true;
                this.showLoanNumber = false;
                this.enableNextBtn = false;
            }
        }

        public checkloannumber() {
            if (angular.equals(this.loannumber, '12345678912345678912')) {
                this.loanNumberValid = false;
                window.location.href = 'http://localhost:7709/registration';
            } else {
                this.loanNumberValid = true;
            }
        }

    }

}
