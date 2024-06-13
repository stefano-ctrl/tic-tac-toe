const createPlayer = function (name, marker) {
    this.name = name; 
    this.marker = marker; 
    
    return {name, marker}
}

const player1 = createPlayer('Kobe', 'X');
const player2 = createPlayer('Shaq','O'); 

gameArr = ['tl','t','tr', 'cl','c','cr', 'bl','b','br'];

  /*function playGame(player) {
 

    let valueCheck = (currentValue) => currentValue == 'X'; 
    if (gameArr.every(valueCheck) == true) {
       console.log('game is finished');
       return; 
    }
    
    //let updatedArray = []; 
    else if (gameArr.every(valueCheck) == false) {
     

   
       for (let i=0; i < gameArr.length; i++) {
        let playerPick = prompt('enter your chocice', '');
        if(gameArr[i] === playerPick) {
             gameArr[i] = player.marker;
        
            //gameArr[i] = player.marker; 
            //updatedArray.push(gameArr[i]); 
            
          }
        else if (gameArr[i] !== playerPick) {
     
          playGame(player1); 
          console.log(gameArr); 
            //updatedArray.push(gameArr[i]); 
        }
        
      }
    }
    }   */
    
 
    /*
    function playGame(player) {
      let playerPick = prompt('enter your choice', ''); 
   
          for (let i = 0; i < gameArr.length; i++)  {
     
                  if (gameArr[i] == playerPick) {
                     gameArr[i] = player.marker; 
                     console.log(gameArr); 
                      return gameArr; 
                  }  
   
               }
               console.log(gameArr); 
           
           
       } 
           
       */

       function playGame(playerOne, playerTwo) {
    
         let playerPick = prompt('enter your choice', '');
         for (let i = 0; i < gameArr.length; i++) {
            let findX = gameArr.filter((letter) => letter == player1.marker); 
            let findO = gameArr.filter((letter) => letter == player2.marker); 
             if (findO.length < findX.length && gameArr[i] == playerPick) {
                gameArr[i] = playerTwo.marker; 
                console.log(gameArr);
                console.log(findO < findX);
                console.log(findX);
             }
             else if (findO != findX && gameArr[i] == playerPick) {
               gameArr[i] = playerOne.marker; 
               console.log(gameArr); 
               console.log(findO);
               console.log(findX);
             }
         }
       }
        
       /*function alternate(playerOne, playerTwo) {   // once loops start it only evaluates playerOne and goes till array is finished without actually alternating and coming to first condition
         if (findO < findX) {
            playGame(playerTwo); 
         } else if(findX != findO) {
            playGame(playerOne); 
         }
       }  */ 
        
     
       // condition should be if all arr[i] equals 'X' loops finishes)

      
  

    /* thiink now of how to change all positions with a marker. 
    think recursive how can you make this function continue going until all
     spots have been taken. One way could be a second loop? best think would
     be to look up recursive funnctions again and see if you can call this
     function again until all positions become X

     After you did that you can start thinking of how to alternate plays 
     with two different markers */


  function startGame(game, playerOne, playerTwo) {
     let valueCheck = (currentValue) => currentValue == playerOne.marker || currentValue == playerTwo.marker; 
    
      if (game.every(valueCheck) != true) {
          
          playGame(playerOne, playerTwo); 
          startGame(game, playerOne, playerTwo); 
          
     } else if (game.every(valueCheck) == true) {
      console.log('game is finished');
      return
  } 
  }



startGame(gameArr, player1, player2); 


