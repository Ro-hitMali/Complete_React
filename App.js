
const heading = React.createElement(
  "h1",
  { id: "heading", xyz:"abc"}, //we can provide attributes in this empty object
  "Hello World! from React"
);

console.log(heading) // it returns an object. This heading is react element and its just an javascript object.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

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