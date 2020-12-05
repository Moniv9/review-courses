export const EndPoint = {
  mainTopics:
    "https://raw.githubusercontent.com/Moniv9/review-courses/main/src/stub/main-topics.json",
  topic: (topic: string) =>
    `https://raw.githubusercontent.com/Moniv9/review-courses/main/src/stub/topics/${topic}.json`
};
