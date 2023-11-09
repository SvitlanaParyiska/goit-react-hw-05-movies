import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { ColorRing } from 'react-loader-spinner';

const SharedLayout = props => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense
        fallback={
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{
              display: 'block',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
            wrapperClass="blocks-wrapper"
            colors={['#26fff2', '#326cff', '#849b87', '#26fff2', '#326cff']}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
