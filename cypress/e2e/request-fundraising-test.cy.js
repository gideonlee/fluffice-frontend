import { faker } from '@faker-js/faker'
const testEmail = 'gideonxlee@gmail.com'

describe('User tries to request fundraising.', () => {
  it('should successfully send an email confirmation.', () => {
    // Visit baseUrl and click on fundraising
    cy.visit('/')
    cy.findByRole('link', {name: /fundraising/i}).click()

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
    cy.findByLabelText(/service time/i).type(`${faker.random.numeric()} hours.`)
    cy.findByLabelText(/organization/i).type(faker.company.name())
    cy.findByLabelText(/address/i).type(faker.address.streetAddress())
    cy.findByLabelText(/city/i).type(faker.address.cityName())
    cy.findByLabelText(/state/i).type(faker.address.stateAbbr())
    cy.findByLabelText(/zip/i).type(faker.address.zipCode('#####'))

    // Submit request
    cy.findByRole('button', {name:/fundraising request/i}).click()

    // Expect confirmation text should appear.
    cy.findByText(/We'll contact you soon!/i).should('exist')
  })
})