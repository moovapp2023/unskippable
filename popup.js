const options = document.querySelectorAll('.option');

function setActive(value) {
  options.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.value === value);
  });
}

// Load saved preference
chrome.storage.sync.get('position', (result) => {
  setActive(result.position || 'bottom');
});

// Save on click
options.forEach(opt => {
  opt.addEventListener('click', () => {
    const value = opt.dataset.value;
    chrome.storage.sync.set({ position: value });
    setActive(value);
  });
});
