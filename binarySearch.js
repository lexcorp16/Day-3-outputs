function range(start, stop, step){
  var a=[start], b=start;
  while(b<stop){
    b+=step;
    a.push(b)
  }
  return a;
}

Array.prototype.toTwenty = function(){
  var oneToTwenty = range(1, 20, 1); 
  return oneToTwenty;
};

Array.prototype.toForty = function(){
  var twoToForty = range(2, 40, 2);
  return twoToForty;
};

Array.prototype.toOneThousand = function(){
  var tenToOneThousand = range(10, 1000, 10);
  return tenToOneThousand;
};




Array.prototype.search = function (searchElement) {
  /*
  Binary search function to return an object search containing,
  {count : c, index: i, length: n}
 */
  
  var maxIndex = this.length - 1;
  var minIndex = 0;
  var currentIndex;

  var search = {
    count: 0,
    index: currentIndex,
    length: this.length
  };

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);

    if (this[minIndex] === searchElement || this[maxIndex] === searchElement) {
      if (this[maxIndex] === searchElement) {
        search.index = maxIndex;
      }
      else {
        search.index = minIndex;
      }
      return search;
    }
    
    
    if (this[currentIndex] < searchElement) {
      minIndex = currentIndex + 1;
      maxIndex--;
    }

    else if (this[currentIndex] > searchElement) {
      maxIndex = currentIndex - 1;
      minIndex++;
    }

    else {
      search.index = currentIndex;
      return search;
    }

    search.count++;
  }
  
  search.index = -1;
  return search;
};