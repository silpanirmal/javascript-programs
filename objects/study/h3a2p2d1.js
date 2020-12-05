var word ="hhhaappd"
var obj={};
for(ch of word){
    if (ch in obj){
        obj[ch]+=1;
    }
    else{
        obj[ch]=1;
    }
  
}
console.log (obj)
var strng="";
for(key in obj){
 strng=strng+obj[key]+key
}
console.log(strng);