class Account {
    min_bal=500;
    acc_bal=0;
get_bal(money){
    this.acc_bal=this.acc_bal+money
}



}
  let a1=new Account()
  console.log(a1)
  console.log(a1.min_bal)
a1.get_bal(220)
console.log(a1)