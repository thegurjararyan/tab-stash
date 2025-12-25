
// Background service worker - handles persistent storage
// This runs in normal context, so data persists even when incognito closes

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'stashTabs') {
    chrome.storage.local.set({ stashedTabs: request.tabs }, () => {
      sendResponse({ success: true, count: request.tabs.length });
    });
    return true; // Keep channel open for async response
  }
  
  if (request.action === 'getTabs') {
    chrome.storage.local.get(['stashedTabs'], (result) => {
      sendResponse({ tabs: result.stashedTabs || [] });
    });
    return true;
  }
  
  if (request.action === 'clearTabs') {
    chrome.storage.local.set({ stashedTabs: [] }, () => {
      sendResponse({ success: true });
    });
    return true;
  }
});
