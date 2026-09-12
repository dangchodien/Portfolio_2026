/* =========================================
   SITE INFORMATION
========================================= */

const siteContent = {

    name: "DANG PHAM",

    titleLine1: "DANG's",

    titleLine2: "ARCHIVE.",

    role: "MOTION / 3D / INTERACTIVE",

    location: "SAIGON, VIETNAM",

    year: "2026"

};



/* =========================================
   HERO GLB MODEL
========================================= */

/*

Change only the src when
you want another Blender model.

Recommended:

Blender
→ Export
→ glTF 2.0
→ GLB

*/

const heroModel = {

    src:
        "assets/models/Grand Saigon Market 3.glb",


    scale:
        2.4,


    position:
        [0, 0, 0],


    rotation:
        [0, 0, 0],


    wireframe:
        true,


    wireframeColor:
        0xffffff,


    opacity:
        0.28,


    animation: {

        enabled:
            true,

        speed:
            1,

        clip:
            0

    }

};



/* =========================================
   LANDING PAGE CAROUSEL
========================================= */

const landingCarouselMedia = [

    {
        type: "image",
        src: "assets/images/landing-page-carousel/Flycam 1_0134.jpg"
    },

    {
        type: "image",
        src: "assets/images/landing-page-carousel/Brigde Lights v2_0008.png"
    },

    {
        type: "image",
        src: "assets/images/landing-page-carousel/Phase 1_v2_0530.png"
    },

    {
        type: "image",
        src: "assets/images/landing-page-carousel/Playblast 2.2_0027.png"
    },

    {
        type: "image",
        src: "assets/images/landing-page-carousel/Dancing Tree_70605.png"
    },

    {
        type: "image",
        src: "assets/images/landing-page-carousel/Scene 3.1_0485.png"
    },

    {
        type: "image",
        src: "assets/images/landing-page-carousel/Screenshot 2026-08-28 011807.png"
    },

    {
        type: "image",
        src: "assets/images/landing-page-carousel/Screenshot 2026-08-28 013216.png"
    },

    {
        type: "image",
        src: "assets/images/landing-page-carousel/Screenshot 2026-08-28 014529.png"
    },

    {
        type: "image",
        src: "assets/images/landing-page-carousel/Screenshot 2026-08-28 014824.png"
    }

];



/* =========================================
   PROJECT DATA
========================================= */

/*

Add as many projects as you want.

The grid automatically rearranges.

Available media types:

{
    type: "image",
    src: "..."
}

or

{
    type: "video",
    src: "..."
}

Tags automatically become filters.

*/


const works = [


    /* =====================================
       WORK 01
    ====================================== */

    {

        id: 1,

        title:

            "MẮC KẸT Ở MARKET",
        year:

            "2025",

        tags:

            [
                "VJ",
                "3D",
                "Cultural Research"
            ],

        thumbnail:

            "assets/images/works/VJ_Mazed 1.jpg",

        description:

            "An audiovisual performance exploring the similarity of cultural and social aspects between modernized cities and the Vietnamese traditional market through generative visuals and live performance. The noise and unruly rhythms of the city resemble what many describe as “a marketplace.” Those who live here move through it like people within a market, as the city becomes a gathering place for exchange and connection. We come to this “market” in search of opportunities, to “navigate,” to “transform,” and ultimately to choose to stay, whether by circumstance or by will.",

        media:

            [

                {
                    type: "video",
                    src: "assets/videos/works/VJmazed/Flycam 1.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/VJmazed/Glitching Kiosks 3.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/VJmazed/Track Cam 2.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/VJmazed/Market Flycam 3.mp4"
                },

                {
                    type: "image",
                    src: "assets/images/works/VJ_Mazed 2.png"
                }

            ]

    },



    /* =====================================
       WORK 02
    ====================================== */

    {

        id: 2,

        title:

            "THƯỢNG NGUỒN (UPSTREAM)",

        year:

            "2026",

        tags:

            [
                "Audiovisual",
                "Projection Mapping",
                "Cultural Research"
            ],

        thumbnail:

            "assets/images/works/UPSTREAM_1.png",

        description:

            "Thượng Nguồn (Upstream) is a projection mapping performance exploring the activity of exchange through the culture of Vietnam. Every current begins upstream. In the floating markets of Southern Vietnam, boats drift, voices travel, and exchange flows like water. Here, the market is not a place, but a living rhythm that shapes memory and identity. As time moves forward, the current transforms into streets, structures, and eventually silent aisles. The flow becomes less visible, yet never disappears. In a fleeting moment, something familiar calls it back. The current turns. What once moved outward begins to return, completing a cycle where every ending finds its way back to its source.",

        media:

            [

                {
                    type: "video",
                    src: "assets/videos/works/terang26/Terang_split view 1_1.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/terang26/Terang_sample 1.mp4"
                },

                {
                    type:"image",
                    src:"assets/images/works/Terang_breakdown.png"
                },

                {
                    type: "image",
                    src: "assets/images/works/Terang_breakdown 2.png"
                }

            ]

    },



    /* =====================================
       WORK 03
    ====================================== */

    {

        id: 3,

        title:

            "VINA/V 03",

        year:

            "2025",

        tags:

            [
                "VJ",
                "3D",
                "Cultural Research",
                "Audiovisual"
            ],

        thumbnail:

            "assets/images/works/Vinav3_1.png",

        description:

            "At VINA/V 03, between scales and stripes, the city fractures into echoes of power. “Long Tranh Hổ Đấu” manifests as an audiovisual collision of opposing dominions, where myth becomes machinery, instinct confronts order, and yin and yang spiral endlessly against one another. The audio/visual set is a collaboration between Flux Collective and DJ Pingu",

        media:

            [

                {
                    type: "video",
                    src: "assets/videos/works/vinav3/VinaV recap.mp4"
                },

                {
                    type: "image",
                    src: "assets/images/works/vinav3.jpg"
                },

                {
                    type: "video",
                    src: "assets/videos/works/vinav3/ROOFS_Breakdown.mp4"
                },

            ]

    },



    /* =====================================
       WORK 04
    ====================================== */

    {

        id: 4,

        title:

            "MỘNG TÌNH - GREYD (Visualizer)",

        year:

            "2026",

        tags:

            [
                "3D",
                "Motion"
            ],

        thumbnail:

            "assets/images/works/GreyD_1.png",

        description:

            "3D visualizer section for the song Mộng Tình by GREYD, in collaboration with TheTripodGuys post-production team.",

        media:

            [

                {
                    type: "video",
                    src: "assets/videos/works/greyd/MongTinh_Tree_2803.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/greyd/greyd_breakdown.mp4"
                },

            ]

    },



    /* =====================================
       WORK 05
    ====================================== */

    {

        id: 5,

        title:

            "SỚM MAI",

        year:

            "2026",

        tags:

            [
                "3D",
                "Projection Mapping",
                "Cultural Research"
            ],

        thumbnail:

            "assets/images/works/Awake_1.png",

        description:

            "Sớm Mai is a projection mapping work created for Awake Light Festival 2026 in Dak Lak, Vietnam. Inspired by the landscapes and culture of the Ê Đê people, the work follows the quiet unfolding of dawn inside a traditional longhouse. As sunlight reaches the Central Highlands forest, the world emerges through the eyes of a child resting in a basket on their mother’s back. By midday, the forest awakens beneath a gentle breeze, while the child slowly drifts to sleep in the warmth of the sun.",

        media:

            [

                {
                    type: "video",
                    src: "assets/videos/works/Awake/awake split view.mp4"
                },

                {
                    type: "image",
                    src: "assets/images/works/awake 1.png"
                },

                {
                    type: "image",
                    src: "assets/images/works/awake 2.png"
                },

            ]

    },

    {

        id: 6,

        title:

            "APL 2026 Trailer",

        year:

            "2026",

        tags:

            [
                "3D",
                "Motion"
            ],

        thumbnail:

            "assets/images/works/APL_1.png",

        description:

            "3D VFX section for the trailer of APL 2026. In collaboration with TheTripodGuys post-production team.",

        media:

            [

                {
                    type: "video",
                    src: "assets/videos/works/2406_Final_1.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/APL/Breakdown.mp4"
                }

            ]

    },

    {

        id: 7,

        title:

            "B40 Restaurant",

        year:

            "2026",

        tags:

            [
                "3D",
                "Motion"
            ],

        thumbnail:

            "assets/images/works/B40.png",

        description:

            "Event-based daily 3D visual for B40 restaurant in Da Nang, Vietnam.",

        media:

            [

                {
                    type: "video",
                    src: "assets/videos/works/B40/Dishwash 1.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/B40/Fallen Angel.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/B40/Water Slide.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/B40/B40_Tet 1.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/B40/B40_Xmas_2.mp4"
                }

            ]

    },

    {

        id: 8,

        title:

            "LOLLA Nightclub",

        year:

            "2026",

        tags:

            [
                "3D",
                "Motion"
            ],

        thumbnail:

            "assets/images/works/Lolla 2.png",

        description:

            "Event-based daily 3D visual for Lolla nightclub in Sai Gon, Vietnam.",

        media:

            [

                {
                    type: "video",
                    src: "assets/videos/works/LOLLA/Lolla_GroovyRoom_1.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/LOLLA/Lolla_GroovyRoom_2.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/LOLLA/F1_Xray.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/LOLLA/Cockpit.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/LOLLA/Tunnel.mp4"
                }

            ]

    },

    {

        id: 9,

        title:

            "Midnight Nightclub",

        year:

            "2026",

        tags:

            [
                "3D",
                "Motion"
            ],

        thumbnail:

            "assets/images/works/MIDNIGHT 2.png",

        description:

            "Event-based daily 3D visual for Midnight Nightclub in Ha Noi, Vietnam.",

        media:

            [

                {
                    type: "video",
                    src: "assets/videos/works/Midnight/FIFA.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/Midnight/Cake by the Ocean.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/Midnight/Flashback party.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/Midnight/M9_Jingle Hell.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/Midnight/M9_Main Visual 1.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/Midnight/NASCAR_3.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/Midnight/Vietdropfunk 3.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/Midnight/Vietdropfunk 4.mp4"
                }

            ]

    },

    {

        id: 10,

        title:

            "NEIGHBORHOOD Nightclub",

        year:

            "2026",

        tags:

            [
                "3D",
                "Motion"
            ],

        thumbnail:

            "assets/images/works/nbh.png",

        description:

            "Event-based daily 3D visual for NEIGHBORHOOD Nightclub in Sai Gon, Vietnam.",

        media:

            [

                {
                    type: "video",
                    src: "assets/videos/works/NBH/Flight Map.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/NBH/NBH_Afterdark Toilet.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/NBH/JOE LOBEL_3.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/NBH/DearExes 2.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/NBH/Broll_Vietjet.mp4"
                }

                
            ]

    },

    {
        id: 11,

        title:
            "City of Miracles - 2026",

        year:
            "2026", 

        tags:
            [
                "3D",
                "Motion"
            ],

        thumbnail:
            "assets/images/works/ntpmm.jpg",

        description:
            "3D visual for the musical artists: Justatee, LowG, Marzuz performances at City of Miracles concert - 2026 ",

        media:
            [
                {
                    type: "video",
                    src: "assets/videos/works/ntpmm/JT.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/ntpmm/LowG.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/ntpmm/Marzuz.mp4"
                }
            ]
    },

    {
        id: 12,

        title:
            "All Eyes on Us - ATSH2025 (Music Video) ",

        year:
            "2025", 

        tags:
            [
                "3D",
                "Motion",
                "Production Design"
            ],

        thumbnail:
            "assets/images/works/atsh.png",

        description:
            "Visual LED design as part of the production design for the music video All Eyes on Us - ATSH 2025",

        media:
            [
                {
                    type: "video",
                    src: "assets/videos/works/ATSH/FDown.vn_Instagram_Video_Downloader_9111.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/ATSH/FDown.vn_Instagram_Video_Downloader_8f6e.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/ATSH/FDown.vn_Instagram_Video_Downloader_e317.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/ATSH/FDown.vn_Instagram_Video_Downloader_c752.mp4"
                }
            ]
    },

    {
        id: 13,

        title:
            "Vườn Hồng - Văn Mai Hương ft. Chipu (Music Video)",

        year:
            "2025", 

        tags:
            [
                "3D",
                "Motion",
                "Production Design"
            ],

        thumbnail:
            "assets/images/works/vmh.png",

        description:
            "Assistant on the production design and visual LED design of the music video Vườn Hồng - Văn Mai Hương ft. Chipu",

        media:
            [
                {
                    type: "video",
                    src: "assets/videos/works/vmh/FDown.vn_Instagram_Video_Downloader_dc81.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/vmh/FDown.vn_Instagram_Video_Downloader_df18.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/vmh/FDown.vn_Instagram_Video_Downloader_191b.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/vmh/FDown.vn_Instagram_Video_Downloader_abf5.mp4"
                },

                {
                    type: "video",
                    src: "assets/videos/works/vmh/FDown.vn_Instagram_Video_Downloader_69f5.mp4"
                }
            ]
    },


];