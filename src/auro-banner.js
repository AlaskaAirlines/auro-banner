// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines */

import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map.js';
import styleCss from "./style-css.js";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-card-hero element provides users a flexible way to convey a summary of information in various large formats.
 * @attr {Boolean} flipped - The content column will move to the right and the graphic column will move to the left.  No change on mobile.  Graphic still on top and content below.
 * @attr {Boolean} row - This setting keeps the row formatting for mobile instead of the default stacking behavior.
 * @attr {Boolean} inset - Add padding inside the banner.
 * @attr {Boolean} insetContent - Add padding inside the `content` and `graphicContent` slots.
 * @attr {String} overlayBg - Sets a background behind the overlay
 * @attr {String} ratio - in the format 'X:Y' where 'X' and 'Y' are two integers.
 * @slot content - Content in the left column and adds default padding between the two columns.
 * @slot graphic - Content in the right column and has no default padding so an auro-background can fill the entire space.
 * @slot overlay - Content in the front overlay.
 * @attr {String} graphic - Path to default banner image for all breakpoints.
 * @attr {String} graphicSm - Path to banner image for 'sm' breakpoint and above.
 * @attr {String} graphicMd - Path to banner image for 'md' breakpoint and above.
 * @attr {String} graphicLg - Path to banner image for 'lg' breakpoint and above.
 * @attr {Boolean} hideGraphicSm - Force hides the graphic below the small breakpoint.
 * @attr {Boolean} hideGraphicMd - Force hides the graphic between the small and medium breakpoints.
 * @attr {Boolean} hideGraphicLg - Force hides the graphic above the medium breakpoint.
 * @attr {Boolean} roundedBorder - Adds a rounded border to the banner.
 */
class AuroBanner extends LitElement {

  constructor() {
    super();
    this.ratio = "1:1";
    this.graphic = undefined;
    this.graphicSm = undefined;
    this.graphicMd = undefined;
    this.graphicLg = undefined;
    this.hideGraphicSm = false;
    this.hideGraphicMd = false;
    this.hideGraphicLg = false;
    this.overlayBg = "var(--auro-color-brand-neutral-400)";
    this.flipped = false;
    this.inset = 'none';
    this.insetContent = 'none';
    this.row = false;
    this.leftPercent = 100;
    this.rightPercent = 100;
    this.roundedBorder = false;
    this.minGraphicHeight = '15rem';

    /**
     * @private
     */
    this.showOverlay = true;
  }

  static get properties() {
    return {
      graphic: {
        type: String
      },
      graphicSm: {
        type: String
      },
      graphicMd: {
        type: String
      },
      graphicLg: {
        type: String
      },
      hideGraphicSm: {
        type: Boolean
      },
      hideGraphicMd: {
        type: Boolean
      },
      hideGraphicLg: {
        type: Boolean
      },
      inset: {
        type: String
      },
      insetContent: {
        type: String
      },
      flipped: {
        type: Boolean,
        reflect: true,
      },
      row: {
        type: Boolean,
        reflect: true,
      },
      overlayBg: {
        type: String,
      },
      ratio: {
        type: String,
      },
      leftPercent: {
        type: Number
      },
      rightPercent: {
        type: Number
      },
      roundedBorder: {
        type: Boolean
      },
      minGraphicHeight: {
        type: String
      }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  /**
   * @private
   * @returns {Boolean} Return true if any size graphic is defined.
   */
  hasBannerGraphic() {
    return this.graphic !== undefined || this.graphicSm !== undefined || this.graphicMd !== undefined || this.graphicLg !== undefined;
  }

  /**
   * @private
   * @returns {Boolean} Return true if content is defined for the graphicContent.
   */
  hasBannerContent() {
    const slot = this.shadowRoot.querySelector('slot[name=content]');

    if (slot && slot.assignedNodes().length > 0) {
      return true;
    }

    return false;
  }

  /**
   * @private
   * @returns {Boolean} Return true if content is defined for the graphicContent.
   */
  hasBannerGraphicContent() {
    const slot = this.shadowRoot.querySelector('slot[name=graphicContent]');

    if (slot && slot.assignedNodes().length > 0) {
      return true;
    }

    return false;
  }

  /**
   * @private
   * @returns {Boolean} Return true if content is defined for the overlay.
   */
  hasOverlayContent() {
    const slot = this.shadowRoot.querySelector('slot[name=overlay]');

    if (slot && slot.assignedNodes().length > 0) {
      return true;
    }

    return false;
  }

  /**
   * @private
   * @returns {void}
   */
  handleRatio() {
    if (this.hasBannerGraphic() || this.hasBannerContent()) {
      const valueA = Number.parseInt(this.ratio.split(':')[0], 10);
      const valueB = Number.parseInt(this.ratio.split(':')[1], 10);

      let leftRatio = valueA;
      let rightRatio = valueB;

      if (this.flipped) {
        leftRatio = valueB;
        rightRatio = valueA;
      }

      /* eslint-disable no-magic-numbers */
      this.leftPercent = leftRatio * (100 / (leftRatio + rightRatio));
      this.rightPercent = rightRatio * (100 / (leftRatio + rightRatio));
      /* eslint-enable no-magic-numbers */
    }
  }

  firstUpdated() {
    // Handle graphic breakpoints
    if (this.hasBannerGraphic()) {
      this.graphicSm = this.graphicSm || this.graphic;
      this.graphicMd = this.graphicMd || this.graphicSm;
      this.graphicLg = this.graphicLg || this.graphicMd;
    }

    this.handleRatio();

    // Hide or show the overlay based on overlay slot content definition
    this.showOverlay = this.hasOverlayContent();
  }

  /**
   * @private
   * @param {string} inset Value from host attribute.
   * @returns {string}
   */
  getInsetValues(inset) {
    const validInsetPresets = [
      'none',
      'xxxs',
      'xxs',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      'xxl',
      'xxxl'
    ];

    if (validInsetPresets.includes(inset)) {
      return `var(--auro-size-${inset})`;
    }

    return inset;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    let insetCssStr = "var(--auro-size-none)";
    let insetContentCssStr = "var(--auro-size-none)";

    const bannerClasses = {
      bannerWrapper: true,
      hideGraphicLg: this.hideGraphicLg,
      hideGraphicMd: this.hideGraphicMd,
      hideGraphicSm: this.hideGraphicSm
    };

    if (this.inset) {
      insetCssStr = this.getInsetValues(this.inset);
    }

    if (this.insetContent) {
      insetContentCssStr = this.getInsetValues(this.insetContent);
    }

    return html`
      <div class=${classMap(bannerClasses)} style="padding: ${insetCssStr}">
        ${this.leftPercent > 0
          ? html`
            <div class="content" style="flex-basis: ${this.leftPercent}%; padding: ${insetContentCssStr};">
              <slot name="content"></slot>
            </div>
          ` : undefined
        }

        ${this.hasBannerGraphic()
          ? html`
            <div class="graphicContainer" style="flex-basis: ${this.rightPercent}%">
              <auro-background bg="${this.graphic}" bgSm="${this.graphicSm}" bgMd="${this.graphicMd}" height="100%" inset="${this.insetContent}">
                <div class="graphicContentContainer" style="min-height: ${this.minGraphicHeight};">
                  <slot name="graphicContent"></slot>
                </div>
              </auro-background>
            </div>
          ` : undefined
        }

        ${!this.hasBannerGraphic() && this.rightPercent > 0
          ? html`
            <div class="graphicContainer" style="flex-basis: ${this.rightPercent}%">
              <div class="graphicContentContainer" style="padding: ${insetContentCssStr};">
                <slot name="graphicContent"></slot>
              </div>
            </div>
          ` : undefined
        }
      </div>
      ${this.showOverlay ? html`
        <div class="overlayContainer">
          <div class="overlayBg" style="background: ${this.overlayBg}">
            <slot name="overlay"></slot>
          </div>
        </div>`
      : html``}
    `;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'ratio') {
        this.handleRatio();
      }
    });

    // Handle banner with no `content` slot content
    if (!this.hasBannerContent()) {
      this.leftPercent = 0;
      this.rightPercent = 100;
    }

    // Handle banner with no graphic or `graphicContent` slot content
    if (!this.hasBannerGraphic() && !this.hasBannerGraphicContent()) {
      this.leftPercent = 100;
      this.rightPercent = 0;
    }
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-banner")) {
  customElements.define("auro-banner", AuroBanner);
}
