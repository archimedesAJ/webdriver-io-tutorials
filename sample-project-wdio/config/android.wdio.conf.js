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
    '../test/specs/android/webview.spec.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: 'Android',
        'appium:platformVersion': '16.0',
        'appium:deviceName': 'Pixel 8 Pro',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(),'app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true,
        'appium:chromedriverAutodownload': true
    }
];

config.services = [['appium', {
        command: 'appium',
        // args: {
        //     address: 'localhost',
        //     port: 4723,
        //     relaxedSecurity: true
        // },
        // logPath: './'
        
    }
]];


// Use ES module export instead of CommonJS
export { config };
