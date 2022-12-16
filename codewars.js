function solution(start, finish) 
{
    if (Number.isInteger(start)===false && Number.isInteger(finish)===false){
        return console.log("Value must be a number");
     }
    if (start < 0 && finish < 0){
    return console.log("The number must be positive");
  }
    if (start > finish){
        return console.log("Start must be bigger");
    }
    var saltos = 0;
    while (start <= finish){
        if (start + 3 < finish){
            start += 3;
        }
        else{
            start ++;
        }
        saltos ++;
  }
  return saltos
}

function DNAStrand(dna){
    let answer="";
    for (const c of dna){
      switch(c){
          case "A":
            answer+="T";
            break;
          case "T":
            answer+="A";
            break;
          case "C":
            answer+="G";
            break;
          case "G":
            answer+="C";
            break;
      }
      
    }
    return answer
  }

//solution(1,5)


console.log(solution(1,5))
