// author: FSou1 (my.fsou1@gmail.com)
(function() {
  'use strict';

  var max_tabs_key = 'max_tabs';
  
  document.addEventListener('DOMContentLoaded', () => {
    var dropdown = document.getElementById('max_tabs_dropdown');
  
    retrieve(max_tabs_key, function(value) {
      if(!dropdown || !value) return;
      dropdown.value = value;
    });
  
    dropdown.addEventListener('change', function () {
      persist(max_tabs_key, dropdown.value);
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
})();