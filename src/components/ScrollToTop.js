import { Component } from 'react';
import { withRouter } from 'react-router-dom';

/**
 * Higher order component that makes sure pages scroll to the top when they are loaded. Taken from
 * the React Router v4 docs: https://reacttraining.com/react-router/web/guides/scroll-restoration
 * Two notes: First, this doesn't work when using the back button. I think that's what I want, but
 * I'm curious why not. Second, this compenent only imports Component and not React. I was getting
 * a warning for importanting React because it was unused. I removed it and it works fine. I
 * suspect this might be because I'm just returning the children, but not positive. I'm sure it
 * will need to be imported if I every do anything more with this component other than use it for
 * scrolling.
 */
class ScrollToTop extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
