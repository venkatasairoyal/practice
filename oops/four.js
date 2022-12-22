class Account {
    min_bal = 500;

    open_Account() {
        console.log("open Account succesfully")
    }

    deposit_Amount(){
        console.log("Deposited Amount sucessfully")
    }
    get_st() {
        console.log("Displaying statement")
    }
    get_bal(){
        console.log("Display bal")
    }
    Withdraw_Amount(){
        console.log("get the cash ")
    }
    close_Account(){
        console.log("not possible bacause an issue")
    }
}
let a1 = new Account();
console.log(a1)
console.log(a1.min_bal)
a1.open_Account()
a1.deposit_Amount()
a1.get_st()
a1.get_bal()
a1.Withdraw_Amount()
a1.close_Account()