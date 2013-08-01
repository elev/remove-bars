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
evil[2] = "hit";
// add more nefarious divs of annoying sharebar here,
// maybe add some sort of curl or ajax call to get an extra list


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

/*
hmm, things are getting more interesting, 
just id "share" isn't going to do it... so far they're all ids, but 
I bet some will also be classes...

I need to run comparisions on multiple ones.

maybe I should still do indexOf share...

I should check out what listing length is...

I like the idea of making the kill the item stuff a seperate function.  then passing that function as an argument.  This will allow that testAgainst method to be more robust
*/
