import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://localhost:3000/auth/user-login`;

test('login user test', async t => {
    await t
        .typeText('#username', 'LSS')
        .typeText('#password', '12345')
        .click('#submit_btn');
});