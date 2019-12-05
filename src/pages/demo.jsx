/* eslint-disable no-use-before-define */
/* eslint react/prop-types: 0 */

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelectorToStore, useDispatchToStore } from '../utils/customHooks';
import {
  fetchEducatorLeaderboard,
  fetchFollowingUsers,
  fetchProfileInfo
} from '../redux/actions/educator';
import { fetchFreeGoalCourses } from '../redux/actions/courses';
import Layout from '../layout';
import {
  Carousel,
  PlusCourseCard,
  FreeCourseCard,
  EducatorCard,
  EducatorDetailedCard,
  TestSeriesCard,
  TopicGroupCard
} from '../components/Composite';
import {
  BreadCrumbs,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P1,
  P2,
  Tags,
  Drawer,
  Dialog,
  Button
} from '../components/Base';

const Demo = () => {
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

  const Tag = styled(Tags)`
    margin: auto 8px;
  `;

  const TestSeriesCard1 = styled(TestSeriesCard)`
    margin: 8px;
  `;

  // eslint-disable-next-line no-unused-vars
  const props = useSelectorToStore(mapStateToProps);
  const [drawerState, setdrawerState] = useState(false);
  const [dialogState, setdialogState] = useState(false);
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
        <FreeCourseCard />
        <FreeCourseCard />
        <FreeCourseCard />
        <FreeCourseCard />
        <FreeCourseCard />
        <FreeCourseCard />
      </Carousel>
      <FreeCourseCard gridColumn={14} orientation="horizontal" />
      <PlusCourseCard gridColumn={14} orientation="horizontal" />
      <div style={{ display: 'flex', gridColumn: 'span 10' }}>
        <Button label="Open Drawer" onClick={() => setdrawerState(true)} />
        <Button label="Open Dialog" onClick={() => setdialogState(true)} />
        <Drawer drawerState={drawerState} onClose={() => setdrawerState(false)}>
          <PlusCourseCard />
        </Drawer>
        <Dialog dialogState={dialogState} onClose={() => setdialogState(false)}>
          <PlusCourseCard />
        </Dialog>
      </div>
      <div style={{ display: 'flex', gridColumn: 'span 10' }}>
        <BreadCrumbs
          tags={[
            { title: 'IIT JEE' },
            { title: 'Plus' },
            { title: 'Physics' },
            { title: 'Topic' }
          ]}
        />
      </div>
      <div style={{ display: 'flex', gridColumn: 'span 10' }}>
        <Tag type="filled">Tags</Tag>
        <Tag type="hollow">Tags</Tag>
        <Tag type="transparent">Tags</Tag>
        <Tag type="disabled">Tags</Tag>
        <Tag type="live">Tags</Tag>
      </div>
      <div style={{ gridColumn: 'span 10' }}>
        <H1>Unacademy - H1</H1>
        <H2>Unacademy - H2</H2>
        <H3>Unacademy - H3</H3>
        <H4>Unacademy - H4</H4>
        <H5>Unacademy - H5</H5>
        <H6>Unacademy - H6</H6>
        <P1>Unacademy - P1</P1>
        <P2>Unacademy - P2</P2>
        <div style={{ margin: '8px' }}>
          <TestSeriesCard1
            gridColumn={9}
            totalTests={12}
            testName="Test 2"
            testDateTime="Nov 25, 7:00pm"
            testSeriesName="Weekly Mock Tests on GATE (Mechanical) 2020"
            isEnrolled
          />
        </div>
        <div style={{ margin: '8px' }}>
          <TopicGroupCard
            label="Physics"
            content="20 Lectures"
            color="#F4F4F4"
          />
        </div>
        <div style={{ margin: '8px' }}>
          <EducatorCard
            watchMins="55M"
            name="Arjit Jindal"
            isVerified="true"
            gridColumn={6}
            imageSrc="https://edge.uacdn.net/static/thumbnail/user/9ccde2d9973b47d1bc64d98c36eaa987.jpg?q=100&w=512&fm=webp"
          />
        </div>
        <EducatorDetailedCard
          watchMins="55M"
          imageSrc="https://edge.uacdn.net/static/thumbnail/user/9ccde2d9973b47d1bc64d98c36eaa987.jpg?q=100&w=512&fm=webp"
          name="Arjit Jindal"
          isVerified="true"
          eduRank={2}
          goalName="IIT JEE"
          gridColumn={6}
          followers="233K"
        />
      </div>
    </Layout>
  );
};

export default Demo;

// Index.getInitialProps = async ({ store, isServer }) => {
// await store.dispatch(fetchFollowingUsers());
// return { isServer };
// };
