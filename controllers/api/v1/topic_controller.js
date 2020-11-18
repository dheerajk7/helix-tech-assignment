const Course = require('../../../models/course');
const Topic = require('../../../models/topic');

module.exports.getTopicDetail = async function (request, response) {
  try {
    let topic = await Topic.findById(request.params.topic_id);
    if (!topic) {
      return response.status(422).json({
        success: false,
        message: 'Topic Detail not found',
      });
    }
    return response.status(200).json({
      success: true,
      message: 'Topic Detail Fetched Successfully',
      data: {
        topic: topic,
      },
    });
  } catch (err) {
    return response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports.createTopic = async function (request, response) {
  try {
    let course = await Course.findByIdAndUpdate(request.body.course_id);
    if (!course) {
      return response.status(422).json({
        success: false,
        message: 'Course not found with Id',
      });
    }
    let topic = await Topic.create({
      title: request.body.title,
      description: request.body.description,
      course: course.id,
    });

    course.topics.push(topic.id);
    course.save();
    if (!topic) {
      return response.status(422).json({
        success: false,
        message: 'Error in creating topic',
      });
    } else {
      return response.status(422).json({
        success: true,
        message: 'Topic Added Successfully',
      });
    }
  } catch (err) {
    return response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};
