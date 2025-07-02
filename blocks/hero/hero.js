/**
 * loads and decorates the hero
 * @param {Element} block The hero block element
 */
export default function decorate(block) {
  block.querySelector(':scope > div:nth-child(1)').classList.add('hero__image');
  block.querySelector(':scope > div:nth-child(2)').classList.add('hero__text');
  block.querySelector(':scope > div:nth-child(3)').classList.add('hero__buttons');
  block.querySelector('.hero__buttons .button-container:nth-child(2) a').classList.add('secondary');
}
