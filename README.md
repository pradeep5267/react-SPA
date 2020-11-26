### Functional components
- App.js calls the ProjectComponentFunctionsDriver which deserializes the data object and calls the ProjectObjectDisplayComponent
- the ProjectObjectDisplayComponent is where the display part (scaffolding) is defined.
- while calling ProjectComponentFunctionsDriver in app.js the map function is used to iterate over project data
    - map function requires a callback method and here is where I have called the ProjectComponentFunctionsDriver