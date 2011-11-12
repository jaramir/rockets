var cards = [
    { stack: 'crew', faces: [
        { img: 'CrewESA.png', mass: 1, radhard: 4, isru: 4, thrust: 8, cons: 6, opency: 2 }
    ] },
    { stack: 'crew', faces: [
        { img: 'CrewNASA.png', mass: 1, radhard: 5, isru: 4, thrust: 9, cons: 6, opency: 2 }
    ] },
    { stack: 'crew', faces: [
        { img: 'CrewPRC.png', mass: 1, radhard: 4, isru: 4, thrust: 9, cons: 6, opency: 2 }
    ] },
    { stack: 'crew', faces: [
        { img: 'CrewShimizu.png', mass: 1, radhard: 4, isru: 4 }
    ] },
    { stack: 'crew', faces: [
        { img: 'CrewUN.png', mass: 0, radhard: 3, isru: 4 }
    ] },

    /* * * * * * * * * * * * * * * * * */

    { stack: 'generator', landscape: true, faces: [
        { img: 'peGen_1f.png' },
        { img: 'peGen_1b.png' }
    ] },
    { stack: 'generator', landscape: true, faces: [
        { img: 'peGen_2f.png' },
        { img: 'peGen_2b.png' }
    ] },
    { stack: 'generator', landscape: true, faces: [
        { img: 'peGen_3f.png' },
        { img: 'peGen_3b.png' }
    ] },
    { stack: 'generator', landscape: true, faces: [
        { img: 'peGen_4f.png' },
        { img: 'peGen_4b.png' }
    ] },
    { stack: 'generator', landscape: true, faces: [
        { img: 'peGen_5f.png' },
        { img: 'peGen_5b.png' }
    ] },
    { stack: 'generator', landscape: true, faces: [
        { img: 'peGen_6f.png' },
        { img: 'peGen_6b.png' }
    ] },
    { stack: 'generator', landscape: true, faces: [
        { img: 'peGen_7f.png' },
        { img: 'peGen_7b.png' }
    ] },
    { stack: 'generator', landscape: true, faces: [
        { img: 'peGen_8f.png' },
        { img: 'peGen_8b.png' }
    ] },
    { stack: 'generator', landscape: true, faces: [
        { img: 'peGen_9f.png' },
        { img: 'peGen_9b.png' }
    ] },

    /* * * * * * * * * * * * * * * * * */

    { stack: 'radiator', faces: [
        { img: 'peRad_1fl.png' },
        { img: 'peRad_1fh.png' },
        { img: 'peRad_1bl.png' },
        { img: 'peRad_1bh.png' }
    ] },
    { stack: 'radiator', faces: [
        { img: 'peRad_2fl.png' },
        { img: 'peRad_2fh.png' },
        { img: 'peRad_2bl.png' },
        { img: 'peRad_2bh.png' }
    ] },
    { stack: 'radiator', faces: [
        { img: 'peRad_3fl.png' },
        { img: 'peRad_3fh.png' },
        { img: 'peRad_3bl.png' },
        { img: 'peRad_3bh.png' }
    ] },
    { stack: 'radiator', faces: [
        { img: 'peRad_4fl.png' },
        { img: 'peRad_4fh.png' },
        { img: 'peRad_4bl.png' },
        { img: 'peRad_4bh.png' }
    ] },
    { stack: 'radiator', faces: [
        { img: 'peRad_5fl.png' },
        { img: 'peRad_5fh.png' },
        { img: 'peRad_5bl.png' },
        { img: 'peRad_5bh.png' }
    ] },
    { stack: 'radiator', faces: [
        { img: 'peRad_6fl.png' },
        { img: 'peRad_6fh.png' },
        { img: 'peRad_6bl.png' },
        { img: 'peRad_6bh.png' }
    ] },
    { stack: 'radiator', faces: [
        { img: 'peRad_7fl.png' },
        { img: 'peRad_7fh.png' },
        { img: 'peRad_7bl.png' },
        { img: 'peRad_7bh.png' }
    ] },

    /* * * * * * * * * * * * * * * * * */

    { stack: 'reactor', landscape: true, faces: [
        { img: 'peRea_1f.png' },
        { img: 'peRea_1b.png' }
    ] },
    { stack: 'reactor', landscape: true, faces: [
        { img: 'peRea_2f.png' },
        { img: 'peRea_2b.png' }
    ] },
    { stack: 'reactor', landscape: true, faces: [
        { img: 'peRea_3f.png' },
        { img: 'peRea_3b.png' }
    ] },
    { stack: 'reactor', landscape: true, faces: [
        { img: 'peRea_4f.png' },
        { img: 'peRea_4b.png' }
    ] },
    { stack: 'reactor', landscape: true, faces: [
        { img: 'peRea_5f.png' },
        { img: 'peRea_5b.png' }
    ] },
    { stack: 'reactor', landscape: true, faces: [
        { img: 'peRea_6f.png' },
        { img: 'peRea_6b.png' }
    ] },
    { stack: 'reactor', landscape: true, faces: [
        { img: 'peRea_7f.png' },
        { img: 'peRea_7b.png' }
    ] },

    /* * * * * * * * * * * * * * * * * */

    { stack: 'refinery', faces: [
        { img: 'pRef_1f.png' },
        { img: 'pRef_1b.png' }
    ] },
    { stack: 'refinery', faces: [
        { img: 'pRef_2f.png' },
        { img: 'pRef_2b.png' }
    ] },
    { stack: 'refinery', faces: [
        { img: 'pRef_3f.png' },
        { img: 'pRef_3b.png' }
    ] },
    { stack: 'refinery', faces: [
        { img: 'pRef_4f.png' },
        { img: 'pRef_4b.png' }
    ] },
    { stack: 'refinery', faces: [
        { img: 'pRef_5f.png' },
        { img: 'pRef_5b.png' }
    ] },
    { stack: 'refinery', faces: [
        { img: 'pRef_6f.png' },
        { img: 'pRef_6b.png' }
    ] },
    { stack: 'refinery', faces: [
        { img: 'pRef_7f.png' },
        { img: 'pRef_7b.png' }
    ] },

    /* * * * * * * * * * * * * * * * * */

    { stack: 'robonaut', faces: [
        { img: 'pRob_1f.png' },
        { img: 'pRob_1b.png' }
    ] },
    { stack: 'robonaut', faces: [
        { img: 'pRob_2f.png' },
        { img: 'pRob_2b.png' }
    ] },
    { stack: 'robonaut', faces: [
        { img: 'pRob_3f.png' },
        { img: 'pRob_3b.png' }
    ] },
    { stack: 'robonaut', faces: [
        { img: 'pRob_4f.png' },
        { img: 'pRob_4b.png' }
    ] },
    { stack: 'robonaut', faces: [
        { img: 'pRob_5f.png' },
        { img: 'pRob_5b.png' }
    ] },
    { stack: 'robonaut', faces: [
        { img: 'pRob_6f.png' },
        { img: 'pRob_6b.png' }
    ] },
    { stack: 'robonaut', faces: [
        { img: 'pRob_7f.png' },
        { img: 'pRob_7b.png' }
    ] },
    { stack: 'robonaut', faces: [
        { img: 'pRob_8f.png' },
        { img: 'pRob_8b.png' }
    ] },
    { stack: 'robonaut', faces: [
        { img: 'pRob_9f.png' },
        { img: 'pRob_9b.png' }
    ] },

    /* * * * * * * * * * * * * * * * * */

    { stack: 'thruster', faces: [
        { img: 'pThr_1f.png' },
        { img: 'pThr_1b.png' }
    ] },
    { stack: 'thruster', faces: [
        { img: 'pThr_2f.png' },
        { img: 'pThr_2b.png' }
    ] },
    { stack: 'thruster', faces: [
        { img: 'pThr_3f.png' },
        { img: 'pThr_3b.png' }
    ] },
    { stack: 'thruster', faces: [
        { img: 'pThr_4f.png' },
        { img: 'pThr_4b.png' }
    ] },
    { stack: 'thruster', faces: [
        { img: 'pThr_5f.png' },
        { img: 'pThr_5b.png' }
    ] },
    { stack: 'thruster', faces: [
        { img: 'pThr_6f.png' },
        { img: 'pThr_6b.png' }
    ] },
    { stack: 'thruster', faces: [
        { img: 'pThr_7f.png' },
        { img: 'pThr_7b.png' }
    ] },
    { stack: 'thruster', faces: [
        { img: 'pThr_8f.png' },
        { img: 'pThr_8b.png' }
    ] },
    { stack: 'thruster', faces: [
        { img: 'peThr_1f.png' },
        { img: 'peThr_1b.png' }
    ] }

    ];

$(document).ready( function() {

    $('.stack').stack();

    $('.rocket').rocket();

    $.each( cards, function( index, value ) {
        var card = $('<img class="card ' + value.stack + '" />')
        if( value.landscape )
            card.addClass( 'landscape' );
        $('#' + value.stack ).append( card );
        card.card( value );
    } );

} );

