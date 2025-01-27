module.exports = {
    default: {
      require: ["cypress/e2e/step-definitions/*.js"],
      nonGlobalStepDefinitions: true,
    },
  };
  