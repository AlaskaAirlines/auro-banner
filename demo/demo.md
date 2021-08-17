# Banner

The `<auro-banner>` element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image and some type of value proposition.

The component is broken down into three sections - content, graphic, overlay.

`content` is basic `slot` which can accept html content you insert.

`graphic` has two parts. There is the graphic background which is defined as an attribute accepting a string with syntax rules matching the css `background` rule. There is also the `graphicContent` slot which allows you to insert any content you want as an overlay of the graphic background. `hideGraphicLg`, `hideGraphicMd` and `hideGraphics,` may be used to hide the graphic entirely at associated breakpoints. e.g. `hideGraphicSm` will hide the graphic on a mobile device layout.

The `overlay` attribute used in combination with the `overlay` slot, and the associated `overlayBg` attribute allow you to play a floating slot container over the banner.

The `ratio` attribute may be used to define a custom split between the content and graphic slot which otherwise defaults to 50% and 50% each. e.g. a ratio of `1:3` would be 25% and 75% where `2:3` would be 40% and 60%. The content section is always the first part of the ratio and graphic is the second.

`inset` and `insetXl` may be used to apply a predefined padding to the entire banner. Note that this means your defined `graphic` background will be inside of that padding. Additionally you may use `insetCustom` to apply any CSS padding shorthand syntax, e.g. `50rem` or `5rem 3rem 2rem 1rem`.

`insetContent`, `insetContentXl` and `insetContentCustom` worked the same but apply the padding directly to the `content` and `graphicContent` slots. This is useful when you want your graphics to fill the banner but still have padding on the slot contents.

There are also a few optional boolean properties `roundedBorder`, `inset`, `insetXl`, `row` and `flipped`.

## Component use cases

Use the `<auro-banner>` element to:

- grab the attention of a user
- direct your user to another resource for further information

## Do not...

* Use `<auro-banner>` as the primary source of information.
* Use `<auro-banner>` to render a single static image on the page. `auro-background` is the correct component for this.
* Combine combine the following properties (defined below):
  * `inset`, `insetXl`, `insetCustom`
  * `insetContent`, `insetContentXl`, `insetContentCustom`
* Use `ratio` (defined below) values of 0 (e.g. `0:1` or `1:0`)

## Default element

The default `<auro-banner>` element using the `content` and `graphic` slots for structured content placement.

<div class="exampleWrapper">
  <auro-banner graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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
<auro-banner graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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

## Flipped

The `<auro-banner flipped>` element with the `flipped` property will have the left side of the show the `graphic` and the right side will show the `content`. The image will still stack on top of the content on mobile.

<div class="exampleWrapper">
  <auro-banner
    flipped
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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
  flipped
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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

## Ratio

The following example illustrates how to use the `ratio` property to control the width of the left and right side of the banner. The structure is `{leftRatio}:{rightRatio}` where the left and right ratios are the comparison of sizes between the two parts of the banner. In this example we set it to `2:3` so the left hand side takes up 40% of the page and the right takes up 60%. You could also set the ratio to `40:60` to get the same results.

Do not use `0` values within the ratio. e.g. `0:1` or `1:0`. Examples below show how to use banner with either no main content or no graphic.

<div class="exampleWrapper">
  <auro-banner
    ratio="2:3"
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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
  ratio="2:3"
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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

## Overlay

The following example illustrates `<auro-banner>` custom element using the `overlay` slot. You'll need to include the boolean `overlay` to display the overlay. This fixes an icon to the bottom of the banner.

<div class="exampleWrapper">
  <auro-banner
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;"
    overlay>
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
    <span slot="overlay">
      <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
    </span>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;"
  overlay>
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
  <span slot="overlay">
    <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
  </span>
</auro-banner>
```

</auro-accordion>


## Overlay with Custom Background Color

The following example illustrates `<auro-banner>` custom element using the `overlay` slot. You'll need to include the boolean `overlay` to display the overlay. This fixes an icon to the bottom of the banner.

<div class="exampleWrapper">
  <auro-banner
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;"
    overlay
    overlayBg="var(--auro-color-alert-notification-on-light)">
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
    <span slot="overlay">
      <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
    </span>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;"
  overlay
  overlayBg="var(--auro-color-alert-notification-on-light)">
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
  <span slot="overlay">
    <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
  </span>
</auro-banner>
```

</auro-accordion>

## Graphic Content only with InsetContent

The following example illustrates `<auro-banner>` with content defined for the `graphicContent` slot and no content in primary `content` slot. The `insetContent`and `insetContentXl` attributes are optionally used to add padding to the content inside the graphic.

<div class="exampleWrapper">
  <auro-banner
    insetContent
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
    <div slot="graphicContent">
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
  insetContent
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
  <div slot="graphicContent">
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

## Primary and Graphic Content

The following example illustrates `<auro-banner>` with content in both the primary `content` slot as well as the `graphicContent` slot.

<div class="exampleWrapper">
  <auro-banner
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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
    <span slot="graphicContent">
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
    </span>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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
  <span slot="graphicContent">
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
  </span>
</auro-banner>
```

</auro-accordion>

## No Graphic Banner

The following example illustrates `<auro-banner>` that does not have a graphic image.

<div class="exampleWrapper">
<auro-banner>
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
<auro-banner>
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

## Inset

This example showcases an `<auro-banner>` with the `inset` property set which adds padding around the banner content and graphic.

wrapped in `<auro-background background="var(--auro-color-brand-midnight-400)">` when using a background we can add additional padding to the `content` slot by applying the `inset` property.

<div class="exampleWrapper">
  <auro-banner
    inset
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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
<div class="exampleWrapper">
  <auro-banner
    inset
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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

## Inset Extra Large

This example showcases an `<auro-banner>` with the `insetXl` property set which adds a larger amount of padding around the banner content and graphic. `insetXl` and `inset` should not be used on the same instance of `auro-banner`. However, `insetXl` will always take priority over `inset` if both properties were applied.

<div class="exampleWrapper">
  <auro-banner
    insetXl
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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
    insetXl
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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

## RoundedBorder with Inset

The following example illustrates `<auro-banner>` custom element with the `roundedBorder` variant style. In most cases, `roundedBorder` should be used in conjunction with `inset` or `insetXL`.

<div class="exampleWrapper">
  <auro-banner
    roundedBorder
    inset
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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
    roundedBorder
    inset
    graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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

## Row

The following example illustrates `<auro-banner>` custom element with the `row` variant which maintains the row format on mobile instead of the default stacking behavior.


<div slot="left" class="exampleWrapper">
<auro-banner
  row
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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
  row
  graphic="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
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

The following examples showcases the `<auro-banner>` in a typical merchandising situation using `<auro-header>`, `<auro-icon>`, `<auro-hyperlink>` along with basic `html` markup. This one has a custom `ratio` of `8:17`.

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

### Icon Grid

This example showcases a collection of `<auro-icon>` and a description using our `auro-threecolumn` component for formatting.
<div class="exampleWrapper">
  <auro-banner
    ratio="3:2"
    graphic="url('https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/mileage-plan/membership-benefits/redesign 2021/Earn_miles_600x500_ver2') center center/cover no-repeat">
    <div slot="content">
      <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="300" margin="top" size="none">
        <auro-icon category="terminal" name="plane-side-fill" customcolor="" style="color: #01426A; margin-right:.2rem"></auro-icon>
        Ipsum dolor
      </auro-header>
      <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="700" margin="top" size="none" class="title">
        Quia possimus ea suscipit ipsam.
      </auro-header>
      <div style="margin-bottom: 1rem;">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum, possimus vitae quaerat alias assumenda magni accusamus minus autem odio debitis quisquam dolorem iste facere adipisci! Temporibus fugit consequatur odit!
      </div>
      <auro-threecolumn ratio="1:1:1" gap="24">
        <style>
          .slots {
            display:flex;
            align-items: center;
            padding-bottom:2rem;
          }
          .icon-style {
            max-width:100px;
          }
          .icon-copy {
            margin-top: .5rem;
          }
          @media (min-width:660px) {
          .slots {
            display:initial;
            padding-bottom:0;
          }
            .icon-copy {
              display: block;
            }
            .icon-style {
              max-width:100%;
            }
          }
        </style>
          <div class="slots" slot="left">
            <img class="icon-style" src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/5AECE5D9C8D54DB7BCE4395F224686E6">
            <div class="icon-copy">Lorem ipsum dolor sit amet.</div>
          </div>
          <div class="slots" slot="center">
            <img class="icon-style static-fly-partners" src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/4F4E766C4463477C80E84154DB1A1174">
            <div class="icon-copy">Lorem ipsum dolor sit amet.</div>
          </div>
          <div class="slots" slot="right">
            <img class="icon-style" src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/9EC95FB197C649C293D569F883E5843C">
            <div class="icon-copy">Lorem ipsum dolor sit amet.</div>
          </div>
        </auro-threecolumn>
    </div>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner
  ratio="3:2"
  graphic="url('https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/mileage-plan/membership-benefits/redesign 2021/Earn_miles_600x500_ver2') center center/cover no-repeat">
  <div slot="content">
    <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="300" margin="top" size="none">
      <auro-icon category="terminal" name="plane-side-fill" customcolor="" style="color: #01426A; margin-right:.2rem"></auro-icon>
      Ipsum dolor
    </auro-header>
    <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="700" margin="top" size="none" class="title">
      Quia possimus ea suscipit ipsam.
    </auro-header>
    <div style="margin-bottom: 1rem;">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum, possimus vitae quaerat alias assumenda magni accusamus minus autem odio debitis quisquam dolorem iste facere adipisci! Temporibus fugit consequatur odit!
    </div>
    <auro-threecolumn ratio="1:1:1" gap="24">
      <style>
        .slots {
          display:flex;
          align-items: center;
          padding-bottom:2rem;
        }
        .icon-style {
          max-width:100px;
        }
        .icon-copy {
          margin-top: .5rem;
        }
        @media (min-width:660px) {
        .slots {
          display:initial;
          padding-bottom:0;
        }
          .icon-copy {
            display: block;
          }
          .icon-style {
            max-width:100%;
          }
        }
      </style>
        <div class="slots" slot="left">
          <img class="icon-style" src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/5AECE5D9C8D54DB7BCE4395F224686E6">
          <div class="icon-copy">Lorem ipsum dolor sit amet.</div>
        </div>
        <div class="slots" slot="center">
          <img class="icon-style static-fly-partners" src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/4F4E766C4463477C80E84154DB1A1174">
          <div class="icon-copy">Lorem ipsum dolor sit amet.</div>
        </div>
        <div class="slots" slot="right">
          <img class="icon-style" src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/9EC95FB197C649C293D569F883E5843C">
          <div class="icon-copy">Lorem ipsum dolor sit amet.</div>
        </div>
      </auro-threecolumn>
  </div>
</auro-banner>
```

</auro-accordion>

### Flight Search page example
This example is used on the flight matrix page.

<div class="exampleWrapper">

<auro-twocolumn ratio="2:1">
  <auro-banner
    roundedBorder
    inset
    flipped
    ratio="3:5"
    slot="left">
    <div slot="content">
      <auro-header level="2" display="400" margin="both" size="none">SPECIAL OFFER FOR YOU</auro-header>
      <div style="font-size: .8rem; line-height: 1.25; margin: .25rem 0 .5rem;">
      Apply today and get a $200 statement credit offer plus a 30,000 bonus mile offer.
      </div>
      <auro-hyperlink secondary cta href="#" target="_blank">Apply now</auro-hyperlink>
    </div>
    <img slot="graphicContent" src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" alt="Alaska Airlines Visa Signature card" style="max-width: 100%;">
  </auro-banner>
</auro-twocolumn>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-twocolumn ratio="2:1">
  <auro-banner
    roundedBorder
    inset
    flipped
    ratio="3:5"
    slot="left">
    <div slot="content">
      <auro-header level="2" display="400" margin="both" size="none">SPECIAL OFFER FOR YOU</auro-header>
      <div style="font-size: .8rem; line-height: 1.25; margin: .25rem 0 .5rem;">
      Apply today and get a $200 statement credit offer plus a 30,000 bonus mile offer.
      </div>
      <auro-hyperlink secondary cta href="#" target="_blank">Apply now</auro-hyperlink>
    </div>
    <img slot="graphicContent" src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" alt="Alaska Airlines Visa Signature card" style="max-width: 100%;">
  </auro-banner>
</auro-twocolumn>
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
The graphic slot can also include `<auro-hyperlink>` as well as an image, like in this example.

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

In these examples the `<auro-banner>` can be used along side a set of page navigation links often at the top of a hub page to highlight a main feature or bit of information.

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

The `<auro-banner>` can showcase an important benefit or feature of a product so a guest can learn more about it.

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

The `<auro-banner>` can showcase important benefits or features of a product and still create some visual interest by using the `flipped` property.

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
      background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Planet_hub_567x282.png) center center/cover no-repeat"
      backgroundsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Planet_hub_567x282.png) center center/contain no-repeat"></auro-background>
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
    background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Planet_hub_567x282.png) center center/cover no-repeat"
    backgroundsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Planet_hub_567x282.png) center center/contain no-repeat"></auro-background>
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
      background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/People_hub_567x282.png)center center/cover no-repeat"
      backgroundsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/People_hub_567x282.png) center center/contain no-repeat"></auro-background>
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
    background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/People_hub_567x282.png)center center/cover no-repeat"
    backgroundsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/People_hub_567x282.png) center center/contain no-repeat"></auro-background>
</auro-banner>
```

</auro-accordion>
