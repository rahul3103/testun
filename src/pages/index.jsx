/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
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
      leaderboard: paginator.educatorLeaderboard,
      freeCourses: paginator.freeGoalCourses,
      profileInfo: users.profileInfo
    };
  };

  const props = useSelectorToStore(mapStateToProps);
  console.log('props----', props);

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

      <Carousel>
        <PlusCourseCard />
        <PlusCourseCard />
        <PlusCourseCard />
        <PlusCourseCard />
        <PlusCourseCard />
        <PlusCourseCard />
      </Carousel>
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
