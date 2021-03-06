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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "question.description",
            "description": "<p>Description of faq question</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n \"question\":{\n   \"description\" :\"Is there any charter train for special events\"\n }\n}\n\n$http.header(\"Authorization\") = jwtwebtoken;",
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
            "description": "<p>Faq description of the question</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>Faq Auto generated mongodb object Id</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>Faq Question Object</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "question.askedBy",
            "description": "<p>Faq author of description of the Question</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "question.createdAt",
            "description": "<p>Faq Question's creation date time</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "question.modifiedAt",
            "description": "<p>Faq Question's editing date time</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "answer",
            "description": "<p>Faq Answer Object</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "answer.description",
            "description": "<p>Faq description of the Question</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "answer.answerdBy",
            "description": "<p>Faq author of answer for the Question</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "answer.createdAt",
            "description": "<p>Faq Answer's creation date time</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "answer.modifiedAt",
            "description": "<p>Faq Answer's editing date time</p>"
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/faqs/:id",
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
        "content": "$http.header.(\"Authorization\") = jwtwebtoken;",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
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
        "content": "$http.header(\"Authorization\") = jwtwebtoken;",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"page\": 1,\n  \"total_docs\": 8,\n  \"total_pages\": 1,\n  \"per_page\": 10,\n  \"docs\": [\n      {\n          \"_id\": \"5a92752a45475524e0619b03\",\n          \"__v\": 0,\n          \"answer\": {\n              \"modifiedAt\": \"2018-02-25T08:34:50.743Z\",\n              \"createdAt\": \"2018-02-25T08:34:50.743Z\",\n              \"description\": \"Not answerd yet\"\n          },\n          \"question\": {\n              \"description\": \"How long your service stay during the evening?\",\n              \"askedBy\": \"5a8157014d99ed52700bc99f\",\n              \"modifiedAt\": \"2018-02-25T08:34:50.743Z\",\n              \"createdAt\": \"2018-02-25T08:34:50.743Z\"\n          }\n      },\n      {\n          \"_id\": \"5a9279a25bebbd257805293b\",\n          \"__v\": 0,\n          \"answer\": {\n              \"modifiedAt\": \"2018-02-25T08:53:54.404Z\",\n              \"createdAt\": \"2018-02-25T08:53:54.404Z\",\n              \"description\": \"Not answerd yet\"\n          },\n          \"question\": {\n              \"description\": \"At what time is train service starts?\",\n              \"askedBy\": \"5a8157014d99ed52700bc99f\",\n              \"modifiedAt\": \"2018-02-25T08:53:54.404Z\",\n              \"createdAt\": \"2018-02-25T08:53:54.404Z\"\n          }\n      },\n      {\n          \"_id\": \"5a927aa89a08a935dc02634d\",\n          \"__v\": 0,\n          \"answer\": {\n              \"modifiedAt\": \"2018-02-25T08:58:16.609Z\",\n              \"createdAt\": \"2018-02-25T08:58:16.609Z\",\n              \"description\": \"Not answerd yet\"\n          },\n          \"question\": {\n              \"description\": \"At what time is train service starts?\",\n              \"askedBy\": \"5a8157014d99ed52700bc99f\",\n              \"modifiedAt\": \"2018-02-25T08:58:16.609Z\",\n              \"createdAt\": \"2018-02-25T08:58:16.609Z\"\n          }\n      },\n      {\n          \"_id\": \"5a927ae5419ffa2c50ab62c3\",\n          \"__v\": 0,\n          \"answer\": {\n              \"modifiedAt\": \"2018-02-25T08:59:17.009Z\",\n              \"createdAt\": \"2018-02-25T08:59:17.009Z\",\n              \"description\": \"Not answerd yet\"\n          },\n          \"question\": {\n              \"description\": \"At what time is train service starts?\",\n              \"askedBy\": \"5a8157014d99ed52700bc99f\",\n              \"modifiedAt\": \"2018-02-25T08:59:17.009Z\",\n              \"createdAt\": \"2018-02-25T08:59:17.009Z\"\n          }\n      },\n      {\n          \"_id\": \"5a9292dc2023554038ff9f87\",\n          \"__v\": 0,\n          \"answer\": {\n              \"modifiedAt\": \"2018-02-25T10:41:32.663Z\",\n              \"createdAt\": \"2018-02-25T10:41:32.663Z\",\n              \"description\": \"Not answerd yet\"\n          },\n          \"question\": {\n              \"description\": \"Tesfaye Belachew Abebe\",\n              \"askedBy\": \"5a8157014d99ed52700bc99f\",\n              \"modifiedAt\": \"2018-02-25T10:41:32.663Z\",\n              \"createdAt\": \"2018-02-25T10:41:32.663Z\"\n          }\n      },\n      {\n          \"_id\": \"5a92b5f3f6b32946a899d127\",\n          \"__v\": 0,\n          \"answer\": {\n              \"modifiedAt\": \"2018-02-25T13:11:15.939Z\",\n              \"createdAt\": \"2018-02-25T13:11:15.939Z\",\n              \"description\": \"Not answerd yet\"\n          },\n          \"question\": {\n              \"description\": \"Is there any charter train for special events\",\n              \"askedBy\": \"5a8157014d99ed52700bc99f\",\n              \"modifiedAt\": \"2018-02-25T13:11:15.939Z\",\n              \"createdAt\": \"2018-02-25T13:11:15.939Z\"\n          }\n      }\n    ]",
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
            "description": "<p>Faq Auto generated mongodb object Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>Faq Question Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.description",
            "description": "<p>Faq description of the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.askedBy",
            "description": "<p>Faq author of description of the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "question.createdAt",
            "description": "<p>Faq Question's creation date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "question.modifiedAt",
            "description": "<p>Faq Question's editing date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "answer",
            "description": "<p>Faq Answer Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer.description",
            "description": "<p>Faq description of the Answer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer.answerdBy",
            "description": "<p>Faq author of answer for the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "answer.createdAt",
            "description": "<p>Faq Answer's creation date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "answer.modifiedAt",
            "description": "<p>Faq Answer's editing date time</p>"
          }
        ]
      }
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
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
        "content": "$http.header(\"Authorization\") = jwtwebtoken;\n\napiUse FaqSuccess",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "  HTTPS 200 OK\n  {\n    \"_id\": \"5a9292dc2023554038ff9f87\",\n    \"answer\": {\n        \"modifiedAt\": \"2018-02-25T10:41:32.663Z\",\n        \"createdAt\": \"2018-02-25T10:41:32.663Z\",\n        \"description\": \"Not answerd yet\"\n    },\n    \"question\": {\n        \"description\": \"Is there discount for children?\",\n        \"askedBy\": \"5a8157014d99ed52700bc99f\",\n        \"modifiedAt\": \"2018-02-25T10:41:32.663Z\",\n        \"createdAt\": \"2018-02-25T10:41:32.663Z\"\n    }\n}",
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
            "description": "<p>Faq Auto generated mongodb object Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>Faq Question Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.description",
            "description": "<p>Faq description of the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.askedBy",
            "description": "<p>Faq author of description of the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "question.createdAt",
            "description": "<p>Faq Question's creation date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "question.modifiedAt",
            "description": "<p>Faq Question's editing date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "answer",
            "description": "<p>Faq Answer Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer.description",
            "description": "<p>Faq description of the Answer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer.answerdBy",
            "description": "<p>Faq author of answer for the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "answer.createdAt",
            "description": "<p>Faq Answer's creation date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "answer.modifiedAt",
            "description": "<p>Faq Answer's editing date time</p>"
          }
        ]
      }
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
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
        "content": "$http.common(\"Authorization\") = jwtwebtoken;",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 200 OK\n{\n    \"_id\": \"5a92b72364f0582538373c70\",\n    \"__v\": 0,\n    \"answer\": {\n        \"modifiedAt\": \"2018-02-25T13:16:19.154Z\",\n        \"createdAt\": \"2018-02-25T13:16:19.154Z\",\n        \"description\": \"Not answerd yet\"\n    },\n    \"question\": {\n        \"description\": \"Is there any charter train for special events\",\n        \"askedBy\": \"5a8157014d99ed52700bc99f\",\n        \"modifiedAt\": \"2018-02-25T13:16:19.154Z\",\n        \"createdAt\": \"2018-02-25T13:16:19.154Z\"\n    }\n}",
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
            "description": "<p>Faq Auto generated mongodb object Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>Faq Question Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.description",
            "description": "<p>Faq description of the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.askedBy",
            "description": "<p>Faq author of description of the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "question.createdAt",
            "description": "<p>Faq Question's creation date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "question.modifiedAt",
            "description": "<p>Faq Question's editing date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "answer",
            "description": "<p>Faq Answer Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer.description",
            "description": "<p>Faq description of the Answer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer.answerdBy",
            "description": "<p>Faq author of answer for the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "answer.createdAt",
            "description": "<p>Faq Answer's creation date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "answer.modifiedAt",
            "description": "<p>Faq Answer's editing date time</p>"
          }
        ]
      }
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
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
        "content": "$http.header(\"Authorization\") = jwtwebtoken;",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 200 OK\n{\n    \"faqs\": [\n        {\n            \"_id\": \"5a92b5f3f6b32946a899d127\",\n            \"question\": {\n                \"askedBy\": {\n                    \"_id\": \"5a8157014d99ed52700bc99f\",\n                    \"email\": \"ayele.gobeze@gmail.com\",\n                    \"phone\": \"251-917-123456\",\n                    \"userType\": \"passenger\",\n                    \"createdAt\": \"2018-02-12T08:57:00.000Z\",\n                    \"modifiedAt\": \"2018-02-12T08:57:00.000Z\"\n                },\n                \"description\": \"Is there any charter train for special events\",\n                \"dateAsked\": \"25-Feb-2018 04:11 PM\"\n            },\n            \"answer\": {\n                \"description\": \"Not answerd yet\",\n                \"dateAnswerd\": \"25-Feb-2018 04:11 PM\"\n            },\n            \"request\": {\n                \"method\": \"GET\",\n                \"url\": \"http://localhost/faqs/search/charter\"\n            }\n        },\n        {\n            \"_id\": \"5a92b72364f0582538373c70\",\n            \"question\": {\n                \"askedBy\": {\n                    \"_id\": \"5a8157014d99ed52700bc99f\",\n                    \"email\": \"ayele.gobeze@gmail.com\",\n                    \"phone\": \"251-917-123456\",\n                    \"userType\": \"passenger\",\n                    \"createdAt\": \"2018-02-12T08:57:00.000Z\",\n                    \"modifiedAt\": \"2018-02-12T08:57:00.000Z\"\n                },\n                \"description\": \"Is there any charter train for special events\",\n                \"dateAsked\": \"25-Feb-2018 04:16 PM\"\n            },\n            \"answer\": {\n                \"description\": \"Not answerd yet\",\n                \"dateAnswerd\": \"25-Feb-2018 04:16 PM\"\n            },\n            \"request\": {\n                \"method\": \"GET\",\n                \"url\": \"http://localhost/faqs/search/charter\"\n            }\n        },\n        {\n            \"_id\": \"5a957763f45a380610389b8e\",\n            \"question\": {\n                \"askedBy\": {\n                    \"_id\": \"5a8157014d99ed52700bc99f\",\n                    \"email\": \"ayele.gobeze@gmail.com\",\n                    \"phone\": \"251-917-123456\",\n                    \"userType\": \"passenger\",\n                    \"createdAt\": \"2018-02-12T08:57:00.000Z\",\n                    \"modifiedAt\": \"2018-02-12T08:57:00.000Z\"\n                },\n                \"description\": \"Is there any charter train for special events\",\n                \"dateAsked\": \"27-Feb-2018 06:21 PM\"\n            },\n            \"answer\": {\n                \"description\": \"Not answerd yet\",\n                \"dateAnswerd\": \"27-Feb-2018 06:21 PM\"\n            },\n            \"request\": {\n                \"method\": \"GET\",\n                \"url\": \"http://localhost/faqs/search/charter\"\n            }\n        }\n    ]\n}",
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
            "description": "<p>Faq Auto generated mongodb object Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>Faq Question Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.description",
            "description": "<p>Faq description of the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.askedBy",
            "description": "<p>Faq author of description of the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "question.createdAt",
            "description": "<p>Faq Question's creation date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "question.modifiedAt",
            "description": "<p>Faq Question's editing date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "answer",
            "description": "<p>Faq Answer Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer.description",
            "description": "<p>Faq description of the Answer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer.answerdBy",
            "description": "<p>Faq author of answer for the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "answer.createdAt",
            "description": "<p>Faq Answer's creation date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "answer.modifiedAt",
            "description": "<p>Faq Answer's editing date time</p>"
          }
        ]
      }
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/faqs/:id",
    "title": "Update Faq",
    "name": "putFaq",
    "group": "Faq",
    "description": "<p>Update Faq</p>",
    "version": "0.1.0",
    "permission": [
      {
        "name": "passnger"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n  \"id\": \"5a8b5a4e7474781c44dfc65e\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "\n  {\n    \"_id\": \"5a92b72364f0582538373c70\",\n    \"question\": {\n        \"askedBy\": \"5a8157014d99ed52700bc99f\",\n        \"description\": \"Is there any charter train for special events?\",\n        \"dateAsked\": \"25-Feb-2018 04:16 PM\"\n    },\n    \"answer\": {\n        \"description\": \"Not answerd yet\",\n        \"dateAnswerd\": \"25-Feb-2018 04:16 PM\"\n    },\n    \"request\": {\n        \"method\": \"PUT\",\n        \"url\": \"http://localhost/faqs/5a92b72364f0582538373c70\"\n    }\n}",
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
            "description": "<p>Faq Auto generated mongodb object Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>Faq Question Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.description",
            "description": "<p>Faq description of the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.askedBy",
            "description": "<p>Faq author of description of the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "question.createdAt",
            "description": "<p>Faq Question's creation date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "question.modifiedAt",
            "description": "<p>Faq Question's editing date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "answer",
            "description": "<p>Faq Answer Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer.description",
            "description": "<p>Faq description of the Answer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer.answerdBy",
            "description": "<p>Faq author of answer for the Question</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "answer.createdAt",
            "description": "<p>Faq Answer's creation date time</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "answer.modifiedAt",
            "description": "<p>Faq Answer's editing date time</p>"
          }
        ]
      }
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/fares/",
    "title": "Find All Fares",
    "name": "FindAllFares",
    "group": "Fare",
    "description": "<p>List all registerd fares</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "\nHTTP 200 OK\n  {\n    \"total number of fare documents\": 41,\n    \"fares\": [\n        {\n            \"_id\": \"5a8590e0c7abd121e4b3e535\",\n            \"from\": {\n                \"_id\": \"5a83fa1b1104c34bd8a66e72\",\n                \"name\": \"Abo Junction\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a83fa591104c34bd8a66e74\",\n                \"name\": \"Saris\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 840,\n            \"fare\": 0.315\n        },\n        {\n            \"_id\": \"5a85933d615a3a47c831f311\",\n            \"from\": {\n                \"_id\": \"5a83fa591104c34bd8a66e74\",\n                \"name\": \"Saris\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a83fa851104c34bd8a66e76\",\n                \"name\": \"Adey Abeba\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 540,\n            \"fare\": 0.2025\n        },\n        {\n            \"_id\": \"5a8593c408ea5b545c02bcb1\",\n            \"from\": {\n                \"_id\": \"5a83fa851104c34bd8a66e76\",\n                \"name\": \"Adey Abeba\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a8415aa542c19147c03c52e\",\n                \"name\": \"Nefas Silik 1\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 995,\n            \"fare\": 0.373125\n        },\n        {\n            \"_id\": \"5a8593ed0311323b90e037d0\",\n            \"from\": {\n                \"_id\": \"5a8415aa542c19147c03c52e\",\n                \"name\": \"Nefas Silik 1\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a8415c0542c19147c03c52f\",\n                \"name\": \"Nefas Silik 2\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 861,\n            \"fare\": 0.322875\n        },\n        {\n            \"_id\": \"5a85943d0311323b90e037d1\",\n            \"from\": {\n                \"_id\": \"5a8415c0542c19147c03c52f\",\n                \"name\": \"Nefas Silik 2\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a8415d5542c19147c03c530\",\n                \"name\": \"Lancha\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 1972,\n            \"fare\": 0.7395\n        },\n        {\n            \"_id\": \"5a859575ab99be23d4ec1370\",\n            \"from\": {\n                \"_id\": \"5a8415d5542c19147c03c530\",\n                \"name\": \"Lancha\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a8415f6542c19147c03c531\",\n                \"name\": \"Riche\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 555,\n            \"fare\": 0.208125\n        },\n        {\n            \"_id\": \"5a85959dab99be23d4ec1371\",\n            \"from\": {\n                \"_id\": \"5a8415f6542c19147c03c531\",\n                \"name\": \"Riche\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a84160a542c19147c03c532\",\n                \"name\": \"Meshawalekya\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 610,\n            \"fare\": 0.22875\n        },\n        {\n            \"_id\": \"5a8595a6ab99be23d4ec1372\",\n            \"from\": {\n                \"_id\": \"5a84160a542c19147c03c532\",\n                \"name\": \"Meshawalekya\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a84161b542c19147c03c533\",\n                \"name\": \"Stadium\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 481,\n            \"fare\": 0.180375\n        },\n        {\n            \"_id\": \"5a8595b9ab99be23d4ec1373\",\n            \"from\": {\n                \"_id\": \"5a84161b542c19147c03c533\",\n                \"name\": \"Stadium\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a841626542c19147c03c534\",\n                \"name\": \"Leghar\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 908,\n            \"fare\": 0.3405\n        },\n        {\n            \"_id\": \"5a8595c3ab99be23d4ec1374\",\n            \"from\": {\n                \"_id\": \"5a841626542c19147c03c534\",\n                \"name\": \"Leghar\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a841635542c19147c03c535\",\n                \"name\": \"Mexico\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 435,\n            \"fare\": 0.163125\n        },\n        {\n            \"_id\": \"5a8595ccab99be23d4ec1375\",\n            \"from\": {\n                \"_id\": \"5a841635542c19147c03c535\",\n                \"name\": \"Mexico\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a841677542c19147c03c536\",\n                \"name\": \"Tegbared\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 569,\n            \"fare\": 0.213375\n        },\n        {\n            \"_id\": \"5a859609ab99be23d4ec1376\",\n            \"from\": {\n                \"_id\": \"5a841677542c19147c03c536\",\n                \"name\": \"Tegbared\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a841692542c19147c03c537\",\n                \"name\": \"St Lideta\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 691,\n            \"fare\": 0.259125\n        },\n        {\n            \"_id\": \"5a859613ab99be23d4ec1377\",\n            \"from\": {\n                \"_id\": \"5a841692542c19147c03c537\",\n                \"name\": \"St Lideta\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a84169c542c19147c03c538\",\n                \"name\": \"Darmar\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 733,\n            \"fare\": 0.274875\n        },\n        {\n            \"_id\": \"5a859624ab99be23d4ec1378\",\n            \"from\": {\n                \"_id\": \"5a84169c542c19147c03c538\",\n                \"name\": \"Darmar\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a8416a6542c19147c03c539\",\n                \"name\": \"Abnet\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 591,\n            \"fare\": 0.221625\n        },\n        {\n            \"_id\": \"5a859631ab99be23d4ec1379\",\n            \"from\": {\n                \"_id\": \"5a8416a6542c19147c03c539\",\n                \"name\": \"Abnet\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a8416b1542c19147c03c53a\",\n                \"name\": \"Sebategna\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 744,\n            \"fare\": 0.279\n        },\n        {\n            \"_id\": \"5a859646ab99be23d4ec137a\",\n            \"from\": {\n                \"_id\": \"5a8416b1542c19147c03c53a\",\n                \"name\": \"Sebategna\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a8416bd542c19147c03c53b\",\n                \"name\": \"Autobus Tera\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 861,\n            \"fare\": 0.322875\n        },\n        {\n            \"_id\": \"5a8596df6cc7600e089a86d3\",\n            \"from\": {\n                \"_id\": \"5a8416bd542c19147c03c53b\",\n                \"name\": \"Autobus Tera\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a8416cc542c19147c03c53c\",\n                \"name\": \"Gojam Berenda\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 612,\n            \"fare\": 0.2295\n        },\n        {\n            \"_id\": \"5a8596eb6cc7600e089a86d4\",\n            \"from\": {\n                \"_id\": \"5a8416cc542c19147c03c53c\",\n                \"name\": \"Gojam Berenda\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a8416d6542c19147c03c53d\",\n                \"name\": \"Atikilit Tera\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 608,\n            \"fare\": 0.228\n        },\n        {\n            \"_id\": \"5a8596f66cc7600e089a86d5\",\n            \"from\": {\n                \"_id\": \"5a8416d6542c19147c03c53d\",\n                \"name\": \"Atikilit Tera\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a8416e2542c19147c03c53e\",\n                \"name\": \"Minilik II Square\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 945,\n            \"fare\": 0.354375\n        },\n        {\n            \"_id\": \"5a85979c6cc7600e089a86d6\",\n            \"from\": {\n                \"_id\": \"5a856a87e3319923bc22383e\",\n                \"name\": \"Ayat\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a74264fc461a418b08dae07\",\n                \"name\": \"Meri\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 1260,\n            \"fare\": 0.4725\n        },\n        {\n            \"_id\": \"5a8597a66cc7600e089a86d7\",\n            \"from\": {\n                \"_id\": \"5a74264fc461a418b08dae07\",\n                \"name\": \"Meri\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a7455be8e130d47c86a03f6\",\n                \"name\": \"CMC\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 1092,\n            \"fare\": 0.4095\n        },\n        {\n            \"_id\": \"5a8597b16cc7600e089a86d8\",\n            \"from\": {\n                \"_id\": \"5a7455be8e130d47c86a03f6\",\n                \"name\": \"CMC\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a7455ec8e130d47c86a03f7\",\n                \"name\": \"St Michael\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 863,\n            \"fare\": 0.323625\n        },\n        {\n            \"_id\": \"5a8597ba6cc7600e089a86d9\",\n            \"from\": {\n                \"_id\": \"5a7455ec8e130d47c86a03f7\",\n                \"name\": \"St Michael\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a7456388e130d47c86a03fa\",\n                \"name\": \"Civil Service College\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 860,\n            \"fare\": 0.3225\n        },\n        {\n            \"_id\": \"5a8597c36cc7600e089a86da\",\n            \"from\": {\n                \"_id\": \"5a7456388e130d47c86a03fa\",\n                \"name\": \"Civil Service College\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a7dfbfd06f32e2cb8deda25\",\n                \"name\": \"Management Institute\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 725,\n            \"fare\": 0.271875\n        },\n        {\n            \"_id\": \"5a8597cd6cc7600e089a86db\",\n            \"from\": {\n                \"_id\": \"5a7dfbfd06f32e2cb8deda25\",\n                \"name\": \"Management Institute\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a7dff23480f3643f41dfc9f\",\n                \"name\": \"Gurd Shola 1\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 970,\n            \"fare\": 0.36375\n        },\n        {\n            \"_id\": \"5a8597db6cc7600e089a86dc\",\n            \"from\": {\n                \"_id\": \"5a7dff23480f3643f41dfc9f\",\n                \"name\": \"Gurd Shola 1\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e46c4f018d281460fb9c\",\n                \"name\": \"Gurd Shola 2\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 1083,\n            \"fare\": 0.406125\n        },\n        {\n            \"_id\": \"5a8597e56cc7600e089a86dd\",\n            \"from\": {\n                \"_id\": \"5a83e46c4f018d281460fb9c\",\n                \"name\": \"Gurd Shola 2\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e4c24f018d281460fb9d\",\n                \"name\": \"Megenagna\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 804,\n            \"fare\": 0.3015\n        },\n        {\n            \"_id\": \"5a8597ef6cc7600e089a86de\",\n            \"from\": {\n                \"_id\": \"5a83e4c24f018d281460fb9d\",\n                \"name\": \"Megenagna\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e5064f018d281460fba0\",\n                \"name\": \"Lem Hotel\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 802,\n            \"fare\": 0.30075\n        },\n        {\n            \"_id\": \"5a8597f86cc7600e089a86df\",\n            \"from\": {\n                \"_id\": \"5a83e5064f018d281460fba0\",\n                \"name\": \"Lem Hotel\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e53d4f018d281460fba2\",\n                \"name\": \"Hayahulet 1\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 746,\n            \"fare\": 0.27975\n        },\n        {\n            \"_id\": \"5a8598026cc7600e089a86e0\",\n            \"from\": {\n                \"_id\": \"5a83e53d4f018d281460fba2\",\n                \"name\": \"Hayahulet 1\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e5cdabe26a1a1c0be0b8\",\n                \"name\": \"Hayahulet 2\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 770,\n            \"fare\": 0.28875\n        },\n        {\n            \"_id\": \"5a85980b6cc7600e089a86e1\",\n            \"from\": {\n                \"_id\": \"5a83e5cdabe26a1a1c0be0b8\",\n                \"name\": \"Hayahulet 2\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e5faabe26a1a1c0be0ba\",\n                \"name\": \"St Urael\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 952,\n            \"fare\": 0.357\n        },\n        {\n            \"_id\": \"5a8598156cc7600e089a86e2\",\n            \"from\": {\n                \"_id\": \"5a83e5faabe26a1a1c0be0ba\",\n                \"name\": \"St Urael\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e61eabe26a1a1c0be0bc\",\n                \"name\": \"Bambis\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 675,\n            \"fare\": 0.253125\n        },\n        {\n            \"_id\": \"5a85981f6cc7600e089a86e3\",\n            \"from\": {\n                \"_id\": \"5a83e61eabe26a1a1c0be0bc\",\n                \"name\": \"Bambis\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e659abe26a1a1c0be0be\",\n                \"name\": \"St Estifanos\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 583,\n            \"fare\": 0.218625\n        },\n        {\n            \"_id\": \"5a8598296cc7600e089a86e4\",\n            \"from\": {\n                \"_id\": \"5a83e659abe26a1a1c0be0be\",\n                \"name\": \"St Estifanos\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e683abe26a1a1c0be0c0\",\n                \"name\": \"Stadium\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 650,\n            \"fare\": 0.24375\n        },\n        {\n            \"_id\": \"5a8598386cc7600e089a86e5\",\n            \"from\": {\n                \"_id\": \"5a83e683abe26a1a1c0be0c0\",\n                \"name\": \"Stadium\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e6ababe26a1a1c0be0c2\",\n                \"name\": \"Leghar\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 435,\n            \"fare\": 0.163125\n        },\n        {\n            \"_id\": \"5a8598446cc7600e089a86e6\",\n            \"from\": {\n                \"_id\": \"5a83e6ababe26a1a1c0be0c2\",\n                \"name\": \"Leghar\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e6d2abe26a1a1c0be0c4\",\n                \"name\": \"Mexico\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 569,\n            \"fare\": 0.213375\n        },\n        {\n            \"_id\": \"5a85984e6cc7600e089a86e7\",\n            \"from\": {\n                \"_id\": \"5a83e6d2abe26a1a1c0be0c4\",\n                \"name\": \"Mexico\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e700abe26a1a1c0be0c6\",\n                \"name\": \"Tegbared\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 691,\n            \"fare\": 0.259125\n        },\n        {\n            \"_id\": \"5a8598586cc7600e089a86e8\",\n            \"from\": {\n                \"_id\": \"5a83e700abe26a1a1c0be0c6\",\n                \"name\": \"Tegbared\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e726abe26a1a1c0be0c8\",\n                \"name\": \"St Lideta\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 733,\n            \"fare\": 0.274875\n        },\n        {\n            \"_id\": \"5a8598606cc7600e089a86e9\",\n            \"from\": {\n                \"_id\": \"5a83e726abe26a1a1c0be0c8\",\n                \"name\": \"St Lideta\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e74eabe26a1a1c0be0ca\",\n                \"name\": \"Cocacola\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 725,\n            \"fare\": 0.271875\n        },\n        {\n            \"_id\": \"5a85986a6cc7600e089a86ea\",\n            \"from\": {\n                \"_id\": \"5a83e74eabe26a1a1c0be0ca\",\n                \"name\": \"Cocacola\",\n                \"route\": \"EW\"\n            },\n            \"to\": {\n                \"_id\": \"5a83e76fabe26a1a1c0be0cc\",\n                \"name\": \"Torhailoch\",\n                \"route\": \"EW\"\n            },\n            \"userId\": {\n                \"_id\": \"5a815c1b205e0c14546476f6\",\n                \"email\": \"evana.mangato@gmail.com\"\n            },\n            \"distance\": 776,\n            \"fare\": 0.291\n        },\n        {\n            \"_id\": \"5a92bdcfd872b0413432178f\",\n            \"from\": {\n                \"_id\": \"5a83f9cd1104c34bd8a66e71\",\n                \"name\": \"kality\",\n                \"route\": \"NS\"\n            },\n            \"to\": {\n                \"_id\": \"5a83fa1b1104c34bd8a66e72\",\n                \"name\": \"Abo Junction\",\n                \"route\": \"NS\"\n            },\n            \"userId\": {\n                \"_id\": \"5a8157014d99ed52700bc99f\",\n                \"email\": \"ayele.gobeze@gmail.com\"\n            },\n            \"distance\": 975,\n            \"fare\": 0.365625\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/fare.js",
    "groupTitle": "Fare",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>A Unique id of Fare document</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station mongodb autogenerated id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination station mongodb autogenerated id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger wants to travel</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "distance",
            "description": "<p>The distance between the two stations</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fare",
            "description": "<p>The price required to travel between these two sations</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Fare-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "url": "/fares/paginate",
    "title": "Paginated Fare List",
    "name": "FindAllFaresAndPaginate",
    "group": "Fare",
    "description": "<p>List all registerd fares by pagination</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "\nHTTP 200 OK\n   {\n    \"page\": 1,\n    \"total_docs\": 41,\n    \"total_pages\": 5,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a8590e0c7abd121e4b3e535\",\n            \"from\": \"5a83fa1b1104c34bd8a66e72\",\n            \"to\": \"5a83fa591104c34bd8a66e74\",\n            \"userId\": \"5a815c1b205e0c14546476f6\",\n            \"distance\": 840,\n            \"fare\": 0.315\n        },\n        {\n            \"_id\": \"5a85933d615a3a47c831f311\",\n            \"from\": \"5a83fa591104c34bd8a66e74\",\n            \"to\": \"5a83fa851104c34bd8a66e76\",\n            \"userId\": \"5a815c1b205e0c14546476f6\",\n            \"distance\": 540,\n            \"fare\": 0.2025\n        },\n        {\n            \"_id\": \"5a8593c408ea5b545c02bcb1\",\n            \"from\": \"5a83fa851104c34bd8a66e76\",\n            \"to\": \"5a8415aa542c19147c03c52e\",\n            \"userId\": \"5a815c1b205e0c14546476f6\",\n            \"distance\": 995,\n            \"fare\": 0.373125\n        },\n        {\n            \"_id\": \"5a8593ed0311323b90e037d0\",\n            \"from\": \"5a8415aa542c19147c03c52e\",\n            \"to\": \"5a8415c0542c19147c03c52f\",\n            \"userId\": \"5a815c1b205e0c14546476f6\",\n            \"distance\": 861,\n            \"fare\": 0.322875\n        },\n        {\n            \"_id\": \"5a85943d0311323b90e037d1\",\n            \"from\": \"5a8415c0542c19147c03c52f\",\n            \"to\": \"5a8415d5542c19147c03c530\",\n            \"userId\": \"5a815c1b205e0c14546476f6\",\n            \"distance\": 1972,\n            \"fare\": 0.7395\n        },\n        {\n            \"_id\": \"5a859575ab99be23d4ec1370\",\n            \"from\": \"5a8415d5542c19147c03c530\",\n            \"to\": \"5a8415f6542c19147c03c531\",\n            \"userId\": \"5a815c1b205e0c14546476f6\",\n            \"distance\": 555,\n            \"fare\": 0.208125\n        },\n        {\n            \"_id\": \"5a85959dab99be23d4ec1371\",\n            \"from\": \"5a8415f6542c19147c03c531\",\n            \"to\": \"5a84160a542c19147c03c532\",\n            \"userId\": \"5a815c1b205e0c14546476f6\",\n            \"distance\": 610,\n            \"fare\": 0.22875\n        },\n        {\n            \"_id\": \"5a8595a6ab99be23d4ec1372\",\n            \"from\": \"5a84160a542c19147c03c532\",\n            \"to\": \"5a84161b542c19147c03c533\",\n            \"userId\": \"5a815c1b205e0c14546476f6\",\n            \"distance\": 481,\n            \"fare\": 0.180375\n        },\n        {\n            \"_id\": \"5a8595b9ab99be23d4ec1373\",\n            \"from\": \"5a84161b542c19147c03c533\",\n            \"to\": \"5a841626542c19147c03c534\",\n            \"userId\": \"5a815c1b205e0c14546476f6\",\n            \"distance\": 908,\n            \"fare\": 0.3405\n        },\n        {\n            \"_id\": \"5a8595c3ab99be23d4ec1374\",\n            \"from\": \"5a841626542c19147c03c534\",\n            \"to\": \"5a841635542c19147c03c535\",\n            \"userId\": \"5a815c1b205e0c14546476f6\",\n            \"distance\": 435,\n            \"fare\": 0.163125\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/fare.js",
    "groupTitle": "Fare",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>A Unique id of Fare document</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station mongodb autogenerated id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination station mongodb autogenerated id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger wants to travel</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "distance",
            "description": "<p>The distance between the two stations</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fare",
            "description": "<p>The price required to travel between these two sations</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Fare-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "url": "/fares/:id",
    "title": "Get Fare By Id",
    "version": "0.1.0",
    "name": "GetFare",
    "group": "Fare",
    "permission": [
      {
        "name": "admin\n\n\nhttp://localhost:5000/fares/5a478c962698af267483b1ee"
      }
    ],
    "description": "<p>Retrieve fare by their Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The fare id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "$http.header(\"Authorization\") = jwtwebtoken;",
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
            "description": "<p>The fare id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The fare name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": " HTTP 200 OK\n  {\n   \"_id\": \"5a8590e0c7abd121e4b3e535\",\n   \"from\": {\n       \"_id\": \"5a83fa1b1104c34bd8a66e72\",\n       \"name\": \"Abo Junction\"\n   },\n   \"to\": {\n       \"_id\": \"5a83fa591104c34bd8a66e74\",\n       \"name\": \"Saris\"\n   },\n   \"userId\": {\n       \"_id\": \"5a815c1b205e0c14546476f6\",\n       \"email\": \"evana.mangato@gmail.com\",\n       \"phone\": \"251-917-123456\"\n   },\n   \"distance\": 840,\n   \"fare\": 0.315\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/fare.js",
    "groupTitle": "Fare",
    "error": {
      "examples": [
        {
          "title": "Invalid-Sation-Id-Response:",
          "content": "HTTP 400 Bad request\n{\n    \"message\": \"Train Station Id is not valid\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Fare-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "url": "/fares/:id",
    "title": "Delete Fare",
    "name": "deleteFare",
    "group": "Fare",
    "description": "<p>Delete fare by id</p>",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n{\n  \"id\": \"5a96981b3993840b742ab7b5\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>A Unique id of Fare document</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station mongodb autogenerated id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination station mongodb autogenerated id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger wants to travel</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "distance",
            "description": "<p>The distance between the two stations</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fare",
            "description": "<p>The price required to travel between these two sations</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "HTTP 200 OK\n{\n\"message\":\"fare removed successfully\",\n {\n    \"_id\": \"5a96981b3993840b742ab7b5\",\n    \"from\": \"5a74264fc461a418b08dae01\",\n    \"to\": \"5a7455be8e130d47c86a03f6\",\n    \"userId\": \"5a8157014d99ed52700bc99f\",\n    \"distance\": 1092,\n    \"fare\": 0.4095\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/fare.js",
    "groupTitle": "Fare",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Fare-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/fares/",
    "title": "Create Fare",
    "name": "postFare",
    "group": "Fare",
    "description": "<p>Create a new Fare</p>",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n{\"from\":\"5a74264fc461a418b08dae01\",\n\"to\":\"5a7455be8e130d47c86a03f6\",\n\"distance\":1092,\n\"route\":\"EW\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>A Unique id of Fare document</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station mongodb autogenerated id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination station mongodb autogenerated id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger wants to travel</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "distance",
            "description": "<p>The distance between the two stations</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fare",
            "description": "<p>The price required to travel between these two sations</p>"
          }
        ],
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>A Unique id of Fare document</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station mongodb autogenerated id</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination station mongodb autogenerated id</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger wants to travel</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "distance",
            "description": "<p>The distance between the two stations</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "fare",
            "description": "<p>The price required to travel between these two sations</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "HTTP 200 OK\n{\n   \"_id\": \"5a96981b3993840b742ab7b5\",\n   \"from\": \"5a74264fc461a418b08dae01\",\n   \"to\": \"5a7455be8e130d47c86a03f6\",\n   \"userId\": \"5a8157014d99ed52700bc99f\",\n   \"distance\": 1092,\n   \"fare\": 0.4095\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/fare.js",
    "groupTitle": "Fare",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/fares/:id",
    "title": "Update Fare",
    "name": "putFare",
    "group": "Fare",
    "description": "<p>Update Fare</p>",
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
          "content": "{\n  \"id\": \"5a858ff72294cc4fb896e0610\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>A Unique id of Fare document</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station mongodb autogenerated id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination station mongodb autogenerated id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger wants to travel</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "distance",
            "description": "<p>The distance between the two stations</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fare",
            "description": "<p>The price required to travel between these two sations</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "{\n \"_id\": \"5a8590e0c7abd121e4b3e535\",\n \"from\": \"5a83fa1b1104c34bd8a66e72\",\n \"to\": \"5a83fa591104c34bd8a66e74\",\n \"userId\": \"5a815c1b205e0c14546476f6\",\n \"distance\": 840,\n \"fare\": 0.315,\n \"modifiedAt\": \"2018-02-28T12:35:35.488Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/fare.js",
    "groupTitle": "Fare",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/schedules/",
    "title": "Find All Schedules",
    "name": "FindAllSchedules",
    "group": "Schedule",
    "description": "<p>list all registerd Schedules</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "\nHTTP 200 OK\n{\n    \"scheduleCount\": 6,\n    \"schedules\": [\n        {\n            \"_id\": \"5a9bea8c9b212d3904716546\",\n            \"createdBy\": \"5a8157014d99ed52700bc99f\",\n            \"trainId\": \"AALRT-T-01\",\n            \"arrivalTime\": \"04-Mar-2018 05:00 AM\",\n            \"departureTime\": \"04-Mar-2018 05:01 AM\",\n            \"createdAt\": \"04-Mar-2018 03:46 PM\",\n            \"modifiedAt\": \"04-Mar-2018 03:46 PM\",\n            \"request\": {\n                \"method\": \"GET\",\n                \"url\": \"http://localhost/schedules\"\n            }\n        },\n        {\n            \"_id\": \"5a9bea7d9b212d3904716545\",\n            \"createdBy\": \"5a8157014d99ed52700bc99f\",\n            \"trainId\": \"AALRT-T-01\",\n            \"arrivalTime\": \"04-Mar-2018 05:00 AM\",\n            \"departureTime\": \"04-Mar-2018 05:01 AM\",\n            \"createdAt\": \"04-Mar-2018 03:45 PM\",\n            \"modifiedAt\": \"04-Mar-2018 03:45 PM\",\n            \"request\": {\n                \"method\": \"GET\",\n                \"url\": \"http://localhost/schedules\"\n            }\n        },\n        {\n            \"_id\": \"5a9bea2c69a5a544c49071be\",\n            \"createdBy\": \"5a8157014d99ed52700bc99f\",\n            \"trainId\": \"AALRT-T-01\",\n            \"arrivalTime\": \"04-Mar-2018 05:00 AM\",\n            \"departureTime\": \"04-Mar-2018 05:01 AM\",\n            \"createdAt\": \"04-Mar-2018 03:44 PM\",\n            \"modifiedAt\": \"04-Mar-2018 03:44 PM\",\n            \"request\": {\n                \"method\": \"GET\",\n                \"url\": \"http://localhost/schedules\"\n            }\n        },\n        {\n            \"_id\": \"5a9bea0369a5a544c49071bd\",\n            \"createdBy\": \"5a8157014d99ed52700bc99f\",\n            \"trainId\": \"AALRT-T-01\",\n            \"arrivalTime\": \"04-Mar-2018 05:00 AM\",\n            \"departureTime\": \"04-Mar-2018 05:01 AM\",\n            \"createdAt\": \"04-Mar-2018 03:43 PM\",\n            \"modifiedAt\": \"04-Mar-2018 03:43 PM\",\n            \"request\": {\n                \"method\": \"GET\",\n                \"url\": \"http://localhost/schedules\"\n            }\n        },\n        {\n            \"_id\": \"5a9be79f150cee41286b723a\",\n            \"createdBy\": \"5a8157014d99ed52700bc99f\",\n            \"trainId\": \"AALRT-T-01\",\n            \"arrivalTime\": \"04-Mar-2018 05:00 AM\",\n            \"departureTime\": \"04-Mar-2018 05:01 AM\",\n            \"createdAt\": \"04-Mar-2018 03:33 PM\",\n            \"modifiedAt\": \"04-Mar-2018 03:33 PM\",\n            \"request\": {\n                \"method\": \"GET\",\n                \"url\": \"http://localhost/schedules\"\n            }\n        },\n        {\n            \"_id\": \"5a9be738ab9886334cf66f63\",\n            \"createdBy\": \"5a8157014d99ed52700bc99f\",\n            \"trainId\": \"AALRT-T-01\",\n            \"arrivalTime\": \"04-Mar-2018 05:00 AM\",\n            \"departureTime\": \"04-Mar-2018 05:01 AM\",\n            \"createdAt\": \"04-Mar-2018 03:31 PM\",\n            \"modifiedAt\": \"04-Mar-2018 03:31 PM\",\n            \"request\": {\n                \"method\": \"GET\",\n                \"url\": \"http://localhost/schedules\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stationId",
            "description": "<p>The id of train Schedule</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "createdBy",
            "description": "<p>The name of admin user who created the shedule</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trainId",
            "description": "<p>Unique id of train</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "arrivalTime",
            "description": "<p>The arrival time of train at Schedule with id of stationId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "departureTime",
            "description": "<p>The departure time of train from Schedule with id of stationId</p>"
          }
        ]
      }
    },
    "filename": "routes/schedule.js",
    "groupTitle": "Schedule",
    "error": {
      "examples": [
        {
          "title": "Schedule-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "url": "/schedules/paginate",
    "title": "Paginated Schedules List",
    "name": "FindAllSchedulesAndPaginate",
    "group": "Schedule",
    "description": "<p>List all registerd schedules by pagination</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "\nHTTP 200 OK\n  {\n      \"page\": 1,\n      \"total_docs\": 6,\n      \"total_pages\": 1,\n      \"per_page\": 10,\n      \"docs\": [\n          {\n              \"_id\": \"5a9be738ab9886334cf66f63\",\n              \"createdBy\": \"5a8157014d99ed52700bc99f\",\n              \"trainId\": \"AALRT-T-01\",\n              \"stationId\": \"5a74264fc461a418b08dae07\",\n              \"arrivalTime\": \"2018-03-04T02:00:00.000Z\",\n              \"departureTime\": \"2018-03-04T02:01:00.000Z\",\n              \"__v\": 0,\n              \"modifiedAt\": \"2018-03-04T12:31:52.206Z\",\n              \"createdAt\": \"2018-03-04T12:31:52.206Z\"\n          },\n          {\n              \"_id\": \"5a9be79f150cee41286b723a\",\n              \"createdBy\": \"5a8157014d99ed52700bc99f\",\n              \"trainId\": \"AALRT-T-01\",\n              \"stationId\": \"5a74264fc461a418b08dae07\",\n              \"arrivalTime\": \"2018-03-04T02:00:00.000Z\",\n              \"departureTime\": \"2018-03-04T02:01:00.000Z\",\n              \"__v\": 0,\n              \"modifiedAt\": \"2018-03-04T12:33:35.620Z\",\n              \"createdAt\": \"2018-03-04T12:33:35.620Z\"\n          },\n          {\n              \"_id\": \"5a9bea0369a5a544c49071bd\",\n              \"createdBy\": \"5a8157014d99ed52700bc99f\",\n              \"trainId\": \"AALRT-T-01\",\n              \"stationId\": \"5a74264fc461a418b08dae07\",\n              \"arrivalTime\": \"2018-03-04T02:00:00.000Z\",\n              \"departureTime\": \"2018-03-04T02:01:00.000Z\",\n              \"__v\": 0,\n              \"modifiedAt\": \"2018-03-04T12:43:47.708Z\",\n              \"createdAt\": \"2018-03-04T12:43:47.708Z\"\n          },\n          {\n              \"_id\": \"5a9bea2c69a5a544c49071be\",\n              \"createdBy\": \"5a8157014d99ed52700bc99f\",\n              \"trainId\": \"AALRT-T-01\",\n              \"stationId\": \"5a74264fc461a418b08dae07\",\n              \"arrivalTime\": \"2018-03-04T02:00:00.000Z\",\n              \"departureTime\": \"2018-03-04T02:01:00.000Z\",\n              \"__v\": 0,\n              \"modifiedAt\": \"2018-03-04T12:44:28.516Z\",\n              \"createdAt\": \"2018-03-04T12:44:28.516Z\"\n          },\n          {\n              \"_id\": \"5a9bea7d9b212d3904716545\",\n              \"createdBy\": \"5a8157014d99ed52700bc99f\",\n              \"trainId\": \"AALRT-T-01\",\n              \"stationId\": \"5a74264fc461a418b08dae07\",\n              \"arrivalTime\": \"2018-03-04T02:00:00.000Z\",\n              \"departureTime\": \"2018-03-04T02:01:00.000Z\",\n              \"__v\": 0,\n              \"modifiedAt\": \"2018-03-04T12:45:49.072Z\",\n              \"createdAt\": \"2018-03-04T12:45:49.072Z\"\n          },\n          {\n              \"_id\": \"5a9bea8c9b212d3904716546\",\n              \"createdBy\": \"5a8157014d99ed52700bc99f\",\n              \"trainId\": \"AALRT-T-01\",\n              \"stationId\": \"5a74264fc461a418b08dae07\",\n              \"arrivalTime\": \"2018-03-04T02:00:00.000Z\",\n              \"departureTime\": \"2018-03-04T02:01:00.000Z\",\n              \"__v\": 0,\n              \"modifiedAt\": \"2018-03-04T12:46:04.657Z\",\n              \"createdAt\": \"2018-03-04T12:46:04.657Z\"\n          }\n      ]\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stationId",
            "description": "<p>The id of train Schedule</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "createdBy",
            "description": "<p>The name of admin user who created the shedule</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trainId",
            "description": "<p>Unique id of train</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "arrivalTime",
            "description": "<p>The arrival time of train at Schedule with id of stationId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "departureTime",
            "description": "<p>The departure time of train from Schedule with id of stationId</p>"
          }
        ]
      }
    },
    "filename": "routes/schedule.js",
    "groupTitle": "Schedule",
    "error": {
      "examples": [
        {
          "title": "Schedule-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "url": "/schedules/:id",
    "title": "Get Schedule By Id",
    "version": "0.1.0",
    "name": "GetSchedule",
    "group": "Schedule",
    "permission": [
      {
        "name": "authenticated user\n\n\nhttp://localhost:5000/schedules/5a9bea8c9b212d3904716546"
      }
    ],
    "description": "<p>Retrieve schedule by their Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The schedule id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "$http.header(\"Authorization\") = jwtwebtoken;",
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
            "description": "<p>The schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The schedule name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": " HTTP 200 OK\n    {\n    \"_id\": \"5a9bea8c9b212d3904716546\",\n    \"createdBy\": \"5a8157014d99ed52700bc99f\",\n    \"trainId\": \"AALRT-T-01\",\n    \"arrivalTime\": \"04-Mar-2018 05:00 AM\",\n    \"departureTime\": \"04-Mar-2018 05:01 AM\",\n    \"createdAt\": \"04-Mar-2018 03:46 PM\",\n    \"modifiedAt\": \"04-Mar-2018 03:46 PM\",\n    \"request\": {\n        \"method\": \"GET\",\n        \"url\": \"http://localhost/schedules/5a9bea8c9b212d3904716546\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/schedule.js",
    "groupTitle": "Schedule",
    "error": {
      "examples": [
        {
          "title": "Invalid-Schedule-Id-Response:",
          "content": "HTTP 400 Bad request\n{\n    \"message\": \"Schedule Id is not valid\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Schedule-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "url": "/schedules/search/:name",
    "title": "Search By Schedule Name",
    "version": "0.1.0",
    "name": "SearchSchedule",
    "group": "Schedule",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>Search schedule by their name</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The schedule id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "$http.header(\"Authorization\") = jwtwebtoken;",
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
            "description": "<p>The schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The schedule name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "HTTP 200 OK\n{\n   \"_id\": \"57e8e94ea06a0c473bac50cc\",\n   \"name\": \"Do the disehs\",\n   \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/schedule.js",
    "groupTitle": "Schedule",
    "error": {
      "examples": [
        {
          "title": "Schedule-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "url": "/schedules/:id",
    "title": "Delete Schedule",
    "name": "deleteSchedule",
    "group": "Schedule",
    "description": "<p>Delete schedule by id</p>",
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
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "HTTP 200 OK\n{\n\"message\":\"schedule removed successfully\",\n{\n  \"_id\": \"5a96591a2d8b790b8c9bc243\",\n  \"createdBy\": \"5a8157014d99ed52700bc99f\",\n  \"scheduleId\": 10200509513304,\n  \"name\": \"Gurd Shola 2\",\n  \"route\": \"EW\",\n  \"longitude\": 38.8139838,\n  \"latitude\": 9.0158921,\n  \"createdAt\": \"28-Feb-2018 10:24 AM\",\n  \"modifiedAt\": \"28-Feb-2018 10:24 AM\",\n  \"request\": {\n      \"method\": \"POST\",\n      \"url\": \"http://localhost/schedules\"\n  }\n}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stationId",
            "description": "<p>The id of train Schedule</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "createdBy",
            "description": "<p>The name of admin user who created the shedule</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trainId",
            "description": "<p>Unique id of train</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "arrivalTime",
            "description": "<p>The arrival time of train at Schedule with id of stationId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "departureTime",
            "description": "<p>The departure time of train from Schedule with id of stationId</p>"
          }
        ]
      }
    },
    "filename": "routes/schedule.js",
    "groupTitle": "Schedule",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Schedule-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/schedules/:cid",
    "title": "Find Schedule By Custom Id",
    "version": "0.1.0",
    "name": "findSchedule",
    "group": "Schedule",
    "permission": [
      {
        "name": "authenticated user\n\n\nhttp://localhost:5000/schedules/211"
      }
    ],
    "description": "<p>Find schedule by their custom Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The schedule id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "$http.header(\"Authorization\") = jwtwebtoken;",
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
            "description": "<p>The schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The schedule name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "  HTTP 200 OK\n{\n    \"_id\": \"5a8415c0542c19147c03c52f\",\n    \"createdBy\": {\n        \"_id\": \"5a80496050df3044fcf084fd\",\n        \"email\": \"tarikuwa.abeje@gmail.com\",\n        \"phone\": \"251-917-123456\",\n        \"userType\": \"passenger\",\n        \"createdAt\": \"2018-02-11T13:47:00.000Z\",\n        \"modifiedAt\": \"2018-02-11T13:47:00.000Z\"\n    },\n    \"scheduleId\": 211,\n    \"name\": \"Nefas Silik 2\",\n    \"route\": \"NS\",\n    \"longitude\": 38.7614768999999,\n    \"latitude\": 9.0109684,\n    \"createdAt\": \"14-Feb-2018 01:56 PM\",\n    \"modifiedAt\": \"14-Feb-2018 01:56 PM\",\n    \"request\": {\n        \"method\": \"GET\",\n        \"url\": \"http://localhost/schedules/customid/211\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/schedule.js",
    "groupTitle": "Schedule",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/schedules/",
    "title": "Create schedule",
    "name": "postSchedule",
    "group": "Schedule",
    "description": "<p>Creates a new Schedule</p>",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n {\n\n    \"stationId\" : \"5a74264fc461a418b08dae07\",\n    \"trainId\" : \"AALRT-T-01\",\n    \"arrivalTime\" :\"5:00\",\n    \"departureTime\" : \"5:01\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "HTTP 200 OK\n {\n    \"_id\": \"5a9bea8c9b212d3904716546\",\n    \"createdBy\": \"5a8157014d99ed52700bc99f\",\n    \"trainId\": \"AALRT-T-01\",\n    \"arrivalTime\": \"04-Mar-2018 05:00 AM\",\n    \"departureTime\": \"04-Mar-2018 05:01 AM\",\n    \"createdAt\": \"04-Mar-2018 03:46 PM\",\n    \"modifiedAt\": \"04-Mar-2018 03:46 PM\",\n    \"request\": {\n        \"method\": \"POST\",\n        \"url\": \"http://localhost/schedules\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "stationId",
            "description": "<p>The id of train Schedule</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "createdBy",
            "description": "<p>The name of admin user who created the shedule</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "trainId",
            "description": "<p>Unique id of train</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "arrivalTime",
            "description": "<p>The arrival time of train at Schedule with id of stationId</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "departureTime",
            "description": "<p>The departure time of train from Schedule with id of stationId</p>"
          }
        ]
      }
    },
    "filename": "routes/schedule.js",
    "groupTitle": "Schedule",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/schedules/:id",
    "title": "Update Schedule",
    "name": "putSchedule",
    "group": "Schedule",
    "description": "<p>Update Schedule</p>",
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
          "content": "{\n \"_id\": \"5a83fa1b1104c34bd8a66e72\",\n \"createdBy\": \"5a80496050df3044fcf084fd\",\n \"scheduleId\": 27,\n \"name\": \"Abo Junction\",\n \"route\": \"NS\",\n \"longitude\": 38.7706822,\n \"latitude\": 8.9451405,\n \"createdAt\": \"14-Feb-2018 11:58 AM\",\n \"modifiedAt\": \"28-Feb-2018 11:19 AM\",\n \"request\": {\n     \"method\": \"PUT\",\n     \"url\": \"http://localhost/schedules/5a83fa1b1104c34bd8a66e72\"\n }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stationId",
            "description": "<p>The id of train Schedule</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "createdBy",
            "description": "<p>The name of admin user who created the shedule</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trainId",
            "description": "<p>Unique id of train</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "arrivalTime",
            "description": "<p>The arrival time of train at Schedule with id of stationId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "departureTime",
            "description": "<p>The departure time of train from Schedule with id of stationId</p>"
          }
        ]
      }
    },
    "filename": "routes/schedule.js",
    "groupTitle": "Schedule",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/stations/",
    "title": "Find All Stations",
    "name": "FindAllStations",
    "group": "Station",
    "description": "<p>list all registerd Stations</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "\nHTTP 200 OK\n{\n \"stationCount\": 56,\n \"stations\": [\n     {\n         \"_id\": \"5a96591a2d8b790b8c9bc243\",\n         \"createdBy\": {\n             \"_id\": \"5a8157014d99ed52700bc99f\",\n             \"email\": \"ayele.gobeze@gmail.com\",\n             \"phone\": \"251-917-123456\",\n             \"userType\": \"passenger\",\n             \"createdAt\": \"2018-02-12T08:57:00.000Z\",\n             \"modifiedAt\": \"2018-02-12T08:57:00.000Z\"\n         },\n         \"stationId\": 10200509513304,\n         \"name\": \"Gurd Shola 1211\",\n         \"route\": \"EW\",\n         \"longitude\": 38.8139838,\n         \"latitude\": 9.0158921,\n         \"createdAt\": \"28-Feb-2018 10:24 AM\",\n         \"modifiedAt\": \"28-Feb-2018 10:24 AM\",\n         \"request\": {\n             \"method\": \"GET\",\n             \"url\": \"http://localhost/stations\"\n         }\n     },\n  {\n           \"_id\": \"5a83e4c24f018d281460fb9d\",\n           \"createdBy\": {\n               \"_id\": \"5a80496050df3044fcf084fd\",\n               \"email\": \"tarikuwa.abeje@gmail.com\",\n               \"phone\": \"251-917-123456\",\n               \"userType\": \"passenger\",\n               \"createdAt\": \"2018-02-11T13:47:00.000Z\",\n               \"modifiedAt\": \"2018-02-11T13:47:00.000Z\"\n           },\n           \"stationId\": 19,\n           \"name\": \"Megenagna\",\n           \"route\": \"EW\",\n           \"longitude\": 38.8024029,\n           \"latitude\": 9.0204692,\n           \"createdAt\": \"14-Feb-2018 10:26 AM\",\n           \"modifiedAt\": \"14-Feb-2018 10:26 AM\",\n           \"request\": {\n               \"method\": \"GET\",\n               \"url\": \"http://localhost/stations\"\n           }\n       }\n]\n}",
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
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "title": "Paginated Stations List",
    "name": "FindAllStationsAndPaginate",
    "group": "Station",
    "description": "<p>List all registerd stations by pagination</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "\nHTTP 200 OK\n{\n \"page\": 1,\n    \"total_docs\": 56,\n    \"total_pages\": 6,\n    \"per_page\": 10,\n    \"docs\": [\n     {\n         \"_id\": \"5a96591a2d8b790b8c9bc243\",\n         \"createdBy\": {\n             \"_id\": \"5a8157014d99ed52700bc99f\",\n             \"email\": \"ayele.gobeze@gmail.com\",\n             \"phone\": \"251-917-123456\",\n             \"userType\": \"passenger\",\n             \"createdAt\": \"2018-02-12T08:57:00.000Z\",\n             \"modifiedAt\": \"2018-02-12T08:57:00.000Z\"\n         },\n         \"stationId\": 10200509513304,\n         \"name\": \"Gurd Shola 1211\",\n         \"route\": \"EW\",\n         \"longitude\": 38.8139838,\n         \"latitude\": 9.0158921,\n         \"createdAt\": \"28-Feb-2018 10:24 AM\",\n         \"modifiedAt\": \"28-Feb-2018 10:24 AM\",\n         \"request\": {\n             \"method\": \"GET\",\n             \"url\": \"http://localhost/stations\"\n         }\n     },\n  {\n           \"_id\": \"5a83e4c24f018d281460fb9d\",\n           \"createdBy\": {\n               \"_id\": \"5a80496050df3044fcf084fd\",\n               \"email\": \"tarikuwa.abeje@gmail.com\",\n               \"phone\": \"251-917-123456\",\n               \"userType\": \"passenger\",\n               \"createdAt\": \"2018-02-11T13:47:00.000Z\",\n               \"modifiedAt\": \"2018-02-11T13:47:00.000Z\"\n           },\n           \"stationId\": 19,\n           \"name\": \"Megenagna\",\n           \"route\": \"EW\",\n           \"longitude\": 38.8024029,\n           \"latitude\": 9.0204692,\n           \"createdAt\": \"14-Feb-2018 10:26 AM\",\n           \"modifiedAt\": \"14-Feb-2018 10:26 AM\",\n           \"request\": {\n               \"method\": \"GET\",\n               \"url\": \"http://localhost/stations\"\n           }\n       }\n]\n}",
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
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
        "content": "$http.header(\"Authorization\") = token;",
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
          "title": "Response-Success-Example:",
          "content": "HTTP 200 OK\n     {\n     \"_id\": \"5a96591a2d8b790b8c9bc243\",\n     \"createdBy\": {\n         \"_id\": \"5a8157014d99ed52700bc99f\",\n         \"email\": \"ayele.gobeze@gmail.com\",\n         \"phone\": \"251-917-123456\",\n         \"userType\": \"passenger\",\n         \"createdAt\": \"2018-02-12T08:57:00.000Z\",\n         \"modifiedAt\": \"2018-02-12T08:57:00.000Z\"\n     },\n     \"stationId\": 10200509513304,\n     \"name\": \"Gurd Shola 1211\",\n     \"route\": \"EW\",\n     \"longitude\": 38.8139838,\n     \"latitude\": 9.0158921,\n     \"createdAt\": \"28-Feb-2018 10:24 AM\",\n     \"modifiedAt\": \"28-Feb-2018 10:24 AM\",\n     \"request\": {\n         \"method\": \"GET\",\n         \"url\": \"http://localhost/stations/5a96591a2d8b790b8c9bc243\"\n     }\n }",
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
          "content": "HTTP 400 Bad request\n{\n    \"message\": \"Train Station Id is not valid\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Sation-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "title": "Search By Station Name",
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
        "content": "$http.headers.(\"Authorization\") = token;",
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
      }
    },
    "filename": "routes/station.js",
    "groupTitle": "Station",
    "error": {
      "examples": [
        {
          "title": "Sation-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "description": "<p>Delete station by id</p>",
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
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "HTTP 200 OK\n{\n\"message\":\"station removed successfully\",\n{\n  \"_id\": \"5a96591a2d8b790b8c9bc243\",\n  \"createdBy\": \"5a8157014d99ed52700bc99f\",\n  \"stationId\": 10200509513304,\n  \"name\": \"Gurd Shola 2\",\n  \"route\": \"EW\",\n  \"longitude\": 38.8139838,\n  \"latitude\": 9.0158921,\n  \"createdAt\": \"28-Feb-2018 10:24 AM\",\n  \"modifiedAt\": \"28-Feb-2018 10:24 AM\",\n  \"request\": {\n      \"method\": \"POST\",\n      \"url\": \"http://localhost/stations\"\n  }\n}\n}",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Sation-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/stations/:cid",
    "title": "Find Station By Custom Id",
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
        "content": "$http.header.(\"Authorization\") = token;",
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
          "title": "Response-Success-Example:",
          "content": "  HTTP 200 OK\n{\n    \"_id\": \"5a8415c0542c19147c03c52f\",\n    \"createdBy\": {\n        \"_id\": \"5a80496050df3044fcf084fd\",\n        \"email\": \"tarikuwa.abeje@gmail.com\",\n        \"phone\": \"251-917-123456\",\n        \"userType\": \"passenger\",\n        \"createdAt\": \"2018-02-11T13:47:00.000Z\",\n        \"modifiedAt\": \"2018-02-11T13:47:00.000Z\"\n    },\n    \"stationId\": 211,\n    \"name\": \"Nefas Silik 2\",\n    \"route\": \"NS\",\n    \"longitude\": 38.7614768999999,\n    \"latitude\": 9.0109684,\n    \"createdAt\": \"14-Feb-2018 01:56 PM\",\n    \"modifiedAt\": \"14-Feb-2018 01:56 PM\",\n    \"request\": {\n        \"method\": \"GET\",\n        \"url\": \"http://localhost/stations/customid/211\"\n    }\n}",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "version": "0.1.0",
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
          "title": "Response-Success-Example",
          "content": "HTTP 200 OK\n{\n  \"_id\": \"5a96591a2d8b790b8c9bc243\",\n  \"createdBy\": \"5a8157014d99ed52700bc99f\",\n  \"stationId\": 10200509513304,\n  \"name\": \"Gurd Shola 2\",\n  \"route\": \"EW\",\n  \"longitude\": 38.8139838,\n  \"latitude\": 9.0158921,\n  \"createdAt\": \"28-Feb-2018 10:24 AM\",\n  \"modifiedAt\": \"28-Feb-2018 10:24 AM\",\n  \"request\": {\n      \"method\": \"POST\",\n      \"url\": \"http://localhost/stations\"\n  }\n}",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/tickets/",
    "title": "Find All Tickets",
    "name": "FindAllTickets",
    "group": "Ticket",
    "description": "<p>List all registerd Tickets</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "\nHTTP 200 OK\n [\n    {\n        \"_id\": \"5a96bb56b623564f3c04c7b6\",\n        \"passengerId\": {\n            \"_id\": \"5a8157014d99ed52700bc99f\",\n            \"email\": \"ayele.gobeze@gmail.com\",\n            \"createdAt\": \"2018-02-28T14:53:00.000Z\",\n            \"modifiedAt\": \"2018-02-28T14:53:00.000Z\"\n        },\n        \"from\": {\n            \"_id\": \"5a8415c0542c19147c03c52f\",\n            \"stationId\": 211,\n            \"name\": \"Nefas Silik 2\",\n            \"route\": \"NS\"\n        },\n        \"to\": {\n            \"_id\": \"5a8416e2542c19147c03c53e\",\n            \"stationId\": 226,\n            \"name\": \"Minilik II Square\",\n            \"route\": \"NS\"\n        },\n        \"createdAt\": \"2018-02-28T14:23:18.885Z\"\n    },\n    {\n        \"_id\": \"5a96b90a6186003dcc256cb6\",\n        \"passengerId\": {\n            \"_id\": \"5a8157014d99ed52700bc99f\",\n            \"email\": \"ayele.gobeze@gmail.com\",\n            \"createdAt\": \"2018-02-28T14:53:00.000Z\",\n            \"modifiedAt\": \"2018-02-28T14:53:00.000Z\"\n        },\n        \"from\": {\n            \"_id\": \"5a8415c0542c19147c03c52f\",\n            \"stationId\": 211,\n            \"name\": \"Nefas Silik 2\",\n            \"route\": \"NS\"\n        },\n        \"to\": {\n            \"_id\": \"5a8416e2542c19147c03c53e\",\n            \"stationId\": 226,\n            \"name\": \"Minilik II Square\",\n            \"route\": \"NS\"\n        },\n        \"createdAt\": \"2018-02-28T14:13:30.278Z\"\n    }\n  ]",
          "type": "json"
        },
        {
          "title": "Response-Success-Example",
          "content": "\nHTTP 200 OK",
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
            "description": "<p>A Unique id of Ticket document</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station autogenerated mongodb id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination  station autogenerated mongodb  id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "from.stationId",
            "description": "<p>The starting/source station custom id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "to.stationId",
            "description": "<p>The  ending/destination  station custom  id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger want to travel</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "passenger",
            "description": "<p>The Ticket owner/passenger Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>The price of the ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The Date time when Ticket bought</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of Ticket usage[unused, used, cancelled]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of ticket[default: for adult]</p>"
          }
        ]
      }
    },
    "filename": "routes/ticket.js",
    "groupTitle": "Ticket",
    "error": {
      "examples": [
        {
          "title": "Ticket-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "url": "/tickets/paginate",
    "title": "Paginated Tickets List",
    "name": "FindAllTicketsAndPaginate",
    "group": "Ticket",
    "description": "<p>List all registerd tickets by pagination</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "\nHTTP 200 OK\n   {\n    \"page\": 1,\n    \"total_docs\": 57,\n    \"total_pages\": 6,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a8b5a4e7474781c44dfc65e\",\n            \"route\": \"EW\",\n            \"passengerId\": \"5a815c1b205e0c14546476f6\",\n            \"from\": \"5a7455ec8e130d47c86a03f7\",\n            \"to\": \"5a83e6d2abe26a1a1c0be0c4\",\n            \"price\": 3.98,\n            \"__v\": 0,\n            \"modifiedAt\": \"2018-02-25T12:29:52.826Z\",\n            \"createdAt\": \"2018-02-19T23:14:22.794Z\",\n            \"status\": \"unused\",\n            \"type\": \"for adult\",\n            \"id\": \"r1NHbR5Pf\"\n        },\n        {\n            \"_id\": \"5a8b5a5b7474781c44dfc65f\",\n            \"route\": \"EW\",\n            \"passengerId\": \"5a815c1b205e0c14546476f6\",\n            \"from\": \"5a7455ec8e130d47c86a03f7\",\n            \"to\": \"5a83e6d2abe26a1a1c0be0c4\",\n            \"price\": 3.98,\n            \"__v\": 0,\n            \"modifiedAt\": \"2018-02-19T23:14:35.599Z\",\n            \"createdAt\": \"2018-02-19T23:14:35.599Z\",\n            \"status\": \"unused\",\n            \"type\": \"for adult\",\n            \"id\": \"SyzObCqPM\"\n        },\n        {\n            \"_id\": \"5a8b5a5d7474781c44dfc660\",\n            \"route\": \"EW\",\n            \"passengerId\": \"5a815c1b205e0c14546476f6\",\n            \"from\": \"5a7455ec8e130d47c86a03f7\",\n            \"to\": \"5a83e6d2abe26a1a1c0be0c4\",\n            \"price\": 3.98,\n            \"__v\": 0,\n            \"modifiedAt\": \"2018-02-19T23:14:37.361Z\",\n            \"createdAt\": \"2018-02-19T23:14:37.361Z\",\n            \"status\": \"unused\",\n            \"type\": \"for adult\",\n            \"id\": \"r1ZcW09Dz\"\n        }\n    ]",
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
            "description": "<p>A Unique id of Ticket document</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station autogenerated mongodb id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination  station autogenerated mongodb  id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "from.stationId",
            "description": "<p>The starting/source station custom id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "to.stationId",
            "description": "<p>The  ending/destination  station custom  id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger want to travel</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "passenger",
            "description": "<p>The Ticket owner/passenger Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>The price of the ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The Date time when Ticket bought</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of Ticket usage[unused, used, cancelled]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of ticket[default: for adult]</p>"
          }
        ]
      }
    },
    "filename": "routes/ticket.js",
    "groupTitle": "Ticket",
    "error": {
      "examples": [
        {
          "title": "Ticket-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "url": "/tickets/:id",
    "title": "Get Ticket By Id",
    "version": "0.2.0",
    "name": "GetTicket",
    "group": "Ticket",
    "permission": [
      {
        "name": "admin\n\n\nhttp://localhost:5000/tickets/5a96bb56b623564f3c04c7b6"
      }
    ],
    "description": "<p>Retrieve ticket by their Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ticket id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "$http.header(\"Authorization\") = jwtwebtoken;",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": " HTTP 200 OK\n   {\n    \"query_result\": {\n        \"message\": \"Valid ticket\",\n        \"_id\": \"5aaa9265a4b9633b1459580a\",\n        \"ticketId\": \"BkgDV7OKG\",\n        \"sourceEng\": \"Nefas Silik 1\",\n        \"destinationEng\": \"Abnet\",\n        \"sourceAmh\": \"ንፋስ ስልክ 1\",\n        \"destinationAmh\": \"አብነት\",\n        \"price\": 4,\n        \"route\": \"NS\",\n        \"type\": \"one way\",\n        \"status\": \"returned\",\n        \"createdAt\": \"15th-Mar-2018\"\n    }\n}",
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
            "description": "<p>A Unique id of Ticket document</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station autogenerated mongodb id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination  station autogenerated mongodb  id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "from.stationId",
            "description": "<p>The starting/source station custom id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "to.stationId",
            "description": "<p>The  ending/destination  station custom  id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger want to travel</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "passenger",
            "description": "<p>The Ticket owner/passenger Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>The price of the ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The Date time when Ticket bought</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of Ticket usage[unused, used, cancelled]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of ticket[default: for adult]</p>"
          }
        ]
      }
    },
    "filename": "routes/ticket.js",
    "groupTitle": "Ticket",
    "error": {
      "examples": [
        {
          "title": "Invalid-Sation-Id-Response:",
          "content": "HTTP 400 Bad request\n{\n    \"message\": \"Train Station Id is not valid\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"query_result\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Ticket-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "url": "/tickets/:id",
    "title": "Get Ticket By Id",
    "version": "0.1.0",
    "name": "GetTicket",
    "group": "Ticket",
    "permission": [
      {
        "name": "admin\n\n\nhttp://localhost:5000/tickets/5a96bb56b623564f3c04c7b6"
      }
    ],
    "description": "<p>Retrieve ticket by their Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ticket id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "$http.header(\"Authorization\") = jwtwebtoken;",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example:",
          "content": "HTTP 200 OK\n {\n     \"_id\": \"5a96bb56b623564f3c04c7b6\",\n     \"route\": \"NS\",\n     \"passengerId\": {\n         \"_id\": \"5a8157014d99ed52700bc99f\",\n         \"email\": \"ayele.gobeze@gmail.com\",\n         \"phone\": \"251-917-123456\",\n         \"createdAt\": \"2018-02-28T14:33:00.000Z\",\n         \"modifiedAt\": \"2018-02-28T14:33:00.000Z\"\n     },\n     \"from\": {\n         \"_id\": \"5a8415c0542c19147c03c52f\",\n         \"stationId\": 211,\n         \"name\": \"Nefas Silik 2\",\n         \"route\": \"NS\"\n     },\n     \"to\": {\n         \"_id\": \"5a8416e2542c19147c03c53e\",\n         \"stationId\": 226,\n         \"name\": \"Minilik II Square\",\n         \"route\": \"NS\"\n     },\n     \"price\": 4.24,\n     \"__v\": 0,\n     \"modifiedAt\": \"2018-02-28T14:23:18.885Z\",\n     \"createdAt\": \"2018-02-28T14:23:18.885Z\",\n     \"status\": \"unused\",\n     \"type\": \"for adult\",\n     \"id\": \"HJJPiEVuM\"\n }",
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
            "description": "<p>A Unique id of Ticket document</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station autogenerated mongodb id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination  station autogenerated mongodb  id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "from.stationId",
            "description": "<p>The starting/source station custom id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "to.stationId",
            "description": "<p>The  ending/destination  station custom  id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger want to travel</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "passenger",
            "description": "<p>The Ticket owner/passenger Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>The price of the ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The Date time when Ticket bought</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of Ticket usage[unused, used, cancelled]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of ticket[default: for adult]</p>"
          }
        ]
      }
    },
    "filename": "routes/ticket.js",
    "groupTitle": "Ticket",
    "error": {
      "examples": [
        {
          "title": "Invalid-Sation-Id-Response:",
          "content": "HTTP 400 Bad request\n{\n    \"message\": \"Train Station Id is not valid\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Ticket-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
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
    "url": "/tickets/:id",
    "title": "Delete Ticket",
    "name": "deleteTicket",
    "group": "Ticket",
    "description": "<p>Delete ticket by id</p>",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n{\n  \"id\": \"5a96bb67191681445cf6fd38\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "HTTP 200 OK\n{\n\"message\":\"ticket removed successfully\",\n   {\n      \"_id\": \"5a96bb67191681445cf6fd38\",\n      \"route\": \"NS\",\n      \"passengerId\": \"5a8157014d99ed52700bc99f\",\n      \"from\": \"5a8415c0542c19147c03c52f\",\n      \"to\": \"5a8416e2542c19147c03c53e\",\n      \"price\": 4.24,\n      \"__v\": 0,\n      \"modifiedAt\": \"2018-02-28T14:23:35.493Z\",\n      \"createdAt\": \"2018-02-28T14:23:35.493Z\",\n      \"status\": \"unused\",\n      \"type\": \"for adult\",\n      \"id\": \"B1yOoNEdM\"\n  }\n}",
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
            "description": "<p>A Unique id of Ticket document</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station autogenerated mongodb id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination  station autogenerated mongodb  id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "from.stationId",
            "description": "<p>The starting/source station custom id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "to.stationId",
            "description": "<p>The  ending/destination  station custom  id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger want to travel</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "passenger",
            "description": "<p>The Ticket owner/passenger Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>The price of the ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The Date time when Ticket bought</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of Ticket usage[unused, used, cancelled]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of ticket[default: for adult]</p>"
          }
        ]
      }
    },
    "filename": "routes/ticket.js",
    "groupTitle": "Ticket",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Ticket-Not-Found-Response:",
          "content": "* HTTP 400 Bad request\n{\n   \"message\": \"No maching document found.\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/tickets/",
    "title": "Create Ticket",
    "name": "postTicket",
    "group": "Ticket",
    "description": "<p>Create a new Ticket</p>",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>A Unique id of Ticket document</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station custom id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination  station custom  id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger want to travel</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n{\n  \"route\":\"NS\",\n  \"from\": 211,\n  \"to\": 226\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "HTTP 200 OK\n {\n    \"query_result\": \"U2FsdGVkX19URQVxY83vRJnD6q8yxSc731SV+WkEnrKhXOgDI6kHCaTokTDCDRssFsGwU4G+G+VbElxMbEOFqbpbOQQk4pMXDZgeCl33gw0UGWGABZaDmuODlPxeUUKSgOlPsa8K2OhqdgtR4Ak44HX2ikGtE7Zy5Lktejq6gNQXY0Vq13SzLrVl9YLqq8wbuCsslMQOqLaB6p7uJDdEXFsWo8YO2FKtcsKZ+qgBTCbcUYFxmj9GEbqeimXjImU/6MBYrx4gzDPWHdpa1TOhU9B/Xae8MDr5TQG4iUuAo+g=\",\n    \"decryptedTicket\": {\n        \"passengerId\": \"5aa296949853f04890757773\",\n        \"sourceEng\": \"kality\",\n        \"destinationEng\": \"Menilik II Square\",\n        \"from\": 26,\n        \"to\": 227,\n        \"price\": 6,\n        \"numberOfStationsTravelled\": 21,\n        \"route\": \"NS\",\n        \"_id\": \"5aacd4fc1c8b3b42d4b5e52a\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>A Unique id of Ticket document</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station custom id</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination  station  custom id</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger want to travel</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "passenger",
            "description": "<p>The Ticket owner/passenger Object</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>The price of the ticket</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The Date time when Ticket bought</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of Ticket usage[unused, used, cancelled]</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of ticket[default: for adult]</p>"
          }
        ]
      }
    },
    "filename": "routes/ticket.js",
    "groupTitle": "Ticket",
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
          "content": "HTTP 401 Unauthorized\n{\n \"query_result\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/tickets/",
    "title": "Create Ticket",
    "name": "postTicket",
    "group": "Ticket",
    "description": "<p>Create a new Ticket</p>",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>A Unique id of Ticket document</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station custom id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination  station custom  id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger want to travel</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n{\n  \"route\":\"NS\",\n  \"from\": 211,\n  \"to\": 226\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": "HTTP 201 OK\n  {\n     \"encryptedTicket\": \"U2FsdGVkX19VcFihYHru/VZySuiwKF4yWHEZVCSm5/jbJVmVVI5Fv+CRPe+nOkrWCMboybncLTRqjqvIoV+ReRp5Qe0xa8y3tjt1PGI0vbgInZTuHmss2MwcgMElkBfXmVFU0nadluFnp6MtpJvh9cWWrx8uUy+NvbzE+f/ds8LdCrHJVBnS9DPhD8anBRyggjhinXDc8TAwvcLnEzLR8AXSYNZKehRke/X4vHmzQLKX530O0coRJLxKy45yRov/djYsHTdDmWFw3mYmyxz+mrmCUFQtx7K0aL5+0MqOrP7zcBDqtQuMtDczRrCL6jlinkDwoYVgiUPk76+KWEh8/xASra3C++UC3Zf2tCWDFDgxqlEdubVryhuYYkXoBFTb4OWkBwtU51F55FHt0um02SCjC6uodZMc7Sus8+n4hkH1CJ2fw2h/y3ixEupwJkAzXRbJOxIoWGaG7NDAEeCCKrLPYnPaHulR/pPEDJFmO5wFayWXSMu33QJtovbx9BI/zeRBKpCtsWvQlVtkugFJzfsGGueNKEcKbEPXNZXVlPgd/DRNcgL2E0HBF49PhQVbygQBQBf5sI8ZxgM+HBmL0Q6WnQP/c22xmNP2HfP6JUNH7TDQdBpLoN0y0GV9Pm7FC98Yn3td4uchC8M4u4A6PDZBQfxlFWLmdNP+hClzhMTbGHr3va/2QUbLhaIhT3pGSxImmK+D1a7q4CvLdamaPgbEwQu7RnFoYhMG1+dKdTVgVBDTuS71t0FD0TGkOMHjmyV+VgmvLeGzW0Wxqnkvdq4iK+70tjAfhWWSa8TJVbs=\",\n     \"decryptedTicket\": {\n         \"_id\": \"5a96bb67191681445cf6fd38\",\n         \"route\": \"NS\",\n         \"passengerId\": {\n             \"_id\": \"5a8157014d99ed52700bc99f\",\n             \"email\": \"ayele.gobeze@gmail.com\",\n             \"phone\": \"251-917-123456\",\n             \"createdAt\": \"2018-02-28T14:23:00.000Z\",\n             \"modifiedAt\": \"2018-02-28T14:23:00.000Z\"\n         },\n         \"from\": {\n             \"_id\": \"5a8415c0542c19147c03c52f\",\n             \"stationId\": 211,\n             \"name\": \"Nefas Silik 2\",\n             \"route\": \"NS\"\n         },\n         \"to\": {\n             \"_id\": \"5a8416e2542c19147c03c53e\",\n             \"stationId\": 226,\n             \"name\": \"Minilik II Square\",\n             \"route\": \"NS\"\n         },\n         \"price\": 4.24,\n         \"__v\": 0,\n         \"modifiedAt\": \"2018-02-28T14:23:35.493Z\",\n         \"createdAt\": \"2018-02-28T14:23:35.493Z\",\n         \"status\": \"unused\",\n         \"type\": \"for adult\",\n         \"id\": \"B1yOoNEdM\"\n     }\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>A Unique id of Ticket document</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station autogenerated mongodb id</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination  station autogenerated mongodb  id</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "from.stationId",
            "description": "<p>The starting/source station custom id</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "to.stationId",
            "description": "<p>The  ending/destination  station custom  id</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger want to travel</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "passenger",
            "description": "<p>The Ticket owner/passenger Object</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>The price of the ticket</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The Date time when Ticket bought</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of Ticket usage[unused, used, cancelled]</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of ticket[default: for adult]</p>"
          }
        ]
      }
    },
    "filename": "routes/ticket.js",
    "groupTitle": "Ticket",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/tickets/:id",
    "title": "Update Ticket",
    "name": "putTicket",
    "group": "Ticket",
    "description": "<p>Update Ticket</p>",
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
          "content": "{\n  \"id\": \"5a8b5a4e7474781c44dfc65e\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success-Example",
          "content": " {\n    \"_id\": \"5a8b5a4e7474781c44dfc65e\",\n    \"route\": \"EW\",\n    \"passengerId\": {\n        \"_id\": \"5a815c1b205e0c14546476f6\",\n        \"email\": \"tesfaye.belachew@gmail.com\",\n        \"phone\": \"251-917-123456\",\n        \"createdAt\": \"2018-02-25T12:28:00.000Z\",\n        \"modifiedAt\": \"2018-02-25T12:28:00.000Z\"\n    },\n    \"from\": {\n        \"_id\": \"5a7455ec8e130d47c86a03f7\",\n        \"stationId\": 14,\n        \"name\": \"St Michael\",\n        \"route\": \"EW\"\n    },\n    \"to\": {\n        \"_id\": \"5a83e6d2abe26a1a1c0be0c4\",\n        \"stationId\": 118,\n        \"name\": \"Mexico\",\n        \"route\": \"EW\"\n    },\n    \"price\": 3.98,\n    \"modifiedAt\": \"2018-02-25T12:16:49.826Z\",\n    \"createdAt\": \"2018-02-19T23:14:22.794Z\",\n    \"status\": \"unused\",\n    \"type\": \"for adult\",\n    \"id\": \"r1NHbR5Pf\"\n}",
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
            "description": "<p>A Unique id of Ticket document</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "from",
            "description": "<p>The starting/source station autogenerated mongodb id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "to",
            "description": "<p>The  ending/destination  station autogenerated mongodb  id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "from.stationId",
            "description": "<p>The starting/source station custom id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "to.stationId",
            "description": "<p>The  ending/destination  station custom  id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<p>The route where the passenger want to travel</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "passenger",
            "description": "<p>The Ticket owner/passenger Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>The price of the ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The Date time when Ticket bought</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of Ticket usage[unused, used, cancelled]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of ticket[default: for adult]</p>"
          }
        ]
      }
    },
    "filename": "routes/ticket.js",
    "groupTitle": "Ticket",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Internal-Server-Error-Response:",
          "content": "* HTTP 500 Bad request\n{\n   \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/signup",
    "title": "Signup User",
    "name": "CreateUser",
    "group": "User",
    "description": "<p>Allows new users to signup/create account</p>",
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
    "url": "/users/",
    "title": "Find All Users",
    "name": "FindAllUsers",
    "group": "User",
    "description": "<p>Lists all registerd users</p>",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:userId",
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
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "description": "<p>Find user by id</p>",
    "version": "0.1.0",
    "permission": [
      {
        "name": "authenticated user"
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/login",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/:userId",
    "title": "Delete User",
    "name": "delete",
    "group": "User",
    "description": "<p>Delete a user</p>",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/me/logout",
    "title": "Logout User",
    "name": "logout",
    "group": "User",
    "description": "<p>Logout a user</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "http status 204\nhttp Authorization header is set to null",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:userId",
    "title": "Update User",
    "name": "putUser",
    "group": "User",
    "description": "<p>Allows registerd user to update their account</p>",
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
          "content": "HTTP 401 Unauthorized\n{\n \"message\":\"Access denied\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
