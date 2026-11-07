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

const projects = {
  motec: {
    title: 'Brands Hatch driver comparison', category: 'Race data / MoTeC i2 Pro',
    intro: 'I compared two drivers’ laps at Brands Hatch using race data supplied for a university exercise.',
    sections: [
      ['The approach', 'I looked at the plotted driving paths alongside in-car video to compare how the two drivers approached the circuit.'],
      ['What I found', 'The quicker driver took a noticeably tighter line through Turn 2.']
    ]
  },
  solidworks: {
    title: 'Component modelling', category: 'CAD & drawing / SolidWorks',
    intro: 'An individual CAD exam, building a 3D part from a supplied 2D drawing.',
    sections: [
      ['My work', 'I modelled the part in SolidWorks and produced a dimensioned drawing from my model.'],
      ['The result', 'I scored 84% overall, with full marks for model accuracy.']
    ]
  },
  matlab: {
    title: 'Numerical programming', category: 'Numerical programming / MATLAB',
    intro: 'I wrote and ran my own MATLAB code using vectors, matrices, functions and loops.',
    sections: [
      ['Presenting and checking results', 'I presented the results in tables and labelled plots, and checked a loop calculation against MATLAB’s built-in sum function.'],
      ['The result', 'I scored 94% for the coursework.']
    ]
  },
  manufacture: {
    title: 'Gas-powered model car', category: 'Practical engineering / Workshop manufacture',
    intro: 'A workshop manufacturing project, taking parts through cutting, forming, finishing and assembly.',
    sections: [
      ['My work', 'I laser-cut plywood parts, waterjet-cut and bent sheet metal, injection-moulded the wheels and cut and finished the axles by hand.'],
      ['Assembly and testing', 'I assembled the car and it ran successfully in an informal test.']
    ]
  }
};
const projectDialog = document.querySelector('#project-dialog');
let projectTrigger;

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    projectTrigger = button;
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-category').textContent = project.category;
    document.querySelector('#dialog-intro').textContent = project.intro;
    const details = document.querySelector('#dialog-details');
    details.replaceChildren();
    project.sections.forEach(([heading, copy]) => {
      const section = document.createElement('section');
      const title = document.createElement('h3');
      const text = document.createElement('p');
      title.textContent = heading;
      text.textContent = copy;
      section.append(title, text);
      details.append(section);
    });
    projectDialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('close', () => projectTrigger?.focus({preventScroll: true}));
projectDialog.addEventListener('click', event => {
  const bounds = projectDialog.getBoundingClientRect();
  if (event.target === projectDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) projectDialog.close();
});
