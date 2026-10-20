<div align="center">
<img alt="Identixia" src="https://raw.githubusercontent.com/identixia-IDV/identixia-assets/main/brand/logo.png" width="320"/>

<a href="https://identixia.com"><img src="https://img.shields.io/badge/Website-0F766E?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website" /></a>
<a href="https://docs.identixia.com"><img src="https://img.shields.io/badge/Docs-0F766E?style=for-the-badge&logo=gitbook&logoColor=white" alt="Docs" /></a>
<a href="https://huggingface.co/Identixia"><img src="https://img.shields.io/badge/HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" alt="Hugging Face" /></a>
<a href="https://hub.docker.com/u/identixia"><img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Hub" /></a>
<a href="https://playground.identixia.com/"><img src="https://img.shields.io/badge/Playground-0F766E?style=for-the-badge&logo=cloudplayground&logoColor=white" alt="Playground" /></a>
</div>

<div align="center">

# <img src="https://cdn.simpleicons.org/ionic/3880FF" width="32" height="32" alt="" /> ID Document Recognition and Liveness Detection SDK for Ionic Capacitor — Plugin and Sample App | Identixia

</div>

Integrate **ID document OCR and liveness detection** with the **Identixia Ionic Capacitor SDK**. This repository provides a Ionic Capacitor plugin for Android and iOS for reading passports, national ID cards, and driver licenses. Extract identity fields using optical character recognition (OCR), read the machine-readable zone (MRZ), and decode supported document barcodes. Add document liveness checks for screen replays, printed copies, and replaced photos when enabled by your license.

Use the sample to build document capture and data extraction into customer onboarding, Know Your Customer (KYC), and electronic KYC (eKYC) workflows. Processing runs on the device; images are not sent to the Identixia cloud.

Package: `document-reader-capacitor`.

<p><img src="https://img.shields.io/badge/On-device-0F766E?style=flat-square" alt="On-device" /> <img src="https://img.shields.io/badge/Android%20%2B%20iOS-0F766E?style=flat-square" alt="Android%20%2B%20iOS" /> <img src="https://img.shields.io/badge/MRZ%20OCR-0F766E?style=flat-square" alt="MRZ%20OCR" /> <img src="https://img.shields.io/badge/Document%20liveness-0F766E?style=flat-square" alt="Document%20liveness" /> <img src="https://img.shields.io/badge/Plugin-5A6573?style=flat-square" alt="Plugin" /></p>

**Capacitor** (not Cordova). Cordova: [ID-Document-Recognition-Liveness-Detection-Ionic-Cordova](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Ionic-Cordova).

> For setup, integration, and API guides, see the [ID Document Recognition and Liveness Detection SDK documentation for Ionic Capacitor](https://docs.identixia.com/developers/id-document-sdk/ionic-capacitor). This page covers the sample repository.

## <img src="https://api.iconify.design/lucide/clipboard-list.svg?color=%230F766E" width="24" height="24" alt="" /> SDK overview

The sample includes a demo license. Your own application requires a key issued for its application identifier.

| Topic | Basic information |
| --- | --- |
| **Product** | On-device **ID document recognition** Ionic Capacitor plugin (KYC / eKYC) |
| **Documents** | Passport, national ID, driver license |
| **Extracts** | OCR · passport MRZ · barcode / QR · optional document liveness |
| **Runtime** | Download the `runtime` Release from [Releases](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Ionic-Capacitor/releases/tag/runtime) |
| **Demo id** | `com.identixia.documentreader` / `.app` (until **12 Aug 2027**) |
| **Tools** | npm · Capacitor · physical arm64 Android / iPhone |
| **UI** | Home screen with Camera, Gallery, and About options; results on one scrollable screen |
| **Privacy** | All processing on device — no Identixia cloud for document data |

---

## <img src="https://api.iconify.design/lucide/terminal.svg?color=%230F766E" width="24" height="24" alt="" /> Quick start

Choose the instructions for your device below. Run the Android and iOS steps separately; iOS builds require a Mac.

### <img src="https://img.shields.io/badge/-1-0F766E?style=for-the-badge" alt="" /> Clone

```bash
git clone https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Ionic-Capacitor.git
cd ID-Document-Recognition-Liveness-Detection-Ionic-Capacitor
```

Download [`documentfullsdk.aar`](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Android/releases/tag/runtime) from the [ID-Document-Recognition-Liveness-Detection-Android Releases](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Android/releases/tag/runtime). Save the file as `example/android/libdocumentfullsdk/documentfullsdk.aar`.

Download [`documentfullsdk.framework.zip`](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-iOS/releases/tag/runtime) from the [ID-Document-Recognition-Liveness-Detection-iOS Releases](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-iOS/releases/tag/runtime). Unzip it into `ios/Frameworks/`. The files should sit in that folder, not inside an extra directory.

### Android

`ionic serve` and the browser preview do not load the native engine. Use a physical **arm64** Android phone.

From the repository root:

```bash
npm install
npm run build
cd example
npm install
npm run sync
npm run android
```

`npm run android` opens Android Studio. Select the physical arm64 device and press Run.

### iOS

Use a Mac with Xcode and a physical **iPhone**. `ionic serve` does not load the native engine. Do not use the Simulator for the camera sample.

From the repository root:

```bash
npm install
npm run build
cd example
npm install
npm run sync
npm run ios
```

`npm run ios` opens Xcode. Select the physical iPhone and press Run.

### <img src="https://img.shields.io/badge/-2-0F766E?style=for-the-badge" alt="" /> Activate / license

1. Copy the id of your own app. On Android this is the application id. On iOS this is the bundle id. The sample id is `com.identixia.documentreader`, `com.identixia.documentreader.app`.
2. Email that id and the product name to [contact@identixia.com](mailto:contact@identixia.com).
3. Replace the demo key in `example/src/license.ts` with the key you receive.
4. Rebuild, then continue with the next step.

### <img src="https://img.shields.io/badge/-3-0F766E?style=for-the-badge" alt="" /> First capture

Wait for the Home screen to show **Ready**, then choose **Camera** to capture a document or **Gallery** to select an image. Check the license status on the Result or About screen.

---

## <img src="https://api.iconify.design/lucide/list-checks.svg?color=%230F766E" width="24" height="24" alt="" /> Features

| Capability | What it does |
| --- | --- |
| <img src="https://api.iconify.design/lucide/id-card.svg?color=%230F766E" width="16" height="16" alt="" /> Passports, ID cards, and driver licenses | On-device ID document recognition for passports, national IDs, and driver licenses |
| <img src="https://api.iconify.design/lucide/scan-text.svg?color=%230F766E" width="16" height="16" alt="" /> Passport MRZ OCR | Read text from the machine-readable zone (MRZ) of supported travel documents |
| <img src="https://api.iconify.design/lucide/scan-barcode.svg?color=%230F766E" width="16" height="16" alt="" /> ID card barcode | PDF417 / barcode extraction on supported cards |
| <img src="https://api.iconify.design/lucide/camera.svg?color=%230F766E" width="16" height="16" alt="" /> Live capture | Locate and capture a document with the camera, or select front and optional back images from the gallery |
| <img src="https://api.iconify.design/lucide/shield.svg?color=%230F766E" width="16" height="16" alt="" /> Document liveness | Check for presentation attacks such as screen replays, printed copies, and replaced photos when licensed |
| <img src="https://api.iconify.design/lucide/scroll-text.svg?color=%230F766E" width="16" height="16" alt="" /> Result UI | A single scrollable screen showing identity details, extracted fields, checks, images, and the raw JSON response |
| <img src="https://api.iconify.design/lucide/house.svg?color=%230F766E" width="16" height="16" alt="" /> Home UI | Home screen with Camera, Gallery, and About options |

---

## <img src="https://api.iconify.design/lucide/pc-case.svg?color=%230F766E" width="24" height="24" alt="" /> System requirements

| | |
| --- | --- |
| Devices | Physical **arm64** Android and/or **iPhone** |
| Demo Android id | `com.identixia.documentreader` |
| Demo iOS id | `com.identixia.documentreader.app` |
| Package | `document-reader-capacitor` |

---

## <img src="https://api.iconify.design/lucide/package.svg?color=%230F766E" width="24" height="24" alt="" /> SDK installation

The example builds with native runtimes already in the clone when present. Missing files are fetched from the `v1.0.0` GitHub Releases.

| | Path after unzip |
| --- | --- |
| <img src="https://cdn.simpleicons.org/android/3DDC84" width="14" height="14" alt="" /> Android | `example/android/libdocumentfullsdk/documentfullsdk.aar` |
| <img src="https://cdn.simpleicons.org/apple/000000" width="14" height="14" alt="" /> iOS | `ios/Frameworks/documentfullsdk.framework` |

For your own app, add `document-reader-capacitor` as a dependency from this repository and pin it to the `v1.0.0` tag. Use your package manager’s GitHub dependency syntax. Avoid dependencies on local folders when distributing the app.

Use `DocumentCapture` and `ResultParser` to reuse the sample’s capture and result-handling components. Keep `useLegacyPackaging = true` in the Android build configuration when the engine requires it.

---

## <img src="https://api.iconify.design/lucide/rocket.svg?color=%230F766E" width="24" height="24" alt="" /> Run

Start in the repository root and follow the commands for your target platform. These commands are also listed in [Quick start](#-quick-start).

**Android** — physical arm64 phone. This opens Android Studio; press Run on that device:

```bash
npm install
npm run build
cd example
npm install
npm run sync
npm run android
```

**iOS** — Mac, Xcode, physical iPhone. This opens Xcode; press Run on that iPhone:

```bash
npm install
npm run build
cd example
npm install
npm run sync
npm run ios
```

---

## <img src="https://api.iconify.design/lucide/key-round.svg?color=%230F766E" width="24" height="24" alt="" /> SDK license and activation

1. Run the sample with the bundled key and the sample id below.
2. For your own app, email [contact@identixia.com](mailto:contact@identixia.com) with the platform, your application id or bundle id, and the features you need.
3. Put the key you receive in the same place as the demo key.
4. Rebuild. Activation runs before SDK init. If it fails, the key does not match that id.

Sample id:

- `com.identixia.documentreader`
- `com.identixia.documentreader.app`

Set the key, then activate:

https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Ionic-Capacitor/blob/5d3ba5242c3b7b4b65aaa7090f063204f13f0610/example/src/license.ts#L13-L19

https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Ionic-Capacitor/blob/5d3ba5242c3b7b4b65aaa7090f063204f13f0610/example/src/SdkContext.tsx#L73-L73

## <img src="https://api.iconify.design/lucide/images.svg?color=%230F766E" width="24" height="24" alt="" /> Screenshots

<p align="center">
<img src="https://raw.githubusercontent.com/identixia-IDV/identixia-assets/main/screenshots/document-reader/desktop/demo-ui-status.png" width="720" alt="Document result status" />
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/identixia-IDV/identixia-assets/main/screenshots/document-reader/desktop/demo-ui-fields-code.png" width="420" alt="CODE fields" />
<img src="https://raw.githubusercontent.com/identixia-IDV/identixia-assets/main/screenshots/document-reader/desktop/demo-ui-fields-visual.png" width="420" alt="VISUAL fields" />
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/identixia-IDV/identixia-assets/main/screenshots/document-reader/desktop/demo-ui-images.png" width="420" alt="Cropped document images" />
<img src="https://raw.githubusercontent.com/identixia-IDV/identixia-assets/main/screenshots/document-reader/desktop/demo-ui-checks-validity.png" width="420" alt="Validity checks" />
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/identixia-IDV/identixia-assets/main/screenshots/document-reader/desktop/demo-ui-checks-liveness.png" width="420" alt="Liveness checks" />
</p>

## <img src="https://api.iconify.design/lucide/braces.svg?color=%230F766E" width="24" height="24" alt="" /> API

The following SDK methods are used by the sample and can also be called from your application.

| API | Purpose |
| --- | --- |
| `activate(license)` then `init()` | Activate the license, then initialize the engine. Run these calls in order on one background thread. |
| Camera | Live capture from the sample Home screen. |
| Gallery | Still image of a passport, national ID, or driver license. |
| `recognize` / document process | Identity, MRZ, barcode, and field text. |
| Document liveness | Presentation-attack result when the license includes it. |

---

## <img src="https://api.iconify.design/lucide/layers.svg?color=%230F766E" width="24" height="24" alt="" /> SDKs for other platforms

| | Platform | Repo |
| --- | --- | --- |
| <img src="https://cdn.simpleicons.org/android/3DDC84" width="18" height="18" alt="" /> | Android | [ID-Document-Recognition-Liveness-Detection-Android](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Android) |
| <img src="https://cdn.simpleicons.org/apple/000000" width="18" height="18" alt="" /> | iOS | [ID-Document-Recognition-Liveness-Detection-iOS](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-iOS) |
| <img src="https://cdn.simpleicons.org/flutter/02569B" width="18" height="18" alt="" /> | Flutter | [ID-Document-Recognition-Liveness-Detection-Flutter](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Flutter) |
| <img src="https://cdn.simpleicons.org/react/61DAFB" width="18" height="18" alt="" /> | React Native | [ID-Document-Recognition-Liveness-Detection-React-Native](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-React-Native) |
| <img src="https://cdn.simpleicons.org/ionic/3880FF" width="18" height="18" alt="" /> | Ionic Capacitor | [ID-Document-Recognition-Liveness-Detection-Ionic-Capacitor](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Ionic-Capacitor) |
| <img src="https://cdn.simpleicons.org/apachecordova/E8E8E8" width="18" height="18" alt="" /> | Ionic Cordova | [ID-Document-Recognition-Liveness-Detection-Ionic-Cordova](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Ionic-Cordova) |
| <img src="https://cdn.simpleicons.org/windows/0078D4" width="18" height="18" alt="" /> | Windows | [ID-Document-Recognition-Liveness-Detection-Windows](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Windows) |
| <img src="https://cdn.simpleicons.org/docker/2496ED" width="18" height="18" alt="" /> | Linux / Docker | [ID-Document-Recognition-Liveness-Detection-Docker](https://github.com/identixia-IDV/ID-Document-Recognition-Liveness-Detection-Docker) |

---

## <img src="https://api.iconify.design/lucide/mail.svg?color=%230F766E" width="24" height="24" alt="" /> Contact

<div align="center">

<a href="mailto:contact@identixia.com"><img alt="Email contact@identixia.com" src="https://img.shields.io/badge/Email-contact%40identixia.com-0F766E?style=for-the-badge&logo=gmail&logoColor=white" /></a>
<a href="https://wa.me/17018854218"><img alt="WhatsApp +1 (701) 885-4218" src="https://img.shields.io/badge/WhatsApp-%2B1_(701)_885--4218-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" /></a>
<a href="https://t.me/identixia"><img alt="Telegram @identixia" src="https://img.shields.io/badge/Telegram-%40identixia-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" /></a>

</div>

---
