import React from 'react';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Header, Link } from './SharedLayout.styled';

const SharedLayout = props => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

SharedLayout.propTypes = {};

export default SharedLayout;
