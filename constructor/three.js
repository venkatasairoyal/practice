class Account{
  min_bal=200;
  acc_bal=0;
deposit_amount(amount){
    this.acc_bal=this.acc_bal+amount
}
get_bal(){
    return this.acc_bal-this.min_bal
}
}
let a1=new Account()
console.log(a1)
a1.deposit_amount(2000)
console.log(a1)
let l1=a1.get_bal()
console.log(l1)
