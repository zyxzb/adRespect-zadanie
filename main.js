// ASIDE

const closeButton = document.querySelector('#close-btn');
const openButton = document.querySelector('#open-btn');
const aside = document.querySelector('aside');

const openAside = () => {
  aside.classList.remove('invisible', '-translate-x-full', 'opacity-0');
  aside.classList.add('visible', 'translate-x-0', 'opacity-100');
};
const closeAside = () => {
  aside.classList.add('invisible', '-translate-x-full', 'opacity-0');
  aside.classList.remove('visible', 'translate-x-0', 'opacity-100');
};

openButton.addEventListener('click', openAside);
closeButton.addEventListener('click', closeAside);

// + ASIDE LINKS

const asideLinks = document.querySelectorAll('aside a');

asideLinks.forEach((item) => {
  item.addEventListener('click', closeAside);
});

// SEARCHBAR

const searchForm = document.getElementById('search-form');
const openSearchButton = document.getElementById('open-search-button');

openSearchButton.addEventListener('click', () => {
  searchForm.classList.toggle('hidden');
});

// NAV SUBMENU

const submenuParent = document.getElementById('submenu-parent');
const submenu = document.getElementById('submenu');
const submenuItems = submenu.querySelectorAll('a[role="menuitem"]');

const toggleSubmenu = (e) => {
  if (submenu.classList.contains('invisible')) {
    submenu.classList.remove('invisible', 'opacity-0', '-translate-y-[15px]');
    submenu.classList.add('visible', 'opacity-100', 'translate-y-0');
  } else {
    submenu.classList.add('invisible', 'opacity-0', '-translate-y-[15px]');
    submenu.classList.remove('visible', 'opacity-100', 'translate-y-0');
  }
};

// open/cose submenu
submenuParent.addEventListener('click', toggleSubmenu);

// close submenu on every link click
submenuItems.forEach((item) => {
  item.addEventListener('click', toggleSubmenu);
});

const isClickOutsideSubmenu = (target) => {
  return !submenu.contains(target) && !submenuParent.contains(target);
};

document.addEventListener('click', (e) => {
  if (isClickOutsideSubmenu(e.target)) {
    submenu.classList.add('invisible', 'opacity-0');
    submenu.classList.remove('visible', 'opacity-100');
  }
});

// FOOTER - CURRENT YEAR

const spanElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
spanElement.textContent = currentYear;
