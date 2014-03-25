// underscorify.js
// https://github.com/georgeosddev/devtools-snippets
// Add Underscore to any page that does not have it already.

(function () {

  var _InUse = !!window._;
  var s = document.createElement('script');
  s.setAttribute('src', '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js');
  s.addEventListener('load', function(){
    console.log('Underscore loaded!');

    if(_InUse) {
      window.underscore = _.noConflict();
      console.log('`_` already in use; use `underscore`');
    }
  });
  document.body.appendChild(s);

})();
