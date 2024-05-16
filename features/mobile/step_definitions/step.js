const { Given, When, Then } = require('@cucumber/cucumber');

Then('I type {string} in view with ID {string}', async function (this, input, id) {
    let view = await this.driver.$(`android=new UiSelector().resourceId("${id}")`)
    return await view.type(input);
});

Then('I type {string} in click view with xpath {string}', async function (this, input, xpath) {
    let view = await this.driver.$(xpath);
    return await view.type(input);
});