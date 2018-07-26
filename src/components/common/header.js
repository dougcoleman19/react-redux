import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
        <nav>
            <Link to="/" activeClassName="active">Home</Link>
            {" | "} 
            <Link to="/about" activeClassName="active">About</Link>
            {" | "} 
            <Link to="/courses" activeClassName="active">Courses</Link>
            {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;