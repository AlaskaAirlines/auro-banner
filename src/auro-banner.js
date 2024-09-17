// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

import { LitElement, css } from "lit";
import { html } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import styleCss from "./style-css.js";
import colorCss from "./color-css.js";
import tokensCss from "./tokens-css.js";

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { AuroHeader } from '@aurodesignsystem/auro-header/src/auro-header.js';
import headerVersion from './headerVersion';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-banner element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image, and details.
 * @attr {Boolean} billboard - to be used for billboard style configuration
 * @attr {Boolean} hero - to be used for hero style configuration
 * @attr {Boolean} iconic - to be used in as a hero on pages but with an icon and no displayImage on mobile
 * @attr {String} iconbg - to be used in conjunction with the iconic variant this specifies the background color of the icon
 * @attr {Boolean} marquee - to be used for marquee style configuration
 * @attr {Boolean} roundedBorder - to be used for roundedBorder style configuration
 * @attr {Boolean} solid - to be used when you want a solid color as opposed to a transparent background
 * @attr {Boolean} slim - to be used when we want a slimmer padding to the default banner
 * @attr {Boolean} alignRight - to be used when we want the text aligned to the right
 * @attr {Boolean} alignLeft - to be used when we want the text aligned to the left
 * @attr {Boolean} onDark - to be used when the background image or color is dark and changes the text and cta color
 * @slot displayImage - placement for `<picture />` or `<img>` elements
 * @slot prefix - placement for smaller text above title
 * @slot title - placement for header
 * @slot contentImage - image placement
 * @slot description - main body of content
 * @slot action - call to action
 * @slot disclaimer - disclaimer copy
 */
export class AuroBanner extends LitElement {
  constructor() {
    super();
    this.hero = false;
    this.iconic = false;
    this.marquee = false;
    this.roundedBorder = false;

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.headerTag = versioning.generateTag('auro-header', headerVersion, AuroHeader);
  }

  // This function removes a CSS selector if the footer slot is empty
  firstUpdated() {
    const slotNodes = this.shadowRoot.querySelectorAll(`.bannerWrapper slot`);

    for (const item of slotNodes) {
      this.slt = item.assignedNodes();

      if (this.slt.length === 0) {
        item.removeAttribute("class");
      }
    }
  }

  static get properties() {
    return {
      ...super.properties,
      hero: {
        type: Boolean,
        reflect: true
      },
      iconic: {
        type: Boolean,
        reflect: true
      },
      marquee: {
        type: Boolean,
        reflect: true
      },
      roundedBorder: {
        type: Boolean,
        reflect: true
      },
      iconbg: {
        type: String
      }
    };
  }

  static get styles() {
    return [
      css`${styleCss}`,
      css`${colorCss}`,
      css`${tokensCss}`
    ];
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div class="bannerWrapper">
      ${!this.roundedBorder
        ? html`
        <slot name="displayImage" class="displayImage"></slot>`
        : html``
      }
        <div class="bodyWrapper">
          ${this.iconic
           ? html`
             <slot name="title"></slot>`
            : html``
          }
          ${this.hero
            ? html`
              <${this.headerTag} level="2" display="300" margin="top" size="none" class="title prefix">
                <slot name="prefix"></slot>
              </${this.headerTag}>

              <${this.headerTag} level="2" display="600" margin="both" size="none" class="title">
                <slot name="title"></slot>
              </${this.headerTag}>`
            : html``
          }

          ${this.marquee
            ? html`
              <${this.headerTag} level="2" display="400" margin="both" size="none" class="title marquee">
                <slot name="title"></slot>
              </${this.headerTag}>`
            : html``
          }

          ${!this.marquee && !this.hero && !this.iconic && !this.roundedBorder
            ? html`
              <${this.headerTag} level="2" display="600" margin="both" size="none" class="title">
                <slot name="title"></slot>
              </${this.headerTag}>`
            : html``
          }

          <slot name="contentImage" class="imageWrapper"></slot>

          <div class="contentWrapper">
          ${this.roundedBorder
            ? html`
              <${this.headerTag} level="2" display="300" margin="both" size="none" class="title prefix">
                <slot name="prefix"></slot>
              </${this.headerTag}>

              <${this.headerTag} level="2" display="600" margin="both" size="none" class="title">
                <slot name="title"></slot>
              </${this.headerTag}>`
            : html``
          }
            <slot name="description" class="description"></slot>
            <slot name="action" class="action"></slot>
            <slot name="disclaimer" class="disclaimer"></slot>
          </div>
        </div>
      </div>
      ${this.iconic
        ? html`
        <div class="iconContainer">
          <div class="roundIconBg" style="background: ${ifDefined(!this.iconbg ? undefined : this.iconbg)}">
            <slot name="icon" class="icon"></slot>
          </div>
        </div>`
        : html``
      }
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-banner")) {
  customElements.define("auro-banner", AuroBanner);
}
