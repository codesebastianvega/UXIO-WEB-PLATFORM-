import { PlatformGroup } from './types';
import { contentPlatformsMetaOmni } from './content-platforms-meta-omni';
import { contentPlatformsTikTokGoogle } from './content-platforms-tiktok-google';

export const contentPlatforms: PlatformGroup[] = [
  ...contentPlatformsMetaOmni,
  ...contentPlatformsTikTokGoogle,
];
