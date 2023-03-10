# Interview Scheduler
  ## Functional Requirements
    Development focuses on a single page application (SPA) called Interview Scheduler, built using React.
    Data is persisted by the API server using a PostgreSQL database.
    The client application communicates with an API server over HTTP, using the JSON format.
    Jest tests are used thro:ugh the development of the project.
  ## Behavioural Requirements
    Interviews can be booked between Monday and Friday.
    A user can switch between weekdays.
    A user can book an interview in an empty appointment slot.
    Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
    A user can cancel an existing interview.
    A user can edit the details of an existing interview.
    The list of days informs the user how many slots are available for each day.
    The expected day updates the number of spots available when an interview is booked or canceled.
    A user is presented with a confirmation when they attempt to cancel an interview.
    A user is shown an error if an interview cannot be saved or deleted.
    A user is shown a status indicator while asynchronous operations are in progress.
    When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
    The application makes API requests to load and persist data. We do not lose data after a browser refresh.
## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

##
Dependencies
    "axios": "^0.20.0",
    "classnames": "^2.2.6",
    "normalize.css": "^8.0.1",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "3.4.4"
Scheduler-API original github link:
https://github.com/lighthouse-labs/scheduler-api

## Final Product Screenshots

!["This is a screenshot of the adding/editing appointment"](https://github.com/kourtessis/scheduler/blob/master/docs/Adding-Editing-Appointment.png?raw=true)

!["This is a screenshot of the confirming a delete"](https://github.com/kourtessis/scheduler/blob/master/docs/Confirm-Delete.png?raw=true)

!["This is a screenshot of the main appointment page"](https://github.com/kourtessis/scheduler/blob/master/docs/Main-Appointment-Page.png?raw=true)

!["This is a screenshot of a new appointment added and spots remaining updated"](https://github.com/kourtessis/scheduler/blob/master/docs/New-Appointment.png?raw=true)