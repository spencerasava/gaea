# 7/7/21 (happy bungie day)

  today i started working on my mvp.
  My vision for the project is to create an outdoor activity tracker and posting site.
  you will be able to log into your account, upon authorization it will give you a feed of your most recent activities posted.

  for now i am only working on a guest user to get the app up and running for a single person due to time constraints.
  the home screen will show a feed of recent posts from all users.

  the purpose of the tracking is a central system for you to go back and see where you have been what conditions there were, when in the year you went, and track progress.

  example: in june i bouldered in leavenworth and tried these bouldering problems. some i finsihed some i did not, when i come back in july i will have notes on what i was working on.

  i chose mongoDB for my database. after starting i feel like i should have gone with postgreSQL since it was still fresh in my mind and i am on a time constraint. but after thinking about it i am already somewhat familiar with mongo so i stuck with it and it would be a good learning opportunity to switch back and forth between database platforms.

  for design i am going to try to try to learn materialize. again if time allows i will use this and if not i will just use raw css.

## Todays progress

  today i got all of my system files organized and set up most dependencies. i set up webpack with babel presets. i built out a few react components (did not want to learn angular due to time constraints) to render login and register forms on the page that will not be used quite yet. i have my home page rendering on the screen with some basic texts and a guest user login. i have created my db schemas for posting new activities and creating new users. i setup some endpoints for posting to my database and have tested with tempusers and tempactivities and they are working as expected. i also set up a favicon something i had not done before because i was getting ennoyed with the failed get request everytime the page loads.