import styled from 'styled-components';
import Flex from '../common/Flex';
import Image from '../common/Image';
import Button from '../common/Button';
import Text from '../common/Text';
import '../styles/Header.css';
import FlexCenter from '../common/FlexCenter';

const FlexContainer = styled(Flex)`
  background-color: #fff;
  width: 100%;
  height: 81px;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  z-index: 1000;
`;

const StyledText = styled(Text)`
  margin: 0 12px;
  padding: 0 12px;
`;

function Header() {
  return (
    <>
      <FlexContainer align="center" justify="space-around">
        <Flex>
          <Image
            src="../../assets/images/Digital_Wordmark_Primary_Black.svg"
            width={116}
            height={20}
          />
        </Flex>
        <FlexCenter center>
          <StyledText>은행소개</StyledText>
          <StyledText>IR투자정보</StyledText>
          <StyledText>상품안내</StyledText>
          <StyledText>고객센터</StyledText>
          <Button
            width={126}
            height={40}
            radius={40}
            color="#f4f4f4cc"
            className="site-btn"
          >
            <Text size={15}>관련사이트</Text>
          </Button>
          <Image
            src="../../assets/images/global.svg"
            width={20}
            height={20}
            className="global-btn"
          />
        </FlexCenter>
      </FlexContainer>
    </>
  );
}

export default Header;
