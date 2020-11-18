const Course = require('../../../models/course');

module.exports.getCourses = async function (request, response) {
  try {
    let courses = await Course.find({}).populate('topics');
    return response.status(200).json({
      success: true,
      message: 'Courese Fetched Successfully',
      body: {
        courses: courses,
      },
    });
  } catch (err) {
    console.log(err);
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
      return response.status(200).json({
        success: false,
        message: 'Error in adding new Course',
      });
    }
    return response.status(200).json({
      success: true,
      message: 'Coures Created Successfully',
    });
  } catch (err) {
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

module.exports.getCourseDetail = function (request, response) {
  return response.status(200).json({
    message: 'getCourseDetail',
    params: request.params,
  });
};
