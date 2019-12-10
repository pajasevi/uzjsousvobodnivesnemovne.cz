(function (document, window) {
  var btn = document.getElementById('now-button');
  var noElem = document.getElementById('no');

  var noAnswers = [
    'Stále ne',
    'Furt ne',
    'Ještě ne',
    'Určitě ne',
    'Nein',
    'Ani náhodou',
    'Ne',
    'Nope',
    'Jistě že ne',
    'Nemyslím si',
    'Ne-e'
  ];

  var clickCount = 0;

  var onClickHandler = function (event) {
    event.preventDefault();
    clickCount += 1;

    if (clickCount % 10 === 0) {
      var imgElem = document.createElement('img');

      imgElem.src = '/img/ne.jpg';
      imgElem.alt = 'Ne';

      noElem.textContent = '';
      noElem.appendChild(imgElem);
    } else {
      noElem.textContent = noAnswers[Math.floor(Math.random() * noAnswers.length)];
    }
  };

  btn.addEventListener('click', onClickHandler);
})(document, window);
