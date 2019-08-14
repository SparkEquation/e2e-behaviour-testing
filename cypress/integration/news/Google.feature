Feature: The Google

  I want to open Google page

  Scenario: Opening a Google network page
    Given I open "Google.page"
    When I click "Google.sayHello"
    Then I see "Google" in the title
    And I see element "Google.cypressLink"
    And I see element "Google.searchResults"
    And I see element "Google.getLinkByTitle"

