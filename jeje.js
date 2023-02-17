function randomNameAndProbability() {
    const names = ["Medik","Juancho","Chaketa","Tremo","Owen","Kenny","Jose"];
    console.log("Probabilidad de tener wila en 2023:\n");
    
    for(let i = 0; i < names.length; i++) {
        const randomName = names[i];
        const probability = Math.floor(Math.random() * 101);
        
        console.log(randomName, probability+ "%","\n");
    }
    return
  }
   

console.log(randomNameAndProbability());