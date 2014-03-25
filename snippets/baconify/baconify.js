// baconify.js
// https://github.com/georgeosddev/devtools-snippets
// Add Bacon.js to any page that does not have it already.

(function () {

  if (!window.Bacon){
    var s = document.createElement('script');
    s.setAttribute('src', '//cdnjs.cloudflare.com/ajax/libs/bacon.js/0.7.8/bacon.min.js');
    s.addEventListener('load', function(){
      console.log('Baconjs loaded!');
    });
    document.body.appendChild(s);
  } else {
    console.log('` Bacon` already in use');
  }

})();
