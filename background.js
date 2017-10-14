(function() {
    'use strict';

    var maxTabsCount = 10;

    var handleTabEvent = function(tab) {
        if(!tab || !tab.id) return;

        chrome.tabs.query({
            windowType: 'normal',
            pinned: false
        }, function(tabs) {
            if(tabs.length > maxTabsCount) {
                alert('Tabs limit is exceed.\r\nYou can not open more than ' + maxTabsCount + ' tabs.\r\nNow opened: ' + tabs.length);
                chrome.tabs.remove(tab.id);
            }
        });
    };
    
    chrome.tabs.onCreated.addListener(handleTabEvent);
    chrome.tabs.onRemoved.addListener(handleTabEvent);        
})();