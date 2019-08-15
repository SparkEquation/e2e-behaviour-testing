Feature: The internet heroku app

  Scenario: Visit hovers page
    Given I open "Internet.mouseoverPage"
    When I hover element "Internet.firstHover" without sub hovers
    Then I see element "Internet.downloadMenuItem"
