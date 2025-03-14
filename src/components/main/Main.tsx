import '../styles/Main.css';
import styled from 'styled-components';
import Flex from '../common/Flex';
import FlexCenter from '../common/FlexCenter';
import Text from '../common/Text';
import Button from '../common/Button';
import Image from '../common/Image';
import '../styles/reset.css';
import '../styles/common.css';

const StyledFlexCenter = styled(FlexCenter)`
  width: 100%;
  height: 750px;
  background-color: #fff;
  &.home-map {
    background-image: url(../../assets/images/home_map.png);
    background-repeat: no-repeat;
    background-position: -12% 50%;
  }
  &.sky {
    background-color: #333b58;
    height: 740px;
    padding-top: 160px;
  }
  &.card {
    height: 1060px;
  }
  &.last {
    background-color: #f9f9f9;
    height: 1000px;
  }
  &.main-bg {
    background-image: url(src/assets/images/main-bg3.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
    padding: 81px 0;
  }
`;

const StyledFlex = styled(Flex)`
  width: 400px;
  &.cards {
    margin-top: 60px;
    width: 300px;
    position: relative;
  }
`;

const StyledText = styled(Text)`
  margin: 25px 0;
`;

const StyledBtnText = styled(Text)`
  font-size: 16px;
  color: #333;
`;

const StyledImage = styled(Image)`
  position: relative;
  &.card-side {
    z-index: 0;
    margin: 0 -100px;
  }
  &.card-main {
    z-index: 1;
  }
`;

function Main() {
  return (
    <>
      <div className="intro-main">
        <Flex vertical justify="center" className="intro-main-content">
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
                marginR={7}
              />
              <StyledBtnText>Google Play</StyledBtnText>
            </Button>
            <Button width={200} height={55}>
              <Image
                src="../../assets/images/apple.png"
                width={25}
                height={25}
                marginR={7}
              />
              <StyledBtnText>App Store</StyledBtnText>
            </Button>
          </Flex>
        </Flex>
        <div className="background-line" />
      </div>
      <StyledFlexCenter center>
        <Flex>
          <Image
            src="../../assets/images/main-withdrawal.png"
            width={473}
            marginR={100}
          />
        </Flex>
        <StyledFlex vertical>
          <Text bold={700} size={40} height={1.35}>
            모바일로 더 손쉬운
            <br />
            계좌개설, 간편한 이체
          </Text>
          <StyledText bold={400} size={15} height={1.7}>
            인증서, OTP 없이 계좌 개설이 간편합니다.
            <br />
            여러 건의 이체도 몇 번의 터치로 손쉽게 보낼 수 있습니다.
          </StyledText>
          <Button width={255} height={55}>
            <StyledBtnText>카카오뱅크 입출금통장</StyledBtnText>
            <Image
              src="../../assets/images/home_arr.png"
              width={6}
              marginT={3}
              marginL={6}
            />
          </Button>
        </StyledFlex>
      </StyledFlexCenter>
      <div className="section-divider" />
      <StyledFlexCenter center>
        <StyledFlex vertical>
          <Text bold={700} size={40} height={1.35}>
            우대조건 없이
            <br />
            합리적인 예금과 적금
          </Text>
          <StyledText bold={400} size={15} height={1.7}>
            기대했던 금리와 다르게 복잡한 우대조건에 실망한 적이 있었나요?
            <br />
            카카오뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나 편리하고
            합리적입니다.
          </StyledText>
          <Flex gap={10}>
            <Button width={255} height={55}>
              <StyledBtnText>정기예금</StyledBtnText>
              <Image
                src="../../assets/images/home_arr.png"
                width={6}
                marginT={3}
                marginL={6}
              />
            </Button>
            <Button width={255} height={55}>
              <StyledBtnText>자유적금</StyledBtnText>
              <Image
                src="../../assets/images/home_arr.png"
                width={6}
                marginT={3}
                marginL={6}
              />
            </Button>
          </Flex>
          <Flex>
            <Image
              src="../../assets/images/main-savings-money.png"
              width={400}
              marginT={50}
            />
          </Flex>
        </StyledFlex>
        <Flex>
          <Image
            src="../../assets/images/main-savings.png"
            width={409}
            marginL={100}
          />
        </Flex>
      </StyledFlexCenter>
      <div className="section-divider" />
      <StyledFlexCenter center>
        <Flex>
          <Image
            src="../../assets/images/main-moim.png"
            width={460}
            marginR={80}
          />
        </Flex>
        <StyledFlex vertical>
          <Text bold={700} size={40} height={1.35}>
            함께 쓰고 같이 보는
            <br />
            모임통장
          </Text>
          <StyledText bold={400} size={15} height={1.7}>
            카카오톡 친구를 바로 모임통장으로 초대하고
            <br />
            친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다.
            <br />
            재미있는 메시지 카드로 회비 입금 요청도 해보세요.
          </StyledText>
          <Button width={255} height={55}>
            <StyledBtnText>모임통장</StyledBtnText>
            <Image
              src="../../assets/images/home_arr.png"
              width={6}
              marginT={3}
              marginL={6}
            />
          </Button>
        </StyledFlex>
      </StyledFlexCenter>
      <div className="section-divider" />
      <StyledFlexCenter center>
        <StyledFlex vertical>
          <Text bold={700} size={40} height={1.35}>
            함께 도전해서
            <br />
            재미있는 26주적금
          </Text>
          <StyledText bold={400} size={15} height={1.7}>
            26주동안 변화하는 재미에 빠져있는 사이
            <br />
            어느덧 만기 달성 경험을 맛보게 됩니다.
          </StyledText>
          <Button width={255} height={55}>
            <StyledBtnText>26주적금</StyledBtnText>
            <Image
              width={6}
              marginT={3}
              marginL={6}
              src="../../assets/images/home_arr.png"
            />
          </Button>
        </StyledFlex>
        <Flex>
          <Image src="../../assets/images/main-26weeks.png" width={490} />
        </Flex>
      </StyledFlexCenter>
      <div className="section-divider" />
      <StyledFlexCenter center className="home-map">
        <Flex>
          <Image
            src="../../assets/images/main-foreignRemittance-new.png"
            width={400}
            marginR={80}
          />
        </Flex>
        <StyledFlex vertical>
          <Text bold={700} size={40} height={1.35}>
            해외계좌송금과
            <br />
            WU빠른해외송금을
            <br />더 쉽고, 저렴하게
          </Text>
          <StyledText bold={400} size={15} height={1.7}>
            해외계좌송금이 가능한 22개국을 포함하여
            <br />
            전세계 200여개국으로
            <br />
            WU빠른해외송금이 가능합니다.
          </StyledText>
          <Button width={255} height={55}>
            <StyledBtnText>해외송금</StyledBtnText>
            <Image
              src="../../assets/images/home_arr.png"
              width={6}
              marginT={3}
              marginL={6}
            />
          </Button>
        </StyledFlex>
      </StyledFlexCenter>
      <StyledFlexCenter center vertical className="sky">
        <FlexCenter vertical center>
          <Text color="#fff" size={40} height={1.35} bold={600}>
            복잡한 서류 제출을 간편하게, 내가 원하는 시간에
          </Text>
          <StyledText color="#fff" size={15} bold={200}>
            이사 날짜가 주말이나 공휴일이어도 전월세보증금 대출을 신청할 수
            있습니다.
          </StyledText>
        </FlexCenter>
        <Flex gap={10}>
          <Button width={160} height={50} color="#ffffff17" radius={10}>
            <Text color="#fff">마이너스 통장대출</Text>
            <Image
              width={6}
              marginT={3}
              marginL={6}
              src="../../assets/images/home_arr.png"
            />
          </Button>
          <Button width={160} height={50} color="#ffffff17" radius={10}>
            <Text color="#fff">신용대출</Text>
            <Image
              width={6}
              marginT={3}
              marginL={6}
              src="../../assets/images/home_arr.png"
            />
          </Button>
          <Button width={160} height={50} color="#ffffff17" radius={10}>
            <Text color="#fff">개인사업자 대출</Text>
            <Image
              width={6}
              marginT={3}
              marginL={6}
              src="../../assets/images/home_arr.png"
            />
          </Button>
          <Button width={160} height={50} color="#ffffff17" radius={10}>
            <Text color="#fff">전월세보증금 대출</Text>
            <Image
              width={6}
              marginT={3}
              marginL={6}
              src="../../assets/images/home_arr.png"
            />
          </Button>
        </Flex>
        <Image src="../../assets/images/main-loan.png" width={430} />
      </StyledFlexCenter>
      <StyledFlexCenter center vertical className="card">
        <FlexCenter vertical center>
          <Text size={40} height={1.35} bold={600} align="center">
            프렌즈 체크카드,
            <br />
            내가 고르는 선택의 즐거움
          </Text>
          <StyledText size={15} bold={200} align="center">
            프렌즈 디자인부터 멋스러운 블랙 컬러 카드까지 원하는 디자인과 기능을
            선택할 수 있습니다.
          </StyledText>
        </FlexCenter>
        <Button width={255} height={55}>
          <StyledBtnText>카카오뱅크 프렌즈 체크카드</StyledBtnText>
          <Image
            src="../../assets/images/home_arr.png"
            width={6}
            marginT={3}
            marginL={6}
          />
        </Button>
        <StyledFlex align="center" justify="center" className="cards">
          <StyledImage
            src="../../assets/images/card-1.png"
            className="card-side"
          />
          <StyledImage
            src="../../assets/images/card-2.png"
            className="card-main"
          />
          <StyledImage
            src="../../assets/images/card-3.png"
            className="card-side"
          />
        </StyledFlex>
      </StyledFlexCenter>
      <StyledFlexCenter center vertical className="last">
        <Text size={40} bold={700} height={1.35} align="center">
          IT 기술로 카카오뱅크를
          <br />
          만들어 갑니다.
        </Text>
        <div className="last-bar" />
        <Image src="../../assets/images/home_it.png" width={1020} />
        <Flex justify="space-between" className="text-container">
          <Flex vertical align="center" className="text-box">
            <Text size={18} bold={700} className="last-txt">
              간결하고, 유려하게
            </Text>
            <Text size={14} bold={200} height={1.7} color="#666" align="center">
              작은 모바일 화면에 적합하도록
              <br />
              복잡함을 덜어낸
              <br />
              유려하고 친화적인 UX
            </Text>
          </Flex>
          <Flex vertical align="center" className="text-box">
            <Text size={18} bold={700} className="last-txt">
              간편한 인증, 철저한 보안
            </Text>
            <Text size={14} bold={200} height={1.7} color="#666" align="center">
              지문, 비밀번호로 간편한 인증
              <br />
              IT 기술의 강력한 보안 검증과
              <br />
              데이터 암호화
            </Text>
          </Flex>
          <Flex vertical align="center" className="text-box"></Flex>
          <Flex vertical align="center" className="text-box">
            <Text size={18} bold={700} className="last-txt">
              Mobile First, One App
            </Text>
            <Text size={14} bold={200} height={1.7} color="#666" align="center">
              모바일에서 뱅킹이 더 쉽고 편리하게
              <br />
              여러 앱을 설치할 필요 없이
              <br />
              하나의 앱으로
            </Text>
          </Flex>
        </Flex>
      </StyledFlexCenter>
    </>
  );
}

export default Main;
