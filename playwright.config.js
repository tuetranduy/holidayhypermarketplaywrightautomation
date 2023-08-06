// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    // baseURL: 'http://127.0.0.1:3000',

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'dev',
      use: {
        ...devices['Desktop Chrome'],
        hhBaseUrl: 'https://dev-hh.holidayhype.co.uk/',
        nhsBaseUrl: 'https://dev-nhs.holidayhype.co.uk/',
        fcBaseUrl: 'https://dev-fc.holidayhype.co.uk/'
      },
    },

    {
      name: 'staging',
      use: {
        ...devices['Desktop Chrome'],
        hhBaseUrl: 'https://st-hh.holidayhype.co.uk/',
        nhsBaseUrl: 'https://st-nhs.holidayhype.co.uk/',
        fcBaseUrl: 'https://st-fc.holidayhype.co.uk/'
      },
    },

    {
      name: 'production',
      use: {
        ...devices['Desktop Chrome'],
        hhBaseUrl: 'https://www.holidayhypermarket.co.uk/',
        nhsBaseUrl: 'https://nhs.tui.co.uk/',
        fcBaseUrl: 'https://www.firstchoice.co.uk/'
      },
    },
  ],
});

