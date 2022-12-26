let employee=[{id:101,name:"dhoni",salary:8734},
{id:102,name:"dhoni",salary:8734943},
{id:103,name:"rohit",salary:87324},
{id:104,name:"rahul",salary:873454}]

/* it is a do while loop condition */

let i=0;

do {
    console.log(employee);
    
}
while( i>employee.length-1) {
    console.log(employee[0].salary)
    i=i++
}
