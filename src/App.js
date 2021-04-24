import React from "react";
import "./styles.css";
import { FaSortDown, FaSortUp } from "react-icons/fa";
const data = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt ante nisl, in finibus urna faucibus sed. Pellentesque sed leo in tortor blandit convallis. Suspendisse mauris leo, pharetra a ex at, porta pretium augue. Aliquam sed faucibus leo, sed pulvinar massa. Nam aliquam viverra est nec vestibulum. Sed non faucibus turpis, non tempus erat. Suspendisse rutrum id purus sit amet tincidunt. Curabitur pulvinar eu nisl id pretium. Duis eleifend interdum dolor, id pretium arcu. ",
  "Curabitur eget diam eget purus fermentum sagittis. Aliquam placerat efficitur arcu non pharetra. Donec quis iaculis arcu, sed pellentesque quam. Vivamus eu tellus nisi. Cras vel luctus diam. Proin tortor sapien, facilisis ac finibus sit amet, vestibulum ullamcorper risus. Etiam commodo lorem ac dui consectetur laoreet. Nullam id semper nisl. Duis pharetra convallis dictum. Fusce vitae tempus lorem, sed ultricies urna. Aliquam luctus lorem id arcu malesuada, a scelerisque urna consequat. Ut in risus quis tortor tincidunt mollis sed tristique tortor. Sed pulvinar orci quam, in rutrum mauris posuere vestibulum. Donec pellentesque sapien nisl, in sollicitudin odio auctor et. ",
  "Mauris sit amet turpis et nisl laoreet varius sed non mauris. Duis vel finibus velit. Aliquam vel iaculis tortor, dignissim fermentum lectus. Sed sit amet elit pellentesque, ultricies odio ut, venenatis lacus. Phasellus sit amet ex diam. Nam nec aliquet eros. Pellentesque sed cursus elit. Pellentesque placerat ultrices interdum. ",
  "Integer vitae auctor ante. Cras luctus, nisi quis condimentum eleifend, diam ipsum cursus nunc, sed dapibus nibh orci in velit. Fusce a leo enim. Vivamus sed maximus lorem, ac feugiat nisi. Vestibulum sit amet velit congue, finibus mi in, consectetur magna. Ut aliquet massa vitae eros cursus vulputate. Suspendisse potenti. Curabitur in venenatis orci. Suspendisse porta lectus eu lorem maximus, id accumsan nunc sollicitudin. Ut id turpis non dui sollicitudin tempor at ut leo. Maecenas sed cursus neque, ut pretium leo. Proin at felis scelerisque, egestas nisi ac, interdum libero. Quisque vel ornare enim. Phasellus pharetra neque a enim fringilla pulvinar. ",
  "Cras id tortor sit amet ipsum aliquet sagittis. Fusce sit amet euismod ante. Integer ac nunc venenatis, finibus enim id, vestibulum turpis. Integer tincidunt egestas ullamcorper. Sed in elit mauris. Aliquam felis tortor, congue sed ultrices ut, hendrerit sit amet metus. Suspendisse molestie, justo non tincidunt malesuada, magna urna blandit metus, sed volutpat lorem nisl eu velit. Sed ac nisi mi. "
];
export default class App extends React.Component {
	constructor(props)
    {
        super(props)
        this.state={
         count: 0,
        para: []
        }
		this.handleChange=this.handleChange.bind(this)
		this.generate=this.generate.bind(this)
		this.up=this.up.bind(this)
		this.down=this.down.bind(this)
	}
  
  handleChange(e) {
    let name = e.target.name;
    let val = e.target.value;
    this.setState({
      [name]: val
    });
  };
  generate() {
    let count = this.state.count;
    if (count === 0) {
      this.setState({
        para: "pls select some value"
      });
    }
    if (count > 0) {
      // for (let i = 0; i < count.length; i++) {
      //   this.setState({
      //     para: data[i]
      //   });
      //   console.log(para);
      //   console.log("hh");
      // }
      this.setState({
        para: data.slice(0, count)
      });
    }
    if (count > 5) {
      this.setState({
        para: "you exceeded limit"
      });
    }
  };

  up() {
    let count = this.state.count;
    this.setState({
      count: count + 1
    });
  };
  down(){
    let count = this.state.count;
    if (count > 0) {
      this.setState({
        count: count - 1
      });
    }
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>paragraph generator</h1>
          <form>
            <label>paragraph</label> {""}
            <input
              style={{ position: "relative", padding: "7px" }}
              type="text"
              className="fa"
              value={this.state.count}
              onChange={this.handleChange}
            />
            <span
              onClick={this.up}
              style={{
                position: "absolute",
                zIndex: 50,
                marginLeft: "-20px",
                marginTop: "4px"
              }}
            >
              <FaSortUp />
            </span>
            <span
              onClick={this.down}
              style={{
                position: "absolute",
                zIndex: 50,
                marginLeft: "-20px",
                marginTop: "8px"
              }}
            >
              <FaSortDown />
            </span>
            <button onClick={this.generate} style={{ background: "#9ec0f7" }}>
              generate
            </button>
          </form>
        </div>
        <div style={{ margin: "50px" }}>{this.state.para}</div>
      </>
    );
  }
}
