import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-banner';

/**
 * @param {Element} el
 * @returns {Element}
 */
function getBannerWrapper(el) {
  return el.shadowRoot.querySelector('.bannerWrapper');
}

/**
 * @param {Element} el
 * @returns {Element}
 */
function getContent(el) {
  return el.shadowRoot.querySelector('.content');
}

/**
 * @param {Element} el
 * @returns {Element}
 */
function getGraphicContainer(el) {
  return el.shadowRoot.querySelector('.graphicContainer');
}

/**
 * @param {Element} el
 * @returns {Element}
 */
function getGraphicContentContainer(el) {
  return el.shadowRoot.querySelector('.graphicContentContainer');
}

/**
 * @param {Element} el
 * @returns {Element}
 */
function getOverlayContainer(el) {
  return el.shadowRoot.querySelector('.overlayContainer');
}

/**
 * @param {Element} el
 * @returns {Element}
 */
function getBackground(el) {
  return el.shadowRoot.querySelector('auro-background');
}

/**
 * @param {Element} el
 * @param {string} expected
 */
function assertStyle(el, expected) {
  expect(el.getAttribute('style')).to.contain(expected);
}

/**
 * @param {Element} el
 * @param {string} regular
 * @param {string} sm
 * @param {string} md
 */
function assertBackground(el, regular, sm, md) {
  expect(el.getAttribute('bg')).to.equal(regular);
  expect(el.getAttribute('bgsm')).to.contain(sm);
  expect(el.getAttribute('bgmd')).to.contain(md);
}

/**
 * @param {Element} el
 * @param {string} expected
 */
function assertInset(el, expected) {
  expect(el.getAttribute('inset')).to.equal(expected);
}

describe('<auro-banner>', () => {

  it('is defined', async () => {
    const el = await !!customElements.get("auro-banner");

    expect(el).to.be.true;
  });

  it('is accessible', async () => {
    const el = await fixture(html`
      <auro-banner ratio="1:3" graphic="url(/pic.png)">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
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
      </auro-banner>
    `);

    expect(getBannerWrapper(el)).to.not.be.null;
    expect(el.flipped).to.be.true;
  });

  it('with default ratio', async () => {
    const el = await fixture(html`
      <auro-banner graphic="url(/pic.png)">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
      </auro-banner>
    `);

    assertStyle(getContent(el), "flex-basis: 50%");
    assertStyle(getGraphicContainer(el), "flex-basis: 50%");
  });

  it('with custom ratio', async () => {
    const el = await fixture(html`
      <auro-banner graphic="url(/pic.png)" ratio="1:3">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
      </auro-banner>
    `);

    assertStyle(getContent(el), "flex-basis: 25%");
    assertStyle(getGraphicContainer(el), "flex-basis: 75%");
  });

  it('with default graphic', async () => {
    const el = await fixture(html`
      <auro-banner graphic="url(/pic.png)">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
      </auro-banner>
    `);

    const background = getBackground(el);
    const expected = "url(/pic.png)";
    assertBackground(background, expected, expected, expected);
    expect(background.getAttribute("height")).to.equal("100%");
    expect(background.getAttribute("inset")).to.equal("none");
  });

  it('with medium graphic', async () => {
    const el = await fixture(html`
      <auro-banner graphicMd="url(/pic.png)">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
      </auro-banner>
    `);

    const background = getBackground(el);
    const expected = "url(/pic.png)";
    assertBackground(background, "undefined", "undefined", expected);
  });

  it('with small graphic', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)">
        <div slot="content">
          <h3>Banner title</h3>
          <p>Enjoy your flight to Bannerland!</p>
        </div>
      </auro-banner>
    `);

    const background = getBackground(el);
    const expected = "url(/pic.png)";
    assertBackground(background, "undefined", expected, expected);
  });

  it('with graphic content', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)">
        <div slot="graphicContent">
          <p>This is some graphic content</p>
        </div>
      </auro-banner>
    `);

    expect(getContent(el)).to.be.null;
    expect(getGraphicContentContainer(el)).not.to.be.null;
  });

  it('with graphic content but no graphic', async () => {
    const el = await fixture(html`
      <auro-banner>
        <div slot="graphicContent">
          <p>This is some graphic content</p>
        </div>
      </auro-banner>
    `);

    expect(getContent(el)).to.be.null;
    expect(getGraphicContentContainer(el)).not.to.be.null;
  });

  it('with no graphic or graphic content', async () => {
    const el = await fixture(html`
      <auro-banner>
        <div slot="content">
          <p>This is some graphic content</p>
        </div>
      </auro-banner>
    `);

    expect(getContent(el)).not.to.be.null;
    expect(getGraphicContentContainer(el)).to.be.null;
  });

  it('with overlay content', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)" overlay>
        <div slot="graphicContent">
          <p>This is some graphic content</p>
        </div>
        <div slot="overlay">
          <auro-icon category="social" name="instagram"></auro-icon>
        </div>
      </auro-banner>
    `);

    expect(getOverlayContainer(el)).not.to.be.null;
  });

  it('without overlay content', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)">
        <div slot="graphicContent">
          <p>This is some graphic content</p>
        </div>
      </auro-banner>
    `);

    expect(getOverlayContainer(el)).to.be.null;
  });

  it('with pre-defined inset value', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)" inset="md"></auro-banner>
    `);

    assertStyle(getBannerWrapper(el), "padding: var(--auro-size-md)");
  });

  it('with custom inset value', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)" inset="1rem"></auro-banner>
    `);

    assertStyle(getBannerWrapper(el), "padding: 1rem");
  });

  it('with no inset value', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)">
        <div slot="content">
          <p>Enjoy your flight to Bannerland!</p>
        </div>
      </auro-banner>
    `);

    assertStyle(getContent(el), "padding: var(--auro-size-none)");
    assertInset(getBackground(el), "none");
  });

  it('with pre-defined insetContent value', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)" insetContent="md">
        <div slot="content">
          <p>Enjoy your flight to Bannerland!</p>
        </div>
      </auro-banner>
    `);

    assertStyle(getContent(el), "padding: var(--auro-size-md)");
    assertInset(getBackground(el), "md");
  });

  it('with custom insetContent value', async () => {
    const el = await fixture(html`
      <auro-banner graphicSm="url(/pic.png)" insetContent="1rem">
        <div slot="content">
          <p>Enjoy your flight to Bannerland!</p>
        </div>
      </auro-banner>
    `);

    assertStyle(getContent(el), "1rem");
    assertInset(getBackground(el), "1rem");
  });
});
