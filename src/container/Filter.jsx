import React from 'react';
import './Filter.css';

class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onFilterChange( this.state.keyword);
  }

  handleClear = (event) => {
    this.setState({
      keyword: ""
    }, () => {
      this.props.onFilterChange( this.state.keyword);
    })
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      keyword: event.target.value
    }, () => {
      this.props.onFilterChange( this.state.keyword);
    })
  }

  render() {
    return (<form className="form-inline mt-2 px-2 row" onSubmit={this.handleSubmit}>
      <div className="input-group col">
        <input type="text" className="form-control col" value={this.state.keyword} onChange={this.handleChange} placeholder="Search name or category"/>
        <div className="input-group-append">
          <button type="button" className="btn btn-outline-secondary" onClick={this.handleClear}><i className="fa fa-close"></i></button>
        </div>
      </div>
    </form>);
  }

}


export default Filter;