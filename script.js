function changePattern(designNumber) {
    const kaleidoscope = document.getElementById('kaleidoscope');
    kaleidoscope.className = ''; // Clear existing classes
    kaleidoscope.classList.add('design-' + designNumber);
}
