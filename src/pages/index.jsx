/* eslint react/prop-types: 0 */

// import { useSelector } from 'react-redux';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchFreeCourses, fetchEducatorLeaderboard } from '../redux/actions';
import Layout from '../layout';
import { Avatar } from '../components';

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
        <div style={{ gridColumn: 'span 6' }}>
          <Avatar imageUrl="https://edge.uacdn.net/static/thumbnail/user/9ccde2d9973b47d1bc64d98c36eaa987.jpg?q=100&w=512&fm=webp" />
        </div>
        {/* {JSON.stringify(authors)} */}
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
