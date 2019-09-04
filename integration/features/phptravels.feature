Feature: Php travels (demo website)

  Scenario: Open admin page and log in
    Given I open "PhpTravels.adminPage"
    When I log in at "PhpTravels.logInForm" as "PhpTravels.admin"
    Then I see element "PhpTravels.currentUserAdmin"

  Scenario: Open admin page already logged in
    Given I logged in at "PhpTravels.adminLoginPage" as "PhpTravels.admin"
    And I open "PhpTravels.adminPage"
    Then I see element "PhpTravels.currentUserAdmin"
