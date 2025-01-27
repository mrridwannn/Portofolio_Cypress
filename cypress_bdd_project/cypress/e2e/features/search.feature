Feature: Search Data on Zero Web App Security Website

  Scenario: Searching for relevant data with a valid keyword
    Given I am on the homepage "http://zero.webappsecurity.com/index.html"
    When I enter the keyword "bank" in the search bar
    And I press the "Enter" key
    Then The page will display search results relevant to the keyword "bank"

  Scenario: Searching for data with an irrelevant keyword
    Given I am on the homepage "http://zero.webappsecurity.com/index.html"
    When I enter the keyword "xyzxyz" in the search bar
    And I press the "Enter" key
    Then The page will display a message "No results found" or results indicating no search results
