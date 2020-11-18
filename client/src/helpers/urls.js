// base url of API
const API_ROOT = 'http://127.0.0.1:8000/api/v1';

// generating different url with base url for different use
export const APIUrls = {
  getCourses: () => `${API_ROOT}/course`,
  createCourse: () => `${API_ROOT}/course/create-course`,
  getCourseDetail: (id) => `${API_ROOT}/course/${id}`,
  createTopic: () => `${API_ROOT}/topic/create-topic`,
  getTopicDetail: (id) => `${API_ROOT}/topic/${id}`,
};
