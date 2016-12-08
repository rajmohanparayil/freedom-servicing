/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="../../../../typings/app.d.ts"/>

namespace security.models {
    @Injectable('authState')
    export class AuthState {
        /**
         * Contains the authentication token of a logged-in user.
         */
        @state.session()
        public token: string;

        /**
         * Returns whether the user is authenticated.
         */
        public isAuthenticated(): boolean {
            // Basic check - just checks that the token is assigned.
            // You can add more checks, such as validating the format of the string.
            return !!this.token;
        }

        public clearToken() {
            this.token = undefined;
        }
    }
}
