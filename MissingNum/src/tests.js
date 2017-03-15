function findMissing(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0 || arr1.length === arr2.length){
        return 0;
    }
    var firstarr = arr1.length > arr2.length? arr2 : arr1;
    var secondarr = arr1.length > arr2.length? arr1 : arr2;
    
    var filter_Arr = secondarr.filter(function(val){
        return firstarr.indexOf(val) === -1;
    });
    return filter_Arr[0];
}