
const heading = React.createElement(
  "h1",
  { id: "heading", xyz:"abc"}, //we can provide attributes in this empty object
  "Hello World! from React"
);

console.log(heading) // it returns an object. This heading is react element and its just an javascript object.

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// Using JSX - It is asyntax like HTML or XML languages

const jsxHeading = <h1>This is using JSX syntax</h1>

// For multiple lines of JSX use ()
const jsxHead = (
    <h1 className="head">
    This is using JSX syntax</h1>
)


console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

/*
But if we have structure like this
<div id="parent">
    <div id="child">
        <h1>This is nested h1 tag</h1>
    </div>
</div>

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div", {id:"child"}, React.createElement("h1", {}, "This is Nested h1 tag"))
)

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
*/
// How jsx works ⇒ JSX ⇒ Babel traspiles it to Ract.createElement ⇒ ReactElement - JS object ⇒ HTML Element (render) (it will render as a html element on DOM)

// Babel will convert JSX into React.createElement