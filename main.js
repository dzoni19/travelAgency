'use strict';

// search btn

const input = document.querySelector('.input');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn-search');

btn.addEventListener('click', function () {
  search.classList.toggle('active');
  input.focus;
});

// Menu btn
const btnMenu = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

btnMenu.addEventListener('click', function () {
  navigation.classList.toggle('active');
});

// panels

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', function () {
    closePanel();
    panel.classList.add('active');
  });
});

const closePanel = function (panel) {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

// Accordions

const accordionItemHeaders = document.querySelectorAll(
  '.accordion-item-header'
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener('click', (event) => {
    accordionItemHeader.classList.toggle('active');
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// Section scroll

const allSection = document.querySelectorAll('.section');

const rollSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(rollSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});
