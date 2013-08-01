// get items
var divs = document.getElementsByTagName("div");
var uls = document.getElementsByTagName("ul");
divs = Array.prototype.slice.call(divs);
uls = Array.prototype.slice.call(uls);
var items = divs.concat(uls);

// list ids you want to delete
var evil = new Array();
evil[0] = "sharebar";
evil[1] = "dd_ajax_float";
// eventually add more nefarious elements of annoying sharebars here,
// maybe add some sort of curl or ajax call to get an extra list...


/* helper functions */
function testAgainst(element, listing){
  for(i=0; i<listing.length; i++){
    var str = element.id;
    var test = str.indexOf(listing[i]);
    if(test > -1){
      //kill the item
      var parentNode = element.parentNode;
      parentNode.removeChild(element);
    }
  } 
}

// loop through items, compare against bad list, delete perpetrators
for(k=0; k<items.length; k++){
   testAgainst(items[k], evil);
}
