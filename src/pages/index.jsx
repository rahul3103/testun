/* eslint-disable no-use-before-define */
/* eslint react/prop-types: 0 */

import { useEffect } from 'react';
import { useSelectorToStore, useDispatchToStore } from '../utils/customHooks';
import {
  fetchEducatorLeaderboard,
  fetchFollowingUsers,
  fetchProfileInfo
} from '../redux/actions/educator';
import { fetchFreeGoalCourses } from '../redux/actions/courses';
import Layout from '../layout';
import { Carousel, PlusCourseCard } from '../components/Composite';

const Index = () => {
  const dispatch = useDispatchToStore();
  useEffect(() => {
    dispatch(fetchEducatorLeaderboard('KSCGY', true));
    dispatch(fetchFollowingUsers('PriyaPandian', true));
    dispatch(fetchProfileInfo('PriyaPandian'));
    dispatch(fetchFreeGoalCourses('KSCGY', true));
  }, [dispatch]);

  const mapStateToProps = ({ users, courses, paginator }) => {
    return {
      users: users.data,
      courses: courses.data,
      leaderboard: paginator.educatorLeaderboard
        ? paginator.educatorLeaderboard.KSCGY
        : {},
      profileInfo: users.profileInfo
    };
  };

  // eslint-disable-next-line no-unused-vars
  const props = useSelectorToStore(mapStateToProps);
  return (
    <Layout sideNav>
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
};

export default Index;

// Index.getInitialProps = async ({ store, isServer }) => {
// await store.dispatch(fetchFollowingUsers());
// return { isServer };
// };
