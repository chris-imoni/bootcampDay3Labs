Array.prototype.toTwenty = function(){
    var arr_20 = [];
    for(var i = 1; i<= 20; i++){
        arr_20.push(i);
    }
    return arr_20;
}

Array.prototype.toForty = function(){
    var arr_40 = [];
    for(var i = 2; i<= 40; i+=2){
        arr_40.push(i);
    }
    return arr_40;
}

Array.prototype.toOneThousand = function(){
    var arr_1000 = [];
    for(var i = 10; i<= 1000; i += 10){
        arr_1000.push(i);
    }
    return arr_1000;
}

Array.prototype.search = function (search_element) {
    var self = this;
    var first = self[0];
    var last = self[self.length - 1];
    self.count = 0;
    self.index = -1;

    var start = 0;
    var end = self.length - 1;
    var currentIndex;
    var currentElement;
    if (search_element > last || search_element < first){
        return new holder (self.count,self.length,self.index);
    }else{
        while (start <= end) {
            currentIndex = Math.floor((start + end) / 2);
            currentElement = self[currentIndex];
            if (self[start]  === search_element) {
                 self.index = start;
                  break;
             }
             else if (self[end]  === search_element){
                 self.index = end;
                  break;
             }else if (currentElement < search_element) {
                start = currentIndex + 1;
            }
            else if (currentElement > search_element) {
                end = currentIndex - 1;
            }
            else {
                self.index = currentIndex;
                break;
            }
            self.count++;
        }   
    }
    


   return new holder (self.count,self.length,self.index);
  
};


function holder(count,length,index){
  
    this.count = count;
    this.length = length;
    this.index = index;
  
}