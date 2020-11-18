//agregar 10 nombres e imprimir

var mySet = new Set().add( 'Juan' ).add( 'José' ).add( 'Maria' ).add( 'Francisco' ).add( 'Guadalupe' ).add( 'Antonio' ).add( 'Jesús' ).add( 'Miguel' ).add( 'Pedro' ).add( 'Alejandro' );

for ( let elements of mySet ) {
    console.info( elements );
}