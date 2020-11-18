const Course = require('../../../models/course');

module.exports.getCourses = async function (request, response) {
  try {
    let courses = await Course.find({}).populate('topics');
    return response.status(200).json({
      success: true,
      message: 'Courese Fetched Successfully',
      data: {
        courses: courses,
      },
    });
  } catch (err) {
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

module.exports.createCourse = async function (request, response) {
  try {
    let course = await Course.create({
      title: request.body.title,
      description: request.body.description,
      duration: request.body.duration,
    });

    if (!course) {
      return response.status(422).json({
        success: false,
        message: 'Error in adding new Course',
      });
    }
    return response.status(200).json({
      success: true,
      message: 'Course Created Successfully',
    });
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

module.exports.getCourseDetail = async function (request, response) {
  try {
    let course = await Course.findById(request.params.course_id).populate(
      'topics'
    );
    if (!course) {
      return response.status(422).json({
        success: false,
        message: 'Course Detail not found',
      });
    } else {
      return response.status(200).json({
        success: true,
        message: 'Course Detail Fetched Successfully',
        data: {
          course: course,
        },
      });
    }
  } catch (err) {
    return response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};
