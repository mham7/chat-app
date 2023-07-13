import 'dotenv/config';
export default{   
  "expo": {
    "name": "chat-app",
    "slug": "chat-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    extra:{
    apiKey: process.env.Api_Key,
  authDomain: process.env.Auth_Domain,
  projectId:process.env.Project_Id ,
  storageBucket: process.env.Storage_Bucket,
  messagingSenderId: process.env.Messaging_SenderId,
  appId: process.env.App_Id,
  measurementId: process.env.Measurement_Id },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
