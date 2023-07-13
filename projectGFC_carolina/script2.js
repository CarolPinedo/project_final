document.addEventListener('DOMContentLoaded', function() {

  const paragraph = document.getElementById('card-text');

  paragraph.addEventListener('mouseover', function() {
    this.style.color = '#ff5252';
  });

  paragraph.addEventListener('mouseout', function() {
    this.style.color = '';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('button');

  button.addEventListener('click', function() {
    alert('Thanks for your message! We will answer as soon as possible.');
  });
});