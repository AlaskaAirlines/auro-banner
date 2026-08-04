<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-banner

The `auro-banner` element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image, and details.

### Properties & Attributes

| Properties    | Attributes    | Modifiers | Type                   | Default   | Description                                                                                         |
| ------------- | ------------- | --------- | ---------------------- | --------- | --------------------------------------------------------------------------------------------------- |
| alignLeft     | alignLeft     |           | boolean                |           | Use to align text to the left side of the banner                                                    |
| alignRight    | alignRight    |           | boolean                |           | Use to align text to the right side of the banner                                                   |
| appearance    | appearance    |           | `default` \| `inverse` | `default` | Defines whether the component will be on lighter or darker backgrounds                              |
| billboard     | billboard     |           | boolean                |           | Use to enable billboard style configuration                                                         |
| hero          | hero          |           | boolean                |           | Use to enable hero style configuration                                                              |
| iconbg        | iconbg        |           | string                 |           | Use in conjunction with the iconic variant to specify the background color of the icon              |
| iconic        | iconic        |           | boolean                |           | Used similarly to the `hero` variant, but adds an icon slot and removes the display image on mobile |
| marquee       | marquee       |           | boolean                |           | Use to enable marquee style configuration                                                           |
| onDark        | onDark        |           | boolean                |           | DEPRECATED - use `appearance="inverse"` instead.                                                    |
| roundedBorder | roundedBorder |           | boolean                |           | Use to enable rounded border style configuration                                                    |
| slim          | slim          |           | boolean                |           | Use to enable slimmer padding to the default banner                                                 |
| solid         | solid         |           | boolean                |           | Use to enable a solid background color as opposed to a transparent background                       |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name         | Description                                     |
| ------------ | ----------------------------------------------- |
| action       | call to action                                  |
| contentImage | image placement                                 |
| description  | main body of content                            |
| disclaimer   | disclaimer copy                                 |
| displayImage | placement for `<picture />` or `<img>` elements |
| prefix       | placement for smaller text above title          |
| title        | placement for header                            |
<!-- AURO-GENERATED-CONTENT:END -->

## Property & Attribute Examples

### Billboard

The `billboard` property features a single configuration using the `displayImage`, `contentImage`, `description`, `action` and `disclaimer` slots for structured content placement. This is the most common use case for the `<auro-banner>` component.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ../apiExamples/basic.html -->
  <auro-banner billboard>
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/196/1124/800" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/196/1124/1000" media="(min-width: 768px)">
      <source srcset="https://picsum.photos/id/196/736/750" media="(min-width: 736px)">
      <source srcset="https://picsum.photos/id/196/736/1400" media="(min-width: 375px)">
      <source srcset="https://picsum.photos/id/196/320/700" media="(min-width: 320px)">
      <img src="https://picsum.photos/id/196/225/550" alt="" />
    </picture>
    <img
      slot="contentImage"
      src="https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/bltc1fa673bb196d177/6633f3de693c294c708b20de/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p slot="description">
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      type="cta"
      variant="secondary"
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic.html -->

```html
<auro-banner billboard>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/196/1124/800" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/196/1124/1000" media="(min-width: 768px)">
    <source srcset="https://picsum.photos/id/196/736/750" media="(min-width: 736px)">
    <source srcset="https://picsum.photos/id/196/736/1400" media="(min-width: 375px)">
    <source srcset="https://picsum.photos/id/196/320/700" media="(min-width: 320px)">
    <img src="https://picsum.photos/id/196/225/550" alt="" />
  </picture>
  <img
    slot="contentImage"
    src="https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/bltc1fa673bb196d177/6633f3de693c294c708b20de/oneworld-travel-bright-Horizontal-300.png"
    alt="Random insert"/>
  <p slot="description">
    We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
  </p>
  <auro-hyperlink
    type="cta"
    variant="secondary"
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

The following example illustrates  the `hero` template style. This example also illustrates the use of the `prefix` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/hero.html) -->
  <!-- The below content is automatically added from ../apiExamples/hero.html -->
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
      type="cta"
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/hero.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/hero.html -->

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
    type="cta"
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

The `iconic` template style hides the `displayImage` on small screen sizes and only shows the icon. 

Use the `iconbg` attribute to add a background color to the icon container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/iconic.html) -->
  <!-- The below content is automatically added from ../apiExamples/iconic.html -->
  <auro-banner iconic iconbg="var(ds-basic-color-surface-neutral-medium)">
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/452/2800/2000.jpg" media="(min-width: 1054px)">
      <source srcset="https://picsum.photos/id/452/1500/2000" media="(min-width:660px)">
      <img src="https://picsum.photos/id/452/2800/2000.jpg" alt="">
    </picture>
    <span slot="icon">
      <auro-icon category="social" name="instagram" customSize customColor style="color: var(--ds-color-base-white); --ds-auro-icon-size: 5rem;"></auro-icon>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/iconic.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/iconic.html -->

```html
<auro-banner iconic iconbg="var(ds-basic-color-surface-neutral-medium)">
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/452/2800/2000.jpg" media="(min-width: 1054px)">
    <source srcset="https://picsum.photos/id/452/1500/2000" media="(min-width:660px)">
    <img src="https://picsum.photos/id/452/2800/2000.jpg" alt="">
  </picture>
  <span slot="icon">
    <auro-icon category="social" name="instagram" customSize customColor style="color: var(--ds-color-base-white); --ds-auro-icon-size: 5rem;"></auro-icon>
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

The following example illustrates  the `marquee` template style. It also supports the `slim` and `appearance="inverse"` attributes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/marquee.html) -->
  <!-- The below content is automatically added from ../apiExamples/marquee.html -->
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
      type="cta"
      variant="secondary"
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/marquee.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/marquee.html -->

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
    type="cta"
    variant="secondary"
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Solid Marquee

The following example illustrates a `<auro-banner>` custom element with the `marquee solid` template style. With this configuration, `appearance="inverse"` is implied.

For content not wrapped in a designated slot, it is required to set the `appearance="inverse"` attribute manually. This is **not** controlled by the `<auro-banner>` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/marquee-solid.html) -->
  <!-- The below content is automatically added from ../apiExamples/marquee-solid.html -->
  <auro-banner marquee solid>
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/1015/1048/2000" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/1015/736/1400" media="(min-width:660px)">
      <img src="https://picsum.photos/id/1015/660/660" alt="" style="display: block;">
    </picture>
    <auro-alaska official appearance="inverse" style="width: 192px" slot="contentImage"></auro-alaska>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <auro-hyperlink
      type="cta"
      appearance="inverse"
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/marquee-solid.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/marquee-solid.html -->

```html
<auro-banner marquee solid>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/1015/1048/2000" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/1015/736/1400" media="(min-width:660px)">
    <img src="https://picsum.photos/id/1015/660/660" alt="" style="display: block;">
  </picture>
  <auro-alaska official appearance="inverse" style="width: 192px" slot="contentImage"></auro-alaska>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <auro-hyperlink
    type="cta"
    appearance="inverse"
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Rounded Border

The `roundedBorder` variant style adds a border with rounded corners around the banner content. With this configuration, no `displayImage` is used. Instead only the `contentImage` is used and the rest of the content is displayed in a row.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/rounded-border.html) -->
  <!-- The below content is automatically added from ../apiExamples/rounded-border.html -->
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
      type="cta"
      variant="secondary"
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/rounded-border.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/rounded-border.html -->

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
    type="cta"
    variant="secondary"
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot Examples

#### Display Image Slot for Background

The `displayImage` slot is configured to work with the HTML [picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) element.

```html
<picture slot="displayImage">
  <source srcset="https://picsum.photos/id/430/1024/600" media="(min-width: 736px)">
  <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
  <source srcset="https://picsum.photos/id/430/320/1200" media="(min-width: 320px)">
  <img src="https://picsum.photos/id/430/225/550" alt="" />
</picture>
```

This allows the editor the utmost in image flexibility for cropped images placed at different breakpoints. A slotted `<img>` element is the default image shown when less than the first defined breakpoint.

By default `<img>` elements are `inline` elements and will add a few pixels of space below the image. To counter this, either set `display: block` on the `<img>` element, or add this [WCSS pre-defined selector](https://alaskaairlines.github.io/WebCoreStyleSheets/#core-css-#{$sym}#{$prefix}picture#{$scope}) to your project.<br><br>

## Common Usage Patterns & Functional Examples

#### Billboard / slim / alignRight / appearance

The following example illustrates a series of additional API options available to the `<auro-banner>` element. In this example, this shows how a user can augment the `billboard` theme of the `<auro-banner>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/billboard-series.html) -->
  <!-- The below content is automatically added from ../apiExamples/billboard-series.html -->
  <auro-banner billboard slim alignRight appearance="inverse">
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/324/1124/800" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/324/1124/1000" media="(min-width: 768px)">
      <source srcset="https://picsum.photos/id/324/736/750" media="(min-width: 736px)">
      <source srcset="https://picsum.photos/id/324/736/1400" media="(min-width: 375px)">
      <source srcset="https://picsum.photos/id/324/320/700" media="(min-width: 320px)">
      <img src="https://picsum.photos/id/324/225/550" alt="" />
    </picture>
    <auro-alaska official appearance="inverse" style="width: 192px" slot="contentImage"></auro-alaska>
    <p slot="description">
      <span style="max-width:320px; margin-left:auto; display:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
    </p>
    <auro-hyperlink
      type="cta"
      variant="secondary"
      appearance="inverse"
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/billboard-series.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/billboard-series.html -->

```html
<auro-banner billboard slim alignRight appearance="inverse">
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/324/1124/800" media="(min-width: 1024px)">
    <source srcset="https://picsum.photos/id/324/1124/1000" media="(min-width: 768px)">
    <source srcset="https://picsum.photos/id/324/736/750" media="(min-width: 736px)">
    <source srcset="https://picsum.photos/id/324/736/1400" media="(min-width: 375px)">
    <source srcset="https://picsum.photos/id/324/320/700" media="(min-width: 320px)">
    <img src="https://picsum.photos/id/324/225/550" alt="" />
  </picture>
  <auro-alaska official appearance="inverse" style="width: 192px" slot="contentImage"></auro-alaska>
  <p slot="description">
    <span style="max-width:320px; margin-left:auto; display:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
  </p>
  <auro-hyperlink
    type="cta"
    variant="secondary"
    appearance="inverse"
    href="/"
    slot="action"
    target="_blank">
    Learn more
  </auro-hyperlink>
</auro-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Billboard / slim / alignLeft / appearance

The following example illustrates an option to left align the text `alignLeft` along with `slim` to reduce the padding and `appearance="inverse"` to change the text to white.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/billboard-series-left.html) -->
  <!-- The below content is automatically added from ../apiExamples/billboard-series-left.html -->
  <auro-banner billboard slim alignLeft appearance="inverse">
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
      type="cta"
      variant="secondary"
      appearance="inverse"
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/billboard-series-left.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/billboard-series-left.html -->

```html
<auro-banner billboard slim alignLeft appearance="inverse">
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
    type="cta"
    variant="secondary"
    appearance="inverse"
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  --ds-auro-banner-text-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
  --ds-auro-banner-disclaimer-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-banner-title-text-color: var(--ds-basic-color-texticon-accent1, #{v.$ds-basic-color-texticon-accent1});
  --ds-auro-banner-icon-container-color: var(--ds-basic-color-surface-neutral-medium, #{v.$ds-basic-color-surface-neutral-medium});
  --ds-auro-banner-wrapper-container-color: var(--ds-basic-color-surface-inverse, #{v.$ds-basic-color-surface-inverse});
  --ds-auro-banner-wrapper-border-color: var(--ds-basic-color-border-default, #{v.$ds-basic-color-border-default});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
