const aboutButton = document.querySelector('[data-button]');
const aboutText = document.querySelector('[data-text]');
const moreText = document.querySelector('[data-more]');

function showText() {
  aboutButton.addEventListener('click', () => {
    if (!moreText.classList.contains('is-open')) {
      aboutButton.textContent = 'Свернуть';
      moreText.classList.add('is-open');
      aboutText.classList.add('is-open');
    } else {
      aboutButton.textContent = 'Подробнее';
      moreText.classList.remove('is-open');
      aboutText.classList.remove('is-open');
    }
  });
}

export {showText};
