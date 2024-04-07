document.addEventListener("DOMContentLoaded", () => {
    const galaxyDiv = `
    <div id="galaxy" class="">
        <div class="nebula-show">
            <div class="nebula-show--container">
                <div class="nebula-show--stone" data-stone-id="1">
                   <video loop muted preload="auto" poster="https://lucky-star-assets.pages.dev/web_assets/reality_poster.png">
                        <source src="https://lucky-star-assets.pages.dev/web_assets/videos/reality.mp4" type="video/mp4" />
                   </video> 
                </div>
                <div class="nebula-show--stone" data-stone-id="2">
                   <video loop muted preload="auto" poster="https://lucky-star-assets.pages.dev/web_assets/soul_poster.png">
                        <source src="https://lucky-star-assets.pages.dev/web_assets/videos/soul.mp4" type="video/mp4" />
                   </video> 
                </div>
                <div class="nebula-show--stone" data-stone-id="3">
                   <video loop muted preload="auto" poster="https://lucky-star-assets.pages.dev/web_assets/space_poster.png">
                        <source src="https://lucky-star-assets.pages.dev/web_assets/videos/space.mp4" type="video/mp4" />
                   </video> 
                </div> 
                <div class="nebula-show--stone" data-stone-id="4">
                   <video loop muted preload="auto" poster="https://lucky-star-assets.pages.dev/web_assets/power_poster.png">
                        <source src="https://lucky-star-assets.pages.dev/web_assets/videos/power.mp4" type="video/mp4" />
                   </video> 
                </div>
                <div class="nebula-show--stone" data-stone-id="5">
                   <video loop muted preload="auto" poster="https://lucky-star-assets.pages.dev/web_assets/time_poster.png">
                        <source src="https://lucky-star-assets.pages.dev/web_assets/videos/time.mp4" type="video/mp4" />
                   </video> 
                </div>
                <div class="nebula-show--stone" data-stone-id="6">
                   <video loop muted preload="auto" poster="https://lucky-star-assets.pages.dev/web_assets/mind_poster.png">
                        <source src="https://lucky-star-assets.pages.dev/web_assets/videos/mind.mp4" type="video/mp4" />
                   </video> 
                </div>
            </div>
        </div>
        <div class="stone-grids">
            <img class="stone-grids--stone" data-stone-id="1" src="https://lucky-star-assets.pages.dev/web_assets/1.png">
            <img class="stone-grids--stone" data-stone-id="2" src="https://lucky-star-assets.pages.dev/web_assets/2.png">
            <img class="stone-grids--stone" data-stone-id="4" src="https://lucky-star-assets.pages.dev/web_assets/4.png">
            <img class="stone-grids--stone" data-stone-id="5" src="https://lucky-star-assets.pages.dev/web_assets/5.png?v=2">
            <img class="stone-grids--stone" data-stone-id="3" src="https://lucky-star-assets.pages.dev/web_assets/3.png">
            <img class="stone-grids--stone" data-stone-id="6" src="https://lucky-star-assets.pages.dev/web_assets/6.png">
        </div>
        <div class="solar-system">
            <a href="#magician" class="galaxy-logo">
                <img id="lottie-star" src="https://lucky-star-assets.pages.dev/web_assets/object.png" alt="Galaxy Logo">
            </a>

            <div class="orbit-div">
                <div class="orbit-background">
                </div>
                <div class="orbit-grid">
                    <div class="orbit-stone-1 orbit-stone" data-stone-id="1">
                        <img class="img-stone img-stone-1" src="https://lucky-star-assets.pages.dev/web_assets/1.png">
                    </div>
                    <div class="orbit-stone-2 orbit-stone" data-stone-id="2">
                        <img class="img-stone img-stone-2" src="https://lucky-star-assets.pages.dev/web_assets/2.png">
                    </div>
                    <div class="orbit-stone-4 orbit-stone" data-stone-id="4">
                        <img class="img-stone img-stone-4" src="https://lucky-star-assets.pages.dev/web_assets/4.png">
                    </div>
                    <div class="orbit-stone-5 orbit-stone" data-stone-id="5">
                        <img class="img-stone img-stone-5" src="https://lucky-star-assets.pages.dev/web_assets/5.png?v=2">
                    </div>
                    <div class="orbit-stone-3 orbit-stone" data-stone-id="3">
                        <img class="img-stone img-stone-3" src="https://lucky-star-assets.pages.dev/web_assets/3.png">
                    </div>
                    <div class="orbit-stone-6 orbit-stone" data-stone-id="6">
                        <img class="img-stone img-stone-6" src="https://lucky-star-assets.pages.dev/web_assets/6.png">
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
    const triggerStoneChange = function (stoneId) {
        document.querySelector(`.stone-grids--stone.active`)?.classList?.remove("active");
        const stone = document.querySelector(`.stone-grids--stone[data-stone-id='${stoneId}']`);
        stone.classList.add("active");
        document.querySelector(`.nebula-show--stone.active`)?.classList?.remove("active");
        document.querySelector(`.nebula-show--stone.active > video`)?.pause();
        document.querySelector(`.nebula-show--stone[data-stone-id='${stoneId}']`).classList.add("active");
        document.querySelector(`.nebula-show--stone.active > video`)?.play();
    }
    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === "attributes" && mutation.attributeName === 'class' && mutation.target.getAttribute('selector-id') === 'tBaMU1') {
                mutation.target.innerHTML = galaxyDiv;
                mutation.target.style = 'width: 100%';
                const galaxy = document.getElementById('galaxy');
                const solarSystem = document.querySelector('.solar-system');
                const orbitGrid = document.querySelector('.orbit-grid');
                solarSystem.addEventListener('click', (e) => {
                    let stoneId = 1;
                    stoneId = e.target.closest('.orbit-stone').getAttribute('data-stone-id');
                    galaxy.classList.add('the-show-must-go-on');
                    triggerStoneChange(stoneId);
                });
                document.querySelector(".stone-grids").addEventListener("click", e => {
                    if (e.target.classList.contains("stone-grids--stone")) {
                        const stoneId = e.target.getAttribute("data-stone-id");
                        triggerStoneChange(stoneId);
                    }
                });
            }
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    if (targetNode) {
        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    }
    const currentPage = new URL(window.location.href).pathname.replaceAll("/", " ").trim().replaceAll(" ", '--');
    document.body.classList.add(currentPage);

});