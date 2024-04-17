document.addEventListener("DOMContentLoaded", () => {

    const currentPage = new URL(window.location.href).pathname
        .replaceAll("/", " ")
        .trim()
        .replaceAll(" ", "--");
    if (currentPage) {
        document.body.classList.add(currentPage);
    }
});

function setupNebulaShow() {
    const targetNode = document.getElementById("tBaMU1");
    const triggerStoneChange = function (stoneId) {
        document
            .querySelector(`.stone-grids--stone.active`)
            ?.classList?.remove("active");
        const stone = document.querySelector(
            `.stone-grids--stone[data-stone-id='${stoneId}']`
        );
        stone.classList.add("active");
        document
            .querySelector(`.nebula-show--stone.active`)
            ?.classList?.remove("active");
        document.querySelector(`.nebula-show--stone.active > video`)?.pause();
        document
            .querySelector(`.nebula-show--stone[data-stone-id='${stoneId}']`)
            .classList.add("active");
        document.querySelector(`.nebula-show--stone.active > video`)?.play();
    };
    // Callback function to execute when mutations are observed
    targetNode.style.width = "100%";
    const galaxy = document.getElementById('galaxy');
    const solarSystem = document.querySelector('.solar-system');
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
function luckyStarBuildThresholdList() {
    let thresholds = [];
    let numSteps = 50;

    for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}

function luckyStarAddObserver(el, options) {
    let observerOptions = Object.assign(
        {
            root: null,
            rootMargin: "0px",
            threshold: luckyStarBuildThresholdList(),
        },
        options
    );
    // Check if `IntersectionObserver` is supported
    if (!("IntersectionObserver" in window)) {
        entry.target.classList.add("active");
        // We don't need to execute the rest of the code
        return;
    }

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.style.setProperty(
                    "--lucky-star--scroll",
                    entry.intersectionRatio
                );
                if (entry.intersectionRatio >= 1) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);
    observer.observe(el);
}

// Usage

window.sbsdk.ready(function () {
    let els = document.querySelectorAll(".scroll-to-view--watch");
    els = Array.from(els);
    els.forEach((el) => {
        luckyStarAddObserver(el, options);
    });
    setupNebulaShow();
});
