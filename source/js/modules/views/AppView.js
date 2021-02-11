import {createElement} from '../../utils/createElement';

export class AppView {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.headerElement = null;
    this.footerElement = null;
    this.contentElement = null;
    this.wrapper = null;
  }

  init() {
    const wrapper = this.createWrapper();
    this.headerElement = this.createHeader();
    this.contentElement = this.createContent();
    this.footerElement = this.createFooter();
    wrapper.append(this.headerElement, this.contentElement, this.footerElement);
    this.rootElement.append(wrapper);
  }

  createWrapper() {
    const wrapper = createElement('div', ['wrapper']);
    return wrapper;
  }

  createHeader() {
    const header = createElement('header', ['header']);
    const logo = createElement('div', ['logo']);
    const img = createElement('img', false, {'src': '../../../img/svg/scriba.svg', 'alt': 'scriba'});
    const textScriba = createElement('h1', false, false, 'Scriba Comparison');
    logo.append(img, textScriba);
    header.append(logo);
    return header;
  }

  createContent() {
    const content = createElement('main', ['main']);
    const containerContent = createElement('div', ['container']);
    const btn = createElement('input', ['container__select--btn'], {'type': 'button', 'value': 'Select Settings'});
    const schedules = createElement('div', ['container__schedules']);
    const firstSchedule = createElement('div', ['container__schedules--first']);
    const secondSchedule = createElement('div', ['container__schedules--second']);
    schedules.append(firstSchedule, secondSchedule);
    containerContent.append(btn, schedules);
    content.append(containerContent);
    return content;
  }

  createFooter() {
    const footer = createElement('footer', ['footer']);
    const contentFooter = createElement('div', ['content']);
    const a = createElement('a', false, {'href': 'https://github.com/ScribaSSU/scriba-schedule-comparison'}, 'GitHub');
    contentFooter.append(a);
    footer.append(contentFooter);
    return footer;
  }


}
