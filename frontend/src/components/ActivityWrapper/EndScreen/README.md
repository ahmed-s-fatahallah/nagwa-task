# EndScreen component

- This component is responsible for rendering the end screen and post the score to the API and get the rank and display it.
- It uses _useState_ hook to store the fetched rank.
- It uses _useContext_ hook to manage the global context states.
- It uses _useEffect_ hook to handle side effects like sending the **POST** request with the score to get the rank.
- It checks if the data is loading it returns a loading spinner if not checks if there is an error and displays it. otherwise it returns a button that can restart the activity and div containing a paragraph with text and a span with the rank the rank.
