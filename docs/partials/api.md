<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Property & Attribute Examples

### Billboard

The `billboard` property features a single configuration using the `displayImage`, `contentImage`, `description`, `action` and `disclaimer` slots for structured content placement. This is the most common use case for the `<auro-banner>` component.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Hero

The following example illustrates  the `hero` template style. This example also illustrates the use of the `prefix` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/hero.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/hero.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Iconic

The `iconic` template style hides the `displayImage` on small screen sizes and only shows the icon. 

Use the `iconbg` attribute to add a background color to the icon container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/iconic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/iconic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Marquee

The following example illustrates  the `marquee` template style. It also supports the `slim` and `appearance="inverse"` attributes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/marquee.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/marquee.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Solid Marquee

The following example illustrates a `<auro-banner>` custom element with the `marquee solid` template style. With this configuration, `appearance="inverse"` is implied.

For content not wrapped in a designated slot, it is required to set the `appearance="inverse"` attribute manually. This is **not** controlled by the `<auro-banner>` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/marquee-solid.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/marquee-solid.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Rounded Border

The `roundedBorder` variant style adds a border with rounded corners around the banner content. With this configuration, no `displayImage` is used. Instead only the `contentImage` is used and the rest of the content is displayed in a row.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/rounded-border.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/rounded-border.html) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/billboard-series.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Billboard / slim / alignLeft / appearance

The following example illustrates an option to left align the text `alignLeft` along with `slim` to reduce the padding and `appearance="inverse"` to change the text to white.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/billboard-series-left.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/billboard-series-left.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
