document.addEventListener("DOMContentLoaded", () => {
    const galaxyDiv = document.createElement('div');
    galaxyDiv.innerHTML = `
    <div id="galaxy">
        <div class="solar-system">
            <a href="#magician" class="galaxy-logo">
                <dotlottie-player src="./star.lottie" background="transparent" speed="1" style="width: 300px; height: 300px" direction="1" mode="normal" loop autoplay></lottie-player>
            </a>

            <div class="orbit-div">
                <div class="orbit-background">
                </div>
                <div class="orbit-grid">
                    <div class="orbit-stone-1">
                        <img class="img-stone img-stone-1" src="./web_assets/1.png">
                    </div>
                    <div class="orbit-stone-2">
                        <img class="img-stone img-stone-2" src="./web_assets/2.png">
                    </div>
                    <div class="orbit-stone-3">
                        <img class="img-stone img-stone-3" src="./web_assets/3.png">
                    </div>
                    <div class="orbit-stone-4">
                        <img class="img-stone img-stone-4" src="web_assets/4.png">
                    </div>
                    <div class="orbit-stone-5">
                        <img class="img-stone img-stone-5" src="web_assets/5.png">
                    </div>
                </div>
            </div>
        </div>
        <div id="galaxy-effects">
            <dotlottie-player data-is-ix2-target="1" class="shooting-star-1" animation-type="lottie" direction="1" src="./night_sky.lottie" loop intermission="4" autoplay="1" renderer="svg"></dotlottie-player>
        </div>
    </div>    
    `;
    document.body.appendChild(galaxyDiv);
});