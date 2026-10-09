import { getImageProps } from 'next/image';

/**
 * `src`/`srcSet`/`sizes` for a plain `<img>`, served through Next's image
 * optimizer (resized per viewport, re-encoded as WebP) instead of the original
 * file in public/.
 *
 * This deliberately is not `<Image>`: that is a client component, and the
 * sections using it are Server Components. `getImageProps` runs on the server
 * and returns plain attributes, so each `<img>` keeps its own loading,
 * fetchPriority, alt and classes exactly as written — only where the bytes
 * come from changes. The files in public/ are untouched and still the source.
 */
export function responsiveImage(src: string, width: number, height: number, sizes: string) {
  const { props } = getImageProps({ src, width, height, sizes, alt: '' });
  return { src: props.src, srcSet: props.srcSet, sizes: props.sizes };
}

/**
 * Full-bleed hero still under `object-cover` in a 100svh section. On a
 * portrait screen the image is sized by the viewport's height, not its width:
 * a 1672×941 frame filling the height is ~178vh wide. `100vw` alone made
 * phones fetch a ~400px-wide file and stretch it.
 */
export const SIZES_FULL_BLEED = 'max(100vw, 178vh)';

/** `.portrait-frame`: full width up to its 420px cap. */
export const SIZES_PORTRAIT = '(max-width: 460px) 100vw, 420px';

/** `.lead-avatar` in a 1 → 3 column grid (sm:grid-cols-3). */
export const SIZES_AVATAR_3COL = '(min-width: 640px) 33vw, 100vw';

/** `.lead-avatar` in a 1 → 2 → 4 column grid (sm:grid-cols-2 lg:grid-cols-4). */
export const SIZES_AVATAR_4COL = '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw';
