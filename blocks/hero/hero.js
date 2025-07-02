/**
 * loads and decorates the hero
 * @param {Element} block The hero block element
 */
export default async function decorate(block) {
  block.querySelector('> div:nth-child(1)').classList.add('hero__image');
  block.querySelector('> div:nth-child(2)').classList.add('hero__text');
  block.querySelector('> div:nth-child(3)').classList.add('hero__buttons');
}
