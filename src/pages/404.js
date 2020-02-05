import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import { Helmet } from 'react-helmet';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function About() {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            404...
          </Typography>
          <Link to="/">Go to the main page</Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
