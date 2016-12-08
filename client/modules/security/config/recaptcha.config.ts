/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="../../../../typings/app.d.ts"/>

namespace security.config {
    securityModule.config(($grecaptchaProvider: grecaptcha.IGRecaptchaProvider, config: app.IConfig) => {
        $grecaptchaProvider.set({
            sitekey: config.recaptcha.sitekey,
            theme: 'Light',
            type: 'image',
            size: 'NORMAL',
            tabindex: 0,
            languageCode: 'en',
            onLoadMethodName: 'onRecaptchaApiLoaded',

            callback: [
                (res: string) => {
                    return res;
                },
                (res: string) => {
                    res += 'suffix';
                    return res;
                }
            ],

            'expired-callback': () => {
                //
            },
        });
    });
}
