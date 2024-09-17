<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-banner

The auro-banner element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image, and details.

## Attributes

| Attribute    | Type      | Description                                      |
|--------------|-----------|--------------------------------------------------|
| [alignLeft](#alignLeft)  | `Boolean` | to be used when we want the text aligned to the left |
| [alignRight](#alignRight) | `Boolean` | to be used when we want the text aligned to the right |
| [billboard](#billboard)  | `Boolean` | to be used for billboard style configuration     |
| [onDark](#onDark)     | `Boolean` | to be used when the background image or color is dark and changes the text and cta color |
| [slim](#slim)       | `Boolean` | to be used when we want a slimmer padding to the default banner |
| [solid](#solid)      | `Boolean` | to be used when you want a solid color as opposed to a transparent background |

## Properties

| Property        | Attribute       | Type      | Default | Description                                      |
|-----------------|-----------------|-----------|---------|--------------------------------------------------|
| [hero](#hero)          | `hero`          | `Boolean` | false   | to be used for hero style configuration          |
| [iconbg](#iconbg)        | `iconbg`        | `String`  |         | to be used in conjunction with the iconic variant this specifies the background color of the icon |
| [iconic](#iconic)        | `iconic`        | `Boolean` | false   | to be used in as a hero on pages but with an icon and no displayImage on mobile |
| [marquee](#marquee)       | `marquee`       | `Boolean` | false   | to be used for marquee style configuration       |
| [roundedBorder](#roundedBorder) | `roundedBorder` | `Boolean` | false   | to be used for roundedBorder style configuration |

## Slots

| Name           | Description                                     |
|----------------|-------------------------------------------------|
| [action](#action)       | call to action                                  |
| [contentImage](#contentImage) | image placement                                 |
| [description](#description)  | main body of content                            |
| [disclaimer](#disclaimer)   | disclaimer copy                                 |
| [displayImage](#displayImage) | placement for `<picture />` or `<img>` elements |
| [prefix](#prefix)       | placement for smaller text above title          |
| [title](#title)        | placement for header                            |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Billboard

The `<auro-banner>` element with the `billboard` property features a single configuration using the `displayImage`, `contentImage`, `description`, `action` and `disclaimer` slots for structured content placement.

#### Background image slot

The background image slot is configured to work with the HTML [picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) element.

```html
<picture slot="displayImage">
  <source srcset="https://picsum.photos/id/430/1024/600" media="(min-width: 736px)">
  <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
  <source srcset="https://picsum.photos/id/430/320/1200" media="(min-width: 320px)">
  <img src="https://picsum.photos/id/430/225/550" alt="" />
</picture>
```
<br>
This allows the editor the upmost in image flexibility for cropped images placed at different breakpoints. A slotted `<img>` element is the default image shown when less than the first defined breakpoint.

By default `<img>` elements are `inline` elements and will add a few pixels of space below the image. To counter this, either set `display: block` on the `<img>` element, or add this [WCSS pre-defined selector](https://alaskaairlines.github.io/WebCoreStyleSheets/#core-css-#{$sym}#{$prefix}picture#{$scope}) to your project.<br><br>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-banner billboard>
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/430/1124/800" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/430/1124/1000" media="(min-width: 768px)">
      <source srcset="https://picsum.photos/id/430/736/750" media="(min-width: 736px)">
      <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
      <source srcset="https://picsum.photos/id/430/320/700" media="(min-width: 320px)">
      <img src="https://picsum.photos/id/430/225/550" alt="" />
    </picture>
    <img
      slot="contentImage"
      src="https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/bltc1fa673bb196d177/6633f3de693c294c708b20de/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p slot="description">
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
  </auro-banner>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-banner billboard>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/430/1124/800" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/430/1124/1000" media="(min-width: 768px)">
    <source srcset="https://picsum.photos/id/430/736/750" media="(min-width: 736px)">
    <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
    <source srcset="https://picsum.photos/id/430/320/700" media="(min-width: 320px)">
    <img src="https://picsum.photos/id/430/225/550" alt="" />
  </picture>
  <img
    slot="contentImage"
    src="https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/bltc1fa673bb196d177/6633f3de693c294c708b20de/oneworld-travel-bright-Horizontal-300.png"
    alt="Random insert"/>
  <p slot="description">
    We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
  </p>
  <auro-hyperlink
    cta
    secondary
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Billboard / slim / alignRight / onDark

The following example illustrates a series of additional API options available to the `<auro-banner>` element. In this example, this shows how a user can augment the `billboard` theme of the `<auro-banner>`.

For the call-to-action button, see in the example code that it is required to set the `onDark` attribute on the `<auro-hyperlink>` element itself. This is **not** controlled by the `<auro-banner>` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/billboardSeries.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/billboardSeries.html -->
  <auro-banner billboard slim alignRight ondark>
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/324/1124/800" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/324/1124/1000" media="(min-width: 768px)">
      <source srcset="https://picsum.photos/id/324/736/750" media="(min-width: 736px)">
      <source srcset="https://picsum.photos/id/324/736/1400" media="(min-width: 375px)">
      <source srcset="https://picsum.photos/id/324/320/700" media="(min-width: 320px)">
      <img src="https://picsum.photos/id/324/225/550" alt="" />
    </picture>
    <auro-alaska official ondark style="width: 192px" slot="contentImage"></auro-alaska>
    <p slot="description">
      <span style="max-width:320px; margin-left:auto; display:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
    </p>
    <auro-hyperlink
      cta
      ondark
      href="/"
      slot="action"
      target="_blank">
      Learn more
    </auro-hyperlink>
  </auro-banner>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/billboardSeries.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/billboardSeries.html -->

```html
<auro-banner billboard slim alignRight ondark>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/324/1124/800" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/324/1124/1000" media="(min-width: 768px)">
    <source srcset="https://picsum.photos/id/324/736/750" media="(min-width: 736px)">
    <source srcset="https://picsum.photos/id/324/736/1400" media="(min-width: 375px)">
    <source srcset="https://picsum.photos/id/324/320/700" media="(min-width: 320px)">
    <img src="https://picsum.photos/id/324/225/550" alt="" />
  </picture>
  <auro-alaska official ondark style="width: 192px" slot="contentImage"></auro-alaska>
  <p slot="description">
    <span style="max-width:320px; margin-left:auto; display:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
  </p>
  <auro-hyperlink
    cta
    ondark
    href="/"
    slot="action"
    target="_blank">
    Learn more
  </auro-hyperlink>
</auro-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Billboard / slim / alignLeft / onDark

The following example illustrates an option to left align the text `alignLeft` along with `slim` to reduce the padding and `onDark` to change the text to white.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/billboardSeriesLeft.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/billboardSeriesLeft.html -->
  <auro-banner billboard slim alignLeft onDark>
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/42/1124/800" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/42/1124/1000" media="(min-width: 768px)">
      <source srcset="https://picsum.photos/id/42/736/750" media="(min-width: 736px)">
      <source srcset="https://picsum.photos/id/42/736/1400" media="(min-width: 375px)">
      <source srcset="https://picsum.photos/id/42/320/700" media="(min-width: 320px)">
      <img src="https://picsum.photos/id/42/225/550" alt="" />
    </picture>
    <span slot="title">Beverages and cocktails</span>
    <p slot="description">
      <span style="max-width: 360px;display: block;">Enjoy soft drinks, fresh Starbucks® coffee – including lattes and cappuccinos, and Teavana® tea while you relax. Or try our famous Bloody Mary.</span>
    </p>
    <auro-hyperlink
      cta
      secondary
      ondark
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
  </auro-banner>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/billboardSeriesLeft.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/billboardSeriesLeft.html -->

```html
<auro-banner billboard slim alignLeft onDark>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/42/1124/800" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/42/1124/1000" media="(min-width: 768px)">
    <source srcset="https://picsum.photos/id/42/736/750" media="(min-width: 736px)">
    <source srcset="https://picsum.photos/id/42/736/1400" media="(min-width: 375px)">
    <source srcset="https://picsum.photos/id/42/320/700" media="(min-width: 320px)">
    <img src="https://picsum.photos/id/42/225/550" alt="" />
  </picture>
  <span slot="title">Beverages and cocktails</span>
  <p slot="description">
    <span style="max-width: 360px;display: block;">Enjoy soft drinks, fresh Starbucks® coffee – including lattes and cappuccinos, and Teavana® tea while you relax. Or try our famous Bloody Mary.</span>
  </p>
  <auro-hyperlink
    cta
    secondary
    ondark
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Hero

The following example illustrates a `<auro-banner`> custom element with the `hero` template style. This example also illustrates the use of the `prefix` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/hero.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/hero.html -->
  <auro-banner hero>
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/369/2048/2000" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/369/736/1400" media="(min-width:660px)">
      <img src="https://picsum.photos/id/369/660/420" alt="">
    </picture>
    <span slot="prefix">Duis aute irure dolor</span>
    <span slot="title">Duis aute irure dolor.<br>Excepteur sint occaecat.</span>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
  </auro-banner>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/hero.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/hero.html -->

```html
<auro-banner hero>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/369/2048/2000" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/369/736/1400" media="(min-width:660px)">
    <img src="https://picsum.photos/id/369/660/420" alt="">
  </picture>
  <span slot="prefix">Duis aute irure dolor</span>
  <span slot="title">Duis aute irure dolor.<br>Excepteur sint occaecat.</span>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <auro-hyperlink
    cta
    secondary
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Iconic

The following example illustrates a `<auro-banner>` custom element with the `iconic` template style.  The `iconic` template style hides the `displayImage` on small screen sizes and only shows the icon.  This examples also shows how to customize the icon background color using `iconbg`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/iconic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/iconic.html -->
  <auro-banner iconic iconbg="var(--ds-color-brand-neutral-400)">
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/452/2800/2000.jpg" media="(min-width: 1054px)">
      <source srcset="https://picsum.photos/id/452/1500/2000" media="(min-width:660px)">
      <img src="https://picsum.photos/id/452/2800/2000.jpg" alt="">
    </picture>
    <span slot="icon">
      <auro-icon category="social" name="instagram" customSize customColor style="color: var(--ds-color-base-white); width: 5rem"></auro-icon>
    </span>
    <span slot="title">
      <auro-header level="2" display="800" margin="both" size="none">Lorem ipsum title</auro-header>
      <auro-header level="3" display="300" margin="top" size="none">You can add multiple auro-header's here</auro-header>
    </span>
    <p slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </p>
  </auro-banner>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/iconic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/iconic.html -->

```html
<auro-banner iconic iconbg="var(--ds-color-brand-neutral-400)">
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/452/2800/2000.jpg" media="(min-width: 1054px)">
    <source srcset="https://picsum.photos/id/452/1500/2000" media="(min-width:660px)">
    <img src="https://picsum.photos/id/452/2800/2000.jpg" alt="">
  </picture>
  <span slot="icon">
    <auro-icon category="social" name="instagram" customSize customColor style="color: var(--ds-color-base-white); width: 5rem"></auro-icon>
  </span>
  <span slot="title">
    <auro-header level="2" display="800" margin="both" size="none">Lorem ipsum title</auro-header>
    <auro-header level="3" display="300" margin="top" size="none">You can add multiple auro-header's here</auro-header>
  </span>
  <p slot="description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
  </p>
</auro-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Marquee

The following example illustrates a `<auro-banner>` custom element with the `marquee` template style. This template configuration also supports the `slim` and `onDark` attributes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/marquee.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/marquee.html -->
  <auro-banner marquee>
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/154/2048/2000" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/154/736/1400" media="(min-width:660px)">
      <img src="https://picsum.photos/id/154/660/420" alt="">
    </picture>
    <span slot="prefix">Duis aute irure dolor</span>
    <span slot="title">Duis aute irure dolor.<br>Excepteur sint occaecat.</span>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
  </auro-banner>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/marquee.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/marquee.html -->

```html
<auro-banner marquee>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/154/2048/2000" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/154/736/1400" media="(min-width:660px)">
    <img src="https://picsum.photos/id/154/660/420" alt="">
  </picture>
  <span slot="prefix">Duis aute irure dolor</span>
  <span slot="title">Duis aute irure dolor.<br>Excepteur sint occaecat.</span>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <auro-hyperlink
    cta
    secondary
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Marquee / solid

The following example illustrates a `<auro-banner>` custom element with the `marquee solid` template style. With this configuration, onDark is implied.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/marqueeSolid.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/marqueeSolid.html -->
  <auro-banner marquee solid>
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/1015/1048/2000" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/1015/736/1400" media="(min-width:660px)">
      <img src="https://picsum.photos/id/1015/660/660" alt="">
    </picture>
    <auro-alaska official ondark style="width: 192px" slot="contentImage"></auro-alaska>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <auro-hyperlink
      cta
      ondark
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
  </auro-banner>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/marqueeSolid.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/marqueeSolid.html -->

```html
<auro-banner marquee solid>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/1015/1048/2000" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/1015/736/1400" media="(min-width:660px)">
    <img src="https://picsum.photos/id/1015/660/660" alt="">
  </picture>
  <auro-alaska official ondark style="width: 192px" slot="contentImage"></auro-alaska>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <auro-hyperlink
    cta
    ondark
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### roundedBorder

The following example illustrates a `<auro-banner>` custom element with the `roundedBorder` variant style. With this configuration, no `displayImage` is used. Instead only the `contentImage` is used and the rest of the offer is displayed in a row.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/roundedBorder.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/roundedBorder.html -->
  <auro-banner roundedBorder alignLeft>
    <img src="https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4f70efe198086558/6633f3defda0c7c6c769b86b/visa_signature.svg" alt="" slot="contentImage" />
    <span slot="prefix">Prefix - Limited Time</span>
    <span slot="title">Title - Irure dolor.</span>
    <p slot="description">
      Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div slot="disclaimer">
      * Disclaimer - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <auro-hyperlink
      cta
      secondary
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
  </auro-banner>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/roundedBorder.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/roundedBorder.html -->

```html
<auro-banner roundedBorder alignLeft>
  <img src="https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4f70efe198086558/6633f3defda0c7c6c769b86b/visa_signature.svg" alt="" slot="contentImage" />
  <span slot="prefix">Prefix - Limited Time</span>
  <span slot="title">Title - Irure dolor.</span>
  <p slot="description">
    Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
  <div slot="disclaimer">
    * Disclaimer - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
  <auro-hyperlink
    cta
    secondary
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../../src/tokens.scss -->

```scss
@import "./../node_modules/@aurodesignsystem/design-tokens/dist/tokens/SCSSVariables";

:host {
  --ds-auro-banner-text-color: var(--ds-color-text-primary-default, #{$ds-color-text-primary-default});
  --ds-auro-banner-disclaimer-text-color: var(--ds-color-text-secondary-default, #{$ds-color-text-secondary-default});
  --ds-auro-banner-title-text-color: var(--ds-color-text-emphasis-default, #{$ds-color-text-emphasis-default});
  --ds-auro-banner-icon-container-color: var(--ds-color-utility-gray-default, #{$ds-color-utility-gray-default});
  --ds-auro-banner-wrapper-container-color: var(--ds-color-container-secondary-inverse, #{$ds-color-container-secondary-inverse});
  --ds-auro-banner-wrapper-border-color: var(--ds-color-border-secondary-default, #{$ds-color-border-secondary-default});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
