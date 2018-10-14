//question #2
const triangleStars = function(height)
{
    const base = 2 * height - 1;
    let i = 0;
    while(i < height) {
        console.log(' '.repeat(i) + '*'.repeat(base - 2 * i));
        i++;
    }
};
    triangleStars(4);

//question #3
const MultiToSingle = function(array1, array2){
    return array1.concat(array2);

};
console.log(MultiToSingle([1,2],[3,4,6]));

//question #4

const FindMinMax = function (array, arguement){
  if(arguement){
    return Math.max(...array);

  }
  return Math.min(...array);
};
console.log(FindMinMax([33, 44, 88, 100], true));




//question #5
const a = function(array){
  
    let index = 0;
        while(index<array.length){
    
     console.log(array[index]);
        index = index + 1;  
    
    }
  
};
  
  a([14, 19, 1, 0]);

//question #6
const sum = function(array){

    let index = 0;
    let i = 0;
        while(i<array.length){

            i = i + 1;
            index += array[length];
            length = length + 1;
}
    console.log(index);
};
    sum([2,4,6,8]);
  


//question #7
const reverse = function(str){
    let str2 = "";
    let i = str.length-1;
        while(i>=0){
            str2= str2 + str[i];
            i = i - 1;  
    
    }
    return str2;
  };
  
  console.log(reverse("abcd"))  ;


//question #8
const checkerboard = function(height)
{
    const base =  height ;
    let i = 0;
        while(i < height) {
        console.log(' ' + '*'.repeat(base  ));
        i++ ;
    }
};
    checkerboard(5);




