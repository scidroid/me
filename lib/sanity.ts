import client from "@sanity/client";

export default client({
  projectId: "29neet2j",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});
