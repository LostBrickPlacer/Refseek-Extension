// display logo icon
let logoIcon = browser.runtime.getURL("icons/RefSeek_logo_asterisk.gif");
document.getElementById("image_logo").src = logoIcon;

// display version number in corner
let versionNum = browser.runtime.getManifest().version
document.getElementById("version-text").textContent = versionNum