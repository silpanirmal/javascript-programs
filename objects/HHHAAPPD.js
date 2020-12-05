var text="H H H A A P P D"
var lttr=text.split(" ")
var dic={}
for(let lt of lttr){
    if (lt in dic){
        dic[lt]+=1;

    }
    else{
        dic[lt]=1;
    }
}
console.log(dic);
var str=""
for(key in dic){
str=str+dic[key]+key
}
console.log(str);

    



