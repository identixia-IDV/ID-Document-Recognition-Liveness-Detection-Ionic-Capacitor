/**
 * Demo FP1 licenses — same keys as native DocumentReader Android / iOS Apps.
 * Bound to applicationId / bundle id below. Request a new key if you change the id.
 */
import { Capacitor } from '@capacitor/core';

/** Android demo applicationId (capacitor.config.ts appId) */
export const ANDROID_APPLICATION_ID = 'com.identixia.documentreader';

/** iOS demo bundle id (set in Xcode / project.pbxproj) */
export const IOS_BUNDLE_ID = 'com.identixia.documentreader.app';

const ANDROID_LICENSE =
  'pyyR2AEC5clkMnPlmPVkYelfEu6NdpQRmDNcS0KpaoYzF5AAAAB6QoR+TNDOiSjVBm5OaVKQaXtKDMalSBCxiwAcCwRWC2tWzPoL6g3lz4thsSAgMGR659r2uXj/gjUWwXsgjQnJWAhEUczQcpAwDMzCmRAGemlXVA5HTqCyaXVmVk5l4dSRlR84ADxIDmESWg93PPlfUY4glMCCsjCulfHXBDFQBWHbY0RWqzwyVZ1JxbOq72pnADBlAjEA1tGdPxkolws69anfS9Q1ctn3MEiLaETue7X+Tg0CDdpTQaVHrBnXW6zntMHdeD4jAjB/5jyrxkehDM1/K4F7dkQX2P0qCz7grvT708JpBoQDcsU3uGn92NgJTIYhLFsz5HE=';

const IOS_LICENSE =
  'pyyR2AEClOsxkl9GkGccuanwH32QXAGe5rr/6z7KaidPhZAAAABcdSv4pkYmf5y2jcuSlHYxCpbRvfjSOXdPKCuVNgBoDCHYL+qG35n0Xa7yujdEdOpO6TWZcBK5mwLe1SNZS4779QxqOwAExgnWZsg9CGKP7Slf1mTgosr26ScfBKGa+7hhPXA1uftP5WyYVh2MjVoJ/+fqHZIfoC+2aZxfvBpreJMTNFKTfTx+QYVeI68rWVtnADBlAjEA6Z8Y5VJr+5LYKy5BC2ImSs6FbP17MnskNPCpgaNZVUyeG1ImEd6SuocSLHTvvcJtAjBpb3JtSseEf9Lpb0k+Lsus03pNUi/g2SAVMct9WzjzE0cuKsfxi3wdCAZLuWasYVM=';

export function demoLicense(): string {
  return Capacitor.getPlatform() === 'ios' ? IOS_LICENSE : ANDROID_LICENSE;
}
