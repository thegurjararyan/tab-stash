
// Get DOM elements
const stashBtn = document.getElementById('stashBtn');
const restoreBtn = document.getElementById('restoreBtn');
const clearBtn = document.getElementById('clearBtn');
const tabCountEl = document.getElementById('tabCount');
const messageEl = document.getElementById('message');

// Show message to user
function showMessage(text, type = 'success') {
  messageEl.textContent = text;
  messageEl.className = `message ${type}`;
  setTimeout(() => {
    messageEl.textContent = '';
    messageEl.className = '';
  }, 3000);
}

// Update UI based on stored tabs
async function updateUI() {
  chrome.runtime.sendMessage({ action: 'getTabs' }, (response) => {
    const tabs = response.tabs || [];
    tabCountEl.textContent = tabs.length;
    restoreBtn.disabled = tabs.length === 0;
    clearBtn.disabled = tabs.length === 0;
  });
}

// Stash current tabs
stashBtn.addEventListener('click', async () => {
  try {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    
    if (tabs.length === 0) {
      showMessage('No tabs to stash', 'error');
      return;
    }
    
    const urls = tabs
      .map(tab => tab.url)
      .filter(url => url && !url.startsWith('chrome://') && !url.startsWith('chrome-extension://') && !url.startsWith('brave://'));
    
    if (urls.length === 0) {
      showMessage('No valid tabs to stash', 'error');
      return;
    }
    
    // Send to background script for persistent storage
    chrome.runtime.sendMessage(
      { action: 'stashTabs', tabs: urls },
      (response) => {
        if (response.success) {
          showMessage(`${response.count} tabs stashed!`, 'success');
          updateUI();
        }
      }
    );
  } catch (error) {
    showMessage('Failed to stash tabs', 'error');
    console.error(error);
  }
});

// Restore stashed tabs
restoreBtn.addEventListener('click', async () => {
  try {
    chrome.runtime.sendMessage({ action: 'getTabs' }, async (response) => {
      const tabs = response.tabs || [];
      
      if (tabs.length === 0) {
        showMessage('No tabs to restore', 'error');
        return;
      }
      
      const currentWindow = await chrome.windows.getCurrent();
      
      if (currentWindow.incognito) {
        for (const url of tabs) {
          await chrome.tabs.create({ url, active: false });
        }
      } else {
        await chrome.windows.create({
          url: tabs,
          incognito: true
        });
      }
      
      showMessage(`${tabs.length} tabs restored!`, 'success');
    });
  } catch (error) {
    showMessage('Failed to restore tabs', 'error');
    console.error(error);
  }
});

// Clear stashed tabs
clearBtn.addEventListener('click', async () => {
  if (confirm('Are you sure you want to clear all stashed tabs?')) {
    chrome.runtime.sendMessage({ action: 'clearTabs' }, (response) => {
      if (response.success) {
        showMessage('Stash cleared', 'success');
        updateUI();
      }
    });
  }
});

// Initialize UI on popup open
updateUI();
