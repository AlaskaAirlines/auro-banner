// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

import { AuroHeader } from "@aurodesignsystem/auro-header/class";
import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { LitElement } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { html } from "lit/static-html.js";
import headerVersion from "./headerVersion.js";
import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The `auro-banner` element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image, and details.
 * @customElement auro-banner
 * 
 * @slot action - call to action
 * @slot contentImage - image placement
 * @slot description - main body of content
 * @slot disclaimer - disclaimer copy
 * @slot displayImage - placement for `<picture />` or `<img>` elements
 * @slot prefix - placement for smaller text above title
 * @slot title - placement for header
 */
export class AuroBanner extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
    this.appearance = "default";
    this.hero = false;
    this.iconic = false;
    this.marquee = false;
    this.roundedBorder = false;

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.headerTag = versioning.generateTag(
      "auro-header",
      headerVersion,
      AuroHeader,
    );

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-banner"] - The name of the element that you want to register.
   *
   * @example
   * AuroBanner.register("custom-banner") // this will register this element to <custom-banner/>
   *
   */
  static register(name = "auro-banner") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroBanner);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-banner");

    const slotNodes = this.shadowRoot.querySelectorAll(".bannerWrapper slot");

    for (const item of slotNodes) {
      this.slt = item.assignedNodes();

      if (this.slt.length === 0) {
        item.removeAttribute("class");
      }
    }
  }

  static get properties() {
    return {
      ...LitElement.properties,

      /**
       * Use to align text to the left side of the banner
       */
      alignLeft: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Use to align text to the right side of the banner
       */
      alignRight: {
        type: Boolean,
        reflect: true,
      },


      /**
       * Defines whether the component will be on lighter or darker backgrounds
       * @type {'default' | 'inverse'}
       * @default 'default'
       */
      appearance: {
        type: String,
        reflect: true
      },


      /**
       * Use to enable billboard style configuration
       */
      billboard: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Use to enable hero style configuration
       */
      hero: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Use in conjunction with the iconic variant to specify the background color of the icon
       */
      iconbg: {
        type: String,
      },

      /**
       * Used similarly to the `hero` variant, but adds an icon slot and removes the display image on mobile
       */
      iconic: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Use to enable marquee style configuration
       */
      marquee: {
        type: Boolean,
        reflect: true,
      },

      /**
       * DEPRECATED - use `appearance="inverse"` instead.
       */
      onDark: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Use to enable rounded border style configuration
       */
      roundedBorder: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Use to enable slimmer padding to the default banner
       */
      slim: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Use to enable a solid background color as opposed to a transparent background
       */
      solid: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [styleCss, colorCss, tokensCss];
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div class="bannerWrapper">
      ${
        !this.roundedBorder
          ? html`
        <slot name="displayImage" class="displayImage"></slot>`
          : html``
      }
        <div class="bodyWrapper">
          ${
            this.iconic
              ? html`
             <slot name="title"></slot>`
              : html``
          }
          ${
            this.hero
              ? html`
              <${this.headerTag} level="2" display="300" margin="top" size="none" class="title prefix">
                <slot name="prefix"></slot>
              </${this.headerTag}>

              <${this.headerTag} level="2" display="600" margin="both" size="none" class="title">
                <slot name="title"></slot>
              </${this.headerTag}>`
              : html``
          }

          ${
            this.marquee
              ? html`
              <${this.headerTag} level="2" display="400" margin="both" size="none" class="title marquee">
                <slot name="title"></slot>
              </${this.headerTag}>`
              : html``
          }

          ${
            !this.marquee && !this.hero && !this.iconic && !this.roundedBorder
              ? html`
              <${this.headerTag} level="2" display="600" margin="both" size="none" class="title">
                <slot name="title"></slot>
              </${this.headerTag}>`
              : html``
          }

          <slot name="contentImage" class="imageWrapper"></slot>

          <div class="contentWrapper">
          ${
            this.roundedBorder
              ? html`
              <${this.headerTag} level="2" display="300" margin="both" size="none" class="title prefix">
                <slot name="prefix"></slot>
              </${this.headerTag}>

              <${this.headerTag} level="2" display="600" margin="both" size="none" class="title">
                <slot name="title"></slot>
              </${this.headerTag}>`
              : html``
          }
            <slot name="description" class="description body-default"></slot>
            <slot name="action" class="action"></slot>
            <slot name="disclaimer" class="disclaimer body-xs"></slot>
          </div>
        </div>
      </div>
      ${
        this.iconic
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
