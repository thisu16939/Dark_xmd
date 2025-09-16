//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                                  Dark_xmd                                //
//                                                                                                      //
//                                         Ｖ：════════════════════════════════════════════════════════════//
//*
//  * @project_name : © Dark_xmd
//  * @version      : 1.0
//  * @author       : thisa
//  * @youtube      : https://youtube.com/@thisuladinuth-p6x?si=YXaTrTW-tIQjI9Vz
//  * @description  : © A Multi-functional WhatsApp bot created by thisula

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Dark_xmd~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZlcEk5T005VFFFelFYY21ZSUc2ZSt2V3NRci9ZQjZlZzRuaDFBUkpYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmFjWkw4SE1SYm9TOGtJQ2hPejNzVTF5K3VBVHJNSFluQnhvQVhuTVhUOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQnVudGsxa2UzSUdzcmNWNTU4S0lBTFNObG5JS29IU2QxdWtXSkp6RzBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqWlUvd3Fld1FlSVJkNEpUUUlsak1rbkRhR1NUMm1KMjNqcEpuYjFJVWhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVOdGVXNURBWlM5UEJ2N1dUT0xqaWI5OWsvUEliSm5wSUhyT0ZnUE56MFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGSmEwZ2lFTnZaWTRnNGRCTThhVTBPelk3RHE3c1FiWjNmMFYwNWUrd1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0c5dC9tQzJzenJlUXFNRUV1ZXo0bUFOY0d2eUp4STk3ZlQ5K0k1Zm5raz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmRzd2lWNkRDNDd1UkdRR2E1bTljWUJzOVhZU3hSRkFwSzlrOU9XbnBRND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilhyak9HbUJwMlBoRDFxRE5BU0d4cU4vcDJmeVFrN2tqeEU2cmZMUWR5eVNWWXhOVzRlV3IwSHpMeGdrdStSLzA4eEFUMVB6YkNyS000ZFBvczJKa0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMwLCJhZHZTZWNyZXRLZXkiOiJUV0Jlb3VuanRLS2RNK3R4bVlJaWYrYVpXZHEyL2IrbEtNZVNKMm1ncVJjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyX1Y0dDRxVFJTU1VuenM4RjlWTDF3IiwicGhvbmVJZCI6IjY0YTVlODhlLTA3YWItNGZkYy1hNzUzLWY4NjA0ZWU1MGZiNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1OEtnNzNqRnpTdjNnYU5nUzN2N3ljejlucjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWUzeGxkMWpoWG5BTG1lS2FGU24vSWgyZXJVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRHRzJZQThXIiwibWUiOnsiaWQiOiI5NDcyMDMwMDc1Nzo1MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUaGlzdWxhIGRpbnV0aCIsImxpZCI6IjIxNjE3NDgxNDA0ODM3Nzo1MEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05iMjJZd0RFTjNvcE1ZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBUWWx3THFnYmF2RnJGNUNSZHlsZVY4S0lLdU10UTUrOG5lZ3hqaDYxQ2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFWQVFjMjg1UTVLbm9FakVrQXAyY0NZaDZhaWJ6V0dwWDhuaXNaK1dhbitmdmFzcDZrdU5DWWR6ZndUY2UzZ0M2TUE3S2EyMGVxQVVnL2VPaHBLY0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvczdFSDJqVi92UEh2OW5pdFUrbzY1RnBXSVlCYSt2NTJvZkw2d1hjYjBCSzZRYTdpZDVFem1GMFFweUlXK2ZGS3E0MjltS3lQTVBUYlVab21XUGZCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzIwMzAwNzU3OjUwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFVMkpjQzZvRzJyeGF4ZVFrWGNwWGxmQ2lDcmpMVU9mdkozb01ZNGV0UXAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODAxNjYxOCwibGFzdFByb3BIYXNoIjoiM1I5WjM5In0=",
PORT: process.env.PORT || "8000"
};
