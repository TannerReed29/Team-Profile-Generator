const Manager = require("../lib/Manager");

const testname = 'Tanner'
const testid = '29'
const testemail = 'tanner29@gmail.com'


test("Is new manager created?", () => {
    const manager = new Manager(testname, testid, testemail);
    
    expect(manager.name).toBe(testname);
    expect(manager.id).toBe(testid);
    expect(manager.email).toBe(testemail);

});
test("test for manager role", () => {
    const manager = new Manager(testname, testid, testemail);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});
test("test for Office number", () => {
    const manager = new Manager(testname, testid, testemail, '1234');

    expect(manager.getOfficeNum()).toEqual(expect.stringContaining('1234'));
});