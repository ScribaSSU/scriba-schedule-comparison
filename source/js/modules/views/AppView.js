import {createElement} from '../../utils/createElement';
import {departmentsList, educationForm, groupNumbers} from '../../utils/data';

export class AppView {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.headerElement = null;
    this.footerElement = null;
    this.contentElement = null;
    this.modalElement = null;
    this.wrapper = null;
  }

  init() {
    const wrapper = this.createWrapper();
    this.headerElement = this.createHeader();
    this.contentElement = this.createContent();
    this.modalElement = this.createModalWindow();
    this.footerElement = this.createFooter();
    wrapper.append(this.headerElement, this.contentElement, this.modalElement, this.footerElement);
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
    const btn = createElement('input', ['container__select--btn'], {'type': 'button', 'value': 'Выбрать настройки'});
    const schedules = createElement('div', ['container__schedules']);
    const firstSchedule = createElement('div', ['container__schedules--first']);
    const secondSchedule = createElement('div', ['container__schedules--second']);
    schedules.append(firstSchedule, secondSchedule);
    containerContent.append(btn, schedules);
    content.append(containerContent);
    return content;
  }

  createModalWindow() {
    const containerModal = createElement('div', ['modal']);
    const title = createElement('h3', ['modal--title'], false, 'Настройки выбора');
    const settingsContainer = createElement('div', ['settings-container']);
    const firstOptionsContainer = this.createOptionsContainer('first');
    const secondOptionsContainer = this.createOptionsContainer('second');
    settingsContainer.append(firstOptionsContainer, secondOptionsContainer);
    containerModal.append(title, settingsContainer);

    return containerModal;
  }

  createOptionsContainer(order) {
    const optionsContainer = createElement('div', ['container__option']);

    const selectContainer = createElement('div', ['container__option--select'], {'id': `${order}-select`});
    const faculties = createElement('select');
    const labelForSelectContainer = createElement('label', ['label'], {'for': `${order}-select`}, 'Факультеты');
    departmentsList.forEach((item) => {
      const optionForFaculty = createElement('option', ['option'], false, item.shortName);
      optionForFaculty.dataset.url = item.url;
      faculties.append(optionForFaculty);
    });
    selectContainer.append(labelForSelectContainer, faculties);

    const formEducationContainer = createElement('div', ['container__option--form'], {'id': `${order}-form`});
    const formsEducation = createElement('select');
    const labelForFormEducationContainer = createElement('label', ['label'], {'for': `${order}-form`}, 'Форма обучения');
    educationForm.forEach((item) => {
      const optionForForm = createElement('option', ['option'], false, item);
      optionForForm.dataset.education = item;
      formsEducation.append(optionForForm);
    });
    formEducationContainer.append(labelForFormEducationContainer, formsEducation);

    const groupContainer = createElement('div', ['container__option--group'], {'id': `${order}-group`});
    const groups = createElement('select');
    const labelForGroupContainer = createElement('label', ['label'], {'for': `${order}-group`}, 'Группа');
    groupNumbers.forEach((item) => {
      const optionForGroups = createElement('option', ['option'], false, item);
      optionForGroups.dataset.group = item;
      groups.append(optionForGroups);
    });
    groupContainer.append(labelForGroupContainer, groups);

    optionsContainer.append(selectContainer, formEducationContainer, groupContainer);
    return optionsContainer;
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
