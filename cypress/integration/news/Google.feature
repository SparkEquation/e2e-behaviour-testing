Feature: The Google

  I want to open Google page

  Scenario: Opening a Google page
    Given I open "Google.page"
    When I type "cypress" into element "Google.searchInput"
    Then I see title string "Google"
    And I see element "Google.cypressLink"

  Scenario: Opening google with cypress search
    Given I open "Google.searchCypress"
    And I see element "Google.cypressLink"
    And I see element "Google.searchResults"
    And I see element "Google.getLinkByTitle"
    And URL is "Google.searchCypress"

