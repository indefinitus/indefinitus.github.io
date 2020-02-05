import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import { graphql } from 'gatsby';
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

export default function Index(props) {
  console.log('[test]', 'data', props);
  return (
    <>
      <Helmet>
        <title>{props.data.site.siteMetadata.title}</title>
      </Helmet>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Home
          </Typography>
          <Link to="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`;