/* eslint-disable no-undef, sort-vars, no-implicit-coercion */

import { fixture, html, expect } from '@open-wc/testing';
import '../index.js';

describe('auro-banner', () => {    
  // it('auro-banner is accessible', async () => {
  //   const el = await fixture(html`
  //     <auro-banner></auro-banner>
  //   `);

  //   await expect(el).to.be.accessible();
  // });

  it('auro-banner custom element is defined', async () => {
    const el = await !!customElements.get("auro-banner");

    await expect(el).to.be.true;
  });

  it('displayImage slot when roundedBorder attribute is not', async () => {
    const el = await fixture(html`
      <auro-banner></auro-banner>
    `);

    const displayImage = el.shadowRoot.querySelector('slot[name="displayImage"]');

    await expect(displayImage).to.not.be.null;
  });

  it('title slot is present with iconic attribute', async () => {
    const el = await fixture(html`
      <auro-banner iconic></auro-banner>
    `);

    const title = el.shadowRoot.querySelector('slot[name="title"]');

    await expect(title).to.not.be.null;
  });

  it('auro-header is present with hero attribute', async () => {
    const el = await fixture(html`
      <auro-banner hero></auro-banner>
    `);

    const header = el.shadowRoot.querySelector('[auro-header]');

    await expect(header).to.not.be.null;
  });

  it('auro-header is present with marquee attribute', async () => {
    const el = await fixture(html`
      <auro-banner marquee></auro-banner>
    `);

    const header = el.shadowRoot.querySelector('[auro-header]');

    await expect(header).to.not.be.null;
  });

  it('auro-header is present with roundedBorder attribute', async () => {
    const el = await fixture(html`
      <auro-banner roundedBorder></auro-banner>
    `);

    const header = el.shadowRoot.querySelector('[auro-header]');

    await expect(header).to.not.be.null;
  });
});
