npm run build
cordova build android --debug
adb install -r $(pwd)/platforms/android/build/outputs/apk/android-debug.apk
