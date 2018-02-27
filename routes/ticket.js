/**
*Load third party module dependecies
*/
var express = require('express');
/**
*Load ticket controller module
*/
var ticketController = require('../controllers/ticket');

var router = express.Router();
/**
 * @api {POST} /tickets/ Create ticket
 * @apiName CreateTicket
 * @apiGroup Ticket
 * @apiDescription Creates a new Ticket
 *
 * @apiParam {String} name The name of the Ticket
 * @apiParam {String} ticketId The last name of the Ticket
 * @apiParam {String} route The route of the Ticket
 * @apiParam {Number} latitude The latitude of the ticket
 * @apiParam {Number} longitude The longitude of the sation
 *
 * @apiParamExample Request Example
 *
 * {
 *   "_id": "5a74264fc461a418b08dae07",
 *   "ticketId": "2",
 *   "name": "Meri",
 *   "longitude": 38.863153,
 *   "latitude": 9.0195233,
 *   "createdAt": "2018-02-02T08:50:23.602Z",
 *   "modifiedAt": "2018-02-02T08:50:23.602Z",
 *   "route": "EW"
 * }
 *
 * @apiSuccessExample Response Example
 *
 * {
 *   "_id": "5a478c962698af267483b1ee",
 *   "email": "john1@aksum.com",
 *   "firstName": "Evana",
 *   "lastName": "Mangato",
 *   "dateCreated": "2017-12-30T12:54:46.419Z",
 *   "lastModified": "2017-12-30T12:54:46.419Z",
 *   "__v": 0
 * }
 */
router.post('/', ticketController.create);

/**
 * @api {GET} /tickets/ Get Tickets
 * @apiName GetTickets
 * @apiGroup Ticket
 *
 *
 */
 router.get('/', ticketController.findAll);
/**
 * @api {GET} /tickets/paginate Ticket Paginate
 * @apiName GetTicketsPaginate
 * @apiGroup Ticket
 *
 * @
 */
router.get('/paginate', ticketController.paginate);

/**
 * @api {GET} /tickets/:id Get Ticket
 * @apiName GetTicket
 * @apiGroup Ticket
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/tickets/5a478c962698af267483b1ee
 */
 router.get('/:id', ticketController.findById);

router.get('/customid/:cid', ticketController.findByCustomId);

/**
 * @api {UPDATE} /tickets/:id Update Ticket
 * @apiName UpdateTickets
 * @apiGroup Ticket
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/tickets/5a478c962698af267483b1ee
 */
router.put('/:id', ticketController.update);

/**
 * @api {DELETE} /tickets/:id Delete Ticket
 * @apiName DeleteTickets
 * @apiGroup Ticket
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/tickets/5a478c962698af267483b1ee
 */
router.delete('/:id', ticketController.delete);
/**
 * @api {DELETE} /tickets/:id Delete Ticket
 * @apiName DeleteTickets
 * @apiGroup Ticket
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/tickets/5a478c962698af267483b1ee
 */
router.get('/my/tickets',ticketController.findMine);

module.exports = router;
