# Check-You-Win-App


# Generate Icons & splashes

```
ng resource
```


Change "versionCode" in AndroidManifest.xml

# Android Build & Deploy

to generate a signing key:
```
keytool -genkey -v -keystore my-project-android-key.jks -keyalg RSA -validity 10000
```

to make a release build:
```
ns build ios --for-device --release --provision='Ea-9-8b-profile' --force
```

Then upload apk in the console here.


# iOS Build & Deploy

prepare with privisioning profile:
```
ns prepare ios --release --for-device --provision Ea-9-8b-profile --force
```

build with provision:
```
ns build ios --for-device --release --provision Ea-9-8b-profile --force
```

publish ios app:
```
ns publish ios ______@gmail.com --ipa ./platforms/ios/build/Release-iphoneos/studyapp.ipa --appleApplicationSpecificPassword <app-specific-pwd>

ns publish ios __@gmail.com --ipa ./platforms/ios/build/Release-iphoneos/CheckYouWinApp.ipa --appleApplicationSpecificPassword ____

```