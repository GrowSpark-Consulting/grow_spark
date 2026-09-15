import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import { client } from './client';

const builder = createImageUrlBuilder(client);

/** Builds a Sanity CDN image URL. Chain `.width()`/`.height()` on the result as needed. */
export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
