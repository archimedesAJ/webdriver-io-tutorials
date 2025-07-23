import { config } from './wdio.shared.conf.js';
import path from 'path';


// ====================
// Runner Configuration
// ====================
config.port = 4723;

// ============
// Specs
// ============
config.specs =[
    '../test/specs/ios/ios-native.spec.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: 'ios',
        'appium:platformVersion': '18.5',
        'appium:deviceName': 'iPhone 16',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(),'app/ios/UIKitCatalog.app'),
        'appium:autoGrantPermissions': true
    }
];

config.service = ['appium', {
        command: 'appium'
    }
];

// Use ES module export instead of CommonJS
export { config };
