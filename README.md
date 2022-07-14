# MERN-Group-Project

“MEMORY TRAVEL CARD”

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