class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { className: "titleClass" }, this.props.title), /*#__PURE__*/
      React.createElement("h5", { className: "codedByClass" }, "Coded by ", /*#__PURE__*/React.createElement("a", { target: "_blank", href: "https://github.com/paweldrabik97" }, "Pawe\u0142 Drabik"))));


  }}
;

ReactDOM.render( /*#__PURE__*/
React.createElement(Title, { title: "Markdown Previewer" }),
document.getElementById('title'));


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false });



class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '' };

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "previewClass" }, /*#__PURE__*/
      React.createElement("h3", { className: "appHeader" }, "Preview"), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked.parse(this.props.value) } })));


  }}
;

class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n}\n}\n```\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "editorClass" }, /*#__PURE__*/
      React.createElement("h3", { className: "appHeader" }, "Markdown input"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", onChange: this.handleChange, value: this.state.value })), /*#__PURE__*/

      React.createElement(Preview, { value: this.state.value })));


  }}
;





ReactDOM.render( /*#__PURE__*/
React.createElement(Editor, null),
document.getElementById('app'));