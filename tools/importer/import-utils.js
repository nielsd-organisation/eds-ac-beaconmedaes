/* global WebImporter */

export default class ImportUtils {
  static createHeroBlock(main) {
    const data = [];
    const element = main.querySelector('.ds-brand-hero');

    // set block name
    data.push(['Hero']);

    // find image
    const image = element.querySelector('img');
    if (image) {
      data.push([image]);
    }

    // find hero title
    const text = document.createDocumentFragment();
    text.append(element.querySelector('.cmp-teaser__title'));
    text.append(element.querySelector('.cmp-teaser__description'));
    if (text) {
      data.push([text]);
    }

    // find buttons
    const buttons = element.querySelectorAll('.cmp-teaser__action-link');
    if (buttons) {
      data.push([buttons[0], buttons[1]]);
    }

    // create table
    const block = WebImporter.DOMUtils.createTable(
      data,
      document,
    );

    element.replaceWith(block);
  }

  static createCardsBlocks(main) {
    const data = [];
    const element = main.querySelector('.grid-col-4');

    // set block name
    data.push(['Cards']);

    // collect cards from container and push content to data
    const cards = element.querySelectorAll('.ds-brand-teaser-card');
    cards.forEach((card) => {
      const image = card.querySelector('img');
      const text = card.querySelector('.cmp-teaser__content');
      data.push([image, text]);
    });

    // create table
    const block = WebImporter.DOMUtils.createTable(
      data,
      document,
    );

    element.replaceWith(block);
  }

  static createContactBlocks(main) {
    const data = [];
    const element = main.querySelector('.ds-brand-teaser-contact-card');

    // set block name
    data.push(['Contact Card']);

    // find text content
    const text = element.querySelector('.cmp-teaser__content');
    data.push([text]);

    // create table
    const block = WebImporter.DOMUtils.createTable(
      data,
      document,
    );

    element.replaceWith(block);
  }
}
