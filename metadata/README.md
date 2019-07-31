## Generate Metadata

https://www.samltool.com/sp_metadata.php

- Set AuthnRequestsSigned to True

- Set WantAssertionsSigned to True

- Set SP X.509 cert from generated

- Paste contents of private key in cert.pem file 
 
- Verify cert with `λ openssl x509 -hash -noout -in cert.pem` newlines should be crlf

- Paste Metadata in samlidp Custom Service Providers

