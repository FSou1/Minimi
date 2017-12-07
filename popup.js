// author: FSou1 (my.fsou1@gmail.com)
(function() {
  'use strict';

  var max_tabs_key = 'max_tabs';
  var disable_until_key = 'disable_until_utc';

  document.addEventListener('DOMContentLoaded', () => {
    var dropdown = document.getElementById('max_tabs_dropdown');
    var disableBtn = document.getElementById('disable_10min_button');

    retrieve(max_tabs_key, function(value) {
      if(!dropdown || !value) return;
      dropdown.value = value;
    });
  
    dropdown.addEventListener('change', function () {
      persist(max_tabs_key, dropdown.value);
    });

    disableBtn.addEventListener('click', function() {
      persist(disable_until_key, setMinutes(10));
    });
  });
  
  var persist = function(key, value, cb) {
    var items = {};
    items[key] = value;
    chrome.storage.sync.set(items, cb);
  };
  
  var retrieve = function(key, cb) {
    chrome.storage.sync.get(key, function (items) {
      cb(chrome.runtime.lastError ? null : items[key]);
    });
  };

  var setMinutes = function(minutes) {
    var utcNow = new Date();
    return utcNow.setMinutes(utcNow.getMinutes() + minutes);
  };
})();