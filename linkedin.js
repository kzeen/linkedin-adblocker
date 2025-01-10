// LinkedIn distinguishes Ads by adding a 'span' element with the text 'Promoted'
// This script removes them by looking for all spans in the webpage with the text 'Promoted'
// and then finding the div that wraps around the entire ad and deletes it (by setting its display to none)

function removeAds() {
    // Get all 'span' elements on the page
    let spans = document.getElementsByTagName("span");

    for (let i = 0; i < spans.length; ++i) {
        // Check if they contain the text 'Promoted'
        if (spans[i].innerText === "Promoted") {
            // Get the div that wraps around the entire ad
            // Currently can be identified by the class "feed-shared-update-v2"
            // If this class changes, change it here
            let card = spans[i].closest(".feed-shared-update-v2");

            // Make the ad disappear
            card.setAttribute("style", "display: none !important;");
        }
    }
}

removeAds();

// Removes ads loaded dynamically by running every 100ms
setInterval(function () {
    removeAds();
}, 100)