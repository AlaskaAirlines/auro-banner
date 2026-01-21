<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:docs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/README.md`
and copied to `./componentDocs/README.md` each time the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use Cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional Information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component Example Code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Banner

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/description.md) -->
<!-- The below content is automatically added from ./docs/partials/description.md -->
The `<auro-banner>` element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image, and details.

The details are broken down into `prefix`, `title`, `description`, `action`, and `disclaimer`.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./docs/partials/readmeAddlInfo.md -->
<!-- AURO-GENERATED-CONTENT This file is to be used for any additional content that should be included in the README.md which is specific to this component. -->
**Do not** use `<auro-banner>` as a primary source of information.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./docs/partials/useCases.md -->
Use the `<auro-banner>` element to:

* grab the attention of a user
* direct your user to another resource for further information
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-banner/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-banner/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-banner?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-banner)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-banner?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

```shell
$ npm i @aurodesignsystem/auro-banner
```

<!-- AURO-GENERATED-CONTENT:END -->

### Define Dependency in Project

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImportDescription.md) -->
Defining the dependency within each project that is using the `<auro-banner>` component.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImport.md) -->

```js
import "@aurodesignsystem/auro-banner";
```

<!-- AURO-GENERATED-CONTENT:END -->

### Use CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/bundleInstallDescription.md) -->
In cases where the project is not able to process JS assets, there are pre-processed assets available for use. Legacy browsers such as IE11 are no longer supported.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-banner@latest/+esm"></script>
```

<!-- AURO-GENERATED-CONTENT:END -->

## Basic Example

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->

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

## Custom Component Registration for Version Management

There are two key parts to every Auro component: the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element definition.
The class defines the component’s behavior, while the custom element registers it under a specific name so it can be used in HTML.

When you install the component as described on the `Install` page, the class is imported automatically, and the component is registered globally for you.

However, if you need to load multiple versions of the same component on a single page (for example, when two projects depend on different versions), you can manually register the class under a custom element name to avoid conflicts.

You can do this by importing only the component class and using the `register(name)` method with a unique name:

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/customRegistration.md) -->
<!-- The below content is automatically added from ./docs/partials/customRegistration.md -->

```js
// Import the class only
import { AuroBanner } from '@aurodesignsystem/auro-banner/class';

// Register with a custom name if desired
AuroBanner.register('custom-banner');
```

This will create a new custom element `<custom-banner>` that behaves exactly like `<auro-banner>`, allowing both sets of components to coexist on the same page without interfering with each other.
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./apiExamples/custom.html -->
  <custom-banner billboard>
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
  </custom-banner>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/custom.html -->

```html
<custom-banner billboard>
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
</custom-banner>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
