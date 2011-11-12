(function( $ ) {

var methods = {
    init : function( options )
    {
        return this.each( function()
        {
            var $this = $(this);

            $this.bind( 'mousewheel', methods.wheel );

            $this.droppable( {
                accept: '.' + $this.attr( 'id' ),
                drop: function( event, ui ) {
                    $(this).append( ui.helper );
                    ui.helper.removeAttr('style');
                }
            } );
        } );
    },
    destroy : function( )
    {
        return this.each( function()
        {
            var $this = $(this);
        } );
    },
    wheel: function( event, delta, deltaX, deltaY )
    {
        var cards = $(this).children( 'img' );

        if( cards.length < 2 )
            return;

        if( delta > 0 )
            cards.last().insertBefore( cards.first() );
        else
            cards.first().insertAfter( cards.last() );

        event.preventDefault();
    }
};

$.fn.stack = function( method )
{
    if ( methods[method] )
        return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
    else if ( typeof method === 'object' || ! method )
        return methods.init.apply( this, arguments );
    else
        $.error( 'Method ' +  method + ' does not exist on jQuery.stack' );
};

})( jQuery );

