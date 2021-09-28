# Banner

The `<auro-banner>` custom element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image and some type of value proposition.

The component is broken down into four sections - content, graphic, graphicContent and overlay.

1. The `content` slot can accept any HTML content.
1. The `graphic` is the background rendered behind the `graphicContent` slot, an attribute that accepts a string that matches the CSS `background` rule. The `hideGraphicLg`, `hideGraphicMd` and `hideGraphics,` attributes may be used to hide the graphic entirely at associated breakpoints, e.g. `hideGraphicSm` will hide the graphic on a mobile device layout.
1. The `graphicContent` slot allows any content desired as an overlay of the `graphic` background, accepts any HTML content.
1. The `overlay` attribute used in combination with the `overlay` slot, and the associated `overlayBg` attribute allow you to place a floating element container over the banner.

The `ratio` attribute can be used to define a custom split between the content and graphic slot which otherwise defaults to 50% and 50% each. E.g. a ratio of `1:3` would be `25%` and `75%` where `2:3` would be `40%` and `60%`. The content section is always the first part of the ratio and the graphic is the second.

The `inset` and `insetContent` attributes can be used to apply predefined padding to the entire banner, or the `content` and `graphicContent` slots. Note that when using the `inset` attribute the defined `graphic` background will be inside of that padding. If you want your `graphic` to fill the banner without this padding `insetContent` is the appropriate attribute to use.

Valid attribute values for `inset` and `insetCustom` include `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl` or any CSS value which is valid for the CSS `padding` rule, e.g. `1rem`. When using a custom CSS rule, do not include a semi-colon at at the end of the string, e.g. `1rem` is valid, `1rem;` is invalid.

There are optional boolean properties `roundedBorder`, `row` and `flipped` that can be used universally for the desired effect.

## Component use cases

Use the `<auro-banner>` element to:

- grab the attention of a user
- direct your user to another resource for further information

## Do not...

* Use `<auro-banner>` as the primary source of information.
* Use `<auro-banner>` to render a single static image on the page. `auro-background` is the correct component for this.
* Use `ratio` values of 0 (e.g. `0:1` or `1:0`)
* Include a semi-colon in a custom `inset` or `insetContent` attribute value, e.g. `1rem` is valid, `1rem;` is invalid.

## Default element

The following example illustrates a default `<auro-banner>` element using the `content` and `graphic` slots for structured content.

<div class="exampleWrapper">
  <auro-banner graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
    <div slot="content">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
  <div slot="content">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>
```

</auro-accordion>

## Flipped

The following example illustrates the `<auro-banner>` element with the `flipped` property. The `graphic` appears on the left and the `content` will appear to the right. The image will still stack on top of the content on a mobile device.

<div class="exampleWrapper">
  <auro-banner
    flipped
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
    <div slot="content">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  flipped
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
  <div slot="content">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>
```

</auro-accordion>

## Ratio

The following example illustrates how to use the `ratio` property to control the width of the left and right side of the banner. The syntax is `{leftRatio}:{rightRatio}` where the left and right ratios are the comparison of sizes between the two parts of the banner. In this example the property is set to `2:3`, so the left hand side takes up `40%` of the page and the right takes up `60%`. You could also set the ratio to `40:60` for the same results.

Do not use `0` values within the ratio. E.g. `0:1` or `1:0`. Examples below show how to use banner with either no main content or no graphic.

<div class="exampleWrapper">
  <auro-banner
    ratio="2:3"
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
    <div slot="content">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  ratio="2:3"
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
  <div slot="content">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>
```

</auro-accordion>

## Overlay

The following example illustrates the `<auro-banner>` custom element using the `overlay` slot. The `overlay` will only render when the `overlay` slot has content defined.

<div class="exampleWrapper">
  <auro-banner
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
    <div slot="content">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
    <span slot="overlay">
      <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
    </span>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
  <div slot="content">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
  <span slot="overlay">
    <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
  </span>
</auro-banner>
```

</auro-accordion>


## Overlay with Custom Background Color

The following example illustrates the `<auro-banner>` custom element using the `overlay` slot and the `overlayBg` attribute to alter the background color of the overlay.

<div class="exampleWrapper">
  <auro-banner
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat"
    overlay
    overlayBg="var(--auro-color-alert-notification-on-light)">
    <div slot="content">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
    <span slot="overlay">
      <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
    </span>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat"
  overlay
  overlayBg="var(--auro-color-alert-notification-on-light)">
  <div slot="content">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
  <span slot="overlay">
    <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
  </span>
</auro-banner>
```

</auro-accordion>

## Graphic Content only with InsetContent

The following example illustrates the `<auro-banner>` custom element using the `graphicContent` slot and no content in the primary `content` slot.

<div class="exampleWrapper">
  <auro-banner
    insetContent="md"
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
    <div slot="graphicContent">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  insetContent="md"
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
  <div slot="graphicContent">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>
```

</auro-accordion>

## Primary and Graphic Content

The following example illustrates the `<auro-banner>` custom element with content in both the `content` and `graphicContent` slots.

<div class="exampleWrapper">
  <auro-banner
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
    <div slot="content">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
    <span slot="graphicContent">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </span>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
  <div slot="content">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
  <span slot="graphicContent">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </span>
</auro-banner>
```

</auro-accordion>

## No Graphic Banner

The following example illustrates the `<auro-banner>` custom element without a graphic image.

<div class="exampleWrapper">
<auro-banner>
  <div slot="content">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner>
  <div slot="content">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>
```

</auro-accordion>

## Inset

The following example illustrates the `<auro-banner>` custom element using the `inset` property which adds padding around the banner content and graphic.

<div class="exampleWrapper">
  <auro-banner
    inset="md"
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
    <div slot="content">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<div class="exampleWrapper">
  <auro-banner
    inset="md"
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
    <div slot="content">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-banner>
```

</auro-accordion>

## InsetContent

The following example illustrates the `<auro-banner>` custom element using the `insetContent="md"` attribute with the `content` and `graphicContent` slots.

<div class="exampleWrapper">
  <auro-banner
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat"
    insetContent="md">
    <div slot="content">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
    <span slot="graphicContent">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </span>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat"
  insetContent="md">
  <div slot="content">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
  <span slot="graphicContent">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </span>
</auro-banner>
```

</auro-accordion>

## RoundedBorder with Inset

The following example illustrates the `<auro-banner>` custom element with the `roundedBorder` attribute. The `roundedBorder` attribute should be used in conjunction with `inset` or `insetContent`.

<div class="exampleWrapper">
  <auro-banner
    roundedBorder
    inset="md"
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
    <div slot="content">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
  <auro-banner
    roundedBorder
    inset="md"
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
    <div slot="content">
      <img
        src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
        alt="Random insert"/>
      <p>
        We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
      </p>
      <auro-hyperlink
        cta
        secondary
        href="/"
        target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-banner>
  ```

</auro-accordion>

## Row

The following example illustrates the `<auro-banner>` custom element with the `row` attribute to maintain the row format on a mobile device instead of the default stacking behavior.

<div slot="left" class="exampleWrapper">
<auro-banner
  row
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
  <div slot="content">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>
</div>


<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  row
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat">
  <div slot="content">
    <img
      src="https://sitecore-prod-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>
  ```

</auro-accordion>

## Minimum Graphic Height

The following example illustrates the `<auro-banner>` custom element with the `minGraphicHeight` attribute to enforce a minimum height of the graphic image container. `minGraphicHeight` has a default value of `15rem`.

<div slot="left" class="exampleWrapper">
<auro-banner
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat"
  minGraphicHeight="20rem">
  <div slot="content">
    <img
      src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>
</div>


<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat"
  minGraphicHeight="20rem">
  <div slot="content">
    <img
      src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert"/>
    <p>
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-banner>
  ```

</auro-accordion>

## Additional Examples

The examples below showcase current or former examples of how the `<auro-banner>` is being used in production to give further context on how to use the it.

### Credit card offer

The following examples illustrate the `<auro-banner>` custom element in typical merchandising situations using `<auro-header>`, `<auro-icon>`, `<auro-hyperlink>` along with basic HTML markup. Notice the use of a custom `ratio` of `8:17`.

<div slot="left" class="exampleWrapper">
<auro-banner
  ratio="8:17"
  flipped>
  <div slot="content">
    <auro-header level="6" display="100" margin="both" size="none"><strong>LIMITED TIME ONLINE OFFER</strong></auro-header>
    <auro-header level="2" display="700" margin="both" size="none" style="color:#0074CA"><strong style="font-size: 2.4rem;">BUY ONE</strong> ticket<auro-icon  category="terminal"  name="plane-side-fill" customColor  style="color: #01426A; margin-left:1rem"></auro-icon></auro-header>
    <auro-header level="2" display="700" margin="both" size="none" style="color:#00805D"><strong style="font-size: 2.4rem;">GET ONE</strong> for just the taxes & fees</auro-header>
    <div style="margin-bottom: .5rem">
      Plus, get a 40,000 bonus mile offer when you apply here.
    </div>
    <auro-hyperlink secondary cta href="#" target="_blank">Apply now</auro-hyperlink>
  </div>
  <img slot="graphicContent" src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" alt="" />
</auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner flipped>
  <div slot="content">
    <auro-header level="6" display="100" margin="both" size="none"><strong>LIMITED TIME ONLINE OFFER</strong></auro-header>
    <auro-header level="2" display="700" margin="both" size="none" style="color:#0074CA"><strong style="font-size: 2.4rem;">BUY ONE</strong> ticket<auro-icon  category="terminal"  name="plane-side-fill" customColor  style="color: #01426A; margin-left:1rem"></auro-icon></auro-header>
    <auro-header level="2" display="700" margin="both" size="none" style="color:#00805D"><strong style="font-size: 2.4rem;">GET ONE</strong> for just the taxes & fees</auro-header>
    <div style="margin-bottom: .5rem">
      Plus, get a 40,000 bonus mile offer when you apply here.
    </div>
    <auro-hyperlink secondary cta href="#" target="_blank">Apply now</auro-hyperlink>
  </div>
  <img slot="graphicContent" src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" alt="" />
</auro-banner>
```

</auro-accordion>

### Card Benefits

##### Example #1

This example combines a collection of `<auro-icon>` in a list showcasing the many benefits of our card.

<div class="exampleWrapper">
  <auro-banner
    graphic="url(https://images.unsplash.com/photo-1585541115073-0fd04faa7142?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80) center center/cover"
    ratio="6:4">
    <style>
      .cardBenefitsContentWrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      .imageWrapper {
        display:flex;
        align-items: center;
        flex-direction:column;
        /* use the same value as height */
        min-height: 270px;
        /* if you want the CC to overlap the bottom on mobile otherwise delete the line below */
        justify-content: flex-end; /*adjust this as needed */
        margin-bottom:30px;
      }
      .imageWrapper img {
        height: auto;
        max-width: 180px;
      }
      @media (min-width:660px) {
        .imageWrapper {
          /* use the same value as heightsm */
          min-height: 422px;
          /* if you want the CC to overlap the bottom on mobile but not on other screen sizes otherwise delete the line below */
          margin-bottom: 0;
          justify-content: center; /*adjust this as needed */
        }
        .imageWrapper img {
          /* if you want the CC to overlap the bottom on mobile but not on other screen sizes otherwise delete the line below  */
          position: initial;
          top: 0;
        }
      }
      @media (min-width:1024px) {
      /* use the same value as heightmd */
        .cardBenefitsContentWrapper {min-height: 355px}
        .imageWrapper {min-height: 355px}
      }
    </style>
    <div slot="content">
      <div class="cardBenefitsContentWrapper">
        <auro-header level="2" display="600" margin="both" size="none" class="title"> Get 40,000 Bonus Miles + Alaska's Famous Companion Fare&trade; offer. Plus,</auro-header>
        <ul style="list-style: none;padding-left:0;margin:.5rem 0 0 0">
          <style>ul li {line-height:2rem; text-align:left;} ul li auro-icon {margin-right:.5rem; margin-left:-.35rem}</style>
          <li><auro-icon label="" emphasis="" category="in-flight" name="luggage"></auro-icon>First checked bag free for you and up to 6 guests on your reservation.</li>
          <li><auro-icon label="" emphasis="" category="interface" name="star-stroke"></auro-icon>Alaska's Famous Companion Fare™ every year.</li>
          <li><auro-icon label="" emphasis="" category="shop" name="shopping-bag"></auro-icon>3 miles for every $1 spent on eligible Alaska Airlines purchases.</li>
          <li><auro-icon label="" emphasis="" category="terminal" name="plane-diag-stroke"></auro-icon>20% back on Alaska Airlines inflight purchases.</li>
          <li><auro-icon label="" emphasis="" category="terminal" name="lounge"></auro-icon>50% off Lounge passes.</li>
        </ul>
      </div>
    </div>
    <div slot="graphicContent">
      <div class="imageWrapper">
        <img src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature">
      </div>
    </div>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
  <auro-banner
    graphic="url(https://images.unsplash.com/photo-1585541115073-0fd04faa7142?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80) center center/cover"
    ratio="6:4">
    <style>
      .cardBenefitsContentWrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      .imageWrapper {
        display:flex;
        align-items: center;
        flex-direction:column;
        /* use the same value as height */
        min-height: 270px;
        /* if you want the CC to overlap the bottom on mobile otherwise delete the line below */
        justify-content: flex-end; /*adjust this as needed */
        margin-bottom:30px;
      }
      .imageWrapper img {
        height: auto;
        max-width: 180px;
      }
      @media (min-width:660px) {
        .imageWrapper {
          /* use the same value as heightsm */
          min-height: 422px;
          /* if you want the CC to overlap the bottom on mobile but not on other screen sizes otherwise delete the line below */
          margin-bottom: 0;
          justify-content: center; /*adjust this as needed */
        }
        .imageWrapper img {
          /* if you want the CC to overlap the bottom on mobile but not on other screen sizes otherwise delete the line below  */
          position: initial;
          top: 0;
        }
      }
      @media (min-width:1024px) {
      /* use the same value as heightmd */
        .cardBenefitsContentWrapper {min-height: 355px}
        .imageWrapper {min-height: 355px}
      }
    </style>
    <div slot="content">
      <div class="cardBenefitsContentWrapper">
        <auro-header level="2" display="600" margin="both" size="none" class="title"> Get 40,000 Bonus Miles + Alaska's Famous Companion Fare&trade; offer. Plus,</auro-header>
        <ul style="list-style: none;padding-left:0;margin:.5rem 0 0 0">
          <style>ul li {line-height:2rem; text-align:left;} ul li auro-icon {margin-right:.5rem; margin-left:-.35rem}</style>
          <li><auro-icon label="" emphasis="" category="in-flight" name="luggage"></auro-icon>First checked bag free for you and up to 6 guests on your reservation.</li>
          <li><auro-icon label="" emphasis="" category="interface" name="star-stroke"></auro-icon>Alaska's Famous Companion Fare™ every year.</li>
          <li><auro-icon label="" emphasis="" category="shop" name="shopping-bag"></auro-icon>3 miles for every $1 spent on eligible Alaska Airlines purchases.</li>
          <li><auro-icon label="" emphasis="" category="terminal" name="plane-diag-stroke"></auro-icon>20% back on Alaska Airlines inflight purchases.</li>
          <li><auro-icon label="" emphasis="" category="terminal" name="lounge"></auro-icon>50% off Lounge passes.</li>
        </ul>
      </div>
    </div>
    <div slot="graphicContent">
      <div class="imageWrapper">
        <img src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature">
      </div>
    </div>
  </auro-banner>
```

</auro-accordion>

##### Example #2

The following example illustrates the graphic slot including a `<auro-hyperlink>` custom element as well as an image.

<div class="exampleWrapper">
  <auro-banner flipped ratio="4:6">
    <div slot="graphicContent" style="text-align:center; position:relative">
      <img src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" width="300px" style="margin-bottom: 1.5rem;">
      <auro-hyperlink secondary cta href="#" target="_blank">Apply now</auro-hyperlink>
    </div>
    <div slot="content">
      <div style="padding: 20px 0;">
        <auro-header level="2" display="600" margin="both" size="none" class="title"> Get 40,000 Bonus Miles + Alaska's Famous Companion Fare&trade; offer. Plus,</auro-header>
        <ul style="list-style: none;padding-left:0;margin:.5rem 0 0 0">
          <style>ul li {line-height:2rem; text-align:left;} ul li auro-icon {margin-right:.5rem; margin-left:-.35rem}</style>
          <li><auro-icon label="" emphasis="" category="in-flight" name="luggage"></auro-icon>First checked bag free for you and up to 6 guests on your reservation.</li>
          <li><auro-icon label="" emphasis="" category="interface" name="star-stroke"></auro-icon>Alaska's Famous Companion Fare™ every year.</li>
          <li><auro-icon label="" emphasis="" category="shop" name="shopping-bag"></auro-icon>3 miles for every $1 spent on eligible Alaska Airlines purchases.</li>
          <li><auro-icon label="" emphasis="" category="terminal" name="plane-diag-stroke"></auro-icon>20% back on Alaska Airlines inflight purchases.</li>
          <li><auro-icon label="" emphasis="" category="terminal" name="lounge"></auro-icon>50% off Lounge passes.</li>
        </ul>
      </div>
    </div>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner flipped ratio="4:6">
  <div slot="graphicContent" style="text-align:center; position:relative">
    <img src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" width="300px" style="margin-bottom: 1.5rem;">
    <auro-hyperlink secondary cta href="#" target="_blank">Apply now</auro-hyperlink>
  </div>
  <div slot="content">
    <auro-header level="2" display="600" margin="both" size="none" class="title"> Get 40,000 Bonus Miles + Alaska's Famous Companion Fare&trade; offer. Plus,</auro-header>
    <ul style="list-style: none;padding-left:0;margin:.5rem 0 0 0">
      <style>ul li {line-height:2rem; text-align:left;} ul li auro-icon {margin-right:.5rem; margin-left:-.35rem}</style>
      <li><auro-icon label="" emphasis="" category="in-flight" name="luggage"></auro-icon>First checked bag free for you and up to 6 guests on your reservation.</li>
      <li><auro-icon label="" emphasis="" category="interface" name="star-stroke"></auro-icon>Alaska's Famous Companion Fare™ every year.</li>
      <li><auro-icon label="" emphasis="" category="shop" name="shopping-bag"></auro-icon>3 miles for every $1 spent on eligible Alaska Airlines purchases.</li>
      <li><auro-icon label="" emphasis="" category="terminal" name="plane-diag-stroke"></auro-icon>20% back on Alaska Airlines inflight purchases.</li>
      <li><auro-icon label="" emphasis="" category="terminal" name="lounge"></auro-icon>50% off Lounge passes.</li>
    </ul>
  </div>
</auro-banner>
```

</auro-accordion>

### Hero

In these examples the `<auro-banner>` custom element can be used along side page navigation.

##### oneworld hub page

<div class="exampleWrapper">
  <section class="flex-container">
    <div class="flex-column col1">
      <ul class="PageNav">
        <li><auro-hyperlink relative="true" href="#MemberAirlines">Members</auro-hyperlink></li>
        <li><auro-hyperlink relative="true" href="#Benefits">Benefits</auro-hyperlink></li>
        <li><auro-hyperlink relative="true" href="#RoundtheWorldfares">Round the World fares</auro-hyperlink></li>
        <li><auro-hyperlink relative="true" href="#SeemlessTravel">Seamless travel</auro-hyperlink></li>
      </ul>
    </div>
    <div class="flex-column col2">
      <auro-banner
        graphic="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Hero-S.png) center center/cover"
        graphicSm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Hero-L.jpg) bottom center/cover">
        <div slot="content">
          <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="300" margin="top" size="none"><b>one</b>world<sup>&reg;</sup> Alliance</span></auro-header>
          <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="600" margin="top" size="none" class="title">14 global airlines.<br>One bright alliance.</auro-header>
          <div style="margin-bottom: 1rem">
            Say hi to <b>one</b>world, an alliance of the world’s leading airlines providing the highest level of service and convenience across more than 1,000 destinations worldwide.
          </div>
          <auro-hyperlink slot="action" href="https://www.oneworld.com/" target="_blank" cta="true" secondary="true" nav="true">About <strong>one</strong>world</auro-hyperlink>
        </div>
      </auro-banner>
    </div>
  </section>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<section class="flex-container">
  <div class="flex-column col1">
    <ul class="PageNav">
      <li><auro-hyperlink relative="true" href="#MemberAirlines">Members</auro-hyperlink></li>
      <li><auro-hyperlink relative="true" href="#Benefits">Benefits</auro-hyperlink></li>
      <li><auro-hyperlink relative="true" href="#RoundtheWorldfares">Round the World fares</auro-hyperlink></li>
      <li><auro-hyperlink relative="true" href="#SeemlessTravel">Seamless travel</auro-hyperlink></li>
    </ul>
  </div>
  <div class="flex-column col2">
    <auro-banner
      graphic="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Hero-S.png) center center/cover"
      graphicSm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Hero-L.jpg) bottom center/cover">
      <div slot="content">
        <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="300" margin="top" size="none"><b>one</b>world<sup>&reg;</sup> Alliance</span></auro-header>
        <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="600" margin="top" size="none" class="title">14 global airlines.<br>One bright alliance.</auro-header>
        <div style="margin-bottom: 1rem">
          Say hi to <b>one</b>world, an alliance of the world’s leading airlines providing the highest level of service and convenience across more than 1,000 destinations worldwide.
        </div>
        <auro-hyperlink slot="action" href="https://www.oneworld.com/" target="_blank" cta="true" secondary="true" nav="true">About <strong>one</strong>world</auro-hyperlink>
      </div>
    </auro-banner>
  </div>
</section>
```

</auro-accordion>

##### Sustainability hub page

<div class="exampleWrapper">
  <section class="flex-container">
    <div class="flex-column col1">
      <ul class="PageNav">
        <li><auro-hyperlink relative="true" href="#">Planet</auro-hyperlink></li>
        <li><auro-hyperlink relative="true" href="#">People</auro-hyperlink></li>
        <li><auro-hyperlink relative="true" href="#">Accountability</auro-hyperlink></li>
      </ul>
    </div>
    <div class="flex-column col2">
      <auro-banner
        graphic="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Wing_500x500.png) center center/cover">
        <div slot="content">
          <img src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Alaska-Lift-Lockup-reverse-Sm.svg" alt="Alaska Airlines and Lift logos">
          <auro-header level="2" display="600" color="var(--auro-color-background-darker)">We make flying matter.</auro-header>
          <div style="margin-bottom: 1rem">
            LIFT is what we call our work to run our company with care, focusing on social and environmental impact. Join us as we take action on initiatives to support our people and our planet.
          </div>
          <auro-hyperlink secondary="" cta="" href="https://flysustainably.com/wp-content/uploads/2021/05/CR_032921_2021-Lift-Report_Final-1.pdf" target="_blank">View 2020 report</auro-hyperlink>
        </div>
      </auro-banner>
    </div>
  </section>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner>
  <div slot="content">
    <img src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Alaska-Lift-Lockup-reverse-Sm.svg" alt="Alaska Airlines and Lift logos" />
    <auro-header level="2" display="600" color="var(--auro-color-background-darker)">We make flying matter.</auro-header>
    <div style="margin-bottom: 1rem">
      LIFT is what we call our work to run our company with care, focusing on social and environmental impact. Join us as we take action on initiatives to support our people and
      our planet.
    </div>
    <auro-hyperlink
      secondary=""
      cta=""
      href="https://flysustainably.com/wp-content/uploads/2021/05/CR_032921_2021-Lift-Report_Final-1.pdf"
      target="_blank"
      >View 2020 report</auro-hyperlink
    >
  </div>
  <div slot="graphic">
    <auro-background
      height="250px"
      heightsm="422px"
      heightmd="335px"
      background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Wing_500x500.png) center center/cover"
    ></auro-background>
  </div>
</auro-banner>
```

</auro-accordion>



### Featured placement

The `<auro-banner>` custom element can showcase an important benefit or feature.

<div class="exampleWrapper">
  <auro-banner
    graphic="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Lounge-S.png) center center/cover"
    graphicSm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Lounge-L.png) bottom center/cover">
    <div slot="content">
      <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="600" margin="top" size="none" class="title">Relax before the runway.</auro-header>
      <div style="margin-bottom: 1rem">
        Find some peace and quiet at one of more than 650 <b>one</b>world airport lounges worldwide. Get work done between flights using fast Wi-Fi, grab a quick bite or freshen up with a warm shower. Go ahead, you deserve it.
      </div>
      <auro-hyperlink href="https://www.oneworld.com/airport-lounges?location=SEA" target="_blank" cta="true" secondary="true" nav="true"><span>Explore lounges</span></auro-hyperlink>
    </div>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  graphic="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Lounge-S.png) center center/cover"
  graphicSm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Lounge-L.png) bottom center/cover">
  <div slot="content">
    <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="600" margin="top" size="none" class="title">Relax before the runway.</auro-header>
    <div style="margin-bottom: 1rem">
      Find some peace and quiet at one of more than 650 <b>one</b>world airport lounges worldwide. Get work done between flights using fast Wi-Fi, grab a quick bite or freshen up with a warm shower. Go ahead, you deserve it.
    </div>
    <auro-hyperlink href="https://www.oneworld.com/airport-lounges?location=SEA" target="_blank" cta="true" secondary="true" nav="true"><span>Explore lounges</span></auro-hyperlink>
  </div>
</auro-banner>
```

</auro-accordion>

### Alternating placements

The `<auro-banner>` custom element can showcase important benefits or features of a product and still create some visual interest by using the `flipped` property.

<div class="exampleWrapper">
  <auro-banner
    flipped>
    <div slot="content">
      <auro-header level="4" display="500" margin="both" size="none" color="var(--auro-color-background-darker)">We fly greener.</auro-header>
      <p>
        We work every day to reduce our environmental impact, including on climate change.
      </p>
      <auro-hyperlink href="https://www.alaskaair.com/content/about-us/esg/planet" target="|Custom" cta="true" secondary="true">View environmental initiatives</auro-hyperlink>
    </div>
    <auro-background
      slot="graphicContent"
      height="240px"
      heightsm="240px"
      bg="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Planet_hub_567x282.png) center center/cover no-repeat"
      bgsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Planet_hub_567x282.png) center center/contain no-repeat"></auro-background>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  flipped>
  <div slot="content">
    <auro-header level="4" display="500" margin="both" size="none" color="var(--auro-color-background-darker)">We fly greener.</auro-header>
    <p>
      We work every day to reduce our environmental impact, including on climate change.
    </p>
    <auro-hyperlink href="https://www.alaskaair.com/content/about-us/esg/planet" target="|Custom" cta="true" secondary="true">View environmental initiatives</auro-hyperlink>
  </div>
  <auro-background
    slot="graphicContent"
    height="240px"
    heightsm="240px"
    bg="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Planet_hub_567x282.png) center center/cover no-repeat"
    bgsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Planet_hub_567x282.png) center center/contain no-repeat"></auro-background>
</auro-banner>
```
</auro-accordion>


<div class="exampleWrapper">
  <auro-banner>
    <div slot="content">
      <auro-header level="4" display="500" margin="both" size="none" color="var(--auro-color-background-darker)">We fly greener.</auro-header>
      <p>
        We work every day to reduce our environmental impact, including on climate change.
      </p>
      <auro-hyperlink href="https://www.alaskaair.com/content/about-us/esg/planet" target="|Custom" cta="true" secondary="true">View environmental initiatives</auro-hyperlink>
    </div>
    <auro-background
      slot="graphicContent"
      height="240px"
      heightsm="240px"
      bg="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/People_hub_567x282.png)center center/cover no-repeat"
      bgsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/People_hub_567x282.png) center center/contain no-repeat"></auro-background>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner>
  <div slot="content">
    <auro-header level="4" display="500" margin="both" size="none" color="var(--auro-color-background-darker)">We fly greener.</auro-header>
    <p>
      We work every day to reduce our environmental impact, including on climate change.
    </p>
    <auro-hyperlink href="https://www.alaskaair.com/content/about-us/esg/planet" target="|Custom" cta="true" secondary="true">View environmental initiatives</auro-hyperlink>
  </div>
  <auro-background
    slot="graphicContent"
    height="240px"
    heightsm="240px"
    bg="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/People_hub_567x282.png)center center/cover no-repeat"
    bgsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/People_hub_567x282.png) center center/contain no-repeat"></auro-background>
</auro-banner>
```

</auro-accordion>
