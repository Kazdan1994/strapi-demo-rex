module.exports = () => ({
  seo: {
    enabled: true,
  },
  meilisearch: {
    config: {
      host: "http://localhost:7700",
      apiKey: "masterKey",
    }
  }
});
