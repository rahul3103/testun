/* eslint react/prop-types: 0 */

import { PureComponent } from 'react';

// import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { fetchFreeCourses } from '../redux/actions';
import Button from '../components/Base/Button/Button';
import Layout from '../layout';

// const Index = () => {
//   const authors = useSelector(state => state.authors.data);
//   const goals = useSelector(state => state.goals.data);
//   return (
//     <Layout>
//       Authors
//       <div style={{ gridColumn: 'span 18' }}>{JSON.stringify(authors)}</div>
//       Goals
//       <div style={{ gridColumn: 'span 18' }}>{JSON.stringify(goals)}</div>
//     </Layout>
//   );
// };

// Index.getInitialProps = async ({ store, isServer }) => {
//   await store.dispatch(fetchFreeCourses());
//   return { isServer };
// };

// export default Index;

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
