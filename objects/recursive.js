var text="ABABBAC"
var doc={}
for(let ch of text){
    if(ch in doc){                       
        console.log("first recursive character is "+ch);
        break;
        }
    else{
        doc[ch]=1;//A=1,B=1
    }
}


//( in third attempt,A=1 present in the obj)    