Feature: The Google

  I want to open Google page

  Scenario: Opening a Google network page
    Given I open "Google.page"
    Then I see title string "Google"
    And I see element "Google.cypressLink"
    And I see element "Google.searchResults"
    And I see element "Google.getLinkByTitle"
    And URL is "Google.page"

