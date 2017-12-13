// TODO
var GroceryList = (props) => (
  <div>
    {props.items.map(item =>
      <GroceryListItem name={item} />
    )}
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }
  onItemHover() {
    this.setState({
      hover: !this.state.hover
    })
  }
  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }
    return(
      <li style={style} onMouseEnter={this.onItemHover.bind(this)} onMouseLeave={this.onItemHover.bind(this)}>{this.props.name}</li>
    );
  }
}

ReactDOM.render(
  <GroceryList items={['Eggs', 'Milk']}/>, 
  document.getElementById('app')
);
