/// <reference path="../../../../../typings/index.d.ts"/>
/// <reference path="../../../../../typings/app.d.ts"/>

namespace security.registration.passwordStrength {
    type PasswordStatus = 'danger' | 'warning' | 'success' | 'warning';

    @Component({
        selector: 'fs-password-strength',
        templateUrl: 'registration/password-strength/password-strength.html'
    })
    export class PasswordStrengthComponent implements ng.IComponentController {
        @bind.oneWay()
        public password: string;

        public passwordRemarks: string;
        public remarksColor: string;
        public passwordStatus: PasswordStatus;
        public progressWidth: number;

        public minLength: boolean;
        public specialCharacter: boolean;
        public oneUpperCase: boolean;
        public noSpace: boolean;
        public oneLowerCase: boolean;
        public notPreviousPassword: boolean;
        public oneDigit: boolean;

        /* @ngInject */
        constructor(private $scope: ng.IScope) {
        }

        public $onInit() {
            this.$scope.$watch('fsPasswordStrength.password', (newValue: string) => {
                this.validatePassword(newValue);
            });
        }

        public validatePassword(password: string) {
            let score = 0;
            let length = (password || '').length;
            this.minLength = false;
            this.oneDigit = false;
            this.specialCharacter = false;
            this.noSpace = false;
            this.oneUpperCase = false;
            this.oneLowerCase = false;
            this.notPreviousPassword = false;
            this.passwordStatus = 'danger';
            this.progressWidth = 0;
            this.passwordRemarks = '';
            if (password && password.length >= 8) {
                score = score + 15;
                this.minLength = true;
            }
            if (password && /(?=.*\d)/.test(password)) {
                score = score + 15;
                this.oneDigit = true;
            }
            if (password && /(?=.*\W)/.test(password)) {
                score = score + 15;
                this.specialCharacter = true;
            }
            if (password && /^\S*$/.test(password)) {
                score = score + 15;
                this.noSpace = true;
            }
            if (password && /(?=.*[A-Z])/.test(password)) {
                score = score + 15;
                this.oneUpperCase = true;
            }
            if (password && /(?=.*[a-z])/.test(password)) {
                score = score + 10;
                this.oneLowerCase = true;
            }
            if (password && password !== 'Welcome@123') {
                score = score + 15;
                this.notPreviousPassword = true;
            }
            if (length && score < 50) {
                this.update('Very Weak', 'ff0000', 'danger', 25);
            } else if (score >= 50 && score < 75) {
                this.update('Weak', 'ff0000', 'danger', 50);
            } else if (score >= 75 && score <= 90) {
                this.update('Medium', 'ff8c00', 'warning', 75);
            } else if (score > 90) {
                this.update('Strong', '5cb85c', 'success', 100);
            }
        }

        private update(remarks: string, color: string, status: PasswordStatus, width: number) {
            this.passwordRemarks = remarks;
            this.remarksColor = color;
            this.passwordStatus = status;
            this.progressWidth = width;
        }
    }
}
