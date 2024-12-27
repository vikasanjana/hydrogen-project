/**
 * Returns a style object for an active or pending link.
 *
 * @param {{ isActive: boolean; isPending: boolean }} param0 - The state of the link.
 * @returns {object} - The style object to apply to the link.
 */
export function activeLinkStyle({ isActive, isPending }) {
    return {
      backgroundColor: isActive ? 'var(--globalBrandBlue)' : 'transparent',
      color: isActive ? 'white' : 'black',
    };
}

/**
 * Generates class names for active and inactive links.
 *
 * @param {boolean} isActive - Whether the link is active.
 * @param {string} baseClass - The base class applied to all links.
 * @param {string} activeClass - The additional class for active links.
 * @returns {string} The final class name string.
 */
export function activeLinkClass(isActive, baseClass = "navLink", activeClass = "active") {
    return `${baseClass} ${isActive ? activeClass : ""}`.trim();
  }

/**
 * Joins multiple class names into a single string.
 *
 * @param {...(string | undefined | false)} classes - Class names to join.
 * @returns {string} - The combined class names.
 */
export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

/**
 * Returns a conditional style based on whether a component is disabled.
 *
 * @param {boolean} isDisabled - Whether the component is disabled.
 * @returns {object} - The style object for a disabled component.
 */
export function disabledStyle(isDisabled) {
    return {
        opacity: isDisabled ? 0.5 : 1,
        pointerEvents: isDisabled ? 'none' : 'auto',
    };
}