module.exports = {
  config: {
    projectName: "HEADERS"
  },
  simulation: require("./simulation"),
  collections: {
    postman: require("./postman.json"),
    insomnia: require("./insomnia.json")
  }
};
