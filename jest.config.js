// jest.config.js
module.exports = {
  verbose: true,
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  "transformIgnorePatterns": [ "node_modules/(?!(react-redux|lodash-es)/)" ]
};