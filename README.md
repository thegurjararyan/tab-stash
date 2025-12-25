# 🔒 Tab Stash

> Your private browsing sessions, saved discreetly. No questions asked.

## What is this?

Look, we've all been there. You're browsing... *content*... in incognito mode at 2 AM, and you've got 15 tabs open that you're not quite done with yet. But you hear footsteps. You panic. You close everything.

**Tab Stash** is your safety net. One click to save all those tabs. One click to bring them back later. Simple. Private. No judgment.

## Features

- 💾 **Stash tabs instantly** - Save all your current tabs with one click
- 🔐 **Actually private** - Everything stays on your machine. No cloud, no sync, no "oops we got hacked"
- 📂 **Restore anytime** - Bring back your session whenever you're ready
- 🗑️ **Clear with confidence** - Wipe your stash when you're done
- 🌙 **Incognito-friendly** - Works seamlessly in private browsing mode
- 🎯 **Zero bloat** - No AI, no analytics, no BS. Just does what it says.

## Why does this exist?

Because closing 20+ tabs out of panic when someone walks in shouldn't mean losing everything. Because sometimes you need to take a break and come back later. Because your browser's "restore tabs" feature is a snitch that shows everything in your regular history.

This is for the real use cases nobody talks about but everyone needs.

## Installation

### For Personal Use (Local)

1. Download or clone this repo
2. Open Brave/Chrome and go to `brave://extensions/` or `chrome://extensions/`
3. Enable **Developer mode** (top right corner)
4. Click **Load unpacked**
5. Select the `tab-stash` folder
6. Click on **Details** and enable **"Allow in Private"**
7. You're good to go 😎

### From Chrome Web Store

*Coming soon... maybe. Depends if I feel like paying that $5 dev fee.*

## How to Use

1. Open incognito window with your... research material
2. Click the Tab Stash icon in your toolbar
3. Hit **"Stash Current Tabs"**
4. Close everything without fear
5. Later, open the extension and click **"Restore Tabs"**
6. Your tabs are back in a fresh incognito window
7. Use **"Clear Stash"** when you're completely done

## Privacy Notice

Everything is stored locally on your device. We don't collect, track, or sync anything. We don't even know you're using this. That's the point.

The extension uses browser storage that persists across sessions but only on YOUR machine. Close incognito, restart your browser, restart your computer - your stash stays safe until YOU clear it.

## Technical Stuff

Built with:
- Manifest V3
- Pure JavaScript (no frameworks, no dependencies)
- Chrome Extensions API
- Background service worker for persistent storage
- Dark mode UI because obviously

## FAQ

**Q: Is this safe?**  
A: Yes. All data stays on your machine. The code is open source - check it yourself.

**Q: Can someone else see my stashed tabs?**  
A: Not unless they have physical access to your computer AND know to look in browser extension storage. But like... secure your device, man.

**Q: Does this work with [insert browser]?**  
A: Works on any Chromium-based browser (Chrome, Brave, Edge, Opera, Vivaldi, etc.)

**Q: Will you add cloud sync?**  
A: Hell no. That defeats the entire purpose.

**Q: What about mobile?**  
A: Browser extensions on mobile are limited. But if there's demand, maybe.

**Q: Why did you make this?**  
A: Same reason you're reading this README.

## Contributing

Found a bug? Want to add a feature? PRs welcome. Just keep it simple and private-first.

## License

MIT - Do whatever you want with it. Just don't be evil.

## Disclaimer

This tool is for legitimate purposes like research, testing, or managing your browsing sessions efficiently. What you browse is your business. Use responsibly.

---

**Made with 🤫 by someone who gets it**

*Stay safe out there, kings and queens.*
