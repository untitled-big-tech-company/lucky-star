document.addEventListener("DOMContentLoaded", () => {
    const galaxyDiv = `
    <div id="galaxy">
        <div class="solar-system">
            <a href="#magician" class="galaxy-logo">
                <img src="web_assets/object.png" alt="Galaxy Logo">
            </a>

            <div class="orbit-div">
                <div class="orbit-background">
                </div>
                <div class="orbit-grid">
                    <div class="orbit-stone-1 orbit-stone">
                        <img class="img-stone img-stone-1" src="https://img.thesitebase.net/files/10510656/2024/03/25/17113650384dcb48df40.png">
                    </div>
                    <div class="orbit-stone-2 orbit-stone">
                        <img class="img-stone img-stone-2" src="https://img.thesitebase.net/files/10510656/2024/03/25/171136507147ba837a7b.png">
                    </div>
                    <div class="orbit-stone-3 orbit-stone">
                        <img class="img-stone img-stone-3" src="https://img.thesitebase.net/files/10510656/2024/03/25/17113650774c872fbe02.png">
                    </div>
                    <div class="orbit-stone-4 orbit-stone">
                        <img class="img-stone img-stone-4" src="https://img.thesitebase.net/files/10510656/2024/03/25/1711365081125f9713fb.png">
                    </div>
                    <div class="orbit-stone-5 orbit-stone">
                        <img class="img-stone img-stone-5" src="https://img.thesitebase.net/files/10510656/2024/03/25/17113650852a8d886a85.png">
                    </div>
                    <div class="orbit-stone-6 orbit-stone">
                        <img class="img-stone img-stone-6" src="https://img.thesitebase.net/files/10510656/2024/03/25/17113650852a8d886a85.png">
                    </div>
                </div>
            </div>
        </div>
        <div id="galaxy-effects">
            <dotlottie-player data-is-ix2-target="1" class="shooting-star-1" animation-type="lottie" direction="1" src="https://lucky-star-assets.pages.dev/night_sky.lottie" loop intermission="4" autoplay="1" renderer="svg"></dotlottie-player>
        </div>
    </div>    
    `;
    // Select the node that will be observed for mutations
const targetNode = document.getElementById("tBaMU1");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");
    } else if (mutation.type === "attributes") {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
      if (mutation.attributeName === 'data-loaded') {
        document.getElementById('tBaMU1').innerHTML = galaxyDiv;
      }
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);
if (targetNode) {

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
}

document.getElementById('test').innerHTML = galaxyDiv;
});