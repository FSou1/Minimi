// author: FSou1 (my.fsou1@gmail.com)
(function() {
    'use strict';

    var retrieve = function(key, cb) {
        chrome.storage.sync.get(key, function (items) {
            cb(chrome.runtime.lastError ? null : items[key]);
        });
    };

    var handleTabEvent = function(tab) {
        if(!tab || !tab.id) return;

        chrome.tabs.query({
            windowType: 'normal',
            pinned: false
        }, function(tabs) {
            retrieve('max_tabs', function(value) {
                var maxTabsCount = value || 7;
                if(tabs.length > maxTabsCount) {
                    alert('Tabs limit is exceed.\r\nYou can not open more than ' + maxTabsCount + ' tabs.\r\nNow opened: ' + tabs.length);
                    chrome.tabs.remove(tab.id);
                }
            });
        });
    };
    
    chrome.tabs.onCreated.addListener(handleTabEvent);
    chrome.tabs.onRemoved.addListener(handleTabEvent);        
})();