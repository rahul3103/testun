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

const SocialImage = styled.img`
  margin-right: ${Spacings.SPACING_3B};
`;

const SocialImagesWrapper = styled.div`
  margin-bottom: ${Spacings.SPACING_4B};
  margin-top: ${Spacings.SPACING_10B};
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  grid-column: 8/15;
  justify-content: space-between;
`;

const DownloadAppsWrapper = styled.div`
  display: flex;
  grid-column: 18/25;
  justify-content: space-between;
`;

const AppImage = styled.img`
  margin-bottom: ${Spacings.SPACING_2B};
`;

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
      name: 'facebook',
      link: 'http://www.facebook.com',
      src: 'static/images/facebook.svg',
      alt: 'facebook'
    },
    {
      name: 'youtube',
      link: 'http://www.youtube.com',
      src: 'static/images/youtube.svg',
      alt: 'youtube'
    },
    {
      name: 'twitter',
      link: 'http://www.twitter.com',
      src: 'static/images/twitter.svg',
      alt: 'twitter'
    },
    {
      name: 'instagram',
      link: 'http://www.instagram.com',
      src: 'static/images/instagram.svg',
      alt: 'instagram'
    },
    {
      name: 'linkedin',
      link: 'http://www.linkedin.com',
      src: 'static/images/linkedin.svg',
      alt: 'linkedin'
    }
  ];
  const socialIcons = socialIconsLink.map(social => (
    <a href={social.link} key={social.name}>
      <SocialImage src={social.src} alt={social.alt} />
    </a>
  ));

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

  const linksLeft = linksListLeft.map(link => (
    <StyledList key={link.label}>
      <Link label={link.label} href={link.href} />
    </StyledList>
  ));

  const linksRight = linksListRight.map(link => (
    <StyledList key={link.label}>
      <Link label={link.label} href={link.href} />
    </StyledList>
  ));

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

  const learnerApp = learnerAppInfo.map(app => (
    <a href={app.link} key={app.label}>
      <AppImage src={app.src} alt={app.label} />
    </a>
  ));

  const educatorApp = educatorAppInfo.map(app => (
    <a href={app.link} key={app.label}>
      <AppImage src={app.src} alt={app.label} />
    </a>
  ));

  return (
    <FooterContainer>
      <FooterWrapper>
        <UNInfo>
          <Logo />
          <SocialImagesWrapper>{socialIcons}</SocialImagesWrapper>
          <P2> © 2019 Sorting Hat Technologies</P2>
        </UNInfo>
        <FooterLinksWrapper>
          <ul>{linksLeft}</ul>
          <ul>{linksRight}</ul>
        </FooterLinksWrapper>
        <DownloadAppsWrapper>
          <div>
            <StyledP2>LEARNER APP</StyledP2>
            {learnerApp}
          </div>
          <div>
            <StyledP2>EDUCATOR APP</StyledP2>
            {educatorApp}
          </div>
        </DownloadAppsWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default BaseFooter;
