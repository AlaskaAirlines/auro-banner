import { AuroBanner } from './src/auro-banner';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-banner') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroBanner {});
  }
}

export { registerComponent }
