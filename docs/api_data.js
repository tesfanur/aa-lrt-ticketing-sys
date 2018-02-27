define({ "api": [
  {
    "type": "post",
    "url": "/faqs",
    "title": "Create Faq",
    "version": "0.1.0",
    "name": "CreateFaq",
    "group": "Faq",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>create frequently asked question</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>The question description</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n \"question\":{\n   \"description\" :\"Is there any charter train for special events\"\n }\n}\n\n$http.defaults.headers.common[\"Authorization\"] = token;\n$http.post(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "question.description",
            "description": "<p>Faq created question apiUse UserSuccess</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "    HTTPS 201 OK\n{\n\"_id\": \"5a957763f45a380610389b8e\",\n\"answer\": {\n   \"modifiedAt\": \"2018-02-27T15:21:07.212Z\",\n   \"createdAt\": \"2018-02-27T15:21:07.212Z\",\n   \"description\": \"Not answerd yet\"\n},\n\"question\": {\n   \"description\": \"Is there any charter train for special events\",\n   \"askedBy\": \"5a8157014d99ed52700bc99f\",\n   \"modifiedAt\": \"2018-02-27T15:21:07.212Z\",\n   \"createdAt\": \"2018-02-27T15:21:07.212Z\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/faq.js",
    "groupTitle": "Faq",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access is forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/faq/:id",
    "title": "Delete a faq",
    "version": "0.1.0",
    "name": "DeleteFaq",
    "group": "Faq",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>Delete frequently asked question by Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The faq id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "$http.defaults.headers.common[\"Authorization\"] = token;\n$http.delete(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Faq deleted successfully!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 200 OK\n {\n  \"message\": \"Faq deleted successfully!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/faq.js",
    "groupTitle": "Faq",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access is forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/faqs",
    "title": "Paginate Faqs",
    "version": "0.1.0",
    "name": "GetAll",
    "group": "Faq",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>list all frequently asked question by pagination</p>",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "$http.defaults.headers.common[\"Authorization\"] = token;\n$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());\n\napiUse UserSuccess",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The faq id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The faq name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n[{\n  \"_id\": \"57e8e94ea06a0c473bac50cc\",\n  \"name\": \"Do the disehs\"\n },\n {\n  \"_id\": \"57e903941ca43a5f0805ba5a\",\n  \"name\": \"Take out the trash\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/faq.js",
    "groupTitle": "Faq",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access is forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/faqs",
    "title": "Get Faqs",
    "version": "0.1.0",
    "name": "GetAllFaqs",
    "group": "Faq",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>list all frequently asked questions</p>",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "$http.defaults.headers.common[\"Authorization\"] = token;\n$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());\n\napiUse UserSuccess",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The faq id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The faq name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n[{\n  \"_id\": \"57e8e94ea06a0c473bac50cc\",\n  \"name\": \"Do the disehs\"\n },\n {\n  \"_id\": \"57e903941ca43a5f0805ba5a\",\n  \"name\": \"Take out the trash\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/faq.js",
    "groupTitle": "Faq",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access is forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/faqs/:id",
    "title": "Find Faq",
    "version": "0.1.0",
    "name": "GetFaq",
    "group": "Faq",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>Retrieve frequently asked question by Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The faq id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "$http.defaults.headers.common[\"Authorization\"] = token;\n$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The faq id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The faq name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n   \"_id\": \"57e8e94ea06a0c473bac50cc\",\n   \"name\": \"Do the disehs\",\n   \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/faq.js",
    "groupTitle": "Faq",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access is forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/faqs/:id",
    "title": "Search Faq",
    "version": "0.1.0",
    "name": "SearchFaq",
    "group": "Faq",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>find frequently asked question by description</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The faq id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "$http.defaults.headers.common[\"Authorization\"] = token;\n$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The faq id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The faq name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n   \"_id\": \"57e8e94ea06a0c473bac50cc\",\n   \"name\": \"Do the disehs\",\n   \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/faq.js",
    "groupTitle": "Faq",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access is forbidden\"\n}",
          "type": "json"
        }
      ]
    }
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
          "content": "\nurl/faqs/5a478c962698af267483b1ee",
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
    "url": "/fares/",
    "title": "Create fare",
    "name": "CreateFare",
    "group": "Fare",
    "description": "<p>Creates a new Fare</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the Fare</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the Fare</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address of the Fare</p>"
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
          "content": "\n{\n\t\"email\": \"evana.magato@hotmail.com\",\n\t\"password\": \"password\",\n\t\"firstName\": \"John\",\n\t\"lastName\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "\n{\n  \"_id\": \"5a478c962698af267483b1ee\",\n  \"email\": \"evana.magato@hotmail.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"dateCreated\": \"2017-12-30T12:54:46.419Z\",\n  \"lastModified\": \"2017-12-30T12:54:46.419Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/fare.js",
    "groupTitle": "Fare"
  },
  {
    "type": "DELETE",
    "url": "/fares/:id",
    "title": "Delete Fare",
    "name": "DeleteFares",
    "group": "Fare",
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
    "groupTitle": "Fare"
  },
  {
    "type": "DELETE",
    "url": "/fares/:id",
    "title": "Delete Fare",
    "name": "DeleteFares",
    "group": "Fare",
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
    "groupTitle": "Fare"
  },
  {
    "type": "DELETE",
    "url": "/fares/:id",
    "title": "Delete Fare",
    "name": "DeleteFares",
    "group": "Fare",
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
    "groupTitle": "Fare"
  },
  {
    "type": "DELETE",
    "url": "/fares/:id",
    "title": "Delete Fare",
    "name": "DeleteFares",
    "group": "Fare",
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
    "groupTitle": "Fare"
  },
  {
    "type": "DELETE",
    "url": "/fares/:id",
    "title": "Delete Fare",
    "name": "DeleteFares",
    "group": "Fare",
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
    "groupTitle": "Fare"
  },
  {
    "type": "DELETE",
    "url": "/fares/:id",
    "title": "Delete Fare",
    "name": "DeleteFares",
    "group": "Fare",
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
    "groupTitle": "Fare"
  },
  {
    "type": "GET",
    "url": "/fares/:id",
    "title": "Get Fare",
    "name": "GetFare",
    "group": "Fare",
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
    "groupTitle": "Fare"
  },
  {
    "type": "GET",
    "url": "/fares/",
    "title": "Get Fares",
    "name": "GetFares",
    "group": "Fare",
    "version": "0.0.0",
    "filename": "routes/fare.js",
    "groupTitle": "Fare"
  },
  {
    "type": "GET",
    "url": "/fares/paginate",
    "title": "Fare Paginate",
    "name": "GetFaresPaginate",
    "group": "Fare",
    "version": "0.0.0",
    "filename": "routes/fare.js",
    "groupTitle": "Fare"
  },
  {
    "type": "PUT",
    "url": "/fares/search",
    "title": "Search Fare",
    "name": "SearchFares",
    "group": "Fare",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\n{\"email\": \"evana.magato@hotmail.com\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/fare.js",
    "groupTitle": "Fare"
  },
  {
    "type": "UPDATE",
    "url": "/fares/:id",
    "title": "Update Fare",
    "name": "UpdateFares",
    "group": "Fare",
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
    "groupTitle": "Fare"
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
          "content": "\n{\n  \"_id\": \"5a478c962698af267483b1ee\",\n  \"email\": \"evana.magato@hotmail.com\",\n  \"firstName\": \"Evana\",\n  \"lastName\": \"Mangato\",\n  \"dateCreated\": \"2017-12-30T12:54:46.419Z\",\n  \"lastModified\": \"2017-12-30T12:54:46.419Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/station.js",
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
          "content": "\n{\"email\": \"evana.magato@hotmail.com\"}",
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
    "type": "POST",
    "url": "/tickets/",
    "title": "Create ticket",
    "name": "CreateTicket",
    "group": "Ticket",
    "description": "<p>Creates a new Ticket</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Ticket</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ticketId",
            "description": "<p>The last name of the Ticket</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route of the Ticket</p>"
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
          "content": "\n{\n  \"_id\": \"5a478c962698af267483b1ee\",\n  \"email\": \"john1@aksum.com\",\n  \"firstName\": \"Evana\",\n  \"lastName\": \"Mangato\",\n  \"dateCreated\": \"2017-12-30T12:54:46.419Z\",\n  \"lastModified\": \"2017-12-30T12:54:46.419Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/ticket.js",
    "groupTitle": "Ticket"
  },
  {
    "type": "DELETE",
    "url": "/tickets/:id",
    "title": "Delete Ticket",
    "name": "DeleteTickets",
    "group": "Ticket",
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
    "groupTitle": "Ticket"
  },
  {
    "type": "DELETE",
    "url": "/tickets/:id",
    "title": "Delete Ticket",
    "name": "DeleteTickets",
    "group": "Ticket",
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
    "groupTitle": "Ticket"
  },
  {
    "type": "GET",
    "url": "/tickets/:id",
    "title": "Get Ticket",
    "name": "GetTicket",
    "group": "Ticket",
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
    "groupTitle": "Ticket"
  },
  {
    "type": "GET",
    "url": "/tickets/",
    "title": "Get Tickets",
    "name": "GetTickets",
    "group": "Ticket",
    "version": "0.0.0",
    "filename": "routes/ticket.js",
    "groupTitle": "Ticket"
  },
  {
    "type": "GET",
    "url": "/tickets/paginate",
    "title": "Ticket Paginate",
    "name": "GetTicketsPaginate",
    "group": "Ticket",
    "version": "0.0.0",
    "filename": "routes/ticket.js",
    "groupTitle": "Ticket"
  },
  {
    "type": "UPDATE",
    "url": "/tickets/:id",
    "title": "Update Ticket",
    "name": "UpdateTickets",
    "group": "Ticket",
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
    "groupTitle": "Ticket"
  },
  {
    "type": "post",
    "url": "/users/signup",
    "title": "Signup User",
    "name": "CreateUser",
    "group": "User",
    "description": "<p>Creates a New User</p>",
    "version": "0.1.0",
    "permission": [
      {
        "name": "none"
      }
    ],
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
            "field": "confirmPassword",
            "description": "<p>User's password confirmation</p>"
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
          "content": "   HTTPS 201 OK\n{\n  \"email\" : \"evana.mangato@gmail.com\",\n \"password\" : \"TestPassword@123\",\n \"confirmPassword\":\"TestPassword@123\",\n \"phone\":\"251-917-123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "json",
            "optional": false,
            "field": "User",
            "description": "<p>User's registration info</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User's Object id</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>User's user type/role</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User's registeration date time</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "modifiedAt",
            "description": "<p>User's data update date time</p>"
          }
        ]
      },
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
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/Users/",
    "title": "find all users",
    "name": "FindAllUsers",
    "group": "User",
    "description": "<p>list all registerd Users</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "\n[\n {\n     \"_id\": \"5a845264c73ad33fbc6037a4\",\n     \"email\": \"evana.mangato@gmail.com\",\n     \"phone\": \"251-917-123456\",\n     \"userType\": \"passenger\",\n     \"createdAt\": \"2018-02-14T15:14:44.974Z\",\n     \"modifiedAt\": \"2018-02-14T15:14:44.974Z\"\n },\n {\n     \"_id\": \"5a84482ea9348b46d4fc17ba\",\n     \"email\": \"Esubalew.belachew@gmail.com\",\n     \"phone\": \"251-917-123456\",\n     \"userType\": \"passenger\",\n     \"createdAt\": \"2018-02-14T14:31:10.928Z\",\n     \"modifiedAt\": \"2018-02-14T14:31:10.928Z\"\n },\n {\n     \"_id\": \"5a81dbf050e5800d5c2c0019\",\n     \"email\": \"tesfayee.belachew@gmail.com\",\n     \"phone\": \"251-917-123456\",\n     \"userType\": \"passenger\",\n     \"createdAt\": \"2018-02-12T18:24:48.136Z\",\n     \"modifiedAt\": \"2018-02-12T18:24:48.136Z\"\n },\n {\n     \"_id\": \"5a815c1b205e0c14546476f6\",\n     \"email\": \"sisay.belachew@gmail.com\",\n   \"phone\": \"251-917-123456\",\n     \"userType\": \"passenger\",\n     \"createdAt\": \"2018-02-12T09:19:23.300Z\",\n     \"modifiedAt\": \"2018-02-12T09:19:23.300Z\"\n },\n {\n     \"_id\": \"5a8159adf15a7618040ac938\",\n     \"email\": \"chuchu.belachew@gmail.com\",\n     \"phone\": \"251-917-123456\",\n     \"userType\": \"passenger\",\n     \"createdAt\": \"2018-02-12T09:09:01.240Z\",\n     \"modifiedAt\": \"2018-02-12T09:09:01.240Z\"\n }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>User Auto generated mongodb object Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>User Type/Role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User registration date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedAt",
            "description": "<p>User info delete date time</p>"
          }
        ]
      }
    },
    "filename": "routes/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access is forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/Users/:userId",
    "title": "Get User",
    "name": "GetUser",
    "group": "User",
    "description": "<p>find user by id</p>",
    "version": "0.1.0",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "$http.defaults.headers.common[\"Authorization\"] = token;\n$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>User Type/Role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User registration date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedAt",
            "description": "<p>User info delete date time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example",
          "content": "    HTTPS 200 OK\n{\n \"_id\": \"5a845264c73ad33fbc6037a4\",\n \"email\": \"evana.mangato@gmail.com\",\n \"phone\": \"251-917-123456\",\n \"userType\": \"passenger\",\n \"createdAt\": \"2018-02-14T15:14:44.974Z\",\n \"modifiedAt\": \"2018-02-14T15:14:44.974Z\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The User id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "not",
            "description": "<p>found error { &quot;ERROR&quot;: &quot;NO USER FOUND&quot; }</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access is forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/Users/login",
    "title": "Login User",
    "name": "LoginUser",
    "group": "User",
    "description": "<p>Allows registerd users to login</p>",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address</p>"
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "User",
            "description": "<p>User's registration info</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>User Auto generated mongodb object Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>User Type/Role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User registration date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedAt",
            "description": "<p>User info delete date time</p>"
          }
        ]
      },
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
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/Users/:userId",
    "title": "Delete User",
    "name": "delete",
    "group": "User",
    "description": "<p>deletes a user</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "{\n   \"_id\": \"5a845264c73ad33fbc6037a4\",\n   \"email\": \"evana.mangato@gmail.com\",\n   \"phone\": \"251-917-123456\",\n   \"userType\": \"admin\",\n   \"createdAt\": \"2018-02-14T15:14:44.974Z\",\n   \"modifiedAt\": \"2018-02-14T15:14:44.974Z\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>User Auto generated mongodb object Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>User Type/Role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User registration date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedAt",
            "description": "<p>User info delete date time</p>"
          }
        ]
      }
    },
    "filename": "routes/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access is forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/Users/:userId",
    "title": "update User",
    "name": "update",
    "group": "User",
    "description": "<p>update user info</p>",
    "version": "0.1.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "{\n   \"_id\": \"5a845264c73ad33fbc6037a4\",\n   \"email\": \"evana.mangato@gmail.com\",\n   \"phone\": \"251-917-123456\",\n   \"userType\": \"admin\",\n   \"createdAt\": \"2018-02-14T15:14:44.974Z\",\n   \"modifiedAt\": \"2018-02-14T15:14:44.974Z\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>User Auto generated mongodb object Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>User Type/Role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User registration date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedAt",
            "description": "<p>User info delete date time</p>"
          }
        ]
      }
    },
    "filename": "routes/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access is forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
