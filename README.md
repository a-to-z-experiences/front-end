# front-end

Front End Repository for A to Z Experiences
This Front End Project will focus on..

1. Creating a Register/Login component (/login)
   -Has a form with..
   username: "Enters email here"
   password: "Enters password here"
   Register button
   Login button

2. Creating a PrivateRoute component that shows a Home component if a user has a token in localStorage, or Redirects them to the login page if they don't

   - The Home component displays...
   - A nav bar with "Home, Available experiences"
   - A list of all the events the user has signed up for..

3. Creating an Experiences (Available experiences) component that displays...

   - A nav bar with "Home, Available experiences"
   - A form with...
     Add/Update an experience
     title:
     date:
     location:
   - Update/Delete submit button (this can only be triggered if token exists in local storage)
   - A list of all the available experiences...

4. Creating an Experience component that displays...
   - A nav bar with "Home, Available experiences"
   - Displays the title, date, location of the experience
   - An update and delete button
5. Creating an specificExperience component that displays...
   - A nav bar with "Home, Available experiences"
   - Divs with more detailed information regarding the experience, perhaps a description or a picture
