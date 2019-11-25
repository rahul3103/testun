/* eslint react/prop-types: 0 */

import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchFreeCourses } from '../redux/actions';
import Layout from '../layout';

class Index extends PureComponent {
  componentDidMount() {
    const { fetchFreeCourses: fetchFreeCoursesAction } = this.props;
    fetchFreeCoursesAction();
  }

  render() {
    const { authors } = this.props;
    return <Layout>{JSON.stringify(authors)}</Layout>;
  }
}

const mapDispatchToProps = { fetchFreeCourses };

const mapStateToProps = ({ clock, authors }) => {
  return {
    currentTime: clock.currentTime,
    authors: authors.data
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
