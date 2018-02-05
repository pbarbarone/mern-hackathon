# Summary
HouseHub is a full-stack web-based application to help roommate assess and track household responsibilities. The project started as a 7-hour hackathon project and was expanded on from there as a week-long "create a start-up" project. 

The purpose of the application is to provide a platform through which roommmates can add and track house chores, add and see current and past bills, add and track recently - or soon to be - purchased food staples, and post house issues and updates through a memo board. New users can choose to create a new house or join an existing house that one of their roommates already set up. Users join existing houses through a unique HouseId sent by a roommate. The HouseId is only available to logged in users attached to a house. 

Once logged in, users can access two main pages. 1) A profile page that shows chores assigned to them, shopping items they've purchased or signed up for, the current and past rent/utility bills, and current messages; and 2) a HouseHub page that shows chores and shopping items for all roommates, current bills, and current memos. The HouseHub page also allows users to add and assign chores and shopping items, edit and add bills, and see memo topics and write memos. Separate pages show a history of all bills and the content for all house memos.


# Technologies Used
* Mongodb
* Express
* React
* Node.js
* Google Fonts
* Async
* Axios
* React Router

# User Stories
* Every two weeks when Taylor gets her lashes done, her esthetician Sofia spends the entire hour complaining about her living situation. Sofia (late 20s) works full time, but like many Gen X people in Seattle, she cannot afford to live alone, so she shares a house with 5 other individuals. After several complaints from house members that others weren't respecting the mutual spaces or doing their part to upkeep the house, they housemates began holding weekly house meetings to explicitly delegate responsibilities. This helped some, but there is no accountability system, so many roommates are letting their responsibilities slide. Sofia decides to sign up for a househub account and gets the rest of her roommates on board. Each week they fill out the chores and shopping lists together and now there is a digital space where everyone can keep track of each other's assignments and whether they have been completed. This visual, public display of the aggrements they made give adequate insentive for the roommates to follow through with their commitments. No more passive aggressive notes/comments or gossip about how Sheila hasn't vacuumed in two weeks or how Mike never remembers to venmo money for utilities.
* Peter manages a coop and is tired of all keeping track of the residents and their duties via email. He gets all the residents to sign up for househub so they can access the schedule on their own, anytime. 



# Backend Routes
METHOD | URL | Purpose
--- | --- | ---
POST | /auth/signup | Adds new user to user database
POST | /auth/login | Authenticates login details
POST | /auth/me/from/token | Checks if token is present on browser refresh
POST | /house/create | create new House 
POST | house/join | Join an existing house with a userId
POST | /lists/chore/create | Post new chore to list
DELETE | /lists/chore/delete | delete chore from list 
POST | /lists/shopping/create | Post shopping item to pantry list
DELETE | /lists/item/delete | delete pantry item from shopping list
POST | /lists/bill/create | add new bill to list
POST | /lists/bill/update | edit existing bill
POST | /lists/memo/create | add new memo 
DELETE | /lists/memo/delete | delete existing memo



# Next Steps
* Display charts for utilities to show trend over time (chartsjs).
* Allow users to upload image of house/roommates.
* Once a user creates a house, render a component with instructions about giving the house id to roommates. Give the option to email/text roommates an auto-generated invite to sign up and join that house.
* Allow user-to-user memos.
* Incorporate an event board where users can organize/post roommate events/outings.
* Allow each user to indicate that they have paid their portion of this month's bills. Incorporate text/email reminders that send out 3 days before the due date, only to roommates who haven't paid yet.
* Create appropriate hooks/validations for data entries.
* Allow users to unjoin houses, delete houses, and delete user accounts.
* Incorporate an option for designating a house admin that gives data entry/manipulation privileges from their account.
* Kudos board: where users can give shoutouts to roommates who go above and beyond.