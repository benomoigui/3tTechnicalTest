Feature: Amazon Sock Purchase


        Scenario: Search and add socks to the shopping cart
            Given the user is on the Amazon homepage
             When the user searches for "Socks"
              And the user adds the first pair of socks listed to the cart
             Then the cart should display at least one pair of socks
              And the user clicks on the basket
              And the user deletes the added sock from the cart
             Then the cart should be empty