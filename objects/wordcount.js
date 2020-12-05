var text="hello hai hello hai haii"
var words=text.split(" ")
var dict={}
for(let word of words){
    if(word in dict){
        dict[word]+=1;

    }
    else{
        dict[word]=1
    }
}
console.log(dict);
//pattern=ababbacfindfirst recursive character
// data=HHHAAPPD=3H2A2P1D