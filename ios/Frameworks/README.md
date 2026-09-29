# iOS framework

`docsdk.framework` belongs here when it is already in the clone. CocoaPods downloads the `v1.0.0` iOS GitHub Release only when it is missing.

The framework includes `Info.plist` (`CFBundleExecutable` = `docsdk`). The example app’s **Embed Identixia DocSDK** phase re-signs `docsdk` and nested `dcrcore` with your Xcode Team identity (`example/ios/App/scripts/sign_nested_docsdk.sh`).
