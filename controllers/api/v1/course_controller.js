module.exports.getCourses = function (request, response) {
  return response.status(200).json({
    message: 'get -courese',
  });
};

module.exports.createCourse = function (request, response) {
  return response.status(200).json({
    message: 'create -courese',
    body: request.body,
  });
};

module.exports.getCourseDetail = function (request, response) {
  return response.status(200).json({
    message: 'getCourseDetail',
    params: request.params,
  });
};
