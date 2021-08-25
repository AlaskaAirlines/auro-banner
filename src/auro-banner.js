// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

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
 * @attr {Boolean} onBackground - This setting provides padding around the banner when used on a background color or image.
 * @attr {Boolean} inset - Add padding around the banner.
 * @attr {Boolean} insetXl - Add extra large padding around the banner.
 * @attr {String} insetCustom - Define custom padding around the banner.
 * @attr {Boolean} insetContent - Add padding to the `content` and `graphicContent` slots.
 * @attr {Boolean} insetContentXl -  Add extra large padding to the `content` and `graphicContent` slots.
 * @attr {String} insetContentCustom -  Define custom padding to the `content` and `graphicContent` slots.
 * @attr {Boolean} overlay - Enables the overlay slot which adds an overlay that sits between the two columns and overlays a graphic
 * @attr {String} overlayBg - Sets a background behind the overlay
 * @attr {String} ratio - in the format 'X:Y' where 'X' and 'Y' are two integers.
 * @slot content - Content in the left column and adds default padding between the two columns.
 * @slot graphic - Content in the right column and has no default padding so an auro-background can fill the entire space.
 * @slot overlay - Content in the front overlay.
 * @attr {String} graphic - Path to banner image.
 * @attr {String} graphicSm - Defines a unique banner for display below small breakpoint.
 * @attr {String} graphicMd - Defines a unique banner for display in between small and medium breakpoints.
 * @attr {Boolean} hideGraphicSm - Force hides the graphic below the small breakpoint.
 * @attr {Boolean} hideGraphicMd - Force hides the graphic betwen the small and medium breakpoints.
 * @attr {Boolean} hideGraphicLg - Force hides the graphic above the medium breakpoint.
 */
class AuroBanner extends LitElement {

  constructor() {
    super();
    this.ratio = "1:1";
    this.graphic = undefined;
    this.graphicSm = undefined;
    this.graphicMd = undefined;
    this.hideGraphicSm = false;
    this.hideGraphicMd = false;
    this.hideGraphicLg = false;
    this.overlay = false;
    this.overlayBg = "var(--auro-color-brand-neutral-400)";
    this.flipped = false;
    this.onBackground = false;
    this.inset = false;
    this.insetXl = false;
    this.insetCustom = undefined;
    this.insetContent = false;
    this.insetContentXl = false;
    this.insetContentCustom = undefined;
    this.row = false;
    this.leftPercent = 100;
    this.rightPercent = 100;
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
      hideGraphicSm: {
        type: Boolean
      },
      hideGraphicMd: {
        type: Boolean
      },
      hideGraphicLg: {
        type: Boolean
      },
      onBackground: {
        type: Boolean,
        reflect: true,
      },
      inset: {
        type: Boolean,
        reflect: true,
      },
      insetXl: {
        type: Boolean,
        reflect: true,
      },
      insetCustom: {
        type: String
      },
      insetContent: {
        type: Boolean,
        reflect: true,
      },
      insetContentXl: {
        type: Boolean,
        reflect: true,
      },
      insetContentCustom: {
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
      leftPercent: {
        type: Number
      },
      rightPercent: {
        type: Number
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
    const slot = this.shadowRoot.querySelector('slot[name=content]');

    if (slot && slot.assignedNodes().length > 0) {
      return true;
    }

    return false;
  }

  firstUpdated() {
    this.hasBannerGraphicContent();

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

    if (!this.hasBannerContent()) {
      this.leftPercent = 0;
      this.rightPercent = 100;

      super.update(this.leftPercent, this.rightPercent);
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    const bannerClasses = {
      bannerWrapper: true,
      hideGraphicLg: this.hideGraphicLg,
      hideGraphicMd: this.hideGraphicMd,
      hideGraphicSm: this.hideGraphicSm
    };

    const graphicLgClasses = {
      graphic: true,
      graphicLg: true,
      forceSm: !this.graphicSm,
      forceMd: !this.graphicMd
    };

    return html`
      <div class=${classMap(bannerClasses)} style="padding: ${this.insetCustom}">
        ${this.leftPercent === 0 ? undefined : html`
          <div class="content" style="flex-basis: ${this.leftPercent}%">
            <slot name="content"></slot>
          </div>
        `}

        ${this.hasBannerGraphic()
          ? html`
            <div class="graphicContainer" style="flex-basis: ${this.rightPercent}%">
              ${this.graphicSm ? html`
                <auro-background class="graphic graphicSm" style="padding: ${this.insetContentCustom}" background="${this.graphicSm}">
                  <div class="graphicContentContainer">
                    <slot name="graphicContent"></slot>
                  </div>
                </auro-background>
              ` : undefined}
              ${this.graphicMd ? html`
                <auro-background class="graphic graphicMd" style="padding: ${this.insetContentCustom}" background="${this.graphicMd}">
                  <div class="graphicContentContainer">
                    <slot name="graphicContent"></slot>
                  </div>
                </auro-background>
              ` : undefined}
              ${this.graphic ? html`
                <auro-background class=${classMap(graphicLgClasses)} style="padding: ${this.insetContentCustom}" background="${this.graphic}">
                  <div class="graphicContentContainer">
                    <slot name="graphicContent"></slot>
                  </div>
                </auro-background>
              ` : undefined}
            </div>
          ` : html`
            <div class="graphicContentContainer" style="flex-basis: ${this.rightPercent}%">
              <slot name="graphicContent"></slot>
            </div>
          `
        }
      </div>
      ${this.overlay ? html`
        <div class="overlayContainer">
          <div class="overlayBg" style="background: ${this.overlayBg}">
            <slot name="overlay"></slot>
          </div>
        </div>`
      : html``}
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-banner")) {
  customElements.define("auro-banner", AuroBanner);
}
