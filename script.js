const createPlayer = function (name, marker) {
    this.name = name; 
    this.marker = marker; 
    
    return {name, marker}
}

const player1 = createPlayer('Kobe', 'X');
const player2 = createPlayer('Shaq','O'); 

gameArr = ['tl','t','tr','cl','c','cr','bl','b','br'];


  function playGame(player) {
    let playerPick = prompt('enter your chocice', '');
    let updatedArray = []; 
   
       for (let i=0; i < gameArr.length; i++) {
        
        if(gameArr[i] === playerPick) {
            gameArr[i] = player.marker; 
            updatedArray.push(gameArr[i]); 
            
          }
        else if (gameArr[i] !== playerPick) {
            updatedArray.push(gameArr[i]); 
        }
        

    } 
    console.log(updatedArray); 
    /* thiink now of how to change all positions with a marker. 
    think recursive how can you make this function continue going until all
     spots have been taken. One way could be a second loop? best think would
     be to look up recursive funnctions again and see if you can call this
     function again until all positions become X

     After you did that you can start thinking of how to alternate plays 
     with two different markers */

  
  }


 playGame(player1); 


