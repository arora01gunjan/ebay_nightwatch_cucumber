const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'step_definitions',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:reports/cucumber.json',
    'features']
});

module.exports = {
  output_folder: 'reports',
  page_objects_path: 'pages',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  globals: {
    "waitForConditionTimeout": 10000 // sometimes internet is slow so wait.
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:8087',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    }
  }
};
