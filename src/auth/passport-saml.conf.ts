export const samlPassportConf = {
    issuer: 'nestjs-sp', // match metadata entityID
    callbackUrl: 'http://localhost:3000/auth/login/callback',
    entryPoint: 'http://idp5.canadacentral.cloudapp.azure.com/opensso/SSORedirect/metaAlias/idp',
    logoutUrl: 'http://idp5.canadacentral.cloudapp.azure.com/opensso/IDPSloRedirect/metaAlias/idp',
};
