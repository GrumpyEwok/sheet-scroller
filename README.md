## Description

This is currently a mockup of a larger-scale React application in development.  Its intent is to function like a portfolio for users, while serving a handy in-site PDF viewer to browse.  I'll use the display and viewer layers of PDF-js to build out features of my pdf-viewer component.  UI architecture and state management will be done primarily with React and React-Redux, with the potential to hook in Firebase.

[Link to Capstone Planning Repo](https://github.com/GrumpyEwok/capstone-planning.git)

#### Setup

Clone, install dependencies, host.

`git clone https://github.com/GrumpyEwok/sheet-scroller`

`npm i`

`npm run start`

###### Notes

* Need to adjust centering/scaling at different viewports in the PDF viewer. Overall height is excessive.

* Had some issues getting a router to play nicely with create-react-app.  Went back to docs and found BrowserRouter as a recommended implementation.

* Remember to use Try/Catch blocks for best readability/UX.

* Find a way to check for some 'isPDFready' evaluator (i.e. " if (...){} "  ) in order to provide users with a custom spinner while the document loads.  This logic is in PDFjs dist, so it may be difficult to expose.

* PDFjs waits for all assets (objects) of the PDF to encode before attempting to render on the canvas, this is what causes delay.


* The alignment between Header Logo and Landing Nameplate at path '/' is not in pixel perfect alignment.

Attributions:
  License distributed for PDF.js.
  Red Keyboard Photo w/ Hands == Photo by Puk Khantho on Unsplash
  Symphony Hall w/ Sheet Music Stand == Photo by Radek Grzybowski on Unsplash
  Grimy Russian Piano == Photo by Patrick Schneider on Unsplash
  Monochrome Piano w/ Knobs Hands == Photo by Guang Yang on Unsplash
  Monochrome Italian Sheet Music == Photo by Valentino Funghi on Unsplash
  Handsome Guy on the Piano == Photo by ian dooley on Unsplash

  https://www.vecteezy.com/vector-art/86360-elegant-frames-and-wreaths


Parallax:

  https://www.okgrow.com/posts/css-only-parallax

  https://speckyboy.com/10-css-javascript-parallax-scrolling-code-snippets/

Fonts:   

  * `font-family: 'Quicksand', sans-serif;` <br>
    For landing: <em> Light 300; Medium 500; Bold 700.

  * `font-family: 'EB Garamond', serif;` <br>
    For User UI: <em> Regular 400; Extra Bold 800.


Mock State:

    {
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
    }
