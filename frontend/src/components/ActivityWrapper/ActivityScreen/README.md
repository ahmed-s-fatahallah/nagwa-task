# ActivityScreen component

- This component is responsible for fetching data when rendered and display the current word from the fetched array and a button for each POS.
- It uses 4 _useState_ hooks first hook to store the fetched data array, 2nd hook manages the state of the clicked button, 3rd hook manage which word is displayed from the fetched array, and the 4th hook to increment the progress Bar after answering.
- It uses _useContext_ hook to manage the global context states.
- It uses 2 _useEffect_ hooks to manage side effects such as sending **GET** request to get the data and _setTimeOut_ to make sure the user gets a feedback before the next word is displayed.
- It has _onClickHandler_ function that handles the button clicked state and checks if the clicked button has the right POS or not if so it increment the score counter.
- It checks if the data is loading it returns a loading spinner if not checks if there is an error and displays it, otherwise it returns a paragraph element that displays the current word, a list of buttons each has different POS, and a progress bar that increment during activity to show how far have you got.
