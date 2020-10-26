function solution(){
    let result=0;
    while(s>=0){
        if(p-(d*i) <=m){
            s -= m
        }else{
            s -= p-(d*i)
        }
        if(s<0) break;
        result++;
    }
    return result;
}

solution()