/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Aside from '../components/aside';
import { fetchCars } from '../actions';


class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garageName);
  }

  render() {
    if (this.props.cars.length === 0) {
      return [
        <Aside key="aside" garage={this.props.garageName}>
          <Link to="/cars/new">Add a car</Link>
        </Aside>,
        <div className="no-car" key="nocar">No car yet</div>
      ];
    }
    return [
      <Aside key="aside" garageName={this.props.garageName}>
        <Link to="/cars/new">Add a car</Link>
      </Aside>,
      <div className="list-container">
        {this.props.cars.map((car) => {
          return (
            <div key={car.id} className="car-smallad" >
              <Link to={`/cars/${car.id}`} key={car.id} />
              <img className="car-log" src="./assets/images/logo_square.svg" alt="logo-square" />
              <div className="car-details">
                <span>{car.brand} - {car.model}</span>
                <ul>
                  <li><strong>Owner: </strong>{car.owner}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garageName: state.garageName
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchCars
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
