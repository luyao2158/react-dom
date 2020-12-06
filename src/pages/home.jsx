import React from 'react';
import { Link } from 'react-router-dom';

import './style.less';

const Home = () => {
  return (
    <Link to="/about">
      去about
    </Link>
  )
}

export default Home;