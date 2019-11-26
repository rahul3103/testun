/* eslint react/prop-types: 0 */

// import { useSelector } from 'react-redux';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchFreeCourses, fetchEducatorLeaderboard } from '../redux/actions';
import Layout from '../layout';

// const Index = () => {
//   const authors = useSelector(state => state.authors.data);
//   const goals = useSelector(state => state.goals.data);
//   return (
//     <Layout>
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
    const {
      fetchFreeCourses: fetchFreeCoursesAction,
      fetchEducatorLeaderboard: fetchEducatorLeaderboardAction
    } = this.props;
    fetchFreeCoursesAction();
    fetchEducatorLeaderboardAction();
  }

  render() {
    return (
      <Layout>
        <div style={{ gridColumn: 'span 6' }}>yexy</div>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  fetchFreeCourses,
  fetchEducatorLeaderboard
};

const mapStateToProps = ({ authors }) => {
  return {
    authors: authors.data
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
