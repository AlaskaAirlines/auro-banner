import { AuroBanner } from "../../src/auro-banner.js";

/**
 * The auro-banner element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image, and details.
 * */
class AuroBannerWCA extends AuroBanner {}

if (!customElements.get("auro-banner")) {
  customElements.define("auro-banner", AuroBannerWCA);
}
