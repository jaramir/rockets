(function( $ ) {

var methods = {
    init : function( options )
    {
        this.droppable( {
            drop: function( event, ui ) {
                $this = $(this);
                $this.find('.cards').append( ui.helper );
                ui.helper.removeAttr('style');
                methods.update_stats( $this );
            }
        } );

        return this;
    },
    destroy : function( )
    {
        return this.each( function()
        {
            var $this = $(this);
        } );
    },
    update_stats : function( rocket )
    {
        var mass = 0;
        rocket.find( '.card' ).each( function( key, value ) {
            var card = $( value );
            var data = card.data( 'card' );
            var face = data.faces[data.current];
            mass += face.mass;
        } );
        rocket.find( '.info .mass' ).html( mass );
    }
};

$.fn.rocket = function( method )
{
    if ( methods[method] )
        return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
    else if ( typeof method === 'object' || ! method )
        return methods.init.apply( this, arguments );
    else
        $.error( 'Method ' +  method + ' does not exist on jQuery.rocket' );
};

})( jQuery );

