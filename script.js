'use strict';

// Select DOM elements
const tabHead = document.querySelector('.tab-header');
const btn = document.querySelectorAll('.btn');
const tabContainer = document.querySelectorAll('.tab-container');

// Add an event listener
tabHead.addEventListener('click', function (e) {
  const id = e.target.dataset.id;

  if (!id) return;

  btn.forEach(function (btn) {
    btn.classList.remove('active');
    e.target.classList.add('active');
  });

  tabContainer.forEach(function (tab) {
    tab.classList.remove('active');
  });

  const element = document.getElementById(id);
  element.classList.add('active');
});
