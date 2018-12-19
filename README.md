## Description

This is currently a mockup of a larger-scale React application in development.  Its intent is to function like a portfolio for users, while serving a handy in-site PDF viewer to browse.  I'll use the display and viewer layers of PDF-js to build out features of my pdf-viewer component.  UI architecture and state management will be done primarily with React and React-Redux, with the potential to hook in Firebase.

[Link to Capstone Planning Repo](https://github.com/GrumpyEwok/capstone-planning.git)

#### Setup

Clone, install dependencies, host.

`git clone https://github.com/GrumpyEwok/sheet-scroller`

`npm i`

`npm run start`

###### Notes

* Had some issues getting a router to play nicely with create-react-app.  Went back to docs and found BrowserRouter as a recommended implementation.

* React-Pdf-Js is out.  Pdf-js is in!  May have to rebuild from source, but I will test via cdn.  

* Going to use Async/Await in componentDidMount, to handle pdf initialization.  componentWillMount cannot be async, render cannot be async.  Methods however can be!

* Remember to use Try/Catch blocks for best readability/UX.

* Think about how to store/download PDFs as needed, so that they can be retrieved remotely.  Node.js to the rescue?  

* Find a way to check for some 'isPDFready' evaluator (i.e. " if (...){} "  ) in order to provide users with a custom spinner while the document loads.  This logic is in PDFjs dist, so it may be difficult to expose.

Fonts:   

  * `font-family: 'Quicksand', sans-serif;` <br>
    For landing: <em> Light 300; Medium 500; Bold 700.

  * `font-family: 'EB Garamond', serif;` <br>
    For User UI: <em> Regular 400; Extra Bold 800.




<!-- ###### Planned State:

  State: {
    isFetching: false / true,
    pdfToRender: [ PDF ],
    user: null / UserObj {
      userId: v4(),
      portfolio: null/ PortfolioObj {
        documents: sources,
      }
      userSettings: null/ SettingsObj {
        options: values,
      }
    },
  }` -->
