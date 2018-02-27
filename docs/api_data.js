define({ "api": [
  {
    "type": "POST",
    "url": "/faqs/",
    "title": "Create faq",
    "name": "CreateFaq",
    "group": "Faq",
    "description": "<p>Creates a new Faq</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Faq</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "faqId",
            "description": "<p>The last name of the Faq</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route of the Faq</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of the faq</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of the sation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "\n{\n  \"_id\": \"5a74264fc461a418b08dae07\",\n  \"faqId\": \"2\",\n  \"name\": \"Meri\",\n  \"longitude\": 38.863153,\n  \"latitude\": 9.0195233,\n  \"createdAt\": \"2018-02-02T08:50:23.602Z\",\n  \"modifiedAt\": \"2018-02-02T08:50:23.602Z\",\n  \"route\": \"EW\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "\n{\n  \"_id\": \"5a478c962698af267483b1ee\",\n  \"email\": \"evana.mangato@hotmail.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"dateCreated\": \"2017-12-30T12:54:46.419Z\",\n  \"lastModified\": \"2017-12-30T12:54:46.419Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/faq.js",
    "groupTitle": "Faq"
  },
  {
    "type": "DELETE",
    "url": "/faqs/:id",
    "title": "Delete Faq",
    "name": "DeleteFaqs",
    "group": "Faq",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\nhttp://localhost:3000/faqs/5a478c962698af267483b1ee",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/faq.js",
    "groupTitle": "Faq"
  },
  {
    "type": "GET",
    "url": "/faqs/:id",
    "title": "Get Faq",
    "name": "GetFaq",
    "group": "Faq",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\nhttp://localhost:3000/faqs/5a478c962698af267483b1ee",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/faq.js",
    "groupTitle": "Faq"
  },
  {
    "type": "GET",
    "url": "/faqs/",
    "title": "Get Faqs",
    "name": "GetFaqs",
    "group": "Faq",
    "version": "0.0.0",
    "filename": "routes/faq.js",
    "groupTitle": "Faq"
  },
  {
    "type": "GET",
    "url": "/faqs/",
    "title": "paginate faq",
    "name": "PaginateFaq",
    "group": "Faq",
    "description": "<p>Creates a new Faq</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Faq</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "faqId",
            "description": "<p>The last name of the Faq</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route of the Faq</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of the faq</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of the sation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "\n{\n  \"_id\": \"5a74264fc461a418b08dae07\",\n  \"faqId\": \"2\",\n  \"name\": \"Meri\",\n  \"longitude\": 38.863153,\n  \"latitude\": 9.0195233,\n  \"createdAt\": \"2018-02-02T08:50:23.602Z\",\n  \"modifiedAt\": \"2018-02-02T08:50:23.602Z\",\n  \"route\": \"EW\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "\n{\n  \"_id\": \"5a478c962698af267483b1ee\",\n  \"email\": \"evana.mangato@hotmail.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"dateCreated\": \"2017-12-30T12:54:46.419Z\",\n  \"lastModified\": \"2017-12-30T12:54:46.419Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/faq.js",
    "groupTitle": "Faq"
  },
  {
    "type": "PUT",
    "url": "/faqs/search",
    "title": "Search Faq",
    "name": "SearchFaqs",
    "group": "Faq",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\n{\"email\": \"evana.mangato@hotmail.com\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/faq.js",
    "groupTitle": "Faq"
  },
  {
    "type": "UPDATE",
    "url": "/faqs/:id",
    "title": "Update Faq",
    "name": "UpdateFaqs",
    "group": "Faq",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\nhttp://localhost:3000/faqs/5a478c962698af267483b1ee",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/faq.js",
    "groupTitle": "Faq"
  },
  {
    "type": "POST",
    "url": "/tickets/",
    "title": "Create ticket",
    "name": "CreateStation",
    "group": "Station",
    "description": "<p>Creates a new Station</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Station</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ticketId",
            "description": "<p>The last name of the Station</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route of the Station</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of the ticket</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of the sation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "\n{\n  \"_id\": \"5a74264fc461a418b08dae07\",\n  \"ticketId\": \"2\",\n  \"name\": \"Meri\",\n  \"longitude\": 38.863153,\n  \"latitude\": 9.0195233,\n  \"createdAt\": \"2018-02-02T08:50:23.602Z\",\n  \"modifiedAt\": \"2018-02-02T08:50:23.602Z\",\n  \"route\": \"EW\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "\n{\n  \"_id\": \"5a478c962698af267483b1ee\",\n  \"email\": \"john1@aksum.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"dateCreated\": \"2017-12-30T12:54:46.419Z\",\n  \"lastModified\": \"2017-12-30T12:54:46.419Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/ticket.js",
    "groupTitle": "Station"
  },
  {
    "type": "POST",
    "url": "/stations/",
    "title": "Create station",
    "name": "CreateStation",
    "group": "Station",
    "description": "<p>Creates a new Station</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Station</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stationId",
            "description": "<p>The last name of the Station</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route of the Station</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of the station</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of the sation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "\n{\n  \"_id\": \"5a74264fc461a418b08dae07\",\n  \"stationId\": \"2\",\n  \"name\": \"Meri\",\n  \"longitude\": 38.863153,\n  \"latitude\": 9.0195233,\n  \"createdAt\": \"2018-02-02T08:50:23.602Z\",\n  \"modifiedAt\": \"2018-02-02T08:50:23.602Z\",\n  \"route\": \"EW\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "\n{\n  \"_id\": \"5a478c962698af267483b1ee\",\n  \"email\": \"john1@aksum.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"dateCreated\": \"2017-12-30T12:54:46.419Z\",\n  \"lastModified\": \"2017-12-30T12:54:46.419Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/station.js",
    "groupTitle": "Station"
  },
  {
    "type": "POST",
    "url": "/fares/",
    "title": "Create fare",
    "name": "CreateStation",
    "group": "Station",
    "description": "<p>Creates a new Station</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the Station</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the Station</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address of the Station</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "\n{\n\t\"email\": \"john1@aksum.com\",\n\t\"password\": \"password\",\n\t\"firstName\": \"John\",\n\t\"lastName\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "\n{\n  \"_id\": \"5a478c962698af267483b1ee\",\n  \"email\": \"john1@aksum.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"dateCreated\": \"2017-12-30T12:54:46.419Z\",\n  \"lastModified\": \"2017-12-30T12:54:46.419Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/fare.js",
    "groupTitle": "Station"
  },
  {
    "type": "DELETE",
    "url": "/fares/:id",
    "title": "Delete Station",
    "name": "DeleteStations",
    "group": "Station",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\nhttp://localhost:3000/fares/5a478c962698af267483b1ee",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/fare.js",
    "groupTitle": "Station"
  },
  {
    "type": "DELETE",
    "url": "/tickets/:id",
    "title": "Delete Station",
    "name": "DeleteStations",
    "group": "Station",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\nhttp://localhost:3000/tickets/5a478c962698af267483b1ee",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/ticket.js",
    "groupTitle": "Station"
  },
  {
    "type": "DELETE",
    "url": "/stations/:id",
    "title": "Delete Station",
    "name": "DeleteStations",
    "group": "Station",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\nhttp://localhost:3000/stations/5a478c962698af267483b1ee",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/station.js",
    "groupTitle": "Station"
  },
  {
    "type": "GET",
    "url": "/fares/:id",
    "title": "Get Station",
    "name": "GetStation",
    "group": "Station",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\nhttp://localhost:3000/fares/5a478c962698af267483b1ee",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/fare.js",
    "groupTitle": "Station"
  },
  {
    "type": "GET",
    "url": "/stations/:id",
    "title": "Get Station",
    "name": "GetStation",
    "group": "Station",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\nhttp://localhost:3000/stations/5a478c962698af267483b1ee",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/station.js",
    "groupTitle": "Station"
  },
  {
    "type": "GET",
    "url": "/stations/:id",
    "title": "Get Station",
    "name": "GetStation",
    "group": "Station",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\nhttp://localhost:3000/stations/5a478c962698af267483b1ee",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/station.js",
    "groupTitle": "Station"
  },
  {
    "type": "GET",
    "url": "/tickets/:id",
    "title": "Get Station",
    "name": "GetStation",
    "group": "Station",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\nhttp://localhost:3000/tickets/5a478c962698af267483b1ee",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/ticket.js",
    "groupTitle": "Station"
  },
  {
    "type": "GET",
    "url": "/stations/",
    "title": "Get Stations",
    "name": "GetStations",
    "group": "Station",
    "version": "0.0.0",
    "filename": "routes/station.js",
    "groupTitle": "Station"
  },
  {
    "type": "GET",
    "url": "/fares/",
    "title": "Get Stations",
    "name": "GetStations",
    "group": "Station",
    "version": "0.0.0",
    "filename": "routes/fare.js",
    "groupTitle": "Station"
  },
  {
    "type": "GET",
    "url": "/tickets/",
    "title": "Get Stations",
    "name": "GetStations",
    "group": "Station",
    "version": "0.0.0",
    "filename": "routes/ticket.js",
    "groupTitle": "Station"
  },
  {
    "type": "GET",
    "url": "/tickets/paginate",
    "title": "Station Paginate",
    "name": "GetStationsPaginate",
    "group": "Station",
    "version": "0.0.0",
    "filename": "routes/ticket.js",
    "groupTitle": "Station"
  },
  {
    "type": "GET",
    "url": "/fares/paginate",
    "title": "Station Paginate",
    "name": "GetStationsPaginate",
    "group": "Station",
    "version": "0.0.0",
    "filename": "routes/fare.js",
    "groupTitle": "Station"
  },
  {
    "type": "GET",
    "url": "/stations/paginate",
    "title": "Station Paginate",
    "name": "GetStationsPaginate",
    "group": "Station",
    "version": "0.0.0",
    "filename": "routes/station.js",
    "groupTitle": "Station"
  },
  {
    "type": "PUT",
    "url": "/stations/search",
    "title": "Search Station",
    "name": "SearchStations",
    "group": "Station",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\n{\"email\": \"john1@aksum.com\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/station.js",
    "groupTitle": "Station"
  },
  {
    "type": "PUT",
    "url": "/fares/search",
    "title": "Search Station",
    "name": "SearchStations",
    "group": "Station",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\n{\"email\": \"john1@aksum.com\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/fare.js",
    "groupTitle": "Station"
  },
  {
    "type": "UPDATE",
    "url": "/stations/:id",
    "title": "Update Station",
    "name": "UpdateStations",
    "group": "Station",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\nhttp://localhost:3000/stations/5a478c962698af267483b1ee",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/station.js",
    "groupTitle": "Station"
  },
  {
    "type": "UPDATE",
    "url": "/fares/:id",
    "title": "Update Station",
    "name": "UpdateStations",
    "group": "Station",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\nhttp://localhost:3000/fares/5a478c962698af267483b1ee",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/fare.js",
    "groupTitle": "Station"
  },
  {
    "type": "UPDATE",
    "url": "/tickets/:id",
    "title": "Update Station",
    "name": "UpdateStations",
    "group": "Station",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\nhttp://localhost:3000/tickets/5a478c962698af267483b1ee",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/ticket.js",
    "groupTitle": "Station"
  },
  {
    "type": "POST",
    "url": "/Users/signup",
    "title": "signup User",
    "name": "CreateUser",
    "group": "User",
    "description": "<p>Creates a new User</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User's phone number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "\n{\n\"email\" : \"evana.mangato@gmail.com\",\n \"password\" : \"TestPassword@123\",\n \"confirmPassword\":\"TestPassword@123\",\n \"phone\":\"251-917-123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "\n{\n \"_id\": \"5a845264c73ad33fbc6037a4\",\n \"email\": \"evana.mangato@gmail.com\",\n \"phone\": \"251-917-123456\",\n \"userType\": \"passenger\",\n \"createdAt\": \"2018-02-14T15:14:44.974Z\",\n \"modifiedAt\": \"2018-02-14T15:14:44.974Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Validation",
            "description": "<p>error { &quot;validation-errors&quot;: [ { &quot;location&quot;: &quot;body&quot;, &quot;param&quot;: &quot;email&quot;, &quot;msg&quot;: &quot;Email you entered is invalid. Please try again&quot;, &quot;value&quot;: &quot;evana.mangatogmail.com&quot; } ] }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/Users/",
    "title": "find all users",
    "name": "FindAllUsers",
    "group": "User",
    "description": "<p>get all registerd Users</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\n{\n\"email\" : \"evana.mangato@gmail.com\",\n \"password\" : \"TestPassword@123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "\n[\n {\n     \"_id\": \"5a845264c73ad33fbc6037a4\",\n     \"email\": \"evana.mangato@gmail.com\",\n     \"phone\": \"251-917-123456\",\n     \"userType\": \"passenger\",\n     \"createdAt\": \"2018-02-14T15:14:44.974Z\",\n     \"modifiedAt\": \"2018-02-14T15:14:44.974Z\"\n },\n {\n     \"_id\": \"5a84482ea9348b46d4fc17ba\",\n     \"email\": \"Esubalew.belachew@gmail.com\",\n     \"phone\": \"251-917-123456\",\n     \"userType\": \"passenger\",\n     \"createdAt\": \"2018-02-14T14:31:10.928Z\",\n     \"modifiedAt\": \"2018-02-14T14:31:10.928Z\"\n },\n {\n     \"_id\": \"5a81dbf050e5800d5c2c0019\",\n     \"email\": \"tesfayee.belachew@gmail.com\",\n     \"phone\": \"251-917-123456\",\n     \"userType\": \"passenger\",\n     \"createdAt\": \"2018-02-12T18:24:48.136Z\",\n     \"modifiedAt\": \"2018-02-12T18:24:48.136Z\"\n },\n {\n     \"_id\": \"5a815c1b205e0c14546476f6\",\n     \"email\": \"sisay.belachew@gmail.com\",\n   \"phone\": \"251-917-123456\",\n     \"userType\": \"passenger\",\n     \"createdAt\": \"2018-02-12T09:19:23.300Z\",\n     \"modifiedAt\": \"2018-02-12T09:19:23.300Z\"\n },\n {\n     \"_id\": \"5a8159adf15a7618040ac938\",\n     \"email\": \"chuchu.belachew@gmail.com\",\n     \"phone\": \"251-917-123456\",\n     \"userType\": \"passenger\",\n     \"createdAt\": \"2018-02-12T09:09:01.240Z\",\n     \"modifiedAt\": \"2018-02-12T09:09:01.240Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/Users/login",
    "title": "login User",
    "name": "LoginUser",
    "group": "User",
    "description": "<p>Login registerd User</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "\n{\n\"email\" : \"evana.mangato@gmail.com\",\n \"password\" : \"TestPassword@123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "\n{\n \"_id\": \"5a845264c73ad33fbc6037a4\",\n \"email\": \"evana.mangato@gmail.com\",\n \"phone\": \"251-917-123456\",\n \"userType\": \"passenger\",\n \"createdAt\": \"2018-02-14T15:14:44.974Z\",\n \"modifiedAt\": \"2018-02-14T15:14:44.974Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Authentication",
            "description": "<p>error { &quot;MESSAGE&quot;: &quot;ACCESS FORBID&quot; }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/Users/:userId",
    "title": "get User",
    "name": "findById",
    "group": "User",
    "description": "<p>find user by id</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "{{url}}/users/5a845264c73ad33fbc6037a4\n{\n \"_id\": \"5a845264c73ad33fbc6037a4\",\n \"email\": \"evana.mangato@gmail.com\",\n \"phone\": \"251-917-123456\",\n \"userType\": \"passenger\",\n \"createdAt\": \"2018-02-14T15:14:44.974Z\",\n \"modifiedAt\": \"2018-02-14T15:14:44.974Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not",
            "description": "<p>found error { &quot;ERROR&quot;: &quot;NO USER FOUND&quot; }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/Users/:userId",
    "title": "update User",
    "name": "update",
    "group": "User",
    "description": "<p>update user info</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "{\n   \"_id\": \"5a845264c73ad33fbc6037a4\",\n   \"email\": \"evana.mangato@gmail.com\",\n   \"phone\": \"251-917-123456\",\n   \"userType\": \"admin\",\n   \"createdAt\": \"2018-02-14T15:14:44.974Z\",\n   \"modifiedAt\": \"2018-02-14T15:14:44.974Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  }
] });
