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



```text
PHNhbWxwOlJlc3BvbnNlIHhtbG5zOnNhbWxwPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6
cHJvdG9jb2wiIElEPSJzMjk5NDhhMDA1ZDc2NGJjMzVmM2UxN2M5MThjZDMwYjhkNWUwMjIxYTQi
IEluUmVzcG9uc2VUbz0iXzQ3MGMzZGVhYjI3YzM3NTRmZTMxIiBWZXJzaW9uPSIyLjAiIElzc3Vl
SW5zdGFudD0iMjAxOS0wOC0wMlQxMzowMzozM1oiIERlc3RpbmF0aW9uPSJodHRwOi8vbG9jYWxo
b3N0OjMwMDAvYXV0aC9sb2dpbi9jYWxsYmFjayI+PHNhbWw6SXNzdWVyIHhtbG5zOnNhbWw9InVy
bjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphc3NlcnRpb24iPmh0dHA6Ly9pZHA1LmNhbmFkYWNl
bnRyYWwuY2xvdWRhcHAuYXp1cmUuY29tOjgwL29wZW5zc288L3NhbWw6SXNzdWVyPjxzYW1scDpT
dGF0dXMgeG1sbnM6c2FtbHA9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDpwcm90b2NvbCI+
CjxzYW1scDpTdGF0dXNDb2RlIHhtbG5zOnNhbWxwPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoy
LjA6cHJvdG9jb2wiIFZhbHVlPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6c3RhdHVzOlN1
Y2Nlc3MiPgo8L3NhbWxwOlN0YXR1c0NvZGU+Cjwvc2FtbHA6U3RhdHVzPjxzYW1sOkVuY3J5cHRl
ZEFzc2VydGlvbiB4bWxuczpzYW1sPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0
aW9uIj48eGVuYzpFbmNyeXB0ZWREYXRhIHhtbG5zOnhlbmM9Imh0dHA6Ly93d3cudzMub3JnLzIw
MDEvMDQveG1sZW5jIyIgVHlwZT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8wNC94bWxlbmMjRWxl
bWVudCI+PHhlbmM6RW5jcnlwdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3Jn
LzIwMDEvMDQveG1sZW5jI2FlczEyOC1jYmMiLz48ZHM6S2V5SW5mbyB4bWxuczpkcz0iaHR0cDov
L3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnIyI+PHhlbmM6RW5jcnlwdGVkS2V5Pjx4ZW5jOkVu
Y3J5cHRpb25NZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDA5L3htbGVuYzEx
I3JzYS1vYWVwIj48ZHM6RGlnZXN0TWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcv
MjAwMC8wOS94bWxkc2lnI3NoYTEiLz48eGVuYzExOk1HRiB4bWxuczpudWxsPSJodHRwOi8vd3d3
LnczLm9yZy8yMDA5L3htbGVuYzExIyIgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDA5
L3htbGVuYzExI21nZjFzaGEyNTYiIHhtbG5zOnhlbmMxMT0iaHR0cDovL3d3dy53My5vcmcvMjAw
OS94bWxlbmMxMSMiLz48L3hlbmM6RW5jcnlwdGlvbk1ldGhvZD48eGVuYzpDaXBoZXJEYXRhPjx4
ZW5jOkNpcGhlclZhbHVlPkJ1U2pReVNMTFMzVGEva1RoQSt3aWo5ZWNGV25TTWlKWjQ2RVlyUnBr
M0V3NUtNalV6VzRaaVdRWCtIdXNxK3ZBTC9xRGZEN0pMUmsmIzEzOwpYVWdqZS9BWllLajA4cUFv
dXJveU9ERExReEY5NVA0cHpUanhJSWZVR3pydkxaUnNQaEZ6QUVlUWsvWDZSTmtzRFpPVitFRDR4
Ym9GJiMxMzsKOHNSekxoN29jZFRKaXNFbkNYMD08L3hlbmM6Q2lwaGVyVmFsdWU+PC94ZW5jOkNp
cGhlckRhdGE+PC94ZW5jOkVuY3J5cHRlZEtleT48L2RzOktleUluZm8+PHhlbmM6Q2lwaGVyRGF0
YT48eGVuYzpDaXBoZXJWYWx1ZT5sS00waGxlZExSbWpjemFVTEpmZW5OUitudnJIam90QUp4ZFFE
YUVpaFJnd05jeHR5M1NROTJ3WE9vVTNSWVcydFhDNVNGbWd2S1FuJiMxMzsKZnJJRWFHV0Z2REJB
eE8rT1BuNnlpQ0J1TVF1WFM4QXgwVGhBVW5QSVAvSmluMy9JZ3RCQ2ZvZkZTaTVQUzhudlFyaWpE
b3JjL0orLyYjMTM7ClpWWHpuZWYydEJFS1B6WUFSazBWbU1FcEVrKzVoRTlGWlVlamlnYmFoejVZ
ZmhCSlpvOUUwNjF3dXJFcGROUC9YWE5JZ3FXb0l4NEkmIzEzOwppcDBrVlZjUlB4bVpuU1Fhbm1B
a3NQempSQjRQdHNQaFBRV2J1K3ZDRkxEUDlmWCt4YzJhSHFZcTd4dVJkbFJCWkkxT2xFOVAyQ0J3
JiMxMzsKYkRWbSs0Z0x0amhNRXN0V1MwQjdHYnJ6TVRGa3dETmF6aHJWN2tqenRkZGxhbzdHODh6
L3FEbDg3Vi9TdDcvY1JFbkI0elp4Zjg3NSYjMTM7CjFweGxhNTFiWjRrVkxKcys3YnNobHoxZFNu
L005Y2NrWUlINGt6bmZxU3hpVXhTUUZndWNpR3FGRURzUkg5bWdBeFkwbUM3ejZaQWgmIzEzOwpn
Q3ZKMHVmUnRIZGJYNWdOL3VPWlZVVEthTUExbnZzci9IaHhNa1FsSG1TSk9xSVdEUTJlYllTekJh
NnFDbUNsZzBnU0RGQ1Q5NTUzJiMxMzsKUVY3RTBxRUZ6RHQyb00yOE84TWgrUEZwNHZBdFIyaTJU
MXFVNEhrdGJTaWc0TVA2bzN5bGRNSzlRbnp0ajFEbE9CM28yaXJmN1U5MyYjMTM7Clo4Y1dmQ2Fq
TmFObmJjWk9iN3BWUEFuTk92VTlPR1paK3dKS3FkS0h4TGI2V2hOOEJaVVAwbXZreHlZYjUyTm1j
TzBpRFZUTGo3bXcmIzEzOwpOc09QamdNQ2xCZk4xdWVzTCtqZjJwUDlscUw1V1MvcVN5c3doTzAv
NVVOL0s1M1BJcUp2OFBQOXZIbERYb0dPYTlGN09IS0JYMXN6JiMxMzsKTUtFY3ZnOGNnUkFDeFR5
VVhkdFBsYXRLRWh4K1h1OUQwL3JRQjRiRSs0WGkybmozbzdTM1dlek9yTzMvaWNCYWE5bEdKWDdr
Y01FYiYjMTM7CjAyd0Erb1lWQTVRSHNBby9HVDBUc3hObjFWUW15SUtEc0gzRTVGMzE3aHRDTEp2
UUJiQVdnWW5hd1pUeFR5VmdNbTkvMFBZaTFEa0UmIzEzOwp2bm5Dazg3RWpSb0ZSaXpCOHlHZVF6
N2NRZTZqYS9Yclh6R0RSQXEzVjVzUzRjamk0UUNQdWN1Zm0rdXJQU0IwUURVYWJUQ2dpL3lMJiMx
MzsKRlU0N0RYaVAwakQxUGRBdUlNQ2l0U29iUTZtSjlJUGFZb05PZC9kUnNOV2d3NUpHaHdFM081
OVZkRlJhTmdwMTFLMGgvQ2JBNElqayYjMTM7CkpTaWxQa0VTVituV2Fna0RxdFJ6LzNlRWZGd293
WGE2RHN5eE1LVDB1anY5d0ZDRzJkSldtYmcvalROTW1EQ2hhUWxHMlpZeGQrZ3AmIzEzOwpEZUg1
YWd3YXNHdHFlVGMvY24ycUJldHZFRzNsMWR1cTJVVHdUMFJyL21GeGo4eGtxTFNBOGdDL1VNNER0
OHRua2RMVlU4RjB4ZDBRJiMxMzsKZGI4Ukhya1dVQ0xtRUxyRm81d2ZmMXV5Nk1YdTJhRlFkNUxn
NUc4dXdKTUxMV3lsYUdnL3VwQktOTXA2OGc5ZTllbExTd2lLNCt4WCYjMTM7Clk2bVJSb29Ed2lB
cml3NUlEN0tGdy8ySFY4QUczbVp5cWtQOEJaaGxQajVCK2JKRTZWMXJvNEpBYjRvd1U3bGtHWDNO
WHN0N0kvTTgmIzEzOwpVVjZMOWRCc1NKTUVoYW5hZmF5RE92L2FXNTFQSGhEV21DSGNRTzEwbEtJ
WU9EY1lEc3FLUkxGQnV2cmZBUEJQcitOeFBFallQUVhYJiMxMzsKVXJCeDJReWErNDlBa21CSWJQ
R1djK0hzeUM4ekhtSWFoaHFGZlU0a1U2T1lzaW11bk9BUWNUNWZBbkNWdVdPRHJTRytVM045U0p0
RCYjMTM7CnY1SnBINFhqZmZBMG5mbm4zM0dWN1E4OHNKVnJ4S3BVMmtPcnEzdlBHdk15L0hBNHFH
ekpQbDVBRW5SWnp4YkRZbGJEWGFPbnlUamImIzEzOwp0QlAweERialp4YmFhaldJK1pSR1FBaVVs
Z0lHb2xTTUl3TC9NYlI5ZnE1M1gzOFlPeDRJVnFDWXdDbWlGcFJmeU1GNzlEVXVKZVhiJiMxMzsK
R2djQm80RGRNRGZqQjJRZUJWbXJuVFFtZzY5WmpGVGhSR05RckVYTXU3Tjc1MnNrOW00dllDbTVN
c0hQUU5ialJ3bkdzT0xwa3V1SSYjMTM7CmFPdTJ6S2crQWlBSlBqSC8wSXZqTkc3Mml5b2JUZkRa
ZC9UNE1ZcUliVlF1aUN6NUJlZ0pTeDBpam56UjhONmFYbkhrVWFIZ2EydDImIzEzOwpDRkRNNURE
dzZQZzZGZkI5MVVmOHFZS1BHUnQ3NWROdHBmaUt4NmJFRlorenZSM3lsbmpqNmZVUW8wTjNNekFv
ZkVTTjNtSDh1WW5tJiMxMzsKUUFOV2pFYWxIN29GOGFhOVhXaXJaNWlqd20rY0RuMnQwNVNqQmIx
dkVYOHBaekFnTG1lUWIvanlmNmtxaURCT3RjdWlBM1Rpa2x2bSYjMTM7CnUxVHgrYk0wYTZSM2N2
eGJYckRXNzRZYXpxRUQrYkNJclhMK05iZGt2YlJCT3BQQ3l4K3lsR3oybElLUkY2QmI2YnQzRS8y
UmJFMWwmIzEzOwpUMkpqMnRVd0J6Tmt0WnkrTTQwZU1SajFNM1FCaFZPbXVieFdMaGovNVBQZVJF
cU43VUdCYUp4SmRpRlBFbk00Q3FlNG0rTER0TW5DJiMxMzsKUzM3UmNIQllIUjMwVTZmNEcrckow
NVBSOWZmNU1zbGUyREhoQm5wZnlBVE0rRzdURXVWdkluSXY4SlowUWx5V2cwTVByQ1llYzhvRyYj
MTM7CjlMR1hCZVFxbmRacXpOS3pldmdUUlpuc3Y3MXhGNE4ycWJZUE1FVEtmbjNmY1EzZXU5NlBq
ZHJqNTUveEdoZEJDRWtMRTBDRWMvL3MmIzEzOwpIdmEyVVdVVlM0QlhkbHJKZG9hcDhYdTJXZHJV
Vm1QeEpXUTFJWTZ2Y2hmYjJqdWpSVko1T2FraWFhTGtwS2d2QlJwUnZ5OGt1c2hpJiMxMzsKSzNR
SXNvM1FJQnY1d010citGeTIzSCttazVUQ1VUK3U4dEdRUTFBTnVjRVd4SFphamNCd2JsVjZzTWJU
dTVaSGovTVVTV21jdEtINiYjMTM7CktZWHJOMDdPaURqLzRJQUdHaG1tS3RRak1PaUdmc0FhRmVX
UDZ0NjRBejhaLzVzR2NnMzVMNUtTK1FiOUMxRkxwSHNraTUzWDZHcUsmIzEzOwpPQTFqVzRUYi9u
d0ViT3dxSWc3TG8xTWFUS0FXNXN6cXBUd0VheFNVWEtFdmoyeWlVeTRFS0pDSEM3Zjd2VjdUUFEr
aGxGQjhuS2dWJiMxMzsKN0ZtZmVOTjhoalhvWHppRktRRjFzRUZrTXYySzdDSm8xdEFMVld4eGxO
VDNKVmFSNjM1RWJ3ZjVTcng5dE16Rkl5RWw1ZkNtTEpmdCYjMTM7ClZhditNQXZKNXpmT2o4YTBk
SjJpbDFQSFdBUExYUklpTmgyWVh2a2x4WFlhSmtyWU5WL005OTNaWkNST2Z1a0FxTkp5V0VCMkZJ
OTQmIzEzOwpXUEkyRGIyNFVEY3ZIekZ5NWJETXRrK2VMRDJTNVFXMVB0dW5ITFlMNm96OTVuRThp
ZUd0ckE4Qm9Sa25aOUVTV0U0UjIydEorUDE2JiMxMzsKYnlZd0ZNTlJnL0UwWWxZcVRaUmZha1B1
aTFNcExJNDdLMWU4S0JzZ3hiQThhbi96THpDQTlJbXpKNDI1dVk2a1ArRXJRVmdYdzI4SiYjMTM7
CnFQV3pja3dOMXFCVWxCdzY3Sk5XS3c5Zi9QNEI2bmlMM2VneVFpTk04dFllQUU0WDdyRTJ4Nlg3
S3l6eWFpaklLTUQxRnJQa0t2VWomIzEzOwp1Q2xVcHFBS00rUDc2OUM3OXdqelpXcmhRNmgwVkF2
RDJRNzRxM0tMM0JSb0FiRE92MnZHRDFWdEEySHMwRldBVC9PanlwRmtQR0ZQJiMxMzsKQnFyaEtr
LzFEa0NyYmZ5OTdsbXRFYVc5ckgxQThNYmNlU2xPQVFEWk5qODFMWmhZb0srUDgwR2pESEI5N2hk
dU0wdDBuNVYvOS9YUSYjMTM7CnV1UXBRWW5QWHNDMnEzSTZjM2wwLzdpUHFqN0JacEIvek5SZG5N
T0t2KzRTMW9JVUJna3dmOC82MzZ4OU9wUXlnUE85Z2ZGVU1WbzgmIzEzOwpaOVNQUmozVk9QTTd5
dmxQZm9kZ0VmS085YnMyTFF2VHlOeklqL1VqbVI0Z3pPQkFFVDh5M0k1VTJyMnREZis5RVRqbDRr
NGk4U2huJiMxMzsKbUVvM3dHUCt0WjlCdnZ5dnNxTVdSQUl3S1VkSlJDNFNrcGVSTGk4R3plSzlN
TEhnUEx3eHJYcWlwbmNjT1liRzdEQzMzUUlYUlZOaCYjMTM7ClpiMy9tRWU5bThkYUVhQUpMdUl1
dTVmMS96WjJObW9NM2U0SnkvTHUzWTFkNXlTQ09rdUQvamlBT2poMWtTaUxMN0JtaXByZTR1bFMm
IzEzOwpTUHdYQ2xUTlBiK2xhd2doVXN6cCtYL3MzZHdPNTJ5ZU0ySHoxR0IvOWN6MHNkQXZ5OFlx
U1F6WXlPMlNRNFJVTHcrUmQ1RDI4NnVyJiMxMzsKNmZRL3hoaGRIU2owaHdHKzJnQURJSjdBbGhq
WXZsYVcrOUdMcEFnTzMxbGpGeTBLVlBscklZWjc3dU1WT2VYUmVlenlDZ1RucVMzLyYjMTM7Cld6
ZUFzVWpnMkZsWGNINTRLcnR6UXJjMmdtSFk3bDJjNCsyWXNEZGNVQ2w2SjNlaVBZUjZIcmo3SDMw
TW9GYTBiZnIySHB1SytmUmcmIzEzOwpqWm44R2ppNVZuZEg0TEU2WmdnUTRJeEZpSXA4dTRia1dU
YjlzOXB3RnV5ZncwNVBMSlJiUUppcFJVR0VxTlhxQWJ5M2J4K0E3MWNUJiMxMzsKd2tvRVd6c1pl
N2F5aTFTWDBFcUNETkVqQVcrbmRvd05obEFrRmFqZm9DZGVuVVhFTDRKOVhwMkhRNDU1eWxXdStE
RE9seVVOTDJ0cyYjMTM7CjhySWlnY21kVnEwcVNtckJFOHV2bW9ZdmVqb1hacmhHSkZlU1J2M01i
M25ndU1kdG1Mb2FNYUsxQ3NzYk55N0FVK2tYOG1tNDJkRk0mIzEzOwpUU0s0RkIxam9pR08vRURa
ZnJ6Uit0RzBDN1h0OHNDM056KytiSTVWZTV2Sk5GSG5XUlJyU3l0b0p6V2lpLy9aME5KWTF4cmtz
RnlBJiMxMzsKNjFBTzFkem9VQm92VWpvN3hoZkt6QmtTNTdSQUY4RkUySkM5OXJrcEoyT1hLeHRv
VEpiUGhVU3NMOWQ5ZVZXdzFhVmsrb2d4VEJ2SCYjMTM7CjRZcjcyaUwyYUJvcG1DUnRuVHdOMkla
RldiWWpPVTVoMHFpdlgwaXI5Vkg3UU9NaTRINmFZOFQrSUMzQlpPcU8vTmdpcjNkQjBUMXMmIzEz
OwpqMExKdUdFREVadlJiSGwvOFA3RFJ1Q01vczNTYXV4aEEyZWxCTndqZE9ZYStSeG1mVUhLL3JS
QSt1akpkRlcrdXpYOWF5TGZ0RisvJiMxMzsKTTE5cjhxS1dZaUlXaHV0NHhrWVIxTXVpeVpoYTdt
UXlhZmptWkdmTnhUUk41Ukw2OXdCYmxXbStDajRoWVVOK3ZKRlJqQzdtd3FxcSYjMTM7CnJWV2pK
R2I5NHV4N0d0ZGQrNFhvS1ZwMEMwNGJUQ1ZJN1BzZWtyOUFySDhEbFJzOXo1TVNqUFlmcDh1TnM0
LzR3eEkwdlo3cTFtR2cmIzEzOwpMMlVNSkNJNFJERE1EaXdjTkJWakFQZjJGQndIWUZMRzk5VEVM
eHVvOTNjM045QWpmRDl4Y3hvOHJSaW5PblBSWTQzVnZkL21ibU03JiMxMzsKbHhSSHJURzlTeUdE
K2h4YmJxQnlOenNiOW1OTHdmZVRCM2JGcUxNY25Dd1JFU3ZNWHZhMXIrbEZuTEo1NXFNSlgrL1VZ
QnVTdzVZbSYjMTM7CmM2SDIzQXdsY3g4Wm1SWjd0UE4zNjlnSkVQMExBYTNsZ014QWxCaDVCWE1w
QnFaL2hYYnMyeC9UcHNqQVJ6dkJLekc0ZmxWMHN4TUomIzEzOwp5amM4QUlRcm5QQnczNFlLVmhv
NTIvUXVyeDQyOVBSYzZOejJZSDVISU4wQWJ0NnA1TkRCZ1dwWGc4NHFMdnhMTnc0SG55cmdPR2I3
JiMxMzsKMFVCVUFFTFNjckdKS3l1WkxWZXpzMHhzZVpDWVoxc3hLN1pSaXdSczFYaHg1MnoreWx5
ZVVCOHpNTXVWSHhKQkQrOWMvRkd0Q0w5ViYjMTM7CkVLUEpMSldyK0lyYjJDTTJDY2tjUDdYL3V6
SkRwdHkxUGZmSXBVK2FIeWllQnJvRFRKMVF2SURxOWxmYk9wbTllUytEaFVCVzQ1WXYmIzEzOwpC
ZUppWUpkbEVjemJBS0lLTi9DaHAzWFVsTDZIQng3V29yUW91TjZHaU4yRFgvK08rMDhjUjNsd0Jt
ZExpdHMzdFRDcVBoSUg0ZjZyJiMxMzsKVnNiNVFsNUZVUjR0T1F2SFpnWHRJcitpTzNQZlcxeHdy
Ukl0SmVSTFZRRzZSLzFtdjUyaFpOVC9OVEdpQ3BMczZiSUlBRGt4cUNQYiYjMTM7Cjg1VE9OS2dT
VVl0WjN4VmlwR240NDJpQ2Q2ZWhpVGc4T25pcGtXZit0S0REY3lMZWJnSEpDMDZLS2VzWEl2S0lw
UlVaU0FTS1BOSlgmIzEzOwpQZmdhdDlQc0t6aU01QUczR1g1SSs5a3h5VGtpWDhRN3pvSklySHV4
PC94ZW5jOkNpcGhlclZhbHVlPjwveGVuYzpDaXBoZXJEYXRhPjwveGVuYzpFbmNyeXB0ZWREYXRh
Pjwvc2FtbDpFbmNyeXB0ZWRBc3NlcnRpb24+PC9zYW1scDpSZXNwb25zZT4=

```





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
