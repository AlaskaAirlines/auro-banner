import { fixture, html, expect } from '@open-wc/testing';
import '../src/aurolabs-banner.js';

describe('aurolabs-banner', () => {
  it('sets the CSS class on aurolabs-banner > div element', async () => {
    const el = await fixture(html`
      <aurolabs-banner cssclass="testClass"></aurolabs-banner>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('aurolabs-banner is accessible', async () => {
    const el = await fixture(html`
      <aurolabs-banner cssclass="testClass"></aurolabs-banner>
    `);

    await expect(el).to.be.accessible();
  });

  it('aurolabs-banner custom element is defined', async () => {
    const el = await !!customElements.get("aurolabs-banner");

    await expect(el).to.be.true;
  });
});
