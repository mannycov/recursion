// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className, node) {
  var elems = [];
  node = node || document.body;
  
  if (node.classList) {
    if (node.classList.contains(className)) {
      elems.push(node);
    }
  }

  if (node.hasChildNodes()) {
    var children = node.childNodes;
    for (var i = 0; i < children.length; i++) {
      elems = elems.concat(getElementsByClassName(className, children[i]));
    }
  }
  return elems;
};
