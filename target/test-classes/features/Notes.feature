Feature: Note creation functionality of Evernote

  Scenario Outline: Note creation with title and body
    Given User is logged into the system with <email> and <password> 
    When A note is created with <title> and <body>
    And Logout from Evernote 
    And User is logged into the system with <email> and <password> 
    Then Created note should be available in the notes list with <title> and <body>
     Examples: 
      | email                     | password   | title        | body       |
      | anirudh.s.nair@gmail.com | anirudh123$ | sample title | sample body|
      
  