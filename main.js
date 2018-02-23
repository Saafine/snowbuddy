'use strict';
const loadModule = (function() {
  const loaderId = document.getElementById('content-ready');
  let initialLoad = false;

  function contentReady() {
    initialLoad = true;
    loaderId.style.display = 'block';
  }

  return {
    initialLoad: initialLoad,
    contentReady: contentReady
  };
})();

function setView() {
  const mobileDiv = document.getElementById('mobile-wrapper');
  const desktopDiv = document.getElementById('desktop-wrapper');

  if (window.innerHeight >= window.innerWidth) {
    /**
     * Load mobile layout
     */
    mobileDiv.style.display = 'block';
    desktopDiv.style.display = 'none';
  } else {
    /**
     * Load desktop layout
     */
    mobileDiv.style.display = 'none';
    desktopDiv.style.display = 'block';
  }

  if(!loadModule.initialLoad) {
    loadModule.contentReady();
  }
}

window.addEventListener('load', setView);
window.addEventListener('resize', setView);