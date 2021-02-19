# Check-You-Win-App


# Generate Android key

to generate a signing key:
```
keytool -genkey -v -keystore my-project-android-key.jks -keyalg RSA
```

to make a release build:
```
ns build android --release --key-store-path keys/check-you-win-android-key2.jks --key-store-password jam123 --key-store-alias check-you-win --key-store-alias-password jam123 --force

```

Then upload apk in the console here.

