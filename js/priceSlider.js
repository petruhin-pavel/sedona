var snapSlider = document.getElementById('slider-snap');

noUiSlider.create(snapSlider, {
  start: [0, 800],
  connect: true,
  range: {
    'min': 0,
    'max': 1000
  },
  format: wNumb({
    decimals: 0,
    thousand: '',
    suffix: ' US'
  })
});

var snapValues = [
  document.getElementById('slider-snap-value-lower'),
  document.getElementById('slider-snap-value-upper')
];

snapSlider.noUiSlider.on('update', function (values, handle) {
  snapValues[handle].innerHTML = values[handle];
});