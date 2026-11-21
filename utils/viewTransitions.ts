import { flushSync } from 'react-dom';

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

type DocumentWithViewTransition = Document & {
  startViewTransition?: (updateCallback: () => void) => { finished: Promise<void> };
};

export const runViewTransition = (update: () => void): void => {
  if (typeof document === 'undefined' || prefersReducedMotion()) {
    update();
    return;
  }

  const doc = document as DocumentWithViewTransition;
  if (typeof doc.startViewTransition !== 'function') {
    update();
    return;
  }

  doc.startViewTransition(() => {
    flushSync(update);
  });
};
