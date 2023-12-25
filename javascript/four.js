function countDown(a){
    if(a<1){
        return;
    }
    console.log(a);
    countDown(a-1);

}
countDown(4)