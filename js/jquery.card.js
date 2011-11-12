(function( $ ) {

var methods = {
    init: function( options )
    {
        this.data( 'card', {
            faces: options.faces,
            current: 0
        } );

        this.attr( 'src', '/img/cards/' + options.faces[0].img );

        this.bind( 'click', methods.click );

        // draggable but don't propagate click
        this.draggable( {
            distance: 10,
            revert: 'invalid',
            start: function(event, ui) {
                ui.helper.unbind( 'click' );
            },
            stop: function(event, ui) {
                setTimeout( function() {
                    ui.helper.bind( 'click', methods.click );
                }, 150 );
            }
        } );

        return this;
    },
    click: function( event )
    {
        var $this = $(this)
        var data = $this.data( 'card' );
        var next = ( data.current + 1 ) % data.faces.length;
        $this.attr( 'src', '/img/cards/' + data.faces[next].img );
        data.current = next;
    },
    destroy : function( )
    {
        return this.each( function()
        {
            var $this = $(this);
        } );
    }
};

$.fn.card = function( method )
{
    if ( methods[method] )
        return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
    else if ( typeof method === 'object' || ! method )
        return methods.init.apply( this, arguments );
    else
        $.error( 'Method ' +  method + ' does not exist on jQuery.card' );
};

})( jQuery );

