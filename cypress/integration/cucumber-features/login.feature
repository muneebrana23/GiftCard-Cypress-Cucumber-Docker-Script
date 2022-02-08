Feature: Login Feauture Testing for Simplify Shopping

     I want to Login as Admin

     Scenario: Login as an Admin 
     Given I load the login page
     When I entered valid credentials
     And I am waiting for 1000 seconds
     Then I see the error page
