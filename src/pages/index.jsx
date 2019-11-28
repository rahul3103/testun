/* eslint react/prop-types: 0 */

// import { useSelector } from 'react-redux';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  fetchEducatorLeaderboard,
  fetchFollowingUsers,
  fetchFreeGoalCourses
} from '../redux/actions';
import Layout from '../layout';
import EducatorCard from '../components/Composite/EducatorCard/EducatorCard';

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
      fetchEducatorLeaderboard: fetchEducatorLeaderboardAction,
      fetchFollowingUsers: fetchFollowingUsersAction,
      fetchFreeGoalCourses: fetchFreeGoalCoursesAction
    } = this.props;
    // fetchFreeCoursesAction();
    fetchEducatorLeaderboardAction('KSCGY', true, false);
    fetchFreeGoalCoursesAction('KSCGY', true, false).then(() => {
      fetchFreeGoalCoursesAction('KSCGY', true, false);
    });
    fetchFollowingUsersAction('PriyaPandian', true, true);
  }

  render() {
    const { leaderboard, users } = this.props;
    return (
      <Layout>
        <div style={{ gridColumn: 'span 6' }} />
        {leaderboard.KSCGY
          ? leaderboard.KSCGY.results.map(item => {
              const user = users[item.user];
              return (
                // eslint-disable-next-line react/jsx-key
                <EducatorCard
                  watchMins="55M"
                  name={user.name}
                  isVerified
                  gridColumn="6"
                  key={`user-${user.uid}`}
                />
              );
            })
          : null}
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  fetchEducatorLeaderboard,
  fetchFollowingUsers,
  fetchFreeGoalCourses
};

const mapStateToProps = ({ users, courses, paginator }) => {
  return {
    users: users.data,
    courses: courses.data,
    leaderboard: paginator.educatorLeaderboard
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
