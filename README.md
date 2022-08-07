# The Test Task for the position of React Native Developer

----------------------------


## ⚙️ How to start project
- Go to your project's root folder and run `npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install`
- Run `npm run ios` or `npm run android` to start your application!<br><br>
(Using yarn: `yarn ios` or `yarn android`)

----------------------------

## 🎯 Task
1. Run the React Native project (CLI) and immediately push it to the remote GitHub repository.
2. Write 2 screens (LoginScreen, HomeScreen)
3. Configure navigation. Implement transition between screens
4. Functionality of the first screen:<br>
4.1. Implement login functionality in 2 fields (email/password)<br>
4.2. Display the "Login" button only when the fields are filled<br>
4.3. Add validation of these fields with error output in case of entering invalid data (after clicking the login button)<br>
4.4. Align all content to the center of the screen<br>
4.5. After pressing the "Login" button (if the correct data is entered - transfer to the HomeScreen)
(For convenience, implement a small array of users with login and password fields and validate the login according to this data)<br>
5. Functionality of the second screen:<br>
5.1. In the header on the right, make a Log Out button, after clicking on which - the user is transferred back to the LoginScreen.<br>
5.2. When mounting the screen, execute a request to receive posts (https://jsonplaceholder.typicode.com)<br>
5.3. While the request is being executed, display the loading indicator in the center of the screen<br>
5.4. Record the received data in the state, and in case of an error, display the Snackbar (react-native-snackbar library) with the text "An error occurred" and the button "Repeat the request", tap on which to send the request posts again.<br>
5.5. For posts:<br>
5.5.1. Display FlatList on the entire screen with the output of the posts themselves (output title, body)<br>
5.5.2. By clicking on one post, open a modal window that should occupy no more than 50% of the entire screen and complete the comments request for this post (from the same resource).<br>
5.5.3. While the request is being executed, display the loading indicator on the modal<br>
5.5.4. After receiving the comments, render them within the modal also using FlatList<br>
5.5.5. If there is an error receiving comments, close the modal and display the Snackbar with the corresponding error<br>
5.5.6. Make a closure of the modalka on the tap outside its borders<br>

6. Additional task (will be a great advantage during evaluation)<br>
6.1. Using this library (https://github.com/react-native-netinfo/react-native-netinfo) display a block in the upper part of the screen with a message about the missing Internet connection<br>



