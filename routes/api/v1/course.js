const express = require('express');
const router = express.Router();
const courseController = require('../../../controllers/api/v1/course_controller');

router.get('/', courseController.getCourses);
router.post('/create-course', courseController.createCourse);
router.get('/:course_id', courseController.getCourseDetail);

module.exports = router;
