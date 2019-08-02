## Generate Metadata

https://www.samltool.com/sp_metadata.php

- Set AuthnRequestsSigned to True

- Set WantAssertionsSigned to True

- Set NameIdFormat to urn:oasis:names:tc:SAML:2.0:nameid-format:persistent

- Set SP X.509 cert from generated

- Paste contents of private key in privatekey.pem file 
 
- Verify cert with `λ openssl x509 -hash -noout -in cert.pem` newlines should be crlf

- Paste Metadata in samlidp Custom Service Providers



## Import a certificate into the truststore  

https://backstage.forgerock.com/knowledge/kb/article/a94909995

/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.212.b04-0.el7_6.x86_64/jre/bin/java

## IDP Metadata

http://idp5.canadacentral.cloudapp.azure.com/opensso/saml2/jsp/exportmetadata.jsp?entityid=


```bash
[root@idp5 spkeys]#  openssl x509 -in x509certificate.cer -text -noout           
Certificate:                                                                     
    Data:                                                                        
        Version: 3 (0x2)                                                         
        Serial Number: 0 (0x0)                                                   
    Signature Algorithm: sha1WithRSAEncryption                                   
        Issuer: C=ca, ST=ON, O=ricardo, CN=nestjs-sp                             
        Validity                                                                 
            Not Before: Jul 31 11:57:55 2019 GMT                                 
            Not After : Jul 28 11:57:55 2029 GMT                                 
        Subject: C=ca, ST=ON, O=ricardo, CN=nestjs-sp                            
        Subject Public Key Info:                                                 
            Public Key Algorithm: rsaEncryption                                  
                Public-Key: (1024 bit)                                           
                Modulus:                                                         
                    00:aa:61:90:27:c7:06:88:51:6f:49:b2:90:b0:0a:                
                    53:d5:02:38:cd:9e:85:19:31:83:7d:31:69:8e:ea:                
                    7d:67:08:ec:51:9f:98:38:c0:86:c8:c8:44:8f:f3:                
                    da:70:e6:7b:6e:9c:e5:bf:d6:b9:f9:c1:e1:85:dd:                
                    4f:9d:d2:41:31:d9:68:1d:bd:4c:e4:6a:38:3a:67:                
                    67:d7:9b:e2:35:7d:c9:8a:2b:ef:c3:51:02:c1:8d:                
                    23:d6:0e:20:d4:5f:c6:44:d0:9a:9e:c4:7e:b5:41:                
                    87:b8:44:4a:0a:f7:3d:39:71:1e:b6:66:12:0f:d6:                
                    30:8f:31:10:11:e3:a5:1c:b5                                   
                Exponent: 65537 (0x10001)                                        
        X509v3 extensions:                                                       
            X509v3 Subject Key Identifier:                                       
                73:92:03:44:8C:43:64:08:7C:7A:34:F2:E2:5E:A6:A4:4C:2F:83:C3      
            X509v3 Authority Key Identifier:                                     
                keyid:73:92:03:44:8C:43:64:08:7C:7A:34:F2:E2:5E:A6:A4:4C:2F:83:C3
                                                                                 
            X509v3 Basic Constraints:                                            
                CA:TRUE                                                          
    Signature Algorithm: sha1WithRSAEncryption                                   
         2e:37:8a:2e:1e:0d:2e:f8:8d:00:0e:99:3b:2a:14:fd:d1:5a:                  
         9b:cc:e2:cc:0a:cd:2a:72:91:ca:3b:48:15:64:3e:27:20:ae:                  
         24:0b:92:60:ca:d0:0b:d2:16:54:71:4b:00:24:60:1a:93:5f:                  
         6b:46:2d:99:66:01:7e:73:42:df:fc:60:3e:e2:c5:52:8f:8b:                  
         f9:be:13:16:ab:08:f8:ab:a5:df:a3:c7:06:1b:68:a3:e9:3e:                  
         c0:d5:c1:5e:46:7b:45:7f:41:27:b3:cb:ef:98:a0:59:ed:c7:                  
         be:1e:cd:f3:59:09:66:7f:eb:05:fe:a6:36:6b:a7:88:2c:12:                  
         c8:c5                                                                   
```
