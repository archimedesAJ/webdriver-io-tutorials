import config from './wdio.shared.conf.js';
import path from 'path';


// ====================
// Runner Configuration
// ====================
config.port = 4723;

// ============
// Specs
// ============
config.specs =[
    './test/specs/android/android-native*.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:platformVersion': '16.0',
        'appium:deviceName': 'Pixel 8 Pro',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(),'app/ios/UIKitCatalog.app'),
        'appium:autoGrantPermissions': true
    }
]


exports.config = config;
