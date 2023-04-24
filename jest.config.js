module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|sass)$":
      "/Users/sofi/Desktop/SOFIA/4 семестр/Веб/shopProject/__mocks__/fileMock.js",
    axios: "axios/dist/node/axios.cjs",
  },
 

  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(axios|react-toastify))",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
  ],
  setupFilesAfterEnv: [
    "/Users/sofi/Desktop/SOFIA/4 семестр/Веб/shopProject/setupTests.js",
  ],
  
};
