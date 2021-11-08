# 4 Devs 1 Game - [Brackets]

![image](https://user-images.githubusercontent.com/25436568/140655196-48a430b1-4fc0-484a-948c-5c6c406f136f.png)

* [Features](#features)
* [Usage](#usage)
  + [Setup](#setup)
  + [User Instructions](#user-instructions)
    - [Registration](#registration)
    - [Login](#login)
    - [Profile updates](#profile-updates)
    - [Attending Tournaments](#attending-tournaments)
    - [Starting/Ending/Updating Tournaments](#startingendingupdating-tournaments)
    - [Creating a new Tournament](#creating-a-new-tournament)
  + [Admin Instructions](#admin-instructions)
    - [Login](#login-1)
    - [Admin Dashboard activities](#admin-dashboard-activities)
* [Third-party Libraries](#third-party-libraries)

## Features
[Brackets] is a tournament management software which allows users to join, participate in, and organize tournaments.

Users are able to perform various different things in the website. Firstly, users are able to login/logout and update their account information. Although there is no proper authentication currently, the view for reseting password and other information is implemented. Users can create tournaments themselves, view any previously hosted tournaments and view previously attended events. For events that they have created, there are a few settings that allow you to start/end tournaments and update tournament information. Users can view the event details and teams with other registered users to the event and view the tournament bracket.

## Usage
### Setup
[Brackets] is a React app. Hence, you will need `npm` installed locally to run the React development server. To start it:
```
git clone https://github.com/csc309-fall-2021/team05.git
cd team05/frontend
npm install         # Install all dependencies locally
npm start           # Start dev server
```
At this point, the dev server should automatically redirect you to the localhost URL. By default, this is http://localhost:3000/

### User Instructions
#### Registration
1. Click the login button on the top right of the navbar.
2. Enter the required information into the form, then click `Register` to create a new account. At this time, no users will be created, since a backend is required.

#### Login
1. Click the login button on the top right of the navbar.
2. Enter `user` for username and `user` for password to log in to the user account.

#### Profile updates
Log in as a user first. Then,
1. Click on the profile button in the navbar.
2. Enter your new details in the fields. 
3. Enter the current password `user` to have the changes be accepted. Since this functionality requires a backend, it is not currently implemented.

#### Attending Tournaments
Log in as a user first. Then,
1. Click on the dashboard button in the navbar.
2. Click on `Join a Tournament` under 'Current Tournaments (attending)'. A list of tournaments to join will be presented.
3. Click on the `View Event Details` button of a tournament to see more information about it, such as the host, number of members, etc.
4. Click on `Join Event` to join the tournament. Currently, this is not implemented as a backend is required.

#### Starting/Ending/Updating Tournaments
Log in as a user first. Then,
1. Click on the dashboard button in the navbar.
2. Click on the `View Event Details` button of a tournament listed under 'Current Tournaments (hosting)'.
3. Click on the `Start Tournament` button to start the tournament.
4. If a tournament is ongoing, click the `End Tournament` button to end it.
5. At any time, click the `Update The Tournament` button to change the description of the tournament.

#### Creating a new Tournament
Log in as a user first. Then,
1. Click on the dashboard button in the navbar.
2. Click on the `Create a Tournament` button under 'Current Tournaments (hosting)'.
3. Fill in the presented form with the required parameters, then click `Create` to make the new tournament.

#### Changing your Teams Name
If you're in an event that has NOT started yet you can change the name by clicking on your team name. This will bring up a textbox view where you can change and submit the name change.

#### Viewing Tournament bracket
On any on-going or ended event, click on the view brackets button to swap to brackets view.

### Organizer Instructions
#### Updating tournament progress
If you're logged in as an organizer and are viewing an on-going event, you can update the brackets with winners:
1. Go to the brackets view of an organizer you're hosting that is on-going
2. Scroll down you will see a series of dropdowns
3. You must select all the winning teams and click submit to setup the new round. (This is not complete since it needs a backend)

### Admin Instructions
#### Login
1. Click the login button on the top right of the navbar.
2. Enter `admin` for username and `admin` for password to log in to the user account.

#### Admin Dashboard activities
On the admin dashboard, one can manage all registered users, view all current, past, ongoing, and tournaments yet to start, as well as logs of all user activities.
1. Click the `Admin Dashboard` button in the navbar.
2. To manage users, click the `Manage Users` button. This will bring up a page where individual users can be banned or unbanned by clicking the `Ban Player` button.
3. To view all tournaments, those which are ongoing, and those yet to start, click the corresponding button in the `Tournaments` card.
4. To view past tournaments and user logs, click the corresponding button in the `Archive` card.

In addition to these, the admin can do all the activites that the user can do. See the [User Instructions](#user-instructions) section for more details. The only things admins cannot do that users can do is register for an account; admin account creation will be handled by the system administrator of the server.

## Third-party Libraries
[Brackets] uses the following third-party libraries:
1. React, as the web framework 
2. Material UI, for a consistent and clear user interface
3. `react-brackets`, for rendering tournament brackets

## Extras we've done
Since we've already put every single component we want into a component and we have a data context storing all the tournaments, we thought it'd be helpful to get some of our complicated server functions demonstrated on the frontend. We did this mainly to get a headstart on phase 2 as our components are capable of updating, we just need an API middleman to setup the actual logic.

1. We've implemented the ability to kick users from a tournament as an organizer, it shows how the team cards can be updated and how the number of teams/members is re-rendered.
2. We've implemented the ability to kick users from a team, this will result in them joining their own team under their name.
3. EXPIRMENTAL: You can change other team names as an organizer but clicking on the titles. This is a bit buggy since management is done in the frontend for now, it'll work when ported over to the backend.
