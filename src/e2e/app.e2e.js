import { Selector, t } from 'testcafe'

fixture('Login').page('http://localhost:1234/')

const loginStatus = Selector('.help')

class Login {
  constructor({ email = 'test@test.com', password = 'qwe' } = {}) {
    this.email = email
    this.password = password
  }
  async login() {
    await t
      .typeText('#email', this.email)
      .typeText('#password', this.password)
      .pressKey('enter')
  }
}

test('Login', async (t) => {
  await new Login().login()
  await t.expect(loginStatus.innerText).eql('LoginSuccess')
})

test('Login - wrong password', async (t) => {
  await new Login({ password: 'poop' }).login()
  await t.expect(loginStatus.innerText).eql('WrongPassword')
})

test('Login - wrong email', async (t) => {
  await new Login({ email: 'poop@test.com' }).login()
  await t.expect(loginStatus.innerText).eql('WrongEmai')
})
