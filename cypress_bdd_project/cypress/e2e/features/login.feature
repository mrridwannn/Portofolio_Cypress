Feature: Login to Zero Web App

  Scenario: Successful login with valid credentials
    Given I visit the login page "http://zero.webappsecurity.com/login.html"
    When I enter the username "username" and password "password"
    Then I should be logged in successfully
    And I should see the "Account Activity" page

  Scenario: Unsuccessful login with invalid credentials
    Given I visit the login page "http://zero.webappsecurity.com/login.html"
    When I enter the username "invalidUser" and password "invalidPass"
    Then I should see an error message "Login and/or password are wrong."
