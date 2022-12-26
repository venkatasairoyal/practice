let employees=[{id:101,name:"venkat",salary:100000},
{id:102,name:"suman",salary:100001},
{id:103,name:"harsha",salary:100002}]
let venkat=(emp)=>{
    setTimeout(()=>{
        employees.push(emp)
    },[2000])
}
let suman=()=>{
    setTimeout(()=>{
        let rows=''
        for(employee of employees){
        rows=rows+`<tr>
                  <td>${employee.id}</td>
                  <td>${employee.name}</td>
                  <td>${employee.salary}</td>
                  </tr>`
        }
        document.getElementById('abc').innerHTML=rows
    },[3000])
}
venkat({id:101,name:"venkat",salary:100000})
suman()