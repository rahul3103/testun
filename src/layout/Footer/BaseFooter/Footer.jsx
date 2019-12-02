import styled from 'styled-components';
import { Spacings } from '../../../styleConstants';
import { Logo, P2, Link } from '../../../components/Base';

const FooterContainer = styled.footer`
  background: #fff;
  width: 100%;
`;

const FooterWrapper = styled.div`
  width: 1136px;
  padding: ${Spacings.SPACING_10B} 0px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-column-gap: 16px;
  grid-template-rows: 72px 1fr;
`;

const UNInfo = styled.div`
  grid-column: 1/6;
`;

const StyledUNLogo = styled(Logo)`
  margin-bottom: ${Spacings.SPACING_10B};
`;

const SocialImage = styled.img`
  margin-right: ${Spacings.SPACING_3B};
`;

const SocialImagesWrapper = styled.div`
  margin-bottom: ${Spacings.SPACING_4B};
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  grid-column: 8/15;
  justify-content: space-between;
`;
const LeftLinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const RightLinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const DownloadAppsWrapper = styled.div`
  display: flex;
  grid-column: 18/25;
`;

const LearnerAppsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${Spacings.SPACING_12B};
`;

const EducatorAppsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppImage = styled.img`
  margin-bottom: ${Spacings.SPACING_2B};
`;

const StyledLink = styled(Link)``;

const StyledP2 = styled(P2)`
  margin-bottom: 16px;
`;

const StyledList = styled.li`
  list-style-type: none;
  margin-bottom: ${Spacings.SPACING_2B};
`;

const BaseFooter = () => {
  const socialIconsLink = [
    {
      id: '1',
      name: 'facebook',
      link: 'http://www.facebook.com',
      src: 'static/images/facebook.svg',
      alt: 'facebook'
    },
    {
      id: '2',
      name: 'youtube',
      link: 'http://www.youtube.com',
      src: 'static/images/youtube.svg',
      alt: 'youtube'
    },
    {
      id: '3',
      name: 'twitter',
      link: 'http://www.twitter.com',
      src: 'static/images/twitter.svg',
      alt: 'twitter'
    },
    {
      id: '4',
      name: 'instagram',
      link: 'http://www.instagram.com',
      src: 'static/images/instagram.svg',
      alt: 'instagram'
    },
    {
      id: '5',
      name: 'linkedin',
      link: 'http://www.linkedin.com',
      src: 'static/images/linkedin.svg',
      alt: 'linkedin'
    }
  ];
  const socialIcons = socialIconsLink.map(social => {
    return (
      <a href={social.link} key={social.id}>
        <SocialImage src={social.src} alt={social.alt} />
      </a>
    );
  });
  const linksListLeft = [
    { label: 'About us', href: 'http://www.gie.com' },
    { label: 'Careers', href: 'http://www.gos.com' },
    { label: 'Blogs', href: 'http://www.blogs.com' },
    { label: 'Privacy Policy', href: 'http://www.eie.com' },
    { label: 'Terms and Conditions', href: 'http://www.liie.com' }
  ];

  const linksListRight = [
    { label: 'User Guidelines', href: 'http://www.guidlines.com' },
    { label: 'Site Map', href: 'http://www.gos.com' },
    { label: 'Refund Policy', href: 'http://www.blogs.com' },
    { label: 'Legal Notices', href: 'http://www.eie.com' },
    { label: 'Plus subscriptions T&C', href: 'http://www.legalnotices.com' }
  ];

  const linksLeft = linksListLeft.map(link => {
    return (
      <StyledList key={link.label}>
        <StyledLink label={link.label} href={link.href} />
      </StyledList>
    );
  });

  const linksRight = linksListRight.map(link => {
    return (
      <StyledList key={link.label}>
        <StyledLink label={link.label} href={link.href} />
      </StyledList>
    );
  });

  const learnerAppInfo = [
    {
      label: 'Play Store',
      src: 'static/images/getitongoogleplay.svg',
      link: 'https://www.learnerplaystoe.com'
    },
    {
      label: 'App Store',
      src: 'static/images/getitonappstore.svg',
      link: 'https://www.learnerappstore.com'
    }
  ];

  const educatorAppInfo = [
    {
      label: 'Play Store',
      src: 'static/images/getitongoogleplay.svg',
      link: 'https://www.educatorplaystoe.com'
    },
    {
      label: 'App Store',
      src: 'static/images/getitonappstore.svg',
      link: 'https://www.educatorappstore.com'
    }
  ];

  const learnerApp = learnerAppInfo.map(app => {
    return (
      <a href={app.link} key={app.label}>
        <AppImage src={app.src} alt={app.label} />
      </a>
    );
  });

  const educatorApp = educatorAppInfo.map(app => {
    return (
      <a href={app.link} key={app.label}>
        <AppImage src={app.src} alt={app.label} />
      </a>
    );
  });

  return (
    <FooterContainer>
      <FooterWrapper>
        <UNInfo>
          <StyledUNLogo />
          <SocialImagesWrapper>{socialIcons}</SocialImagesWrapper>
          <P2> © 2019 Sorting Hat Technologies</P2>
        </UNInfo>
        <FooterLinksWrapper>
          <LeftLinksWrapper>{linksLeft}</LeftLinksWrapper>
          <RightLinksWrapper>{linksRight}</RightLinksWrapper>
        </FooterLinksWrapper>
        <DownloadAppsWrapper>
          <LearnerAppsWrapper>
            <StyledP2>LEARNER APP</StyledP2>
            {learnerApp}
          </LearnerAppsWrapper>
          <EducatorAppsWrapper>
            <StyledP2>EDUCATOR APP</StyledP2>
            {educatorApp}
          </EducatorAppsWrapper>
        </DownloadAppsWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default BaseFooter;
