export const EndPoint = {
  mainTopics: "/stub/main-topics.yaml",
  topic: (topic: string) => `/stub/topics/${topic}.yaml`,
  courseDetail: (id: string) => `/stub/course-detail/${id}.yaml`,
  reviews: (id: string) => `/stub/reviews/${id}.yaml`
};
