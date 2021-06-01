/* eslint-disable no-undef, sort-vars, no-implicit-coercion */

import { fixture, html, expect } from '@open-wc/testing';
import '../src/aurolabs-banner';

describe('<auro-banner>', () => {    

  it('<auro-banner> custom element is defined', async () => {
    const el = await !!customElements.get("auro-banner");

    await expect(el).to.be.true;
  });

  it('is accessible', async () => {
    const el = await fixture(html`
      <auro-banner ratio="1:3">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
        <img slot="graphic" src="/pic.png" alt="a test image" />
        <div slot="overlay">
        </div>        
      </auro-banner>
    `);

    await expect(el).to.be.accessible();
  });

  it('with flipped content', async () => {
    const el = await fixture(html`
      <auro-banner id="banner" flipped ratio="1:3">
        <img slot="graphic" src="/pic.png" alt="a test image" />
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
        <div slot="overlay">
        </div>        
      </auro-banner>
    `);

    await expect(el.getElementsByClassName('bannerWrapper')).to.not.be.null;
    await expect(el.outerHTML.indexOf('flipped') > 0).to.equal(true);

    await expect(el.shadowRoot.innerHTML).contains(`<div class="item content" style="flex-basis: 75%;">`);
    await expect(el.shadowRoot.innerHTML).contains(`<div class="item graphic" style="flex-basis: 25%;">`);
  });

  it('ratio defaults to 1:1 when none set', async () => {
    const el = await fixture(html`
      <auro-banner>
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
          <input type="button">CTA</input>
        </div>
        <img slot="graphic" src="/pic.png" alt="a test image" />
        <div slot="overlay">
        </div>        
      </auro-banner>
    `);

    await expect(el.getElementsByClassName('bannerWrapper')).to.not.be.null;

    await expect(el.shadowRoot.innerHTML).contains(`<div class="item content" style="flex-basis: 50%;">`);
    await expect(el.shadowRoot.innerHTML).contains(`<div class="item graphic" style="flex-basis: 50%;">`);
  });

  it('remove content slot when ratio 0:1', async () => {
    const el = await fixture(html`
      <auro-banner ratio="0:1">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
          <input type="button">CTA</input>
        </div>
        <img slot="graphic" src="/pic.png" alt="a test image" />
        <div slot="overlay">
        </div>        
      </auro-banner>
    `);

    await expect(el.getElementsByClassName('bannerWrapper')).to.not.be.null;
    await expect(el.getElementsByClassName('graphic')).to.not.be.null;
    await expect(el.getElementsByClassName('content')).to.be.null;
  });

  it('remove graphic slot when ratio 1:0', async () => {
    const el = await fixture(html`
      <auro-banner ratio="1:0">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
          <input type="button">CTA</input>
        </div>
        <img slot="graphic" src="/pic.png" alt="a test image" />
        <div slot="overlay">
        </div>        
      </auro-banner>
    `);

    await expect(el.getElementsByClassName('bannerWrapper')).to.not.be.null;
    await expect(el.getElementsByClassName('content')).to.not.be.null;
    await expect(el.getElementsByClassName('graphic')).to.be.null;
  });
});