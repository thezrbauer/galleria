var elem = document.querySelector('.grid');

var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer'
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});

imagesLoaded( elem ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});
