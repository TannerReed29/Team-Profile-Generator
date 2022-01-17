const Intern = require("../lib/Intern");

const testname = 'Tanner'
const testid = '29'
const testemail = 'tanner29@gmail.com'


test("Is new intern created?", () => {
    const intern = new Intern(testname, testid, testemail);
    
    expect(intern.name).toBe(testname);
    expect(intern.id).toBe(testid);
    expect(intern.email).toBe(testemail);

});
test("test for intern role", () => {
    const intern = new Intern(testname, testid, testemail);

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});
test("test for School", () => {
    const intern = new Intern(testname, testid, testemail, 'UTSA');

    expect(intern.getSchool()).toEqual(expect.stringContaining('UTSA'));
});