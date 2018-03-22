import { Selector, t } from 'testcafe'

fixture('Login').page('http://localhost:1234/')

const loginStatus = Selector('.help')

test('Login', async (t) => {
  await t
    .typeText('#email', 'test@test.com')
    .typeText('#password', 'qwe')
    .pressKey('enter')

  await t.expect(loginStatus.innerText).eql('LoginSuccess')
})
