import '../styles/reset.css';
import '../styles/common.css';
import styled from 'styled-components';
import Flex from '../common/Flex';
import Text from '../common/Text';
import Button from '../common/Button';
import Image from '../common/Image';
import MainSection from '../common/MainSection';
import MainVerticalSection from '../common/MainVerticalSection';

const SectionDivider = styled.div`
  width: 100%;
  background-color: #fafafa;
  height: 32px;
`;

const IntroMain = styled.div`
  position: relative;
  width: 100%;
  height: 884px;
  margin: 0;
  background-color: #fff;
`;
const BackgroundLine = styled.div`
  width: 100%;
  height: 720px;
  background-color: #ffef6b;
  position: absolute;
  top: 0;
`;

const IntroMainContent = styled(Flex)`
  position: relative;
  max-width: 1200px;
  height: 884px;
  background-image: url(src/assets/images/main-bg3.png);
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
  margin: auto;
`;

const StyledText = styled(Text)`
  margin: 25px 0;
`;

const StyledBtnText = styled(Text)`
  font-size: 16px;
  color: #333;
`;

function Main() {
  return (
    <>
      <IntroMain>
        <IntroMainContent vertical justify="center">
          <Text bold={700} size={49} height={1.4}>
            이미 모두의 은행
            <br />
            지금은 카카오뱅크
          </Text>
          <StyledText bold={400} size={16} height={1.95} color="#555">
            한 사람, 한 사람을 위해 시작한 은행이
            <br />
            더 많은 사람들이 찾는 모두의 은행이 되었습니다.
            <br />
            <br />
            보내고, 받고, 모으고, 쓰는
            <br />
            당신의 모든 일이 바뀌고 있습니다.
          </StyledText>
          <Flex gap={10}>
            <Button width={200} height={55}>
              <Image
                src="../../assets/images/google.png"
                width={25}
                height={25}
              />
              <StyledBtnText>Google Play</StyledBtnText>
            </Button>
            <Button width={200} height={55}>
              <Image
                src="../../assets/images/apple.png"
                width={25}
                height={25}
              />
              <StyledBtnText>App Store</StyledBtnText>
            </Button>
          </Flex>
        </IntroMainContent>
        <BackgroundLine />
      </IntroMain>
      <MainSection
        layout="left"
        imgSrc={'src/assets/images/main-withdrawal.png'}
        imgWidth={473}
        btnWidth={255}
        title={['모바일로 더 손쉬운', <br />, '계좌개설, 간편한 이체']}
        description={[
          '인증서, OTP 없이 계좌 개설이 간편합니다.',
          <br />,
          '여러 건의 이체도 몇 번의 터치로 손쉽게 보낼 수 있습니다.',
        ]}
        btnTexts={['카카오뱅크 입출금통장']}
      />
      <SectionDivider />
      <MainSection
        layout="right"
        imgSrc={'src/assets/images/main-savings.png'}
        imgWidth={400}
        btnWidth={150}
        title={['우대조건 없이', <br />, '합리적인 예금과 적금']}
        description={[
          '기대했던 금리와 다르게 복잡한 우대조건에 실망한 적이 있었나요?',
          <br />,
          '카카오뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나 편리하고 합리적입니다.',
        ]}
        btnTexts={['정기예금', '자유적금']}
        additionalImageSrc="src/assets/images/main-savings-money.png"
        additionalImageWidth={400}
      />
      <SectionDivider />
      <MainSection
        layout="left"
        imgSrc={'src/assets/images/main-moim.png'}
        imgWidth={460}
        btnWidth={255}
        title={['함께 쓰고 같이 보는', <br />, '모임통장']}
        description={[
          '카카오톡 친구를 바로 모임통장으로 초대하고',
          <br />,
          '친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다.',
          <br />,
          '재미있는 메시지 카드로 회비 입금 요청도 해보세요.',
        ]}
        btnTexts={['모임통장']}
      />
      <SectionDivider />
      <MainSection
        layout="right"
        imgSrc={'src/assets/images/main-26weeks.png'}
        imgWidth={460}
        btnWidth={255}
        title={['함께 도전해서', <br />, '재미있는 26주적금']}
        description={[
          '26주동안 변화하는 재미에 빠져있는 사이',
          <br />,
          '어느덧 만기 달성 경험을 맛보게 됩니다',
        ]}
        btnTexts={['26주적금']}
      />
      <SectionDivider />
      <MainSection
        layout="left"
        imgSrc={'src/assets/images/main-foreignRemittance-new.png'}
        imgWidth={400}
        btnWidth={255}
        title={[
          '해외계좌송금과',
          <br />,
          'WU빠른해외송금을',
          <br />,
          '더 쉽고 저렴하게',
        ]}
        description={[
          '해외계좌송금이 가능한 22개국을 포함하여',
          <br />,
          '전세계 200여개국으로',
          <br />,
          'WU빠른해외송금이 가능합니다.',
        ]}
        btnTexts={['해외송금']}
      />
      <MainVerticalSection
        title="복잡한 서류 제출을 간편하게, 내가 원하는 시간에"
        description="이사 날짜가 주말이나 공휴일이어도 전월세보증금 대출을 신청할 수 있습니다."
        imgSrcs={['src/assets/images/main-loan.png']}
        imgWidth={398}
        btnTexts={[
          '마이너스 통장대출',
          '신용대출',
          '개인사업자 대출',
          '전월세보증금 대출',
        ]}
        btnWidth={160}
        btnColor="#ffffff17"
        bgClass="sky"
        txtColor="#fff"
      />
      <MainVerticalSection
        title={['프렌즈 체크카드,', <br />, '내가 고르는 선택의 즐거움']}
        description="프렌즈 디자인부터 멋스러운 블랙 컬러 카드까지 원하는 디자인과 기능을 선택할 수 있습니다."
        btnTexts={['카카오뱅크 프렌즈 체크카드']}
        btnWidth={255}
        bgClass="card"
        imgSrcs={[
          'src/assets/images/card-1.png',
          'src/assets/images/card-2.png',
          'src/assets/images/card-3.png',
        ]}
        imgClass={['card-side', 'card-main', 'card-side']}
      />
      <MainVerticalSection
        title={['IT 기술로 카카오뱅크를', <br />, '만들어 갑니다.']}
        imgSrcs={['src/assets/images/home_it.png']}
        imgWidth={1020}
        bgClass="last"
        additionalTexts={[
          '작은 모바일 화면에 적합하도록\n복잡함을 덜어낸\n유려하고 친화적인 UX',
          '지문, 비밀번호로 간편한 인증\nIT 기술의 강렬한 보안 검증과\n데이터 암호화',
          '',
          '모바일에서 뱅킹이 더 쉽고 편리하게\n여러 앱을 설치할 필요 없이\n하나의 앱으로',
        ]}
        additionalTitles={[
          '간결하고, 유려하게',
          '간편한 인증, 철저한 보안',
          '',
          'Mobile First, One App',
        ]}
      />
    </>
  );
}

export default Main;
