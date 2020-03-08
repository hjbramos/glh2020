const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const QuestionController = require('./controllers/QuestionController');
const ReplyController = require('./controllers/ReplyController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.get('/question/list', QuestionController.list);
routes.post('/question', QuestionController.store);

routes.get('/reply', ReplyController.show);
routes.get('/reply/list', ReplyController.list);
routes.post('/reply', ReplyController.store);
routes.post('/reply/upvote', ReplyController.upVote);
routes.post('/reply/downvote', ReplyController.downVote);

module.exports = routes;