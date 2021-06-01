/* eslint-disable init-declarations */
/* eslint-disable radix */
/* eslint-disable one-var */
/* eslint-disable no-negated-condition */
/* eslint-disable no-underscore-dangle, no-magic-numbers, max-statements */

// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";
import { styleMap } from "lit-html/directives/style-map";
import styleCss from "./style-css.js";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-card-hero element provides users a flexible way to convey a summary of information in various large formats.
 * @attr {Boolean} flipped - The content column will move to the right and the graphic column will move to the left.  No change on mobile.  Graphic still on top and content below.
 * @attr {Boolean} onBackground - This setting provides padding around the banner when used on a background color or image.
 * @attr {Boolean} inset - Adds additional padding around the content slot.  Useful when the banner is wrapped in a background color.
 * @attr {Boolean} overlay - Enables the overlay slot which adds an overlay that sits between the two columns and overlays a graphic 
 * @attr {String} overlayBg - Sets a background behind the overlay
 * @attr {String} ratio - in the format 'X:Y' where 'X' and 'Y' are two integers.
 * @slot content - Content in the left column and adds default padding between the two columns.
 * @slot graphic - Content in the right column and has no default padding so an auro-background can fill the entire space.
 * @slot overlay - Content in the front overlay.
 */
class AuroBanner extends LitElement {

  constructor() {
    super();
    this.ratio = "1:1";
    this.overlay = false;
    this.overlayBg = "var(--auro-color-brand-neutral-400)";
    this.flipped = false;
    this.onBackground = false;
    this.inset = false;
  }

  static get properties() {
    return {
      onBackground: {
        type: Boolean,
        reflect: true,
      },
      inset: {
        type: Boolean,
        reflect: true,
      },
      flipped: {
        type: Boolean,
        reflect: true,
      },
      overlay: {
        type: Boolean,
        reflect: true,
      },
      overlayBg: {
        type: String,
      },
      ratio: {
        type: String,
      },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    let leftRatio
    let rightRatio

    if (!this.flipped) {
      leftRatio = Number.parseInt(this.ratio.split(":")[0]);
      rightRatio = Number.parseInt(this.ratio.split(":")[1]);
    } else {
      leftRatio = Number.parseInt(this.ratio.split(":")[1]);
      rightRatio = Number.parseInt(this.ratio.split(":")[0]);
    }

    const leftPercent = leftRatio * (100 / (leftRatio + rightRatio));
    const rightPercent = rightRatio * (100 / (leftRatio + rightRatio));

    const leftSlotStyles = {
        flexBasis: `${leftPercent}%`,
      },
      rightSlotStyles = {
        flexBasis: `${rightPercent}%`,
      };

    return html` <div class="bannerWrapper">
        ${leftPercent === 0
    ? html``
    : html`<div class="item content" style=${styleMap(leftSlotStyles)}>
              <slot name="content"></slot>
            </div>`}
        ${rightPercent === 0
    ? html``
    : html`<div class="item graphic" style=${styleMap(rightSlotStyles)}>
              <slot name="graphic"></slot>
            </div>`}
      </div>
      ${this.overlay
    ? html` <div class="overlayContainer">
            <div class="overlayBg" style="background: ${this.overlayBg}">
              <slot name="overlay"></slot>
            </div>
          </div>`
    : html``}`;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-banner")) {
  customElements.define("auro-banner", AuroBanner);
}
