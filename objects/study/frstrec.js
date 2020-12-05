//to find the first recursive method
var word="ababbac"
var obj={}
for(ch of word){
    if (ch in obj){
        console.log(ch)
        break;
 }

 else{
     obj[ch]=1;
 }

}
