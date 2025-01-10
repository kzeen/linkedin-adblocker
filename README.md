# linkedin-adblocker

This is a Chromium-based extension that runs in the background and works to block ads on LinkedIn

_This works on its own, but having an additional general-purpose AdBlocker would make it redundant_

## How it works

LinkedIn distinguishes ads on its website by adding a **_Promoted_** tag under the Ad name.  
They also don't obfuscate their HTML which makes finding posts with this **_Promoted_** tag easy to find.  
Specifically, it is set inside a `<span></span>` with nothing else inside, so a post that uses the word "Promoted" will not be deleted by mistake as the program checks specifically for spans whose `innerText` is exactly "Promoted".  
However, this means that any change in the HTML structure could break this extension, and would require updating the way it works.

## How to use

After obtaining all three files:

1. Navigate to the Extensions section of your browser. On Google Chrome, that is [chrome://extensions](chrome://extensions/)
2. Toggle on "Developer mode", which is usually on the top right corner of the Extensions page
3. New buttons will have appeared. Click on "Load unpacked"
4. Select the directory where all three files are stored.

The next time you visit LinkedIn, the extension should take effect.