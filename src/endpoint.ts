export const EndPoint = {
  mainTopics: "/stub/main-topics.yaml",
  topic: (topic: string) => `/stub/topics/${topic}/_meta_.yaml`,
  courseDetail: (topic_id: string, id: string) => `/stub/topics/${topic_id}/${id}.yaml`,
  reviews: (id: string) => `/stub/reviews/${id}.yaml`
};
