/* eslint react/prop-types: 0 */

// import { useSelector } from 'react-redux';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchFreeCourses, fetchEducatorLeaderboard } from '../redux/actions';
import Layout from '../layout';
import { Tags } from '../components';

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
    // const { authors } = this.props;
    return (
      <Layout>
        <div>
          <Tags label="Unacademy" type="filled" />
          <Tags label="Unacademy" type="hollow" />
          <Tags label="Unacademy" type="transparent" />
          <Tags label="Live" type="live" />
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  fetchFreeCourses,
  fetchEducatorLeaderboard
};

const mapStateToProps = ({ clock, authors }) => {
  return {
    currentTime: clock.currentTime,
    authors: authors.data
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
