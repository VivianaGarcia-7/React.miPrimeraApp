import React from 'react';
import './App.css';


// function HelloWorld(props) {
//   console.log(props)
//   return(
//     <div id="hello"> 
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//     </div>
//   )
// }

class HelloWorld extends React.Component{

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render(){
    if (this.state.show){ 
      return(
        <div id="hello"> 
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle show</button>
        </div>
      )
    }else{
      return <h1>
          There are not elements
          <button onClick={this.toggleShow}>
            Toggle Show
          </button>         
        </h1>
    }

  }
}

function App() {
  return (
    <div >
      This is my component:
      <HelloWorld mytext="Viviana García" subtitle="Excelente"/>
      <HelloWorld mytext="Emma García" subtitle="Excelente"/>
      <HelloWorld mytext="Emma y Vivi" subtitle="Familia"/> 
    </div>
  );
}

export default App;
