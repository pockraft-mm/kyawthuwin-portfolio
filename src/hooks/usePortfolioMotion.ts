import { useEffect } from 'react';

export function usePortfolioMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
    let observer: IntersectionObserver | undefined;

    const syncReveals = () => {
      observer?.disconnect();
      document.documentElement.classList.remove('has-reveal');

      if (preference.matches || !('IntersectionObserver' in window)) {
        revealItems.forEach((item) => item.classList.add('is-visible'));
        return;
      }

      document.documentElement.classList.add('has-reveal');
      observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
      revealItems.forEach((item) => observer?.observe(item));
    };

    syncReveals();
    preference.addEventListener('change', syncReveals);
    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', syncReveals);
      document.documentElement.classList.remove('has-reveal');
    };
  }, []);

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>('.cursor-follower');
    if (!cursor) return;
    const preference = window.matchMedia(
      '(pointer: fine) and (hover: hover) and (min-width: 721px) and (prefers-reduced-motion: no-preference)',
    );

    const hideCursor = () => cursor.classList.remove('cursor-visible', 'cursor-link');
    const moveCursor = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        hideCursor();
        return;
      }
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      cursor.classList.add('cursor-visible');
    };
    const updateHover = (event: PointerEvent) => {
      const target = event.target;
      cursor.classList.toggle('cursor-link', target instanceof Element && !!target.closest('a, button'));
    };
    const removeListeners = () => {
      window.removeEventListener('pointermove', moveCursor);
      window.removeEventListener('pointerover', updateHover);
      window.removeEventListener('blur', hideCursor);
      document.documentElement.removeEventListener('pointerleave', hideCursor);
      hideCursor();
    };
    const syncCursor = () => {
      removeListeners();
      if (!preference.matches) return;
      window.addEventListener('pointermove', moveCursor);
      window.addEventListener('pointerover', updateHover);
      window.addEventListener('blur', hideCursor);
      document.documentElement.addEventListener('pointerleave', hideCursor);
    };

    syncCursor();
    preference.addEventListener('change', syncCursor);
    return () => {
      removeListeners();
      preference.removeEventListener('change', syncCursor);
    };
  }, []);
}
