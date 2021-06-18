# Banner

The `<auro-banner>` element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image and some type of value proposition.

The component is broken down into two main parts `content`, `graphic`. There are also a few optional boolean properties `overlay`, `roundedBorder`, `onBackground` `inset` and `flipped`. And two properties `overlayBg` and `ratio` that accept additional attributes.

## Component use cases

Use the `<auro-banner>` element to:

- grab the attention of a user
- direct your user to another resource for further information

## Do not...

Use `<auro-banner>` as the primary source of information.

## Default element

The default `<auro-banner>` element using the `content` and `graphic` slots for structured content placement.

<div class="exampleWrapper">
  <auro-banner>
    <auro-background slot="graphic" height="215px" heightsm="340px" background="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
    </auro-background>
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
  <auro-background slot="graphic" height="215px" heightsm="340px" background="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
  </auro-background>
  <div slot="content">
    <img src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png" alt="Random insert" />
    <p>We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.</p>
    <auro-hyperlink cta secondary href="/" target="_blank"> More info </auro-hyperlink>
  </div>
</auro-banner>
```

</auro-accordion>

## Flipped

The `<auro-banner flipped>` element with the `flipped` property will have the left side of the show the `graphic` and the right side will show the `content`. The image will still stack on top of the content on mobile.

<div class="exampleWrapper">
<auro-banner flipped>
    <auro-background slot="graphic" height="215px" heightsm="340px" background="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
    </auro-background>
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
<auro-banner flipped>
  <auro-background slot="content" height="215px" heightsm="340px" background="#b4cdd2 url(https://picsum.photos/id/430/1124/800) center bottom/cover no-repeat;">
  </auro-background>
  <div slot="graphic">
    <img src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png" alt="Random insert" />
    <p>We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.</p>
    <auro-hyperlink cta secondary href="/" target="_blank"> More info </auro-hyperlink>
  </div>
</auro-banner>
```

</auro-accordion>

## Ratio

The following example illustrates how to use the `ratio` property to control the width of the left and right side of the banner. The structure is `{leftRatio}:{rightRatio}` where the left and right ratios are the comparison of sizes between the two parts of the banner. In this example we set it to `2:3` so the left hand side takes up 40% of the page and the right takes up 60%. You could also set the ratio to `40:60` to get the same results.

<div class="exampleWrapper">
  <auro-banner ratio="2:3">
    <auro-background slot="graphic" height="215px" heightsm="300px" background="#b4cdd2 url(https://picsum.photos/id/42/1124/800) bottom right/cover no-repeat;"></auro-background>
    <div slot="content">
     <auro-header level="2" display="800" margin="both" size="none" style="color:#0b5575">Lorem ipsum dolor</auro-header>
    <div style="color:#0b5575; margin-bottom: 1rem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </div>
    <auro-hyperlink secondary cta href="#" target="_blank" >Reprehenderit</auro-hyperlink>
    </div>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner ratio="2:3">
  <auro-background
    slot="graphic"
    height="215px"
    heightsm="300px"
    background="#b4cdd2 url(https://picsum.photos/id/42/1124/800) bottom right/cover no-repeat;"
  ></auro-background>
  <div slot="content">
    <auro-header level="2" display="800" margin="both" size="none" style="color:#0b5575">Lorem ipsum dolor</auro-header>
    <div style="color:#0b5575; margin-bottom: 1rem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </div>
    <auro-hyperlink secondary cta href="#" target="_blank">Reprehenderit</auro-hyperlink>
  </div>
</auro-banner>
```

</auro-accordion>

### Zero Ratio

If the ratio of one of the sides is set to zero, for example `0:1`, the slot is removed.

<div class="exampleWrapper">
  <auro-background background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/T-Bright-Small.png) center bottom/cover" height="530px" backgroundsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Tbright-L.png) left center/cover" heightsm="302px">
    <auro-banner ratio="0:1" onbackground>
      <div slot="graphic" style="text-align:center; align-self: center">
        <img src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png">
        <div style="margin: 1rem auto;max-width: 500px;">
           With more than 1,000 destinations in 170 territories, oneworld fares let you travel the world with ease.
        </div>
        <auro-hyperlink href="https://www.oneworld.com/flight-search" target="_blank" cta="true" secondary="true" nav="true"><span>Search flights</span></auro-hyperlink>
      </div>
    </auro-banner>
  </auro-background>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-background
  background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/T-Bright-Small.png) center bottom/cover"
  height="530px"
  backgroundsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Tbright-L.png) left center/cover"
  heightsm="200px"
>
  <auro-banner ratio="0:1" onbackground>
    <div slot="graphic" style="text-align:center; align-self: center">
      <img src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png" />
      <div style="margin: 1rem auto;max-width: 500px;">With more than 1,000 destinations in 170 territories, oneworld fares let you travel the world with ease.</div>
      <auro-hyperlink href="https://www.oneworld.com/flight-search" target="_blank" cta="true" secondary="true" nav="true"><span>Search flights</span></auro-hyperlink>
    </div>
  </auro-banner>
</auro-background>
```

</auro-accordion>

## Overlay

The following example illustrates a `<auro-banner>` custom element using the `overlay` slot. You'll need to include the boolean `overlay` to display the overlay. This fixes an icon to the bottom of the banner.

<div class="exampleWrapper">
  <auro-banner overlay overlayBg="var(--auro-color-brand-neutral-400)">
      <auro-background slot="graphic" height="215px" heightsm="300px" backgroundsm="#b4cdd2 url(https://images.unsplash.com/photo-1500304624028-5b2641868ade?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80) right center/cover no-repeat;"></auro-background>
    <div slot="content">
      <auro-header level="2" display="800" margin="both" size="none" style="color:#0b5575">Lorem ipsum dolor</auro-header>
      <div style="color:#0b5575; margin-bottom: 1rem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
      </div>
      <auro-hyperlink primary cta href="#" target="_blank" >Reprehenderit</auro-hyperlink>
    </div>
    <span slot="overlay">
      <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
    </span>
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner overlay overlayBg="var(--auro-color-brand-neutral-400)">
  <auro-background
    slot="graphic"
    height="215px"
    heightsm="300px"
    backgroundsm="#b4cdd2 url(https://images.unsplash.com/photo-1500304624028-5b2641868ade?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80) right center/cover no-repeat;"
  ></auro-background>
  <div slot="content">
    <auro-header level="2" display="800" margin="both" size="none" style="color:#0b5575">Lorem ipsum dolor</auro-header>
    <div style="color:#0b5575; margin-bottom: 1rem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </div>
    <auro-hyperlink primary cta href="#" target="_blank">Reprehenderit</auro-hyperlink>
  </div>
  <span slot="overlay">
    <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
  </span>
</auro-banner>
```

</auro-accordion>

## OnBackground

The following example illustrates a `<auro-banner>` custom element wrapped in `<auro-background>` with only the `content` slot is filled. This examples uses `onbackground` to give additional padding inside the `<auro-background>`.

<div class="exampleWrapper">
  <auro-background height="475px" background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/UNCF_merch_1167x282.jpg) left bottom/cover" heightsm="255px">
      <auro-banner flipped ratio="2:3" onbackground>
        <div slot="content">
          <img src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/AS_UNCF_Lockup.svg">
          <div style="margin-bottom: 1rem">
          Our newest special aircraft is a symbol of Our Commitment to making Alaska a place where everyone feels like they belong.
          </div>
        <auro-hyperlink secondary="" cta="" href="/content/about-us/esg/people/uncf">Learn about Our Commitment</auro-hyperlink>
        </div>
      </auro-banner>
    </auro-background>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-background
  height="475px"
  background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/UNCF_merch_1167x282.jpg) left bottom/cover"
  heightsm="200px"
>
  <auro-banner flipped ratio="2:3" onbackground>
    <div slot="graphic">
      <img src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/AS_UNCF_Lockup.svg" />
      <div style="margin-bottom: 1rem">Our newest special aircraft is a symbol of Our Commitment to making Alaska a place where everyone feels like they belong.</div>
      <auro-hyperlink secondary="" cta="" href="/content/about-us/esg/people/uncf">Learn about Our Commitment</auro-hyperlink>
    </div>
  </auro-banner>
</auro-background>
```

</auro-accordion>

## Inset

This example showcases an `<auro-banner>` wrapped in `<auro-background background="var(--auro-color-brand-midnight-400)">` when using a background we can add additional padding to the `content` slot by applying the `inset` property.

<div class="exampleWrapper">
     <auro-background height="600px" background="var(--auro-color-brand-midnight-400)">
      <auro-banner inset>
        <div slot="content">
        <svg style="margin-bottom: .5rem" class="mileage-plan-logo" slot="title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195.08 76"><defs><style>.mileage-plan-logo {width:200px; height: auto}.cls-1{fill:#fff;}</style></defs><title>Alaska Mileage Plan </title><g id="Layer_2" data-name="Layer 2"><g id="logo"><g id="Alaska"><path class="cls-1" d="M70.61,1.71,54.17,29.3a20.06,20.06,0,0,0-2.9,8.47H44.83c.44-3.49,1.8-6.81,4.63-11.57L61,6.92c2.29-3.82,4.58-5.21,8.74-5.21Z"></path><path class="cls-1" d="M69.34,30.67c-1.2,1.11-3.53,2.79-5.49,2.85-1.35-.06-1.41-1.32-.5-3.07C66.82,23.8,70.47,20.28,75,20.29h.82Zm6.08-14.11c-8.34,0-13.46,4.85-18,15.48-1.13,2.67-1.78,6,2.07,5.93A17.6,17.6,0,0,0,68,35a9.3,9.3,0,0,0-.24,2.81h5.85a22,22,0,0,1,3-8.57L83.88,17A78.8,78.8,0,0,0,75.42,16.56Z"></path><path class="cls-1" d="M129.46,30.67c-1.2,1.11-3.53,2.79-5.49,2.85-1.36-.06-1.41-1.32-.5-3.07,3.47-6.65,7.12-10.17,11.62-10.16h.82Zm6.08-14.11c-8.34,0-13.46,4.85-18,15.48-1.13,2.67-1.78,6,2.07,5.93a17.63,17.63,0,0,0,8.45-3,9.3,9.3,0,0,0-.24,2.81h5.85a22,22,0,0,1,3-8.57L144,17A78.8,78.8,0,0,0,135.54,16.56Z"></path><path class="cls-1" d="M116.53,43.65h-1.91a5.53,5.53,0,0,1-5.33-4l-2.9-11L101,37.77H94.72l17.4-29.44c2.24-3.82,4.58-5.21,8.73-5.21h.64L109.94,22.63l8.66-6h7L111,26.72h0Z"></path><path class="cls-1" d="M59.13,0c-5.87,0-8.9,1.55-14.66,5.71L25,19.75H12.53c-3.61,0-6.5.15-8.77,2.29L.53,25l18.12-.7L0,37.77H8.06L27.14,24c3.7-.14,6.27-.24,6.29-.23,4.45-.12,6.91-4,6.91-4H33L48.44,8.63,37,27.19c-2.45,4.27-3.63,7.31-4,10.58h6.62a20.09,20.09,0,0,1,2.91-8.47l15.6-26c1.08-1.79,2-3.25,2-3.25Z"></path><path class="cls-1" d="M90.19,22.53c-.08.56.14.89,1.26,1.62l1.79,1.17a5,5,0,0,1,2.49,4.75C95.08,34.44,91.87,38,85.05,38a38.83,38.83,0,0,1-7.89-.69l2.65-4.46a29.83,29.83,0,0,0,5.72.64c2.57,0,3.59-1.15,3.73-2.1.09-.56-.18-1.21-1.4-2.05l-1.42-1c-2.27-1.62-2.86-2.9-2.57-4.91.57-3.87,5-6.82,11.25-6.82a59.78,59.78,0,0,1,6.4.36L99,21.14A56.25,56.25,0,0,0,93.27,21C91.48,21,90.32,21.63,90.19,22.53Z"></path></g><path class="cls-1" d="M140.43,33.92a2.07,2.07,0,1,1-2,2.07A2.07,2.07,0,0,1,140.43,33.92Zm0,3.73a1.66,1.66,0,1,0-1.6-1.66A1.61,1.61,0,0,0,140.43,37.65Zm-.25-.56h-.43V34.85h.78a.7.7,0,0,1,.27,1.37l.5.87h-.48l-.48-.83h-.16Zm.29-1.2c.25,0,.39-.13.39-.33s-.14-.35-.39-.35h-.29v.68Z"></path><path class="cls-1" d="M40.37,69.28V51.21L32.44,69.28H29.5L21.64,51.21V69.28H18.47V46.07h4.35L31,65l8.24-18.89h4.29V69.28Z"></path><path class="cls-1" d="M49.86,45.35a2.21,2.21,0,1,1-2.19,2.23A2.2,2.2,0,0,1,49.86,45.35ZM48.35,69.28V53.54h3V69.28Z"></path><path class="cls-1" d="M56.2,69.28V45.58h3.08v23.7Z"></path><path class="cls-1" d="M77.33,64.8a7.13,7.13,0,0,1-7.07,5c-4.22,0-7.92-3.07-7.92-8.41,0-4.94,3.57-8.31,7.53-8.31,4.85,0,7.56,3.33,7.56,8.25a7.58,7.58,0,0,1-.06,1H65.52a4.67,4.67,0,0,0,4.74,4.78,4.29,4.29,0,0,0,4.42-3.18Zm-3.11-5a4,4,0,0,0-4.32-4,4.24,4.24,0,0,0-4.29,4Z"></path><path class="cls-1" d="M85.2,60.28l4.26-.62c1-.13,1.21-.62,1.21-1.18,0-1.54-1-2.82-3.4-2.82a3.35,3.35,0,0,0-3.57,3.18l-3-.69c.33-3,3-5.1,6.45-5.1,4.72,0,6.55,2.68,6.55,5.76V66.7a14.15,14.15,0,0,0,.2,2.58h-3a12.09,12.09,0,0,1-.16-2.12,5.75,5.75,0,0,1-5.07,2.61c-3.21,0-5.28-2.22-5.28-4.71C80.42,62.25,82.49,60.67,85.2,60.28Zm5.47,2.26v-.72l-4.81.72a2.36,2.36,0,0,0-2.29,2.36,2.38,2.38,0,0,0,2.55,2.29C88.64,67.19,90.67,66,90.67,62.54Z"></path><path class="cls-1" d="M99.77,69.45a4.19,4.19,0,0,0,4.29,3.86c3.31,0,4.81-1.7,4.81-5.11V65.94a5.24,5.24,0,0,1-4.81,2.59c-4.19,0-7.23-3.18-7.23-7.63,0-4.25,2.91-7.66,7.23-7.66,2.43,0,4.06.92,4.85,2.49V53.54h3V68.11c0,4-2,7.89-7.89,7.89-3.93,0-6.87-2.49-7.27-5.87ZM109,60.9c0-3-1.84-5-4.49-5s-4.55,2-4.55,5,1.77,5,4.55,5S109,64,109,60.9Z"></path><path class="cls-1" d="M130.33,64.8a7.14,7.14,0,0,1-7.07,5c-4.23,0-7.92-3.07-7.92-8.41,0-4.94,3.56-8.31,7.53-8.31,4.84,0,7.56,3.33,7.56,8.25a5.91,5.91,0,0,1-.07,1H118.51a4.69,4.69,0,0,0,4.75,4.78,4.29,4.29,0,0,0,4.42-3.18Zm-3.11-5a4,4,0,0,0-4.32-4,4.24,4.24,0,0,0-4.29,4Z"></path><path class="cls-1" d="M141.8,59.79v9.49h-3.21V46.07H147c4.29,0,7.17,3,7.17,6.88s-2.88,6.84-7.17,6.84Zm4.65-2.88c2.78,0,4.49-1.54,4.49-3.93s-1.71-4-4.49-4H141.8v8Z"></path><path class="cls-1" d="M157.08,69.28V45.58h3.08v23.7Z"></path><path class="cls-1" d="M168.77,60.28l4.25-.62c.95-.13,1.21-.62,1.21-1.18,0-1.54-1-2.82-3.4-2.82a3.35,3.35,0,0,0-3.57,3.18l-2.95-.69c.33-3,3.05-5.1,6.45-5.1,4.72,0,6.55,2.68,6.55,5.76V66.7a14.15,14.15,0,0,0,.2,2.58h-3a12.09,12.09,0,0,1-.16-2.12,5.75,5.75,0,0,1-5.07,2.61c-3.21,0-5.27-2.22-5.27-4.71C164,62.25,166.05,60.67,168.77,60.28Zm5.46,2.26v-.72l-4.81.72a2.36,2.36,0,0,0-2.29,2.36,2.38,2.38,0,0,0,2.55,2.29C172.2,67.19,174.23,66,174.23,62.54Z"></path><path class="cls-1" d="M184.67,69.28H181.6V53.54h3v2.25a5.38,5.38,0,0,1,4.84-2.71c3.77,0,5.63,2.71,5.63,6.22v10H192V59.82c0-2.19-.92-4-3.67-4-2.42,0-3.67,1.93-3.67,4.32Z"></path></g></g></svg>
          <div style="color:white; margin-bottom: 1rem">
            Mileage Plan is Alaska's loyalty program. Travel with us, <b>one</b>world Alliance members and our Global Partners to over 1,000 destinations around the world.
          </div>
          <auro-hyperlink href="https://www.alaskaair.com/account/join-mileage-plan?int=AS_ow-banner_MPJoin_-prodID:MPEnroll" cta="true" secondary="true" nav="true"><span>Join Mileage Plan</span></auro-hyperlink>
        </div>
        <div slot="graphic">
          <auro-background height="250px" heightsm="430px" heightmd="358px" heightlg="335px" background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/MP-L.png) bottom center/cover"></auro-background>
        </div>
      </auro-banner>
  </auro-background>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-background height="600px" background="var(--auro-color-brand-midnight-400)">
  <auro-banner inset>
    <div slot="content">
      <svg style="margin-bottom: .5rem" class="mileage-plan-logo" slot="title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195.08 76">
        <defs>
          <style>
            .mileage-plan-logo {
              width: 200px;
              height: auto;
            }
            .cls-1 {
              fill: #fff;
            }
          </style>
        </defs>
        <title>Alaska Mileage Plan</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="logo">
            <g id="Alaska">
              <path class="cls-1" d="M70.61,1.71,54.17,29.3a20.06,20.06,0,0,0-2.9,8.47H44.83c.44-3.49,1.8-6.81,4.63-11.57L61,6.92c2.29-3.82,4.58-5.21,8.74-5.21Z"></path>
              <path
                class="cls-1"
                d="M69.34,30.67c-1.2,1.11-3.53,2.79-5.49,2.85-1.35-.06-1.41-1.32-.5-3.07C66.82,23.8,70.47,20.28,75,20.29h.82Zm6.08-14.11c-8.34,0-13.46,4.85-18,15.48-1.13,2.67-1.78,6,2.07,5.93A17.6,17.6,0,0,0,68,35a9.3,9.3,0,0,0-.24,2.81h5.85a22,22,0,0,1,3-8.57L83.88,17A78.8,78.8,0,0,0,75.42,16.56Z"
              ></path>
              <path
                class="cls-1"
                d="M129.46,30.67c-1.2,1.11-3.53,2.79-5.49,2.85-1.36-.06-1.41-1.32-.5-3.07,3.47-6.65,7.12-10.17,11.62-10.16h.82Zm6.08-14.11c-8.34,0-13.46,4.85-18,15.48-1.13,2.67-1.78,6,2.07,5.93a17.63,17.63,0,0,0,8.45-3,9.3,9.3,0,0,0-.24,2.81h5.85a22,22,0,0,1,3-8.57L144,17A78.8,78.8,0,0,0,135.54,16.56Z"
              ></path>
              <path
                class="cls-1"
                d="M116.53,43.65h-1.91a5.53,5.53,0,0,1-5.33-4l-2.9-11L101,37.77H94.72l17.4-29.44c2.24-3.82,4.58-5.21,8.73-5.21h.64L109.94,22.63l8.66-6h7L111,26.72h0Z"
              ></path>
              <path
                class="cls-1"
                d="M59.13,0c-5.87,0-8.9,1.55-14.66,5.71L25,19.75H12.53c-3.61,0-6.5.15-8.77,2.29L.53,25l18.12-.7L0,37.77H8.06L27.14,24c3.7-.14,6.27-.24,6.29-.23,4.45-.12,6.91-4,6.91-4H33L48.44,8.63,37,27.19c-2.45,4.27-3.63,7.31-4,10.58h6.62a20.09,20.09,0,0,1,2.91-8.47l15.6-26c1.08-1.79,2-3.25,2-3.25Z"
              ></path>
              <path
                class="cls-1"
                d="M90.19,22.53c-.08.56.14.89,1.26,1.62l1.79,1.17a5,5,0,0,1,2.49,4.75C95.08,34.44,91.87,38,85.05,38a38.83,38.83,0,0,1-7.89-.69l2.65-4.46a29.83,29.83,0,0,0,5.72.64c2.57,0,3.59-1.15,3.73-2.1.09-.56-.18-1.21-1.4-2.05l-1.42-1c-2.27-1.62-2.86-2.9-2.57-4.91.57-3.87,5-6.82,11.25-6.82a59.78,59.78,0,0,1,6.4.36L99,21.14A56.25,56.25,0,0,0,93.27,21C91.48,21,90.32,21.63,90.19,22.53Z"
              ></path>
            </g>
            <path
              class="cls-1"
              d="M140.43,33.92a2.07,2.07,0,1,1-2,2.07A2.07,2.07,0,0,1,140.43,33.92Zm0,3.73a1.66,1.66,0,1,0-1.6-1.66A1.61,1.61,0,0,0,140.43,37.65Zm-.25-.56h-.43V34.85h.78a.7.7,0,0,1,.27,1.37l.5.87h-.48l-.48-.83h-.16Zm.29-1.2c.25,0,.39-.13.39-.33s-.14-.35-.39-.35h-.29v.68Z"
            ></path>
            <path class="cls-1" d="M40.37,69.28V51.21L32.44,69.28H29.5L21.64,51.21V69.28H18.47V46.07h4.35L31,65l8.24-18.89h4.29V69.28Z"></path>
            <path class="cls-1" d="M49.86,45.35a2.21,2.21,0,1,1-2.19,2.23A2.2,2.2,0,0,1,49.86,45.35ZM48.35,69.28V53.54h3V69.28Z"></path>
            <path class="cls-1" d="M56.2,69.28V45.58h3.08v23.7Z"></path>
            <path
              class="cls-1"
              d="M77.33,64.8a7.13,7.13,0,0,1-7.07,5c-4.22,0-7.92-3.07-7.92-8.41,0-4.94,3.57-8.31,7.53-8.31,4.85,0,7.56,3.33,7.56,8.25a7.58,7.58,0,0,1-.06,1H65.52a4.67,4.67,0,0,0,4.74,4.78,4.29,4.29,0,0,0,4.42-3.18Zm-3.11-5a4,4,0,0,0-4.32-4,4.24,4.24,0,0,0-4.29,4Z"
            ></path>
            <path
              class="cls-1"
              d="M85.2,60.28l4.26-.62c1-.13,1.21-.62,1.21-1.18,0-1.54-1-2.82-3.4-2.82a3.35,3.35,0,0,0-3.57,3.18l-3-.69c.33-3,3-5.1,6.45-5.1,4.72,0,6.55,2.68,6.55,5.76V66.7a14.15,14.15,0,0,0,.2,2.58h-3a12.09,12.09,0,0,1-.16-2.12,5.75,5.75,0,0,1-5.07,2.61c-3.21,0-5.28-2.22-5.28-4.71C80.42,62.25,82.49,60.67,85.2,60.28Zm5.47,2.26v-.72l-4.81.72a2.36,2.36,0,0,0-2.29,2.36,2.38,2.38,0,0,0,2.55,2.29C88.64,67.19,90.67,66,90.67,62.54Z"
            ></path>
            <path
              class="cls-1"
              d="M99.77,69.45a4.19,4.19,0,0,0,4.29,3.86c3.31,0,4.81-1.7,4.81-5.11V65.94a5.24,5.24,0,0,1-4.81,2.59c-4.19,0-7.23-3.18-7.23-7.63,0-4.25,2.91-7.66,7.23-7.66,2.43,0,4.06.92,4.85,2.49V53.54h3V68.11c0,4-2,7.89-7.89,7.89-3.93,0-6.87-2.49-7.27-5.87ZM109,60.9c0-3-1.84-5-4.49-5s-4.55,2-4.55,5,1.77,5,4.55,5S109,64,109,60.9Z"
            ></path>
            <path
              class="cls-1"
              d="M130.33,64.8a7.14,7.14,0,0,1-7.07,5c-4.23,0-7.92-3.07-7.92-8.41,0-4.94,3.56-8.31,7.53-8.31,4.84,0,7.56,3.33,7.56,8.25a5.91,5.91,0,0,1-.07,1H118.51a4.69,4.69,0,0,0,4.75,4.78,4.29,4.29,0,0,0,4.42-3.18Zm-3.11-5a4,4,0,0,0-4.32-4,4.24,4.24,0,0,0-4.29,4Z"
            ></path>
            <path
              class="cls-1"
              d="M141.8,59.79v9.49h-3.21V46.07H147c4.29,0,7.17,3,7.17,6.88s-2.88,6.84-7.17,6.84Zm4.65-2.88c2.78,0,4.49-1.54,4.49-3.93s-1.71-4-4.49-4H141.8v8Z"
            ></path>
            <path class="cls-1" d="M157.08,69.28V45.58h3.08v23.7Z"></path>
            <path
              class="cls-1"
              d="M168.77,60.28l4.25-.62c.95-.13,1.21-.62,1.21-1.18,0-1.54-1-2.82-3.4-2.82a3.35,3.35,0,0,0-3.57,3.18l-2.95-.69c.33-3,3.05-5.1,6.45-5.1,4.72,0,6.55,2.68,6.55,5.76V66.7a14.15,14.15,0,0,0,.2,2.58h-3a12.09,12.09,0,0,1-.16-2.12,5.75,5.75,0,0,1-5.07,2.61c-3.21,0-5.27-2.22-5.27-4.71C164,62.25,166.05,60.67,168.77,60.28Zm5.46,2.26v-.72l-4.81.72a2.36,2.36,0,0,0-2.29,2.36,2.38,2.38,0,0,0,2.55,2.29C172.2,67.19,174.23,66,174.23,62.54Z"
            ></path>
            <path
              class="cls-1"
              d="M184.67,69.28H181.6V53.54h3v2.25a5.38,5.38,0,0,1,4.84-2.71c3.77,0,5.63,2.71,5.63,6.22v10H192V59.82c0-2.19-.92-4-3.67-4-2.42,0-3.67,1.93-3.67,4.32Z"
            ></path>
          </g>
        </g>
      </svg>
      <div style="color:white; margin-bottom: 1rem">
        Mileage Plan is Alaska's loyalty program. Travel with us, <b>one</b>world Alliance members and our Global Partners to over 1,000 destinations around the world.
      </div>
      <auro-hyperlink href="https://www.alaskaair.com/account/join-mileage-plan?int=AS_ow-banner_MPJoin_-prodID:MPEnroll" cta="true" secondary="true" nav="true"
        ><span>Join Mileage Plan</span></auro-hyperlink
      >
    </div>
    <div slot="graphic">
      <auro-background
        height="250px"
        heightsm="430px"
        heightmd="358px"
        heightlg="335px"
        background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/MP-L.png) bottom center/cover"
      ></auro-background>
    </div>
  </auro-banner>
</auro-background>
```

</auro-accordion>

## RoundedBorder

The following example illustrates a `<auro-banner>` custom element with the `roundedBorder` variant style.

<div class="exampleWrapper">
  <auro-banner roundedBorder flipped ratio="2:4">
    <div slot="content">
       <auro-header level="2" display="800" margin="both" size="none" style="color:#0b5575">Lorem ipsum dolor</auro-header>
    <div style="color:#0b5575; margin-bottom: 1rem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </div>
    <auro-hyperlink secondary cta href="#" target="_blank" >Reprehenderit</auro-hyperlink>
    </div>
      <img slot="graphic"src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" alt="" />
  </auro-banner>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
  <auro-banner roundedBorder flipped ratio="2:4">
    <div slot="content">
       <auro-header level="2" display="800" margin="both" size="none" style="color:#0b5575">Lorem ipsum dolor</auro-header>
    <div style="color:#0b5575; margin-bottom: 1rem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </div>
    <auro-hyperlink secondary cta href="#" target="_blank" >Reprehenderit</auro-hyperlink>
    </div>
      <img slot="graphic"src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" alt="" />
  </auro-banner>
  ```

</auro-accordion>

## Additional Examples

The examples below showcase current or former examples of how the `<auro-banner>` is being used in production to give further context on how to use the it.

### Credit card offer

The following examples showcases the `<auro-banner>` in a typical merchandising situation using `<auro-header>`, `<auro-icon>`, `<auro-hyperlink>` along with basic `html` markup. This one has a custom `ratio` of `8:17`.

  <auro-banner flipped ratio="8:17">
      <img slot="graphic" src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" alt="" />
    <div slot="content">
     <auro-header level="6" display="100" margin="both" size="none"><strong>LIMITED TIME ONLINE OFFER</strong></auro-header>
     <auro-header level="2" display="700" margin="both" size="none" style="color:#0074CA"><strong style="font-size: 2.4rem;">BUY ONE</strong> ticket<auro-icon  category="terminal"  name="plane-side-fill"
  customColor  style="color: #01426A; margin-left:1rem"></auro-icon></auro-header>
     <auro-header level="2" display="700" margin="both" size="none" style="color:#00805D"><strong style="font-size: 2.4rem;">GET ONE</strong> for just the taxes & fees</auro-header>
    <div style="margin-bottom: .5rem">
      Plus, get a 40,000 bonus mile offer when you apply here.
    </div>
    <auro-hyperlink secondary cta href="#" target="_blank" >Apply now</auro-hyperlink>
    </div>
  </auro-banner>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner ratio="8:17">
  <img slot="content" src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" alt="" />
  <div slot="graphic">
    <auro-header level="6" display="100" margin="both" size="none"><strong>LIMITED TIME ONLINE OFFER</strong></auro-header>
    <auro-header level="2" display="700" margin="both" size="none" style="color:#0074CA"
      ><strong style="font-size: 2.4rem;">BUY ONE</strong> ticket<auro-icon
        category="terminal"
        name="plane-side-fill"
        customColor
        style="color: #01426A; margin-left:1rem"
      ></auro-icon
    ></auro-header>
    <auro-header level="2" display="700" margin="both" size="none" style="color:#00805D"><strong style="font-size: 2.4rem;">GET ONE</strong> for just the taxes & fees</auro-header>
    <div style="margin-bottom: .5rem">Plus, get a 40,000 bonus mile offer when you apply here.</div>
    <auro-hyperlink secondary cta href="#" target="_blank">Apply now</auro-hyperlink>
  </div>
</auro-banner>
```

</auro-accordion>

### Card Benefits

This example combines a collection of `<auro-icon>` in a list showcasing the many benefits of our card.
<br>

 <auro-banner ratio="6:4">
  <auro-background
    slot="graphic"
    height="270px"
    heightsm="422px"
    heightmd="335px"
    background="url(https://images.unsplash.com/photo-1585541115073-0fd04faa7142?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80) center center/cover"
  ><div class="imageWrapper">
    <style>
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
        /* if you want the CC to overlap the bottom on mobile otherwise delete the line below */
        position: relative;
        top: 30px;
      }
      @media (min-width:660px) {
        .imageWrapper {
          /* use the same value as heightsm */
          min-height: 422px;
          /* if you want the CC to overlap the bottom on mobile but not on other screen sizes otherwise delete the line below */
          margin-bottom:0;
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
        .imageWrapper {min-height: 355px}
      }
       @media (min-width:1232px) {
      /* use the same value as heightlg */
        .imageWrapper {min-height: 355px}
      }
    </style>
    <img src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature">
    </div>
  </auro-background>
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

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-background
    slot="graphic"
    height="250px"
    heightsm="422px"
    heightmd="335px"
    background="url(https://images.unsplash.com/photo-1585541115073-0fd04faa7142?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80) center center/cover"
  ><div class="imageWrapper">
    <style>
       .imageWrapper {
         display:flex;
         align-items: center;
          flex-direction:column;
          /* use the same value as height */
         min-height: 250px;
         /* if you want the CC to overlap the bottom on mobile otherwise delete the line below */
         justify-content: flex-end; /*adjust this as needed */
         margin-bottom:30px;
      }
      .imageWrapper img {
        height: auto;
        max-width: 180px;
        /* if you want the CC to overlap the bottom on mobile otherwise delete the line below */
        position: relative;
        top: 30px;
      }
      @media (min-width:660px) {
        .imageWrapper {
          /* use the same value as heightsm */
          min-height: 422px;
          /* if you want the CC to overlap the bottom on mobile but not on other screen sizes otherwise delete the line below */
          margin-bottom:0;
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
        .imageWrapper {min-height: 355px}
      }
       @media (min-width:1232px) {
      /* use the same value as heightlg */
        .imageWrapper {min-height: 355px}
      }
    </style>
    <img src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature">
    </div>
  </auro-background>
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

The graphic slot can also include `<auro-hyperlink>` as well as an image, like in this example.

<auro-banner flipped ratio="4:6">

  <div slot="graphic" style="text-align:center; position:relative">
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

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner flipped ratio="4:6">

  <div slot="graphic" style="text-align:center; position:relative">
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

<section class="flex-container">
  <div class="flex-column col1"><ul class="PageNav"><li><auro-hyperlink relative="true" href="#MemberAirlines">Members</auro-hyperlink></li><li><auro-hyperlink relative="true" href="#Benefits">Benefits</auro-hyperlink></li><li><auro-hyperlink relative="true" href="#RoundtheWorldfares">Round the World fares</auro-hyperlink></li><li><auro-hyperlink relative="true" href="#SeemlessTravel">Seamless travel</auro-hyperlink></li></ul></div>
  <div class="flex-column col2">
    <auro-banner>
      <div slot="content">
        <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="300" margin="top" size="none"><b>one</b>world<sup>&reg;</sup> Alliance</span></auro-header>
        <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="600" margin="top" size="none" class="title">14 global airlines.<br>One bright alliance.</auro-header>
        <div style="margin-bottom: 1rem">
          Say hi to <b>one</b>world, an alliance of the world’s leading airlines providing the highest level of service and convenience across more than 1,000 destinations worldwide.
        </div>
        <auro-hyperlink slot="action" href="https://www.oneworld.com/" target="_blank" cta="true" secondary="true" nav="true">About <strong>one</strong>world</auro-hyperlink>
      </div>
      <div slot="graphic">
        <auro-background height="250px" heightsm="422px" heightmd="335px" background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Hero-S.png) center center/cover" backgroundsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Hero-L.jpg) bottom center/cover"></auro-background>
      </div>
    </auro-banner>
  </div>
</section>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
    <auro-banner>
      <div slot="content">
        <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="300" margin="top" size="none"><b>one</b>world<sup>&reg;</sup> Alliance</span></auro-header>
        <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="600" margin="top" size="none" class="title">14 global airlines.<br>One bright alliance.</auro-header>
        <div style="margin-bottom: 1rem">
          Say hi to <b>one</b>world, an alliance of the world’s leading airlines providing the highest level of service and convenience across more than 1,000 destinations worldwide.
        </div>
        <auro-hyperlink slot="action" href="https://www.oneworld.com/" target="_blank" cta="true" secondary="true" nav="true">About <strong>one</strong>world</auro-hyperlink>
      </div>
      <div slot="graphic">
        <auro-background height="250px" heightsm="422px" heightmd="335px" background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Hero-S.png) center center/cover" backgroundsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Hero-L.jpg) bottom center/cover"></auro-background>
      </div>
    </auro-banner>
```

</auro-accordion>

##### Sustainability hub page

<section class="flex-container">
  <div class="flex-column col1"><ul class="PageNav"><li><auro-hyperlink relative="true" href="#">Planet</auro-hyperlink></li><li><auro-hyperlink relative="true" href="#">People</auro-hyperlink></li><li><auro-hyperlink relative="true" href="#">Accountability</auro-hyperlink></li></ul></div>
  <div class="flex-column col2">
    <auro-banner>
      <div slot="content">
      <img src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Alaska-Lift-Lockup-reverse-Sm.svg" alt="Alaska Airlines and Lift logos">
        <auro-header level="2" display="600" color="var(--auro-color-background-darker)">We make flying matter.</auro-header>
        <div style="margin-bottom: 1rem">
         LIFT is what we call our work to run our company with care, focusing on social and environmental impact. Join us as we take action on initiatives to support our people and our planet.
        </div>
       <auro-hyperlink secondary="" cta="" href="https://flysustainably.com/wp-content/uploads/2021/05/CR_032921_2021-Lift-Report_Final-1.pdf" target="_blank">View 2020 report</auro-hyperlink>
      </div>
      <div slot="graphic">
        <auro-background height="250px" heightsm="422px" heightmd="335px" background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Wing_500x500.png) center center/cover"></auro-background>
      </div>
    </auro-banner>
  </div>
</section>

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

   <auro-banner ratio="1:1">
      <div slot="content">
        <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="600" margin="top" size="none" class="title">Relax before the runway.</auro-header>
        <div style="margin-bottom: 1rem">
         Find some peace and quiet at one of more than 650 <b>one</b>world airport lounges worldwide. Get work done between flights using fast Wi-Fi, grab a quick bite or freshen up with a warm shower. Go ahead, you deserve it.
        </div>
        <auro-hyperlink href="https://www.oneworld.com/airport-lounges?location=SEA" target="_blank" cta="true" secondary="true" nav="true"><span>Explore lounges</span></auro-hyperlink>
      </div>
      <div slot="graphic">
        <auro-background height="250px" heightsm="422px" heightmd="335px" background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Lounge-S.png) center center/cover" backgroundsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Lounge-L.png) bottom center/cover"></auro-background>
      </div>
    </auro-banner>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner ratio="1:1">
  <div slot="content">
    <auro-header level="2" color="var(--auro-color-brand-midnight-400)" display="600" margin="top" size="none" class="title">Relax before the runway.</auro-header>
    <div style="margin-bottom: 1rem">
      Find some peace and quiet at one of more than 650 <b>one</b>world airport lounges worldwide. Get work done between flights using fast Wi-Fi, grab a quick bite or freshen up
      with a warm shower. Go ahead, you deserve it.
    </div>
    <auro-hyperlink href="https://www.oneworld.com/airport-lounges?location=SEA" target="_blank" cta="true" secondary="true" nav="true"
      ><span>Explore lounges</span></auro-hyperlink
    >
  </div>
  <div slot="graphic">
    <auro-background
      height="250px"
      heightsm="422px"
      heightmd="335px"
      background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Lounge-S.png) center center/cover"
      backgroundsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/oneworld-hub/Lounge-L.png) bottom center/cover"
    ></auro-background>
  </div>
</auro-banner>
```

</auro-accordion>

### Alternating placements

The `<auro-banner>` can showcase important benefits or features of a product and still create some visual interest by using the `flipped` property.

<auro-banner flipped>
  <auro-background slot="graphic" height="240px" heightsm="240px" background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Planet_hub_567x282.png) center center/cover no-repeat" backgroundsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Planet_hub_567x282.png) center center/contain no-repeat"></auro-background>
  <div slot="content">
  <auro-header level="4" display="500" margin="both" size="none" color="var(--auro-color-background-darker)">We fly greener.</auro-header>
    <p>
      We work every day to reduce our environmental impact, including on climate change.
    </p>
    <auro-hyperlink href="https://www.alaskaair.com/content/about-us/esg/planet" target="|Custom" cta="true" secondary="true">View environmental initiatives</auro-hyperlink>
  </div>
</auro-banner>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner flipped>
  <auro-background
    slot="graphic"
    height="240px" heightsm="240px"
    background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/Planet_hub_567x282.png) center center/contain no-repeat"
  ></auro-background>
  <div slot="content">
    <auro-header level="4" display="500" margin="both" size="none" color="var(--auro-color-background-darker)">We fly greener.</auro-header>
    <p>We work every day to reduce our environmental impact, including on climate change.</p>
    <auro-hyperlink href="https://www.alaskaair.com/content/about-us/esg/planet" target="|Custom" cta="true" secondary="true">View environmental initiatives</auro-hyperlink>
  </div>
</auro-banner>
```

</auro-accordion>

<auro-banner>
  <auro-background slot="graphic" height="240px" heightsm="240px" background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/People_hub_567x282.png) center center/cover no-repeat" backgroundsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/People_hub_567x282.png) center center/contain no-repeat"></auro-background>
  <div slot="content">
  <auro-header level="4" display="500" margin="both" size="none" color="var(--auro-color-background-darker)">We’re all about the people.</auro-header>
    <p>
      We care deeply about providing stellar service to our guests, empowering our employees, creating jobs, giving back, and being a place in which everyone feels they can belong. We’re about treating people with respect and valuing their individual gifts.
    </p>
    <auro-hyperlink href="https://www.alaskaair.com/content/about-us/esg/people" target="|Custom" cta="true" secondary="true">View social initiatives</auro-hyperlink>
  </div>
</auro-banner>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-banner>
  <auro-background
    slot="graphic"
    height="240px" heightsm="240px"
    background="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/People_hub_567x282.png) center center/cover no-repeat"
    backgroundsm="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/pages/esg-update/People_hub_567x282.png) center center/contain no-repeat"
  ></auro-background>
  <div slot="content">
    <auro-header level="4" display="500" margin="both" size="none" color="var(--auro-color-background-darker)">We’re all about the people.</auro-header>
    <p>
      We care deeply about providing stellar service to our guests, empowering our employees, creating jobs, giving back, and being a place in which everyone feels they can belong.
      We’re about treating people with respect and valuing their individual gifts.
    </p>
    <auro-hyperlink href="https://www.alaskaair.com/content/about-us/esg/people" target="|Custom" cta="true" secondary="true">View social initiatives</auro-hyperlink>
  </div>
</auro-banner>
```

</auro-accordion>
