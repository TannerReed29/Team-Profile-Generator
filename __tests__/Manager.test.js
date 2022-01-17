const Manager = require("../lib/Manager");

    // repeating test params
const testname = 'Tanner'
const testid = '29'
const testemail = 'tanner29@gmail.com'

    // test for new manager creation
test("Is new manager created?", () => {
    const manager = new Manager(testname, testid, testemail);
    
    expect(manager.name).toBe(testname);
    expect(manager.id).toBe(testid);
    expect(manager.email).toBe(testemail);

});
    // get manager role
test("test for manager role", () => {
    const manager = new Manager(testname, testid, testemail);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});
    // get office number
test("test for Office number", () => {
    const manager = new Manager(testname, testid, testemail, '1234');

    expect(manager.getOfficeNum()).toEqual(expect.stringContaining('1234'));
});