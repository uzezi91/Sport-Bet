function status(prediction=[], finalResult=[]){
    let winningStatus, count = 0;   
    for(let i=0; i<prediction.length; i++){
    if (prediction[i]==finalResult[i]){
       count += 1;
    } 
    }
     if(count == 5){
        winningStatus = "Won the jackpot";
     }
     if(count < 5){
        winningStatus = "Lost the bet";
     }
     return winningStatus;
    }
}