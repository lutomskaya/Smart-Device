const link = document.querySelector('[data-intro-button]');
const form = document.querySelector('[data-form]');

const initScroll = () => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    form.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
};

export {initScroll};
