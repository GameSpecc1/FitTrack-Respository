const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Optimize watch folders to reduce file watchers
config.watchFolders = [path.resolve(__dirname)];

// Optimize file watching
config.resolver = {
  ...config.resolver,
  nodeModulesPaths: [path.resolve(__dirname, "node_modules")],
  disableHierarchicalLookup: true,
};

// Exclude unnecessary files from watching
config.watchIgnorePatterns = [
  /node_modules\/(?!react-native|@react-native|react|@react|expo)/,
  /\.git\//,
  /\.expo\//,
  /dist\//,
  /web-build\//,
];

module.exports = withNativeWind(config, { input: "./global.css" });
