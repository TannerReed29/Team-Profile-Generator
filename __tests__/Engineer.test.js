const Engineer = require("../lib/Engineer");


    // repeating test params
const testname = 'Tanner'
const testid = '29'
const testemail = 'tanner29@gmail.com'

    // test for engineer creation
test("Is new engineer created?", () => {
    const engineer = new Engineer(testname, testid, testemail);
    
    expect(engineer.name).toBe(testname);
    expect(engineer.id).toBe(testid);
    expect(engineer.email).toBe(testemail);

});
    // get engineer role
test("test for engineer role", () => {
    const engineer = new Engineer(testname, testid, testemail);

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
    // get github username
test("test for Github Username", () => {
    const engineer = new Engineer(testname, testid, testemail, 'TannerReed29');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('TannerReed29'));
});