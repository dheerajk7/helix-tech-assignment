module.exports.getTopicDetail = function (request, response) {
  return response.status(200).json({
    message: 'getTopicDetail',
    params: request.params,
  });
};

module.exports.createTopic = function (request, response) {
  return response.status(200).json({
    message: 'getCourseDetail',
    body: request.body,
  });
};
