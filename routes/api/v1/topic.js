const express = require('express');
const router = express.Router();
const topicController = require('../../../controllers/api/v1/topic_controller');

router.post('/create-topic', topicController.createTopic);
router.get('/:topic_id', topicController.getTopicDetail);

module.exports = router;
