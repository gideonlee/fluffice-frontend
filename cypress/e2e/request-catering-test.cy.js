import { faker } from '@faker-js/faker'
const testEmail = 'gideonxlee@gmail.com'

describe('User tries to request catering.', () => {
  it('should successfully send an email confirmation.', () => {
    // Visit baseUrl and click on catering
    cy.visit('/')
    cy.findByRole('link', {name: 'Catering'}).click()

    // Populate form
    cy.findByLabelText(/first name/i).type(faker.name.firstName())
    cy.findByLabelText(/last name/i).type(faker.name.lastName())
    cy.findByLabelText(/email/i).type(testEmail)
    cy.findByLabelText(/phone/i).type(faker.phone.number('##########'))
    cy.findByLabelText(/date/i).type(
      new Intl.DateTimeFormat('en-US').format(
        faker.date.future()
      )
    )
    cy.findByLabelText(/service time/i).type(`${faker.random.numeric()}AM - ${faker.random.numeric()}PM`)
    cy.findByLabelText(/estimated number/i).type(faker.random.numeric())
    cy.findByLabelText(/city/i).type(faker.address.cityName())
    cy.findByLabelText(/zip/i).type(faker.address.zipCode('#####'))
    
    // Submit request
    cy.findByRole('button', {name:/send a request/i}).click()

    // Expect confirmation text should appear.
    cy.findByText(/We'll contact you soon!/i).should('exist')
  })
})