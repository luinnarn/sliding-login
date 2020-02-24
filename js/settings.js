const options = document.querySelectorAll('option');
Array.prototype.forEach.call(options, e => {
  e.style.setProperty('background', e.value)
});

const applyHeight = function() {
  const root = document.querySelector('.root');
  const height = document.paramsForm.height.value;
  root.style.setProperty('--content-height', height + 'px');
  document.querySelector('#heightLabel').textContent = 'Height: ' + height + 'px'
};

const applyWidth = function() {
  const root = document.querySelector('.root');
  const width = document.paramsForm.width.value;
  root.style.setProperty('--content-row-width', width );
  document.querySelector('#widthLabel').textContent = 'Width: ' + Math.floor(width * 100) + '%'
};

const applyDelta = function() {
  const root = document.querySelector('.root');
  const delta = document.paramsForm.delta.value;
  root.style.setProperty('--delta', delta + 'px');
  document.querySelector('#deltaLabel').textContent = 'Delta: ' + delta + 'px'
};

const applyForeground = function() {
  const root = document.querySelector('.root');
  const foreground = document.paramsForm.foreground.value;
  root.style.setProperty('--foreground-color', foreground);
};

const applyHighlight = function() {
  const root = document.querySelector('.root');
  const highlight = document.paramsForm.highlight.value;
  root.style.setProperty('--highlight-color', highlight);
};
