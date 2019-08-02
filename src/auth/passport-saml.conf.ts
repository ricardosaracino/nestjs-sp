import * as fs from 'fs';

/**
 *  https://github.com/bergie/passport-saml
 */
export const samlPassportConf = {
    issuer: 'nestjs-sp-signed-0070', // match metadata entityID

    identifierFormat: 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent',

    callbackUrl: 'http://localhost:3000/auth/login/callback',
    entryPoint: 'http://idp5.canadacentral.cloudapp.azure.com/opensso/SSORedirect/metaAlias/idp',
    logoutUrl: 'http://idp5.canadacentral.cloudapp.azure.com/opensso/IDPSloRedirect/metaAlias/idp',

    privateCert: fs.readFileSync('cert/privatekey.pem', 'utf-8'),
    decryptionPvk: fs.readFileSync('cert/privatekey.pem', 'utf-8'),
};
