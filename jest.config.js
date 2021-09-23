module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '/node_modules/(?!react-navigation|react-native|react-native-tab-vew)',
  ],
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js",
    '@testing-library/react-native/dont-cleanup-after-each'
  ],
  moduleNameMapper: { 
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js", 
    "\\.(css|less)$": "<rootDir>/assetsTransformer.js" 
  }
}
