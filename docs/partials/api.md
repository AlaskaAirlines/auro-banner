<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Billboard / slim / alignRight / onDark

The following example illustrates a series of additional API options available to the `<auro-banner>` element. In this example, this shows how a user can augment the `billboard` theme of the `<auro-banner>`.

For the call-to-action button, see in the example code that it is required to set the `onDark` attribute on the `<auro-hyperlink>` element itself. This is **not** controlled by the `<auro-banner>` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/billboardSeries.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/billboardSeries.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Billboard / slim / alignLeft / onDark

The following example illustrates an option to left align the text `alignLeft` along with `slim` to reduce the padding and `onDark` to change the text to white.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/billboardSeriesLeft.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/billboardSeriesLeft.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Hero

The following example illustrates a `<auro-banner`> custom element with the `hero` template style. This example also illustrates the use of the `prefix` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/hero.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/hero.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Iconic

The following example illustrates a `<auro-banner>` custom element with the `iconic` template style.  The `iconic` template style hides the `displayImage` on small screen sizes and only shows the icon.  This examples also shows how to customize the icon background color using `iconbg`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/iconic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/iconic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Marquee

The following example illustrates a `<auro-banner>` custom element with the `marquee` template style. This template configuration also supports the `slim` and `onDark` attributes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/marquee.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/marquee.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Marquee / solid

The following example illustrates a `<auro-banner>` custom element with the `marquee solid` template style. With this configuration, onDark is implied.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/marqueeSolid.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/marqueeSolid.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### roundedBorder

The following example illustrates a `<auro-banner>` custom element with the `roundedBorder` variant style. With this configuration, no `displayImage` is used. Instead only the `contentImage` is used and the rest of the offer is displayed in a row.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/roundedBorder.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/roundedBorder.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
