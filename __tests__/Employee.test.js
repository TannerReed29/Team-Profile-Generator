const Employee = require("../lib/Employee");

const testname = 'Tanner'
const testid = '29'
const testemail = 'tanner29@gmail.com'

test("Is new employee created?", () => {
    const employee = new Employee(testname, testid, testemail);
    
    expect(employee.name).toBe(testname);
    expect(employee.id).toBe(testid);
    expect(employee.email).toBe(testemail);

});
test("test for employee role", () => {
    const employee = new Employee(testname, testid, testemail);

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});
test("test for name", () => {
    const employee = new Employee(testname, testid, testemail);

    expect(employee.getName()).toEqual(expect.stringContaining('Tanner'));
});
test("test for id", () => {
    const employee = new Employee(testname, testid, testemail);

    expect(employee.getId()).toEqual(expect.stringContaining('29'));
});
test("test for email", () => {
    const employee = new Employee(testname, testid, testemail);

    expect(employee.getEmail()).toEqual(expect.stringContaining('tanner29@gmail.com'));
});

