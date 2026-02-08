

// const val="abababbabcdefgbcdgg"

const val="aabaababcadefghcdab"

let longest=""
let longest2=""
for(let i=0;i<val.length;i++){
 
    for(let j=i;j<val.length;j++){
        let subString="";
        const map=new Map();

        for(let k=i;k<=j;k++){
            subString+=val[k]
            if(map.has(val[k])){
                map.clear();
                break; 
            }else{
                map.set(val[k] , val[k])
            }
        }
         
        if(map.size==subString.length && longest.length<subString.length){
          longest=subString;
        }

        // console.log(subString );
        // + " "+ `${i}-${j}`
    }   

} 
console.log(longest)

const set = new Set();
let sub = ""
for (let i = 0; i < val.length; i++) {
    if (set.has(val[i])) {
        sub = "";
        set.clear();
        set.add(val[i])
        sub+=val[i];
    }else{
       set.add(val[i]) 
       sub+=val[i];
       longest2=longest2.length < sub.length ? sub : longest2;
    }

}

console.log(longest2)







