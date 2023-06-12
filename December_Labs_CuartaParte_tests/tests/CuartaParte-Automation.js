describe('December Labs - Test Suites', () => {

  const initialize = () => {
    browser
      .navigateTo('https://inhouse.decemberlabs.com/')
      .windowMaximize()
      .waitForElementVisible('body')
      .assert.titleContains('December Labs: UX/UI Design and Mobile App & Web Development')
      .assert.visible('#menu-item-846')
      .click('#menu-item-846');
  };

  beforeEach(() => {
    initialize();
  });

  it('Validate that the "Get in touch" form opens', (browser) => {
    browser
      .assert.textContains('.dl-getintouch-modal > div > .start-project-form > h3', 'Get In Touch')
  });

  it('Validate that required fields are displayed in red when the empty form is submitted', (browser) => {
    browser
      .assert.visible('#wpforms-submit-872')
      .click('#wpforms-submit-872')
      .assert.cssProperty('#wpforms-872-field_0', 'border-color', 'rgb(255, 0, 0)')
      .assert.cssProperty('#wpforms-872-field_1', 'border-color', 'rgb(255, 0, 0)')
      .assert.cssProperty('#wpforms-872-field_6', 'border-color', 'rgb(255, 0, 0)')
      .assert.cssProperty('#wpforms-872-field_2', 'border-color', 'rgb(255, 0, 0)')
  });

  it('Complete the required fields and validate that once they are filled, they are no longer marked in red', (browser) => {
    browser
      .assert.visible('#wpforms-submit-872')
      .click('#wpforms-submit-872')

      .assert.cssProperty('#wpforms-872-field_0', 'border-color', 'rgb(255, 0, 0)')
      .setValue('#wpforms-872-field_0', 'Agustina Monti')
      .assert.cssProperty('#wpforms-872-field_0', 'border-color', 'rgb(0, 0, 0)')

      .assert.cssProperty('#wpforms-872-field_1', 'border-color', 'rgb(255, 0, 0)')
      .setValue('#wpforms-872-field_1', 'agusmonti10@gmail.com')
      .assert.cssProperty('#wpforms-872-field_1', 'border-color', 'rgb(0, 0, 0)')

      .assert.cssProperty('#wpforms-872-field_6', 'border-color', 'rgb(255, 0, 0)')
      .setValue('#wpforms-872-field_6', 'Company Name')
      .assert.cssProperty('#wpforms-872-field_6', 'border-color', 'rgb(0, 0, 0)')

      .assert.cssProperty('#wpforms-872-field_2', 'border-color', 'rgb(255, 0, 0)')
      .setValue('#wpforms-872-field_2', 'This is a test message') 
      .assert.cssProperty('#wpforms-872-field_2', 'border-color', 'rgb(0, 0, 0)')
  });

  afterEach(browser => browser.end());

});
