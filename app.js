const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
};
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('open', expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

const projectOutlines = {
  design: {title: 'Design & development', intro: 'Reserved for a future design case study. Add the brief, sketches or CAD imagery, design decisions and the finished result.'},
  analysis: {title: 'Data & analysis', intro: 'Reserved for a future analysis case study. Add the question, data source, method, readable plots and conclusions.'},
  practical: {title: 'Practical engineering', intro: 'Reserved for a future practical case study. Add photographs, Oli’s role, the work carried out and the lessons learned.'}
};
const projectDialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projectOutlines[button.dataset.project];
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-intro').textContent = project.intro;
    projectDialog.showModal();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('click', event => {
  const bounds = projectDialog.getBoundingClientRect();
  if (event.target === projectDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) projectDialog.close();
});
