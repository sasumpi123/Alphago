function strangeCounter(t) {    
    let index = 0;
    let time = 1;

    while(true){        
        if(index==0){
            time = 1;
        }else{
            time = time + Math.pow(2, index-1)*3;
        }
        if(time>=t)break;
        index++;
    }
    let value = 0;
    if(time==t){
        value = 3*Math.pow(2,index);  
        return value;
    } else{
        value = 3*Math.pow(2,index-1);  
    }
    for(let i = time - Math.pow(2, index-1)*3; i<time; i++){
        if(i==t){
            return value;
        }
        value--;
    }
}


strangeCounter(17);