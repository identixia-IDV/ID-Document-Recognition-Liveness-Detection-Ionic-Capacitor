require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name = 'DocumentReaderCapacitor'
  s.version = package['version']
  s.summary = package['description']
  s.license = package['license']
  s.homepage = package['homepage']
  s.author = package['author']
  s.source = { :git => 'https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Ionic-Cordova.git', :tag => s.version.to_s }
  s.source_files = 'ios/Sources/DocumentReaderSdkPlugin/**/*.{h,m,mm,swift}'
  s.public_header_files = 'ios/Sources/DocumentReaderSdkPlugin/**/*.h'
  s.ios.deployment_target = '13.0'
  s.dependency 'Capacitor'
  s.swift_version = '5.1'
  fw_dir = File.join(__dir__, 'ios/Frameworks')
  have = File.directory?(File.join(fw_dir, 'docsdk.framework')) ||
    File.directory?(File.join(fw_dir, 'docsdk.xcframework'))
  unless have
    FileUtils.mkdir_p(fw_dir)
    zip = File.join(fw_dir, 'docsdk.xcframework.zip')
    system('curl', '-fsSL', '--connect-timeout', '8', '--retry', '1', '-o', zip,
           'https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-iOS/releases/download/v1.0.0/docsdk.xcframework.zip')
    system('unzip', '-o', '-q', zip, '-d', fw_dir) if File.file?(zip)
  end
  s.libraries = 'c++'
  s.frameworks = 'UIKit', 'Foundation', 'AVFoundation'
  # Keep framework on disk; do NOT use vendored_frameworks — docsdk is
  # device arm64 only and CocoaPods would force-link it into simulator builds.
  s.preserve_paths = 'ios/Frameworks/**/*'
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
    'CLANG_CXX_LANGUAGE_STANDARD' => 'c++17',
    'FRAMEWORK_SEARCH_PATHS[sdk=iphoneos*]' => '$(inherited) "$(PODS_TARGET_SRCROOT)/ios/Frameworks"',
    'OTHER_LDFLAGS[sdk=iphoneos*]' => '$(inherited) -framework docsdk -lc++',
  }
end
