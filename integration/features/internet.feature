Feature: The internet heroku app

  @SOME-TAG
  Scenario: Visit hovers page
    Given I open "Internet.mouseoverPage"
    Then I click "Internet.downloadMenuItem"
      | force | true |
      | first | false |
