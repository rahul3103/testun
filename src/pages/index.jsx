/* eslint react/prop-types: 0 */

// import { useSelector } from 'react-redux';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  fetchEducatorLeaderboard,
  fetchFollowingUsers,
  fetchProfileInfo
} from '../redux/actions/educator';
import { fetchFreeGoalCourses } from '../redux/actions/courses';
import Layout from '../layout';
// import EducatorCard from '../components/Composite/EducatorCard/EducatorCard';
import { Carousel, PlusCourseCard } from '../components/Composite';

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
      fetchFreeGoalCourses: fetchFreeGoalCoursesAction,
      fetchProfileInfo: fetchProfileInfoAction
    } = this.props;
    // fetchFreeCoursesAction();
    fetchEducatorLeaderboardAction('KSCGY', true, false);
    fetchProfileInfoAction('PriyaPandian');
    fetchFreeGoalCoursesAction('KSCGY', true, false).then(() => {
      fetchFreeGoalCoursesAction('KSCGY', true, false);
    });
    fetchFollowingUsersAction('PriyaPandian', true, true);
  }

  render() {
    // const { leaderboard, users } = this.props;
    return (
      <Layout>
        <Carousel>
          <PlusCourseCard />
          <PlusCourseCard />
          <PlusCourseCard />
          <PlusCourseCard />
          <PlusCourseCard />
          <PlusCourseCard />
        </Carousel>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  fetchEducatorLeaderboard,
  fetchFollowingUsers,
  fetchFreeGoalCourses,
  fetchProfileInfo
};

const mapStateToProps = ({ users, courses, paginator }) => {
  return {
    users: users.data,
    courses: courses.data,
    leaderboard: paginator.educatorLeaderboard,
    profileInfo: users.profileInfo
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
