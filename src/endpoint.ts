export const EndPoint = {
  mainTopics:
    "/stub/main-topics.json",
  topic: (topic: string) =>
    `/stub/topics/${topic}.json`,
  courseDetail: (id: string) =>
    `/stub/course-detail/${id}.json`
};
