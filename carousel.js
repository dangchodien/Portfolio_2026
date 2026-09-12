/* =========================================
   CAROUSEL
========================================= */


document.addEventListener(

    "DOMContentLoaded",

    function () {


        createCursor();

        createCarousel();


    }

);



/* =========================================
   CUSTOM CURSOR
========================================= */


function createCursor() {


    const cursor =

        document.getElementById(
            "cursor"
        );


    let cursorX = 0;

    let cursorY = 0;


    document.addEventListener(

        "mousemove",

        function (event) {


            cursorX =

                event.clientX;


            cursorY =

                event.clientY;


            cursor.classList.add(
                "active"
            );


        }

    );


    function animateCursor() {


        cursor.style.left =

            cursorX + "px";


        cursor.style.top =

            cursorY + "px";


        requestAnimationFrame(
            animateCursor
        );


    }


    animateCursor();


    const links =

        document.querySelectorAll(
            "a"
        );


    links.forEach(

        function (link) {


            link.addEventListener(

                "mouseenter",

                function () {


                    cursor.classList.add(
                        "large"
                    );


                    const label =

                        link.dataset.cursor;


                    if (label) {


                        cursor
                            .querySelector("span")
                            .textContent =

                            label;


                    }


                }

            );


            link.addEventListener(

                "mouseleave",

                function () {


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

    );


}



/* =========================================
   CREATE CAROUSEL
========================================= */


function createCarousel() {


    const track =

        document.getElementById(
            "carouselTrack"
        );


    /*
    Add images twice.

    This allows
    infinite looping.
    */


    const images =

        [

            ...carouselImages,

            ...carouselImages

        ];


    images.forEach(

        function (

            imagePath,

            index

        ) {


            const imageContainer =

                document.createElement(
                    "div"
                );


            imageContainer.className =

                "carousel-item";


            const image =

                document.createElement(
                    "img"
                );


            image.src =

                imagePath;


            image.alt =

                "Portfolio work " +

                (index + 1);


            image.draggable =

                false;


            imageContainer.appendChild(
                image
            );


            track.appendChild(
                imageContainer
            );


        }

    );


    animateCarousel(
        track
    );


}



/* =========================================
   CAROUSEL ANIMATION
========================================= */


function animateCarousel(

    track

) {


    let position = 0;


    let velocity =

        0.50;


    let scrollVelocity =

        0;


    let lastScrollY =

        window.scrollY;


    /*
    Detect scroll direction
    */


    window.addEventListener(

        "scroll",

        function () {


            const currentScrollY =

                window.scrollY;


            const difference =

                currentScrollY

                -

                lastScrollY;


            /*
            Scroll down:
            increase movement
            to the right
            */


            if (

                difference > 0

            ) {


                scrollVelocity =

                    Math.min(

                        difference

                        *

                        0.08,

                        8

                    );


            }


            /*
            Scroll up:
            reverse movement
            */


            if (

                difference < 0

            ) {


                scrollVelocity =

                    Math.max(

                        difference

                        *

                        0.08,

                        -8

                    );


            }


            lastScrollY =

                currentScrollY;


        }

    );



    function animate() {


        /*
        Base movement.

        Positive movement means
        moving toward the right.
        */


        position +=

            velocity

            +

            scrollVelocity;


        /*
        Smoothly reduce
        scroll acceleration.
        */


        scrollVelocity *=

            0.92;


        /*
        Infinite loop.

        Reset once half
        the duplicated track
        has travelled.
        */


        const loopWidth =

            track.scrollWidth

            /

            2;


        if (

            position >

            loopWidth

        ) {


            position =

                position

                -

                loopWidth;


        }


        if (

            position <

            -

            loopWidth

        ) {


            position =

                position

                +

                loopWidth;


        }


        track.style.transform =

            `translateX(${position}px)`;


        requestAnimationFrame(
            animate
        );


    }


    animate();


}