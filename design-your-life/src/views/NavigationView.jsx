import React from 'react';
import Navigation from '../components/Navigation/Navigation';

const NavigationView = props => {
  return <Navigation logout={props.logout} />;
};

export default NavigationView;
