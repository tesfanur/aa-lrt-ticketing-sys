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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/faqs/paginate",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/faqs/:id",
    "title": "Get Faq",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/faqs/:desc",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
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
    "type": "GET",
    "url": "/stations/",
    "title": "find all stations",
    "name": "FindAllStations",
    "group": "Station",
    "description": "<p>list all registerd Stations</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "\n{\n \"stationCount\": 56,\n \"stations\": [\n     {\n         \"_id\": \"5a96591a2d8b790b8c9bc243\",\n         \"createdBy\": {\n             \"_id\": \"5a8157014d99ed52700bc99f\",\n             \"email\": \"ayele.gobeze@gmail.com\",\n             \"phone\": \"251-917-123456\",\n             \"userType\": \"passenger\",\n             \"createdAt\": \"2018-02-12T08:57:00.000Z\",\n             \"modifiedAt\": \"2018-02-12T08:57:00.000Z\"\n         },\n         \"stationId\": 10200509513304,\n         \"name\": \"Gurd Shola 1211\",\n         \"route\": \"EW\",\n         \"longitude\": 38.8139838,\n         \"latitude\": 9.0158921,\n         \"createdAt\": \"28-Feb-2018 10:24 AM\",\n         \"modifiedAt\": \"28-Feb-2018 10:24 AM\",\n         \"request\": {\n             \"method\": \"GET\",\n             \"url\": \"http://localhost/stations\"\n         }\n     },\n  {\n           \"_id\": \"5a83e4c24f018d281460fb9d\",\n           \"createdBy\": {\n               \"_id\": \"5a80496050df3044fcf084fd\",\n               \"email\": \"tarikuwa.abeje@gmail.com\",\n               \"phone\": \"251-917-123456\",\n               \"userType\": \"passenger\",\n               \"createdAt\": \"2018-02-11T13:47:00.000Z\",\n               \"modifiedAt\": \"2018-02-11T13:47:00.000Z\"\n           },\n           \"stationId\": 19,\n           \"name\": \"Megenagna\",\n           \"route\": \"EW\",\n           \"longitude\": 38.8024029,\n           \"latitude\": 9.0204692,\n           \"createdAt\": \"14-Feb-2018 10:26 AM\",\n           \"modifiedAt\": \"14-Feb-2018 10:26 AM\",\n           \"request\": {\n               \"method\": \"GET\",\n               \"url\": \"http://localhost/stations\"\n           }\n       }\n]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of train Station</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "createdBy",
            "description": "<p>The name of admin user who created the Station</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stationId",
            "description": "<p>custom Unique id of train Station(the first digit refers to route. 1 for EW &amp; 2 for NS route)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route of train Station</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of train station</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of train sation</p>"
          }
        ]
      }
    },
    "filename": "routes/station.js",
    "groupTitle": "Station",
    "error": {
      "examples": [
        {
          "title": "Sation-Not-Found-Response:",
          "content": "{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/stations/paginate",
    "title": "List all stations and Paginate",
    "name": "FindAllStationsAndPaginate",
    "group": "Station",
    "description": "<p>list all registerd Stations by pagination</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "\n{\n \"page\": 1,\n    \"total_docs\": 56,\n    \"total_pages\": 6,\n    \"per_page\": 10,\n    \"docs\": [\n     {\n         \"_id\": \"5a96591a2d8b790b8c9bc243\",\n         \"createdBy\": {\n             \"_id\": \"5a8157014d99ed52700bc99f\",\n             \"email\": \"ayele.gobeze@gmail.com\",\n             \"phone\": \"251-917-123456\",\n             \"userType\": \"passenger\",\n             \"createdAt\": \"2018-02-12T08:57:00.000Z\",\n             \"modifiedAt\": \"2018-02-12T08:57:00.000Z\"\n         },\n         \"stationId\": 10200509513304,\n         \"name\": \"Gurd Shola 1211\",\n         \"route\": \"EW\",\n         \"longitude\": 38.8139838,\n         \"latitude\": 9.0158921,\n         \"createdAt\": \"28-Feb-2018 10:24 AM\",\n         \"modifiedAt\": \"28-Feb-2018 10:24 AM\",\n         \"request\": {\n             \"method\": \"GET\",\n             \"url\": \"http://localhost/stations\"\n         }\n     },\n  {\n           \"_id\": \"5a83e4c24f018d281460fb9d\",\n           \"createdBy\": {\n               \"_id\": \"5a80496050df3044fcf084fd\",\n               \"email\": \"tarikuwa.abeje@gmail.com\",\n               \"phone\": \"251-917-123456\",\n               \"userType\": \"passenger\",\n               \"createdAt\": \"2018-02-11T13:47:00.000Z\",\n               \"modifiedAt\": \"2018-02-11T13:47:00.000Z\"\n           },\n           \"stationId\": 19,\n           \"name\": \"Megenagna\",\n           \"route\": \"EW\",\n           \"longitude\": 38.8024029,\n           \"latitude\": 9.0204692,\n           \"createdAt\": \"14-Feb-2018 10:26 AM\",\n           \"modifiedAt\": \"14-Feb-2018 10:26 AM\",\n           \"request\": {\n               \"method\": \"GET\",\n               \"url\": \"http://localhost/stations\"\n           }\n       }\n]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of train Station</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "createdBy",
            "description": "<p>The name of admin user who created the Station</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stationId",
            "description": "<p>custom Unique id of train Station(the first digit refers to route. 1 for EW &amp; 2 for NS route)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route of train Station</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of train station</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of train sation</p>"
          }
        ]
      }
    },
    "filename": "routes/station.js",
    "groupTitle": "Station",
    "error": {
      "examples": [
        {
          "title": "Sation-Not-Found-Response:",
          "content": "{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/stations/:id",
    "title": "Get Station By Id",
    "version": "0.1.0",
    "name": "GetStation",
    "group": "Station",
    "permission": [
      {
        "name": "authenticated user\n\n\nhttp://localhost:5000/stations/5a478c962698af267483b1ee"
      }
    ],
    "description": "<p>Retrieve station by their Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The station id</p>"
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
            "description": "<p>The station id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The station name</p>"
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
    "filename": "routes/station.js",
    "groupTitle": "Station",
    "error": {
      "examples": [
        {
          "title": "Invalid-Sation-Id-Response:",
          "content": "{\n    \"message\": \"Station Id is not valid\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Sation-Not-Found-Response:",
          "content": "{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/stations/search/:name",
    "title": "Search Station",
    "version": "0.1.0",
    "name": "SearchStation",
    "group": "Station",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>Search station by their name</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The station id</p>"
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
            "description": "<p>The station id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The station name</p>"
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
    "filename": "routes/station.js",
    "groupTitle": "Station",
    "error": {
      "examples": [
        {
          "title": "Sation-Not-Found-Response:",
          "content": "{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/stations/:id",
    "title": "Delete Station",
    "name": "deleteStation",
    "group": "Station",
    "description": "<p>deletes a user</p>",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n{\n  \"id\": \"5a96591a2d8b790b8c9bc243\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/station.js",
    "groupTitle": "Station",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of train Station</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "createdBy",
            "description": "<p>The name of admin user who created the Station</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stationId",
            "description": "<p>custom Unique id of train Station(the first digit refers to route. 1 for EW &amp; 2 for NS route)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route of train Station</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of train station</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of train sation</p>"
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
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/stations/:cid",
    "title": "Find Station By custom Id",
    "version": "0.1.0",
    "name": "findStation",
    "group": "Station",
    "permission": [
      {
        "name": "authenticated user\n\n\nhttp://localhost:5000/stations/211"
      }
    ],
    "description": "<p>Find station by their custom Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The station id</p>"
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
            "description": "<p>The station id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The station name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "  HTTPS 200 OK\n{\n    \"_id\": \"5a8415c0542c19147c03c52f\",\n    \"createdBy\": {\n        \"_id\": \"5a80496050df3044fcf084fd\",\n        \"email\": \"tarikuwa.abeje@gmail.com\",\n        \"phone\": \"251-917-123456\",\n        \"userType\": \"passenger\",\n        \"createdAt\": \"2018-02-11T13:47:00.000Z\",\n        \"modifiedAt\": \"2018-02-11T13:47:00.000Z\"\n    },\n    \"stationId\": 211,\n    \"name\": \"Nefas Silik 2\",\n    \"route\": \"NS\",\n    \"longitude\": 38.7614768999999,\n    \"latitude\": 9.0109684,\n    \"createdAt\": \"14-Feb-2018 01:56 PM\",\n    \"modifiedAt\": \"14-Feb-2018 01:56 PM\",\n    \"request\": {\n        \"method\": \"GET\",\n        \"url\": \"http://localhost/stations/customid/211\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/station.js",
    "groupTitle": "Station",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/stations/",
    "title": "Create station",
    "name": "postStation",
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
            "description": "<p>The name of train Station</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stationId",
            "description": "<p>custom Unique id of train Station</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route of train Station</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of train station</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of train sation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n{\n \"stationId\": \"17\",\n \"name\": \"Gurd Shola 1211\",\n \"latitude\":9.0158921,\n \"longitude\": 38.8139838,\n \"route\" :\"EW\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "\n{\n  \"_id\": \"5a96591a2d8b790b8c9bc243\",\n  \"createdBy\": \"5a8157014d99ed52700bc99f\",\n  \"stationId\": 10200509513304,\n  \"name\": \"Gurd Shola 2\",\n  \"route\": \"EW\",\n  \"longitude\": 38.8139838,\n  \"latitude\": 9.0158921,\n  \"createdAt\": \"28-Feb-2018 10:24 AM\",\n  \"modifiedAt\": \"28-Feb-2018 10:24 AM\",\n  \"request\": {\n      \"method\": \"POST\",\n      \"url\": \"http://localhost/stations\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of train Station</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "createdBy",
            "description": "<p>The name of admin user who created the Station</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "stationId",
            "description": "<p>custom Unique id of train Station(the first digit refers to route. 1 for EW &amp; 2 for NS route)</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route of train Station</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of train station</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of train sation</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/station.js",
    "groupTitle": "Station"
  },
  {
    "type": "put",
    "url": "/stations/:id",
    "title": "Update Station",
    "name": "putStation",
    "group": "Station",
    "description": "<p>Update Station</p>",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n  \"id\": \"5a83fa1b1104c34bd8a66e72\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "{\n \"_id\": \"5a83fa1b1104c34bd8a66e72\",\n \"createdBy\": \"5a80496050df3044fcf084fd\",\n \"stationId\": 27,\n \"name\": \"Abo Junction\",\n \"route\": \"NS\",\n \"longitude\": 38.7706822,\n \"latitude\": 8.9451405,\n \"createdAt\": \"14-Feb-2018 11:58 AM\",\n \"modifiedAt\": \"28-Feb-2018 11:19 AM\",\n \"request\": {\n     \"method\": \"PUT\",\n     \"url\": \"http://localhost/stations/5a83fa1b1104c34bd8a66e72\"\n }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of train Station</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "createdBy",
            "description": "<p>The name of admin user who created the Station</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stationId",
            "description": "<p>custom Unique id of train Station(the first digit refers to route. 1 for EW &amp; 2 for NS route)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route of train Station</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of train station</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of train sation</p>"
          }
        ]
      }
    },
    "filename": "routes/station.js",
    "groupTitle": "Station",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
          "type": "json"
        }
      ]
    }
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
            "description": "<p>User's email address</p>"
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
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwtwebtoken is generated &amp; is set to header</p>"
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
            "description": "<p>User's Auto generated mongodb Object Unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>User's Type/Role, default value: passenger</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User's registration date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedAt",
            "description": "<p>User's info delete date time</p>"
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token value</p>"
          }
        ]
      }
    },
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
            "description": "<p>User's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>User's Type/Role, default value: passenger</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User's registration date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedAt",
            "description": "<p>User's info delete date time</p>"
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
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
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwtwebtoken is generated &amp; set to header</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>User's Auto generated mongodb Object Unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>User's Type/Role, default value: passenger</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User's registration date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedAt",
            "description": "<p>User's info delete date time</p>"
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
          "type": "json"
        }
      ]
    }
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
            "description": "<p>User's Auto generated mongodb Object Unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>User's Type/Role, default value: passenger</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User's registration date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedAt",
            "description": "<p>User's info delete date time</p>"
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/Users/:userId",
    "title": "Update User",
    "name": "putUser",
    "group": "User",
    "description": "<p>Update user info</p>",
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
            "description": "<p>User's Auto generated mongodb Object Unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>User's Type/Role, default value: passenger</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User's registration date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedAt",
            "description": "<p>User's info delete date time</p>"
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access forbidden\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
