import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-banner';

describe('<auro-banner>', () => {

  it('<auro-banner> custom element is defined', async () => {
    const el = await !!customElements.get("auro-banner");

    await expect(el).to.be.true;
  });

  it('is accessible', async () => {
    const el = await fixture(html`
      <auro-banner ratio="1:3" graphic="url(/pic.png)">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
        <div slot="overlay">
        </div>
      </auro-banner>
    `);

    await expect(el).to.be.accessible();
  });

  it('with flipped content', async () => {
    const el = await fixture(html`
      <auro-banner graphic="url(/pic.png)" flipped>
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
  });

  it('with default ratio', async () => {
    const el = await fixture(html`
      <auro-banner graphic="url(/pic.png)">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
        <div slot="overlay">
        </div>
      </auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`<div class="content" style="flex-basis: 50%; padding: var(--auro-size-none);">`);
    await expect(el.shadowRoot.innerHTML).contains(`<div class="graphicContainer" style="flex-basis: 50%">`);
  });

  it('with custom ratio', async () => {
    const el = await fixture(html`
      <auro-banner graphic="url(/pic.png)" ratio="1:3">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
        <div slot="overlay">
        </div>
      </auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`<div class="content" style="flex-basis: 25%; padding: var(--auro-size-none);">`);
    await expect(el.shadowRoot.innerHTML).contains(`<div class="graphicContainer" style="flex-basis: 75%">`);
  });

  it('with default graphic', async () => {
    const el = await fixture(html`
      <auro-banner graphic="url(/pic.png)">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
        <div slot="overlay">
        </div>
      </auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`<auro-background height="100%" bg="url(/pic.png)" bgsm="url(/pic.png)" bgmd="url(/pic.png)" inset="none">`);
  });

  it('with medium graphic', async () => {
    const el = await fixture(html`
      <auro-banner graphicMd="url(/pic.png)">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
        <div slot="overlay">
        </div>
      </auro-banner>
    `);


    await expect(el.shadowRoot.innerHTML).contains(`<auro-background height="100%" bg="undefined" bgsm="undefined" bgmd="url(/pic.png)" inset="none">`);
  });

  it('with small graphic', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
        <div slot="overlay">
        </div>
      </auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`<auro-background height="100%" bg="undefined" bgsm="url(/pic.png)" bgmd="url(/pic.png)" inset="none">`);
  });

  it('with graphic content', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)">
        <div slot="graphicContent">
          <p>This is some graphic content</p>
        </div>
        <div slot="overlay">
        </div>
      </auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).to.not.contain(`<div class="content"`);
    await expect(el.shadowRoot.innerHTML).to.contain(`<div class="graphicContentContainer"`);
  });

  it('with graphic content but no graphic', async () => {
    const el = await fixture(html`
      <auro-banner>
        <div slot="graphicContent">
          <p>This is some graphic content</p>
        </div>
        <div slot="overlay">
        </div>
      </auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).to.not.contain(`<div class="content"`);
    await expect(el.shadowRoot.innerHTML).to.contain(`<div class="graphicContentContainer"`);

  });

  it('with no graphic or graphic content', async () => {
    const el = await fixture(html`
      <auro-banner>
        <div slot="content">
          <p>This is some graphic content</p>
        </div>
      </auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).to.contain(`<div class="content"`);
    await expect(el.shadowRoot.innerHTML).to.not.contain(`<div class="graphicContentContainer"`);
  });

  it('with overlay content', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)" overlay>
        <div slot="graphicContent">
          <p>This is some graphic content</p>
        </div>
        <div slot="overlay">
        </div>
      </auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`<div class="overlayContainer">`);
  });

  it('without overlay content', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)">
        <div slot="graphicContent">
          <p>This is some graphic content</p>
        </div>
      </auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).to.not.contain(`<div class="overlayContainer">`);
  });

  it('with pre-defined inset value', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)" inset="md"></auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).to.contain(`<div class="bannerWrapper" style="padding: var(--auro-size-md)">`);
  });

  it('with custom inset value', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)" inset="1rem"></auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).to.contain(`<div class="bannerWrapper" style="padding: 1rem">`);
  });

  it('with no inset value', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)">
        <div slot="content">
          <p>Enjoy your flight to Bannerland!</p>
        </div>
      </auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).to.contain(`<div class="content" style="flex-basis: 50%; padding: var(--auro-size-none);">`);
    await expect(el.shadowRoot.innerHTML).to.contain(`<auro-background height="100%" bg="undefined" bgsm="url(/pic.png)" bgmd="url(/pic.png)" inset="none">`);
  });

  it('with pre-defined inset value', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)" insetContent="md">
        <div slot="content">
          <p>Enjoy your flight to Bannerland!</p>
        </div>
      </auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).to.contain(`<div class="content" style="flex-basis: 50%; padding: var(--auro-size-md);">`);
    await expect(el.shadowRoot.innerHTML).to.contain(`<auro-background height="100%" bg="undefined" bgsm="url(/pic.png)" bgmd="url(/pic.png)" inset="md">`);
  });

  it('with custom inset value', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)" insetContent="1rem">
        <div slot="content">
          <p>Enjoy your flight to Bannerland!</p>
        </div>
      </auro-banner>
    `);

    await expect(el.shadowRoot.innerHTML).to.contain(`<div class="content" style="flex-basis: 50%; padding: 1rem;">`);
    await expect(el.shadowRoot.innerHTML).to.contain(`auro-background height="100%" bg="undefined" bgsm="url(/pic.png)" bgmd="url(/pic.png)" inset="1rem">`);
  });
});
