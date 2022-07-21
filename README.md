# MERN-Group-Project

## “TRAVEL MEMORIES APP”

Description:
Memory Travel app has a "To-Do" style functionality, enabling users to create plans for future travels (places), see list of places visited in the past (with dates), see API data for the places to visit (flights/hotels/etc.), preview individual places and update them.

Dashboard UI shows 2 columns / sides:
    (1) visited places;
    (2) adding new items + places not visited yet

Features:
1. User login / Registration (CR)
2. Create Places to go (cards: CRUD):
	- card creation (“Memory”) -> storing (pushing into) array of “placesToGo”
	- name
	- location (geo)
	- description / memory
	- APIs: Hotels, Transportation (flights, cars, etc.), Pictures
	- buttons: “BEEN HERE” -> moves to other column
	- visited: false
3. Memories (CRUD):
	- fetch “Memory” array with objects “placesVisited”
	- sorting
	- adding photos (maybe)
	- UI design showing “I was here”
	- visited: true

Routes* (examples):
	- https://localhost:3000/${userId}/dashboard/
	- https://localhost:3000/${userId}/place/${placeId}
	- https://localhost:3000/${userId}/place/edit/${placeId}

(need to make sure experience is personalized (user's data showing only for that specific user))

How to solve personalization?
In order to fetch only user’s memories -> add param of the userId to the objects (memory and place to go) and then fetch the objects in the array and select those whose key "userId" === logged-in user's ID.

## Discussion 7/20/2022

Items covered:
- Amee: UI Mockup and Login & Registration Screen + Backend for Registration/Login
	- Resources: [Create Backend](https://login.codingdojo.com/m/146/6928/50043) and [Authorisation & Middleware](https://login.codingdojo.com/m/146/6928/57086)
- Miguel: Dashboard and Edit (Form) components
- Chris: View component + APIs
	- Smth to consider: [APIs for Traveling](https://www.programmableweb.com/news/10-most-popular-travel-apis-2022/brief/2019/04/15)
- Leo: Backend Setup for the Dashboard

TBDs:
	1. Amee to update UI discussed by 7/21/22, items discussed:
		- Version B for Dashboard:
			- Update First Memory Card to be a Form (with similar design to other cards)
			- Keep view/edit buttons and add Delete (CRUD)
		- Remove Create Memory Card screen
		- Update View Memory Card screen with more details + pictures/API information
	2.  Basic features and App Components:
		- Build mockups and items by 7/22/22
		- We will sync and review the updates
		- Please don't push updates to the branch yet, before the discussion

## Current Design of the App

![This is an image](/Group_project.png)