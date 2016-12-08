/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="../../../../typings/app.d.ts"/>

namespace security.config {
    const authInjectorName: string = 'authInjector';

    securityModule.factory(authInjectorName, ['authState', (authState: models.AuthState) => {
        let authInjector: ng.IHttpInterceptor = {
            request: (config: ng.IRequestConfig) => {
                //If the user is authenticated, set the request header accordingly
                if (authState.isAuthenticated()) {
                    config.headers['authorization'] = `bearer ${authState.token}`;
                }
                return config;
            }
        };
        return authInjector;
    }]);

    securityModule.config(['$httpProvider', ($httpProvider: ng.IHttpProvider) => {
        $httpProvider.interceptors.push(authInjectorName);
    }]);
}
