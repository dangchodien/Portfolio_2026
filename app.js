/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initCursor();


        /* LANDING PAGE */

        if (
            document.getElementById(
                "heroCanvas"
            )
        ) {

            loadSiteContent();

            initHero3D();

            initLandingCarousel();

            initLandingAboutTitle();

        }


        /* WORKS PAGE */

        if (
            document.getElementById(
                "worksGrid"
            )
        ) {

            initWorksPage();

        }

    }
);



/* =========================================
   SITE CONTENT
========================================= */

function loadSiteContent() {


    const mappings = {

        name:
            siteContent.name,

        titleLine1:
            siteContent.titleLine1,

        titleLine2:
            siteContent.titleLine2,

        role:
            siteContent.role,

        location:
            siteContent.location,

        year:
            siteContent.year

    };


    Object.keys(
        mappings
    ).forEach(

        function (id) {


            const element =

                document.getElementById(
                    id
                );


            if (element) {

                element.textContent =
                    mappings[id];

            }


        }

    );


}



/* =========================================
   CUSTOM CURSOR
========================================= */

function initCursor() {


    const cursor =

        document.getElementById(
            "cursor"
        );


    if (!cursor) {

        return;

    }


    let mouseX = 0;

    let mouseY = 0;

    let cursorX = 0;

    let cursorY = 0;



    window.addEventListener(

        "mousemove",

        function (event) {


            mouseX =
                event.clientX;

            mouseY =
                event.clientY;


            cursor.classList.add(
                "active"
            );


        }

    );



    function animateCursor() {


        cursorX +=

            (
                mouseX
                -
                cursorX
            )

            *

            0.18;


        cursorY +=

            (
                mouseY
                -
                cursorY
            )

            *

            0.18;


        cursor.style.left =

            cursorX + "px";


        cursor.style.top =

            cursorY + "px";


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();



    document.addEventListener(

        "mouseover",

        function (event) {


            const target =

                event.target.closest(

                    "a, button, .work-card"

                );


            if (!target) {

                return;

            }


            cursor.classList.add(
                "large"
            );


            const label =

                target.dataset.cursor;


            if (label) {

                cursor
                    .querySelector("span")
                    .textContent =
                    label;

            }


        }

    );



    document.addEventListener(

        "mouseout",

        function (event) {


            const target =

                event.target.closest(

                    "a, button, .work-card"

                );


            if (!target) {

                return;

            }


            cursor.classList.remove(
                "large"
            );


            cursor
                .querySelector("span")
                .textContent =
                "VIEW";


        }

    );


}

/* =========================================
   LANDING ABOUT TITLE
========================================= */

function initLandingAboutTitle() {


    const aboutTitle =

        document.querySelector(
            ".about-title"
        );


    if (!aboutTitle) {

        return;

    }



    const titleLines =

        aboutTitle.querySelectorAll(
            "h2"
        );



    /* =====================================
       MAKE TITLE INTERACTIVE
    ====================================== */

    aboutTitle.setAttribute(
        "role",
        "link"
    );


    aboutTitle.setAttribute(
        "tabindex",
        "0"
    );


    aboutTitle.setAttribute(
        "aria-label",
        "Open About page"
    );


    aboutTitle.dataset.cursor =

        "ABOUT";


    aboutTitle.style.cursor =

        "pointer";


    aboutTitle.style.transition =

        "transform 0.55s cubic-bezier(.16,1,.3,1)";



    /* =====================================
       TITLE LINE TRANSITIONS
    ====================================== */

    titleLines.forEach(

        function (line) {


            line.style.transition =

                `
                transform
                0.55s
                cubic-bezier(.16,1,.3,1),

                letter-spacing
                0.55s
                cubic-bezier(.16,1,.3,1)
                `;


        }

    );



    /* =====================================
       HOVER / FOCUS
    ====================================== */

    function activateTitle() {


        aboutTitle.style.transform =

            "scale(0.985)";


        if (
            titleLines[0]
        ) {

            titleLines[0]
                .style
                .transform =

                "translateX(2vw)";

        }


        if (
            titleLines[1]
        ) {

            titleLines[1]
                .style
                .transform =

                "translateX(-2vw)";

        }

    }



    function deactivateTitle() {


        aboutTitle.style.transform =

            "";


        titleLines.forEach(

            function (line) {

                line.style.transform =
                    "";

            }

        );

    }



    aboutTitle.addEventListener(

        "mouseenter",

        activateTitle

    );


    aboutTitle.addEventListener(

        "mouseleave",

        deactivateTitle

    );


    aboutTitle.addEventListener(

        "focus",

        activateTitle

    );


    aboutTitle.addEventListener(

        "blur",

        deactivateTitle

    );



    /* =====================================
       OPEN ABOUT
    ====================================== */

    function openAboutPage() {

        window.location.href =

            "about.html";

    }


    aboutTitle.addEventListener(

        "click",

        openAboutPage

    );



    /* KEYBOARD */

    aboutTitle.addEventListener(

        "keydown",

        function (event) {


            if (
                event.key === "Enter"
                ||
                event.key === " "
            ) {

                event.preventDefault();

                openAboutPage();

            }

        }

    );


}


/* =========================================
   LANDING HERO THREE.JS
========================================= */

function initHero3D() {


    /* =====================================
       CHECK THREE.JS
    ====================================== */

    if (
        typeof THREE === "undefined"
        ||
        typeof THREE.GLTFLoader ===
        "undefined"
    ) {

        console.warn(

            "Three.js or GLTFLoader is unavailable."

        );

        return;

    }



    const canvas =

        document.getElementById(
            "heroCanvas"
        );


    const hero =

        document.querySelector(
            ".landing-page"
        );


    if (
        !canvas ||
        !hero
    ) {

        return;

    }



    /* =====================================
       RENDERER
    ====================================== */

    const renderer =

        new THREE.WebGLRenderer({

            canvas:
                canvas,

            antialias:
                true,

            alpha:
                true

        });


    renderer.setPixelRatio(

        Math.min(

            window.devicePixelRatio,

            2

        )

    );



    /* =====================================
       SCENE
    ====================================== */

    const scene =

        new THREE.Scene();



    /* =====================================
       CAMERA
    ====================================== */

    const camera =

        new THREE.PerspectiveCamera(

            45,

            1,

            0.1,

            100

        );


    camera.position.set(

        0,

        0,

        7

    );



    /* =====================================
       MODEL GROUP
    ====================================== */

    const modelGroup =

        new THREE.Group();


    scene.add(
        modelGroup
    );



    /* =====================================
       ANIMATION
    ====================================== */

    let mixer = null;


    const clock =

        new THREE.Clock();



    /* =====================================
       GLB LOADER
    ====================================== */

    const loader =

        new THREE.GLTFLoader();



    loader.load(


        heroModel.src,


        /* =================================
           SUCCESS
        ================================= */

        function (gltf) {


            const model =

                gltf.scene;



            /* =================================
               SCALE
            ================================= */

            model.scale.setScalar(

                typeof heroModel.scale ===
                "number"

                    ?

                    heroModel.scale

                    :

                    1

            );



            /* =================================
               POSITION
            ================================= */

            const position =

                heroModel.position
                ||
                [0, 0, 0];


            model.position.set(

                position[0] || 0,

                position[1] || 0,

                position[2] || 0

            );



            /* =================================
               ROTATION
            ================================= */

            const rotation =

                heroModel.rotation
                ||
                [0, 0, 0];


            model.rotation.set(

                rotation[0] || 0,

                rotation[1] || 0,

                rotation[2] || 0

            );



            /* =================================
               WIREFRAME
            ================================= */

            model.traverse(

                function (child) {


                    if (
                        !child.isMesh
                    ) {

                        return;

                    }


                    const wireMaterial =

                        new THREE.MeshBasicMaterial({

                            color:

                                typeof
                                heroModel
                                    .wireframeColor
                                ===
                                "number"

                                    ?

                                    heroModel
                                        .wireframeColor

                                    :

                                    0xffffff,


                            wireframe:

                                heroModel
                                    .wireframe
                                !==
                                false,


                            transparent:

                                true,


                            opacity:

                                typeof
                                heroModel.opacity
                                ===
                                "number"

                                    ?

                                    heroModel.opacity

                                    :

                                    0.28,


                            side:

                                THREE.DoubleSide

                        });


                    /*
                    Helps older Three.js builds
                    with animated skinned meshes.
                    */

                    if (
                        "skinning"
                        in
                        wireMaterial
                    ) {

                        wireMaterial.skinning =

                            child.isSkinnedMesh;

                    }


                    child.material =

                        wireMaterial;


                }

            );



            /* =================================
               GLB ANIMATION
            ================================= */

            if (

                gltf.animations
                &&
                gltf.animations.length > 0

            ) {


                mixer =

                    new THREE.AnimationMixer(
                        model
                    );



                const animationSettings =

                    heroModel.animation
                    ||
                    {};



                /*
                Default:
                play all animation clips.
                */

                let clipsToPlay =

                    gltf.animations;



                /* =============================
                   SELECT CLIP BY INDEX
                ============================= */

                if (

                    typeof
                    animationSettings.clip
                    ===
                    "number"

                ) {


                    const selected =

                        gltf.animations[
                            animationSettings.clip
                        ];


                    clipsToPlay =

                        selected

                            ?

                            [selected]

                            :

                            [];

                }



                /* =============================
                   SELECT CLIP BY NAME
                ============================= */

                if (

                    typeof
                    animationSettings.clip
                    ===
                    "string"

                ) {


                    const selected =

                        THREE.AnimationClip
                            .findByName(

                                gltf.animations,

                                animationSettings.clip

                            );


                    clipsToPlay =

                        selected

                            ?

                            [selected]

                            :

                            [];

                }



                /* =============================
                   PLAY
                ============================= */

                if (

                    animationSettings
                        .enabled
                    !==
                    false

                ) {


                    clipsToPlay.forEach(

                        function (clip) {


                            const action =

                                mixer.clipAction(
                                    clip
                                );


                            action.setLoop(

                                THREE.LoopRepeat,

                                Infinity

                            );


                            action.clampWhenFinished =

                                false;



                            action.timeScale =

                                typeof
                                animationSettings.speed
                                ===
                                "number"

                                    ?

                                    animationSettings.speed

                                    :

                                    1;


                            action.play();


                        }

                    );


                }


            }



            /* =================================
               ADD MODEL
            ================================= */

            modelGroup.add(
                model
            );



            console.log(

                "GLB loaded:",

                heroModel.src,

                "| animation clips:",

                gltf.animations
                    ?
                    gltf.animations.length
                    :
                    0

            );


        },



        /* =================================
           PROGRESS
        ================================= */

        function (progress) {


            if (
                progress.total
            ) {


                const percent =

                    Math.round(

                        (
                            progress.loaded
                            /
                            progress.total
                        )

                        *

                        100

                    );


                console.log(

                    "GLB "
                    +
                    percent
                    +
                    "% loaded"

                );


            }


        },



        /* =================================
           ERROR
        ================================= */

        function (error) {


            console.error(

                "GLB loading error:",

                heroModel.src,

                error

            );


        }


    );



    /* =====================================
       CURSOR
    ====================================== */

    let mouseX = 0;

    let mouseY = 0;


    let smoothMouseX = 0;

    let smoothMouseY = 0;



    window.addEventListener(

        "mousemove",

        function (event) {


            mouseX =

                (
                    event.clientX
                    /
                    window.innerWidth
                )

                *

                2

                -

                1;



            mouseY =

                (
                    event.clientY
                    /
                    window.innerHeight
                )

                *

                2

                -

                1;


        },

        {
            passive: true
        }

    );



    /* =====================================
       SCROLL
    ====================================== */

    let scrollProgress = 0;


    window.addEventListener(

        "scroll",

        function () {


            scrollProgress =

                Math.max(

                    0,

                    Math.min(

                        window.scrollY
                        /
                        window.innerHeight,

                        1

                    )

                );


        },

        {
            passive: true
        }

    );



    /* =====================================
       RESIZE
    ====================================== */

    function resizeHero() {


        const width =

            hero.clientWidth;


        const height =

            hero.clientHeight;


        renderer.setSize(

            width,

            height,

            false

        );


        camera.aspect =

            width
            /
            height;


        camera.updateProjectionMatrix();


    }


    resizeHero();


    window.addEventListener(

        "resize",

        resizeHero

    );



    /* =====================================
       RENDER LOOP
    ====================================== */

    function animateHero() {


        requestAnimationFrame(
            animateHero
        );



        const delta =

            Math.min(

                clock.getDelta(),

                0.05

            );



        /* =================================
           SMOOTH MOUSE
        ================================= */

        smoothMouseX +=

            (
                mouseX
                -
                smoothMouseX
            )

            *

            0.035;


        smoothMouseY +=

            (
                mouseY
                -
                smoothMouseY
            )

            *

            0.035;



        /* =================================
           MOUSE ROTATION
        ================================= */

        modelGroup.rotation.x =

            smoothMouseY
            *
            0.22;


        modelGroup.rotation.y +=

            0.0025;


        modelGroup.rotation.y +=

            smoothMouseX
            *
            0.0015;



        /* =================================
           SCROLL MOVEMENT
        ================================= */

        modelGroup.position.z =

            scrollProgress
            *
            2.5;


        modelGroup.rotation.z =

            scrollProgress
            *
            0.35;



        /* =================================
           BLENDER / GLB ANIMATION
        ================================= */

        if (
            mixer
        ) {

            mixer.update(
                delta
            );

        }



        renderer.render(

            scene,

            camera

        );


    }


    animateHero();


}



/* =========================================
   LANDING PAGE CAROUSEL
========================================= */

function initLandingCarousel() {

    const track =
        document.getElementById(
            "landingCarouselTrack"
        );


    if (!track) {
        return;
    }


    /* =====================================
       CREATE ONE MEDIA SET
    ====================================== */

    function createMediaSet() {

        const fragment =
            document.createDocumentFragment();


        landingCarouselMedia.forEach(

            function (media) {


                const item =
                    document.createElement(
                        "figure"
                    );


                item.className =
                    "landing-carousel-item";


                /* ==========================
                   IMAGE
                ========================== */

                if (
                    media.type === "image"
                ) {

                    const image =
                        document.createElement(
                            "img"
                        );


                    image.src =
                        media.src;


                    image.alt =
                        "";


                    image.draggable =
                        false;


                    image.loading =
                        "eager";


                    item.appendChild(
                        image
                    );

                }


                /* ==========================
                   VIDEO
                ========================== */

                if (
                    media.type === "video"
                ) {

                    const video =
                        document.createElement(
                            "video"
                        );


                    video.src =
                        media.src;


                    video.autoplay =
                        true;


                    video.loop =
                        true;


                    video.muted =
                        true;


                    video.playsInline =
                        true;


                    video.preload =
                        "metadata";


                    video.controls =
                        true;


                    video.disablePictureInPicture =
                        true;


                    video.setAttribute(
                        "muted",
                        ""
                    );


                    video.setAttribute(
                        "playsinline",
                        ""
                    );


                    video.setAttribute(
                        "webkit-playsinline",
                        ""
                    );


                    video.setAttribute(
                        "tabindex",
                        "-1"
                    );


                    item.appendChild(
                        video
                    );


                    /* Try autoplay */

                    const playPromise =
                        video.play();


                    if (
                        playPromise !==
                        undefined
                    ) {

                        playPromise.catch(
                            function () {

                                /*
                                Browser may temporarily
                                postpone autoplay.
                                */

                            }
                        );

                    }

                }


                fragment.appendChild(
                    item
                );


            }

        );


        return fragment;

    }



    /* =====================================
       THREE COPIES
       
       [ COPY A ][ COPY B ][ COPY C ]

       We begin on COPY B.

       Therefore there is always media
       available on BOTH sides.
    ====================================== */

    track.appendChild(
        createMediaSet()
    );


    track.appendChild(
        createMediaSet()
    );


    track.appendChild(
        createMediaSet()
    );



    /* =====================================
       WAIT UNTIL MEDIA HAS LAYOUT
    ====================================== */

    requestAnimationFrame(

        function () {

            requestAnimationFrame(

                startCarousel

            );

        }

    );



    function startCarousel() {


        /*
        One complete carousel set
        occupies exactly 1/3
        of the total track.
        */

        let setWidth =
            track.scrollWidth / 3;


        /*
        Start on middle copy.

        Negative transform means
        we've moved the track left,
        placing COPY B in viewport.
        */

        let position =
            -setWidth;



        /* =================================
           MOVEMENT
        ================================= */

        const baseSpeed =
            -0.35;


        let velocity =
            baseSpeed;


        let scrollImpulse =
            0;


        let previousScrollY =
            window.scrollY;



        /* =================================
           SCROLL MOMENTUM
        ================================= */

        window.addEventListener(

            "scroll",

            function () {


                const currentScrollY =
                    window.scrollY;


                const delta =
                    currentScrollY
                    -
                    previousScrollY;


                /*
                Scroll DOWN

                Negative movement →
                carousel moves faster left.
                */

                if (
                    delta > 0
                ) {

                    scrollImpulse -=

                        Math.min(
                            delta * 0.045,
                            8
                        );

                }


                /*
                Scroll UP

                Positive movement →
                carousel reverses right.
                */

                if (
                    delta < 0
                ) {

                    scrollImpulse +=

                        Math.min(
                            Math.abs(delta)
                            * 0.045,
                            8
                        );

                }


                scrollImpulse =

                    Math.max(

                        -10,

                        Math.min(
                            10,
                            scrollImpulse
                        )

                    );


                previousScrollY =
                    currentScrollY;


            },

            {
                passive: true
            }

        );



        /* =================================
           RESIZE
        ================================= */

        window.addEventListener(

            "resize",

            function () {


                setWidth =
                    track.scrollWidth
                    /
                    3;


                /*
                Return safely to
                middle copy after resize.
                */

                position =
                    -setWidth;


            }

        );



        /* =================================
           ANIMATION LOOP
        ================================= */

        function animate() {


            /*
            Gradually return toward
            natural movement speed.
            */

            velocity +=

                (
                    baseSpeed
                    -
                    velocity
                )

                *

                0.02;



            /*
            Apply scroll impulse.
            */

            velocity +=

                scrollImpulse
                *
                0.07;



            /*
            Fade impulse.
            */

            scrollImpulse *=
                0.9;



            position +=
                velocity;



            /*
            =================================
            INFINITE NORMALIZATION

            We remain inside:

            COPY A | COPY B | COPY C

            Whenever we enter A or C,
            jump exactly one set width.

            Because the content is identical,
            the jump is invisible.
            =================================
            */


            if (
                position <=
                -setWidth * 2
            ) {

                position +=
                    setWidth;

            }


            if (
                position >=
                0
            ) {

                position -=
                    setWidth;

            }



            track.style.transform =

                `translate3d(
                    ${position}px,
                    0,
                    0
                )`;


            requestAnimationFrame(
                animate
            );


        }


        animate();

    }

}



/* =========================================
   WORKS PAGE
========================================= */

function initWorksPage() {


    const grid =

        document.getElementById(
            "worksGrid"
        );


    const filters =

        document.getElementById(
            "filterButtons"
        );


    let activeFilter =

        "All";



    /* =====================================
       CREATE FILTER LIST
    ====================================== */

    const tagSet =

        new Set();


    works.forEach(

        function (work) {


            work.tags.forEach(

                function (tag) {

                    tagSet.add(tag);

                }

            );


        }

    );


    const availableFilters =

        [
            "All",
            ...tagSet
        ];



    availableFilters.forEach(

        function (filterName) {


            const button =

                document.createElement(
                    "button"
                );


            button.className =

                "filter-button";


            if (

                filterName ===
                "All"

            ) {

                button.classList.add(
                    "active"
                );

            }


            button.textContent =

                filterName;



            button.addEventListener(

                "click",

                function () {


                    activeFilter =

                        filterName;


                    document
                        .querySelectorAll(
                            ".filter-button"
                        )
                        .forEach(

                            function (element) {

                                element.classList.remove(
                                    "active"
                                );

                            }

                        );


                    button.classList.add(
                        "active"
                    );


                    renderWorks();


                }

            );


            filters.appendChild(
                button
            );


        }

    );



    /* =====================================
       RENDER GRID
    ====================================== */

    function renderWorks() {


        grid.innerHTML =
            "";


        const filtered =

            works.filter(

                function (work) {


                    return (

                        activeFilter ===
                        "All"

                        ||

                        work.tags.includes(
                            activeFilter
                        )

                    );


                }

            );



        filtered.forEach(

            function (work) {


                const card =

                    document.createElement(
                        "article"
                    );


                card.className =

                    "work-card";


                card.dataset.cursor =

                    "OPEN";


                card.innerHTML = `

                    <img
                        src="${work.thumbnail}"
                        alt="${work.title}"
                    >

                    <div class="work-card-overlay">

                        <div class="work-card-title">

                            <h2>
                                ${work.title}
                            </h2>

                            <span>
                                ${work.year}
                            </span>

                        </div>

                    </div>

                `;



                card.addEventListener(

                    "click",

                    function () {

                        openProjectModal(
                            work
                        );

                    }

                );


                grid.appendChild(
                    card
                );


            }

        );


    }


    renderWorks();



    /* =====================================
       MODAL
    ====================================== */

    const modal =

        document.getElementById(
            "projectModal"
        );


    const backdrop =

        document.getElementById(
            "modalBackdrop"
        );


    const close =

        document.getElementById(
            "modalClose"
        );


    const previous =

        document.getElementById(
            "modalPrev"
        );


    const next =

        document.getElementById(
            "modalNext"
        );


    let currentProject =

        null;


    let currentMediaIndex =

        0;



    function openProjectModal(

        work

    ) {


        currentProject =

            work;


        currentMediaIndex =

            0;



        document
            .getElementById(
                "modalTitle"
            )
            .textContent =

            work.title;



        document
            .getElementById(
                "modalYear"
            )
            .textContent =

            work.year;



        document
            .getElementById(
                "modalDescription"
            )
            .textContent =

            work.description;



        const tagsContainer =

            document.getElementById(
                "modalTags"
            );


        tagsContainer.innerHTML =

            work.tags
                .map(

                    function (tag) {

                        return `<span>${tag}</span>`;

                    }

                )
                .join("");



        renderModalMedia();



        modal.classList.add(
            "open"
        );


        document.body.classList.add(
            "modal-open"
        );


    }



    function renderModalMedia() {


        if (!currentProject) {

            return;

        }


        const stage =

            document.getElementById(
                "modalMediaStage"
            );


        const media =

            currentProject.media[
                currentMediaIndex
            ];



        if (

            media.type ===
            "video"

        ) {


            stage.innerHTML = `

                <video
                    src="${media.src}"
                    autoplay
                    muted
                    loop
                    playsinline
                    controls
                ></video>

            `;


        } else {


            stage.innerHTML = `

                <img
                    src="${media.src}"
                    alt="${currentProject.title}"
                >

            `;


        }



        document
            .getElementById(
                "modalCounter"
            )
            .textContent =

            `${String(
                currentMediaIndex + 1
            ).padStart(2, "0")}

            /

            ${String(
                currentProject.media.length
            ).padStart(2, "0")}`;


    }



    function closeModal() {


        modal.classList.remove(
            "open"
        );


        document.body.classList.remove(
            "modal-open"
        );


        document
            .getElementById(
                "modalMediaStage"
            )
            .innerHTML =
            "";


    }



    function changeMedia(

        direction

    ) {


        if (!currentProject) {

            return;

        }


        currentMediaIndex +=

            direction;


        if (

            currentMediaIndex <
            0

        ) {

            currentMediaIndex =

                currentProject.media.length
                -
                1;

        }


        if (

            currentMediaIndex >=
            currentProject.media.length

        ) {

            currentMediaIndex =
                0;

        }


        renderModalMedia();


    }



    close.addEventListener(

        "click",

        closeModal

    );


    backdrop.addEventListener(

        "click",

        closeModal

    );


    previous.addEventListener(

        "click",

        function () {

            changeMedia(-1);

        }

    );


    next.addEventListener(

        "click",

        function () {

            changeMedia(1);

        }

    );



    window.addEventListener(

        "keydown",

        function (event) {


            if (

                !modal.classList.contains(
                    "open"
                )

            ) {

                return;

            }


            if (

                event.key ===
                "Escape"

            ) {

                closeModal();

            }


            if (

                event.key ===
                "ArrowLeft"

            ) {

                changeMedia(-1);

            }


            if (

                event.key ===
                "ArrowRight"

            ) {

                changeMedia(1);

            }


        }

    );


}