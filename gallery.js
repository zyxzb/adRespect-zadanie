let thumbnails = document.querySelectorAll('.thumbnail img');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close');
const popupImg = document.querySelector('.popup-img');
const arrowLeft = document.querySelector('.popup-arrow-left');
const arrowRight = document.querySelector('.popup-arrow-right');
const loader = document.getElementById('loader');

// MACY.JS

var macyInstance = Macy({
  container: '#gallery',
  trueOrder: false,
  waitForImages: false,
  columns: 4,
  margin: {
    x: 40,
    y: 40,
  },
  breakAt: {
    1536: {
      columns: 3,
      margin: {
        x: 30,
        y: 30,
      },
    },
    768: {
      columns: 2,
      margin: {
        x: 20,
        y: 20,
      },
    },
    576: {
      columns: 1,
    },
  },
});

// GALLERY

let currentImageIndex;

const nextSlide = () => {
  if (currentImageIndex === thumbnails.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex += 1;
  }
  popupImg.src = thumbnails[currentImageIndex].src;
};

const prevSlide = () => {
  if (currentImageIndex === 0) {
    currentImageIndex = thumbnails.length - 1;
  } else {
    currentImageIndex -= 1;
  }
  popupImg.src = thumbnails[currentImageIndex].src;
};

const hidePopup = () => {
  popup.classList.add('hidden');
};

const reloadThumbnails = (thumbnails) => {
  thumbnails.forEach((thumbnail, index) => {
    const showPopup = (e) => {
      popup.classList.remove('hidden');
      popupImg.src = e.target.src;
      currentImageIndex = index;
    };
    thumbnail.addEventListener('click', showPopup);
    thumbnail.addEventListener('keydown', (e) => {
      if (e.code === 'Enter' || e.KeyCode === 13) {
        showPopup(e);
      }
    });
  });
};

reloadThumbnails(thumbnails);

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);
popupClose.addEventListener('click', hidePopup);

document.addEventListener('keydown', (e) => {
  if (!popup.classList.contains('hidden')) {
    console.log(e);
    if (e.code === 'ArrowRight' || e.keyCode === 39) {
      nextSlide();
    } else if (e.code === 'ArrowLeft' || e.keyCode === 37) {
      prevSlide();
    } else if (e.code === 'Escape' || e.keyCode === 27) {
      hidePopup();
    }
  }
});

document.addEventListener('click', (e) => {
  if (e.target === popup) {
    hidePopup();
  }
});

// BUTTON - SHOW MORE IMAGES

const gallery = document.querySelector('#gallery');
const showMoreBtn = document.querySelector('#show-more-btn');
const perPage = 8;
let page = 1;

const fetchImages = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${perPage}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};

const displayImages = (images) => {
  images.forEach((imageData) => {
    const image = document.createElement('img');
    image.src = imageData.thumbnailUrl;
    image.alt = imageData.title;
    image.className = 'w-full';
    image.setAttribute('tabindex', '0');

    const li = document.createElement('li');
    li.className = 'thumbnail';
    li.appendChild(image);

    gallery.appendChild(li);
  });
};

// new images after fetching
const attachListenersToThumbnails = () => {
  const newThumbnails = document.querySelectorAll('.thumbnail img');
  newThumbnails.forEach((thumbnail, index) => {
    const showPopup = (e) => {
      popup.classList.remove('hidden');
      popupImg.src = e.target.src;
      currentImageIndex = index;
    };
    thumbnail.addEventListener('click', showPopup);
    thumbnail.addEventListener('keydown', (e) => {
      if (e.code === 'Enter' || e.keyCode === 13) {
        showPopup(e);
      }
    });
  });
};

const showLoader = () => {
  loader.classList.remove('invisible', 'opacity-0');
  loader.classList.add('visible', 'opacity-100');
};

const hideLoader = () => {
  loader.classList.remove('visible', 'opacity-100');
  loader.classList.add('invisible', 'opacity-0');
};

const loadMoreImages = async () => {
  showLoader();
  const images = await fetchImages();
  displayImages(images);
  page++;

  attachListenersToThumbnails();
  thumbnails = document.querySelectorAll('.thumbnail img');

  setTimeout(() => {
    macyInstance.recalculate();
    hideLoader();
  }, 1000);
};

showMoreBtn.addEventListener('click', loadMoreImages);
