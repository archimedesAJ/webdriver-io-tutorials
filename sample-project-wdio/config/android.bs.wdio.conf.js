import { config } from './wdio.shared.conf.js';
import 'dotenv/config'

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

// ============
// Specs
// ============
config.specs =[
    '../test/specs/android/hooks-scenario.spec.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: 'Android',
        'appium:platformVersion': '14.0',
        'appium:deviceName': 'Google Pixel 8 Pro',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'bs://5a5b16032f43831d16ba8090300f7ac91557b470',
        'appium:autoGrantPermissions': true
    }
];

config.services = ['browserstack'];

// Use ES module export instead of CommonJS
export { config };
