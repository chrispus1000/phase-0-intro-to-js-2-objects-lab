const employee = {
    name: 'Alex Contell',
    streetAddress: '183 Russell st'
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = Object.assign({},employee,{[key]:value})
    return newEmployee;


}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newObject = {...employee};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}