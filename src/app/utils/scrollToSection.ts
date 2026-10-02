export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (!element.hasAttribute('tabindex')) {
    element.setAttribute('tabindex', '-1');
  }
  element.focus({ preventScroll: true });
}
