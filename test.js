var moment = require('moment');
var ticket={
           "_id": "5aa38db67906ff04ecf72c53",
           "passengerId": {
               "_id": "5aa296949853f04890757773",
               "email": "noemail@nodomain.com",
               "phone": "+251000000000",
               "userType": "passenger",
               "createdAt": "2018-03-10T11:46:00.000Z",
               "modifiedAt": "2018-03-10T11:46:00.000Z"
           },
           "from": {
               "_id": "5a83e726abe26a1a1c0be0c8",
               "stationId": 120,
               "name": "St Lideta",
               "route": "EW"
           },
           "to": {
               "_id": "5a83e53d4f018d281460fba2",
               "stationId": 111,
               "name": "Hayahulet 1",
               "route": "EW"
           },
           "createdAt": "2018-03-10T07:48:06.685Z"
       };
       var publickTicket={
         passenger:ticket.passengerId.email,
         from:ticket.from.name,
        to:ticket.to.name,
       }
console.log(publickTicket);
var tickets=[
    {
        "_id": "5aa38db67906ff04ecf72c53",
        "passengerId": {
            "_id": "5aa296949853f04890757773",
            "email": "noemail@nodomain.com",
            "phone": "+251000000000",
            "userType": "passenger",
            "createdAt": "2018-03-10T15:26:00.000Z",
            "modifiedAt": "2018-03-10T15:26:00.000Z"
        },
        "from": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-10T07:48:06.685Z"
    },
    {
        "_id": "5aa386167906ff04ecf72c52",
        "passengerId": {
            "_id": "5aa296949853f04890757773",
            "email": "noemail@nodomain.com",
            "phone": "+251000000000",
            "userType": "passenger",
            "createdAt": "2018-03-10T15:26:00.000Z",
            "modifiedAt": "2018-03-10T15:26:00.000Z"
        },
        "from": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-10T07:15:34.655Z"
    },
    {
        "_id": "5a9f90e02dfc021fb4d35f55",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "createdAt": "2018-03-07T07:12:32.363Z"
    },
    {
        "_id": "5a9f8f496804d53fac92387b",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "createdAt": "2018-03-07T07:05:45.650Z"
    },
    {
        "_id": "5a9ecd4626dce542982d3b82",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:17:58.002Z"
    },
    {
        "_id": "5a9ecd3626dce542982d3b81",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:17:42.132Z"
    },
    {
        "_id": "5a9ecd2026dce542982d3b80",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:17:20.386Z"
    },
    {
        "_id": "5a9ecd17c842b32ac4c7bb5f",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:17:11.930Z"
    },
    {
        "_id": "5a9ecce9c842b32ac4c7bb5e",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:16:25.278Z"
    },
    {
        "_id": "5a9ecca4c604870ea42150a0",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:15:16.722Z"
    },
    {
        "_id": "5a9ecc8fc604870ea421509f",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:14:55.195Z"
    },
    {
        "_id": "5a9ecc4734b82e423cfd49b3",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:13:43.674Z"
    },
    {
        "_id": "5a9ecc220880592e7cb90abb",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:13:06.668Z"
    },
    {
        "_id": "5a9ecbe9268a483e5c8c24b7",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:12:09.036Z"
    },
    {
        "_id": "5a9ecb030fcfc83bbc0be7cd",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:08:19.098Z"
    },
    {
        "_id": "5a9ecae13858df39eccfaa63",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:07:45.590Z"
    },
    {
        "_id": "5a9eca8aa0d58c48909ddd1b",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:06:18.703Z"
    },
    {
        "_id": "5a9eca28e5a71b35f4e36317",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:04:40.402Z"
    },
    {
        "_id": "5a9ec9eab87a1505a07f356c",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:03:38.037Z"
    },
    {
        "_id": "5a9ec97b8cb32b2a70857224",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T17:01:47.500Z"
    },
    {
        "_id": "5a9ebf62d60bc619c0207601",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:18:42.663Z"
    },
    {
        "_id": "5a9ebea87887980ef88a41ea",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:15:36.315Z"
    },
    {
        "_id": "5a9ebe417887980ef88a41e9",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:13:53.375Z"
    },
    {
        "_id": "5a9ebe201b5c7b43b021bfb7",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:13:20.997Z"
    },
    {
        "_id": "5a9ebe0482b8f913ec024775",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:12:52.554Z"
    },
    {
        "_id": "5a9ebdaa21b04b1bbcb2c050",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e659abe26a1a1c0be0be",
            "stationId": 115,
            "name": "St Estifanos",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:11:22.489Z"
    },
    {
        "_id": "5a9ebd8b21b04b1bbcb2c04f",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:10:51.593Z"
    },
    {
        "_id": "5a9ebd1504f4631fec205cb8",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:08:53.171Z"
    },
    {
        "_id": "5a9ebcdbd967c40ebc55204b",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:07:55.539Z"
    },
    {
        "_id": "5a9ebc630a231d3eccce1fcb",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:05:55.649Z"
    },
    {
        "_id": "5a9ebc331ec4b300f0b14a60",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:05:07.262Z"
    },
    {
        "_id": "5a9ebbff066cad1ac81b57cb",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:04:15.771Z"
    },
    {
        "_id": "5a9ebb90d0fc9e327c260f7d",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:02:24.837Z"
    },
    {
        "_id": "5a9ebb64423b193874524b79",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T16:01:40.665Z"
    },
    {
        "_id": "5a9ebadbeae66b28d4963848",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:59:23.702Z"
    },
    {
        "_id": "5a9ebab6be84ab51807c452c",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:58:46.787Z"
    },
    {
        "_id": "5a9eba6c0ad9d720f88f1cc3",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:57:32.983Z"
    },
    {
        "_id": "5a9eba5f04b2d12cd0211b31",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:57:19.128Z"
    },
    {
        "_id": "5a9eb9e6f1a8782f30be2362",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:55:18.777Z"
    },
    {
        "_id": "5a9eb91e11fbaf006c176c8c",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:51:58.295Z"
    },
    {
        "_id": "5a9eb905ccd67f2be0b74222",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:51:33.906Z"
    },
    {
        "_id": "5a9eb86749522648f4ed0bbf",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:48:55.833Z"
    },
    {
        "_id": "5a9eb81a75ab824b90eb75e5",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:47:38.494Z"
    },
    {
        "_id": "5a9eb8040ab6c04374bd97a9",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:47:16.642Z"
    },
    {
        "_id": "5a9eb766414c1550f8d17a69",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:44:38.838Z"
    },
    {
        "_id": "5a9eb6c2a639ea25c0b5ae16",
        "passengerId": null,
        "from": {
            "_id": "5a856a87e3319923bc22383e",
            "stationId": 11,
            "name": "Ayat",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e74eabe26a1a1c0be0ca",
            "stationId": 121,
            "name": "Cocacola",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:41:54.718Z"
    },
    {
        "_id": "5a9eb677a639ea25c0b5ae15",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:40:39.977Z"
    },
    {
        "_id": "5a9eb661b3e56c51489b79c5",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:40:17.834Z"
    },
    {
        "_id": "5a9eb6324af5562d74e1466b",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:39:30.330Z"
    },
    {
        "_id": "5a9eb5cc76c11651ac8702af",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:37:48.493Z"
    },
    {
        "_id": "5a9eb559aa3ff018340a6435",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:35:53.562Z"
    },
    {
        "_id": "5a9eb5293f183a2a0492440d",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:35:05.856Z"
    },
    {
        "_id": "5a9eb26f798b613adce36269",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:23:27.028Z"
    },
    {
        "_id": "5a9eb24c557171314c6940e4",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:22:52.657Z"
    },
    {
        "_id": "5a9eb206caf2172f8c2361d9",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:21:42.864Z"
    },
    {
        "_id": "5a9eb16efd8c99431cd68acf",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:19:10.854Z"
    },
    {
        "_id": "5a9eb0b10deb673718579109",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:16:01.635Z"
    },
    {
        "_id": "5a9eb08c5b4067104024420a",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:15:24.764Z"
    },
    {
        "_id": "5a9eb062a5cacb4ea04cfc32",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T15:14:42.208Z"
    },
    {
        "_id": "5a9e9dc41f8e5c0184f02b3b",
        "passengerId": null,
        "from": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T13:55:16.779Z"
    },
    {
        "_id": "5a9e90cf962be448c8dbc8e6",
        "passengerId": null,
        "from": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e53d4f018d281460fba2",
            "stationId": 111,
            "name": "Hayahulet 1",
            "route": "EW"
        },
        "createdAt": "2018-03-06T12:59:59.758Z"
    },
    {
        "_id": "5a9aa60d88ca5d4e0488d5b0",
        "passengerId": null,
        "from": {
            "_id": "5a8415d5542c19147c03c530",
            "stationId": 212,
            "name": "Lancha",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416d6542c19147c03c53d",
            "stationId": 225,
            "name": "Atikilit Tera",
            "route": "NS"
        },
        "createdAt": "2018-03-03T13:41:33.593Z"
    },
    {
        "_id": "5a9aa5fc88ca5d4e0488d5af",
        "passengerId": null,
        "from": {
            "_id": "5a8415d5542c19147c03c530",
            "stationId": 212,
            "name": "Lancha",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-03-03T13:41:16.491Z"
    },
    {
        "_id": "5a9aa5f188ca5d4e0488d5ae",
        "passengerId": null,
        "from": {
            "_id": "5a8415d5542c19147c03c530",
            "stationId": 212,
            "name": "Lancha",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416b1542c19147c03c53a",
            "stationId": 222,
            "name": "Sebategna",
            "route": "NS"
        },
        "createdAt": "2018-03-03T13:41:05.131Z"
    },
    {
        "_id": "5a9aa3fd88ca5d4e0488d5ac",
        "passengerId": null,
        "from": {
            "_id": "5a8415d5542c19147c03c530",
            "stationId": 212,
            "name": "Lancha",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416b1542c19147c03c53a",
            "stationId": 222,
            "name": "Sebategna",
            "route": "NS"
        },
        "createdAt": "2018-03-03T13:32:45.603Z"
    },
    {
        "_id": "5a9aa3fc88ca5d4e0488d5ab",
        "passengerId": null,
        "from": {
            "_id": "5a8415d5542c19147c03c530",
            "stationId": 212,
            "name": "Lancha",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416b1542c19147c03c53a",
            "stationId": 222,
            "name": "Sebategna",
            "route": "NS"
        },
        "createdAt": "2018-03-03T13:32:44.598Z"
    },
    {
        "_id": "5a9aa3f988ca5d4e0488d5aa",
        "passengerId": null,
        "from": {
            "_id": "5a8415d5542c19147c03c530",
            "stationId": 212,
            "name": "Lancha",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416b1542c19147c03c53a",
            "stationId": 222,
            "name": "Sebategna",
            "route": "NS"
        },
        "createdAt": "2018-03-03T13:32:41.959Z"
    },
    {
        "_id": "5a9a946013d57e47342556c5",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-03-03T12:26:08.251Z"
    },
    {
        "_id": "5a9a92cab8de1928f0f8c171",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-03-03T12:19:22.544Z"
    },
    {
        "_id": "5a9a92c9b8de1928f0f8c170",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-03-03T12:19:21.161Z"
    },
    {
        "_id": "5a9a9115ebb010405cbf4813",
        "passengerId": null,
        "from": {
            "_id": "5a83f9cd1104c34bd8a66e71",
            "stationId": 26,
            "name": "kality",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-03-03T12:12:05.332Z"
    },
    {
        "_id": "5a9a9114ebb010405cbf4812",
        "passengerId": null,
        "from": {
            "_id": "5a83f9cd1104c34bd8a66e71",
            "stationId": 26,
            "name": "kality",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-03-03T12:12:04.171Z"
    },
    {
        "_id": "5a9a9111ebb010405cbf4811",
        "passengerId": null,
        "from": {
            "_id": "5a83f9cd1104c34bd8a66e71",
            "stationId": 26,
            "name": "kality",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-03-03T12:12:01.832Z"
    },
    {
        "_id": "5a9a8a44df713f2b9c4d1798",
        "passengerId": null,
        "from": {
            "_id": "5a83f9cd1104c34bd8a66e71",
            "stationId": 26,
            "name": "kality",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-03-03T11:43:00.461Z"
    },
    {
        "_id": "5a9a8a42df713f2b9c4d1797",
        "passengerId": null,
        "from": {
            "_id": "5a83f9cd1104c34bd8a66e71",
            "stationId": 26,
            "name": "kality",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-03-03T11:42:58.731Z"
    },
    {
        "_id": "5a9a8a3fdf713f2b9c4d1796",
        "passengerId": null,
        "from": {
            "_id": "5a83f9cd1104c34bd8a66e71",
            "stationId": 26,
            "name": "kality",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-03-03T11:42:55.689Z"
    },
    {
        "_id": "5a96bb56b623564f3c04c7b6",
        "passengerId": null,
        "from": {
            "_id": "5a8415c0542c19147c03c52f",
            "stationId": 211,
            "name": "Nefas Silik 2",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-28T14:23:18.885Z"
    },
    {
        "_id": "5a96b90a6186003dcc256cb6",
        "passengerId": null,
        "from": {
            "_id": "5a8415c0542c19147c03c52f",
            "stationId": 211,
            "name": "Nefas Silik 2",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-28T14:13:30.278Z"
    },
    {
        "_id": "5a94d6ad76d181368c38718f",
        "passengerId": null,
        "from": {
            "_id": "5a8415c0542c19147c03c52f",
            "stationId": 211,
            "name": "Nefas Silik 2",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-27T03:55:25.457Z"
    },
    {
        "_id": "5a942b2648abc84780eabd01",
        "passengerId": null,
        "from": {
            "_id": "5a8415c0542c19147c03c52f",
            "stationId": 211,
            "name": "Nefas Silik 2",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:43:34.996Z"
    },
    {
        "_id": "5a942b2148abc84780eabd00",
        "passengerId": null,
        "from": {
            "_id": "5a8415c0542c19147c03c52f",
            "stationId": 211,
            "name": "Nefas Silik 2",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:43:29.309Z"
    },
    {
        "_id": "5a942b118ec5c31804ba056c",
        "passengerId": null,
        "from": {
            "_id": "5a8415c0542c19147c03c52f",
            "stationId": 211,
            "name": "Nefas Silik 2",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:43:13.046Z"
    },
    {
        "_id": "5a942afc089f5d0a489643d5",
        "passengerId": null,
        "from": {
            "_id": "5a8415c0542c19147c03c52f",
            "stationId": 211,
            "name": "Nefas Silik 2",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:42:52.651Z"
    },
    {
        "_id": "5a942ae18771e3123c47400b",
        "passengerId": null,
        "from": {
            "_id": "5a8415c0542c19147c03c52f",
            "stationId": 211,
            "name": "Nefas Silik 2",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:42:25.345Z"
    },
    {
        "_id": "5a942ac5913a9a463492ab6d",
        "passengerId": null,
        "from": {
            "_id": "5a8415c0542c19147c03c52f",
            "stationId": 211,
            "name": "Nefas Silik 2",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:41:57.130Z"
    },
    {
        "_id": "5a942aa69117a12a24dc91f9",
        "passengerId": null,
        "from": {
            "_id": "5a8415c0542c19147c03c52f",
            "stationId": 211,
            "name": "Nefas Silik 2",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:41:26.594Z"
    },
    {
        "_id": "5a942a9a202b6243502ec328",
        "passengerId": null,
        "from": {
            "_id": "5a8415c0542c19147c03c52f",
            "stationId": 211,
            "name": "Nefas Silik 2",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:41:14.084Z"
    },
    {
        "_id": "5a942a7068645800b86c3e6a",
        "passengerId": null,
        "from": {
            "_id": "5a8415c0542c19147c03c52f",
            "stationId": 211,
            "name": "Nefas Silik 2",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:40:32.799Z"
    },
    {
        "_id": "5a942a627dae2e1d6cb63b27",
        "passengerId": null,
        "from": {
            "_id": "5a8415c0542c19147c03c52f",
            "stationId": 211,
            "name": "Nefas Silik 2",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:40:18.433Z"
    },
    {
        "_id": "5a942a547dae2e1d6cb63b26",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:40:04.055Z"
    },
    {
        "_id": "5a942a1ea4c7e804f80c1641",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:39:10.636Z"
    },
    {
        "_id": "5a9429f540d18419bc284bdb",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:38:29.387Z"
    },
    {
        "_id": "5a9429e340d18419bc284bda",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:38:11.664Z"
    },
    {
        "_id": "5a9429481f5ba603ac98446c",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:35:36.941Z"
    },
    {
        "_id": "5a942919d6cb7c41600c91f8",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:34:49.632Z"
    },
    {
        "_id": "5a94286eb7281d0124554971",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:31:58.561Z"
    },
    {
        "_id": "5a94282ba4bf6c3a4c3e7a81",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:30:51.529Z"
    },
    {
        "_id": "5a9427e6c81374349cc9c22b",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:29:42.182Z"
    },
    {
        "_id": "5a9427981fc9723ab02bc1ec",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416e2542c19147c03c53e",
            "stationId": 226,
            "name": "Minilik II Square",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:28:24.724Z"
    },
    {
        "_id": "5a9427421fc9723ab02bc1eb",
        "passengerId": null,
        "from": {
            "_id": "5a83fa1b1104c34bd8a66e72",
            "stationId": 27,
            "name": "Abo Junction",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416b1542c19147c03c53a",
            "stationId": 222,
            "name": "Sebategna",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:26:58.184Z"
    },
    {
        "_id": "5a9426b97123340b64136fe4",
        "passengerId": null,
        "from": {
            "_id": "5a83fa1b1104c34bd8a66e72",
            "stationId": 27,
            "name": "Abo Junction",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416b1542c19147c03c53a",
            "stationId": 222,
            "name": "Sebategna",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:24:41.999Z"
    },
    {
        "_id": "5a942626df89cf1810af45be",
        "passengerId": null,
        "from": {
            "_id": "5a83fa1b1104c34bd8a66e72",
            "stationId": 27,
            "name": "Abo Junction",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416b1542c19147c03c53a",
            "stationId": 222,
            "name": "Sebategna",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:22:14.805Z"
    },
    {
        "_id": "5a9425ee8fac50245c8c95db",
        "passengerId": null,
        "from": {
            "_id": "5a83fa1b1104c34bd8a66e72",
            "stationId": 27,
            "name": "Abo Junction",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416b1542c19147c03c53a",
            "stationId": 222,
            "name": "Sebategna",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:21:18.274Z"
    },
    {
        "_id": "5a9425432ad4114174a4e679",
        "passengerId": null,
        "from": {
            "_id": "5a83fa1b1104c34bd8a66e72",
            "stationId": 27,
            "name": "Abo Junction",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416b1542c19147c03c53a",
            "stationId": 222,
            "name": "Sebategna",
            "route": "NS"
        },
        "createdAt": "2018-02-26T15:18:27.111Z"
    },
    {
        "_id": "5a92996ab77600352002cc46",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-25T11:09:30.787Z"
    },
    {
        "_id": "5a8d3642fcadb530f4d52839",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-21T09:05:06.267Z"
    },
    {
        "_id": "5a8d35dc3e48f800d8620b23",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-21T09:03:24.309Z"
    },
    {
        "_id": "5a8d3573e3182a3fa439cd68",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-21T09:01:39.614Z"
    },
    {
        "_id": "5a8d356426f89226e422a536",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-21T09:01:24.220Z"
    },
    {
        "_id": "5a8d3517ad711430dc4ab9b5",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-21T09:00:07.385Z"
    },
    {
        "_id": "5a8d34b94329371848902ac2",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-21T08:58:33.755Z"
    },
    {
        "_id": "5a8d347057e00a265cb43c2b",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-21T08:57:20.200Z"
    },
    {
        "_id": "5a8d335a1c0c8d42003a9f52",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-21T08:52:42.514Z"
    },
    {
        "_id": "5a8d32dffff1da0344348cfa",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-21T08:50:39.380Z"
    },
    {
        "_id": "5a8d32a1e4e07b04a41bc379",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-21T08:49:37.780Z"
    },
    {
        "_id": "5a8d32502c6fbe3744b83bf9",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-21T08:48:16.692Z"
    },
    {
        "_id": "5a8d31761fc2dd0f382e904f",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-21T08:44:38.119Z"
    },
    {
        "_id": "5a8bcec1dfe8371c10bc8bb0",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-20T07:31:13.949Z"
    },
    {
        "_id": "5a8bc97499bf6f2cc0c176c3",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e726abe26a1a1c0be0c8",
            "stationId": 120,
            "name": "St Lideta",
            "route": "EW"
        },
        "createdAt": "2018-02-20T07:08:36.353Z"
    },
    {
        "_id": "5a8bc94599bf6f2cc0c176c2",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "createdAt": "2018-02-20T07:07:49.661Z"
    },
    {
        "_id": "5a8bc91a99bf6f2cc0c176c1",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "createdAt": "2018-02-20T07:07:06.235Z"
    },
    {
        "_id": "5a8bc8a899bf6f2cc0c176bf",
        "passengerId": null,
        "from": {
            "_id": "5a83e5064f018d281460fba0",
            "stationId": 110,
            "name": "Lem Hotel",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "createdAt": "2018-02-20T07:05:12.782Z"
    },
    {
        "_id": "5a8bc7a699bf6f2cc0c176bc",
        "passengerId": null,
        "from": {
            "_id": "5a8416cc542c19147c03c53c",
            "stationId": 224,
            "name": "Gojam Berenda",
            "route": "NS"
        },
        "to": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "createdAt": "2018-02-20T07:00:54.010Z"
    },
    {
        "_id": "5a8b5ece5dc276179086264b",
        "passengerId": null,
        "from": {
            "_id": "5a84169c542c19147c03c538",
            "stationId": 220,
            "name": "Darmar",
            "route": "NS"
        },
        "to": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "createdAt": "2018-02-19T23:33:34.611Z"
    },
    {
        "_id": "5a8b5bfb5dc276179086264a",
        "passengerId": null,
        "from": {
            "_id": "5a8416cc542c19147c03c53c",
            "stationId": 224,
            "name": "Gojam Berenda",
            "route": "NS"
        },
        "to": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "createdAt": "2018-02-19T23:21:31.132Z"
    },
    {
        "_id": "5a8b5be45dc2761790862649",
        "passengerId": null,
        "from": {
            "_id": "5a8415aa542c19147c03c52e",
            "stationId": 210,
            "name": "Nefas Silik 1",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416cc542c19147c03c53c",
            "stationId": 224,
            "name": "Gojam Berenda",
            "route": "NS"
        },
        "createdAt": "2018-02-19T23:21:08.559Z"
    },
    {
        "_id": "5a8b5b595dc2761790862648",
        "passengerId": null,
        "from": {
            "_id": "5a83f9cd1104c34bd8a66e71",
            "stationId": 26,
            "name": "kality",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416b1542c19147c03c53a",
            "stationId": 222,
            "name": "Sebategna",
            "route": "NS"
        },
        "createdAt": "2018-02-19T23:18:49.066Z"
    },
    {
        "_id": "5a8b5ad441fa4b37683103e0",
        "passengerId": null,
        "from": {
            "_id": "5a83f9cd1104c34bd8a66e71",
            "stationId": 26,
            "name": "kality",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416b1542c19147c03c53a",
            "stationId": 222,
            "name": "Sebategna",
            "route": "NS"
        },
        "createdAt": "2018-02-19T23:16:36.332Z"
    },
    {
        "_id": "5a8b5a7e7474781c44dfc662",
        "passengerId": null,
        "from": {
            "_id": "5a83f9cd1104c34bd8a66e71",
            "stationId": 26,
            "name": "kality",
            "route": "NS"
        },
        "to": {
            "_id": "5a8416b1542c19147c03c53a",
            "stationId": 222,
            "name": "Sebategna",
            "route": "NS"
        },
        "createdAt": "2018-02-19T23:15:10.659Z"
    },
    {
        "_id": "5a8b5a5e7474781c44dfc661",
        "passengerId": null,
        "from": {
            "_id": "5a7455ec8e130d47c86a03f7",
            "stationId": 14,
            "name": "St Michael",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "createdAt": "2018-02-19T23:14:38.063Z"
    },
    {
        "_id": "5a8b5a5d7474781c44dfc660",
        "passengerId": null,
        "from": {
            "_id": "5a7455ec8e130d47c86a03f7",
            "stationId": 14,
            "name": "St Michael",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "createdAt": "2018-02-19T23:14:37.361Z"
    },
    {
        "_id": "5a8b5a5b7474781c44dfc65f",
        "passengerId": null,
        "from": {
            "_id": "5a7455ec8e130d47c86a03f7",
            "stationId": 14,
            "name": "St Michael",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "createdAt": "2018-02-19T23:14:35.599Z"
    },
    {
        "_id": "5a8b5a4e7474781c44dfc65e",
        "passengerId": null,
        "from": {
            "_id": "5a7455ec8e130d47c86a03f7",
            "stationId": 14,
            "name": "St Michael",
            "route": "EW"
        },
        "to": {
            "_id": "5a83e6d2abe26a1a1c0be0c4",
            "stationId": 118,
            "name": "Mexico",
            "route": "EW"
        },
        "createdAt": "2018-02-19T23:14:22.794Z"
    }
];

// tickets.forEach(myfunc);
// function myfunc(item, index){
//   for(var key in item){
//     if(key=="from" || key ==="to")
//     console.log(key,":",item[key].name);
//     console.log("============================");
//   }
// }

// Object.keys(tickets).map(function(key, index) {
//   console.log("key",Object.keys(tickets[key]));
//       console.log("============================");
//   // Object.keys(tickets[key]).forEach(function (nkey) {
//   //       console.log(key,tickets[key][nkey]);
//   //       console.log("============================");
//   //   });
//
//    //console.log(tickets[key]);
// });

//console.log(Object.values(tickets))

for (var i = 0; i < tickets.length; i++){
  var ticket=tickets[i];
   var createdAt  = moment(ticket.createdAt).format("Do-MMM-YY hh:mm A");
  var response ={
    source:ticket.from.name,
    destination:ticket.to.name,
    route:ticket.from.route,
    createdAt:createdAt
  };


console.log(response);
console.log("--------------------------");

}
console.log("typeof",typeof tickets)



/**
function findAllTicket(req, res, next) {
  var alltickets = {};
  TicketDal.findAll(alltickets)
    .then((tickets) => {
      if(!tickets) return res.status(404).json({"query_result": "NO TICKET FOUND"});
      var ticketCount =tickets.length;
        // var publickTicket={};
        //
        // var response = {
        //   ticketCount:ticketCount,
        //   tickets: tickets.map((ticket)=>{
        //     var publickTicket={
        //       //passenger:ticket.passengerId.email,
        //       from:ticket.from.name,
        //      to:ticket.to.name
        //     }
        //           return ticket;
        //           //return getTicketAttributes(req,"GET",ticket);
        //   })
        // }
        // //return res.status(200).json(response});
        // utils.handleResponse(res,200,tickets);
      //======================

      //var ticketCount = 0;
      // var response = {
      //   ticketCount:tickets.length,
      //   tickets: tickets.map((tkt)=>{
      //           //return getTicketAttributes(req,"GET",tkt);
      //         return   tkt        })
      // }
        response= _.mapValues(tickets, function(ticket) {
              return  _.forIn(ticket, function(value, key) {
                console.log(key)
                return key;
                });

          //return {from:ticket.from};
         });
        //return res.status(200).json(response);


      ///handleTicketResponse(res,200,response);

    //   if (tickets) {ticketCount = tickets.length;
    //   handleTicketResponse(res, {
    //     "Number of tickets sold:": ticketCount,
    //     tickets
    //   });
    // }

    var publickTicket=[];
    for (var i = 0; i < tickets.length; i++){
      var ticket=tickets[i];
       var createdAt  = moment(ticket.createdAt).format("Do-MMM-YY hh:mm A");
      var response ={
        from:ticket.from.name,
        to:ticket.to.name,
        route:ticket.from.route,
        createdAt:createdAt
      };
      publickTicket.push(response);

    }
    console.log(publickTicket);
  return res.status(200).json(publickTicket);
    })
    .catch(error => next(error));
}
*/
