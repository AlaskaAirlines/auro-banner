<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Banner

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
The `<auro-banner>` element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image, and details.

The details are broken down into `prefix`, `title`, `description`, `action`, and `disclaimer`.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
Use the `<auro-banner>` element to:

* grab the attention of a user
* direct your user to another resource for further information
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Basic

The default `<auro-banner>` element features configuration options when using using the `displayImage`, `contentImage`, `prefix`, `title`, `description`, `action` and `disclaimer` slots for structured content placement.

The `<auro-banner>` component must be used in conjunction with one of the following attributes: `billboard`, `hero`, `iconic`, `marquee`, or `roundedBorder`. The `billboard` attribute is the most common use case.

**Note**: See the [auro-banner API page](https://auro.alaskaair.com/components/auro/banner/api) for more information on how to use this component's slots and attributes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

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
