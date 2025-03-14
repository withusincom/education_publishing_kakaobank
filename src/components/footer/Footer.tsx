import styled from 'styled-components';
import Flex from '../common/Flex';
import Image from '../common/Image';
import Text from '../common/Text';
import '../styles/Footer.css';

const StyledFlex = styled(Flex)`
  width: 100%;
  height: 201px;
  bottom: 0px;
  background-color: #eee;
`;

function Footer() {
  return (
    <>
      <StyledFlex vertical justify="center">
        <Flex vertical className="footer-inner">
          <Flex align="center">
            <Text size={12} color="#666" align="left">
              모바일뱅킹 서비스 이용약관
            </Text>
            <div className="footer-bar" />
            <Text size={12} color="#666" align="left">
              전자금융거래 기본약관
            </Text>
            <div className="footer-bar" />
            <Text size={12} color="#000" align="left">
              위치기반 서비스 이용약관
            </Text>
            <div className="footer-bar" />
            <Text size={12} color="#000" align="left">
              개인정보처리방침
            </Text>
            <div className="footer-bar" />
            <Text size={12} color="#000" align="left">
              전자민원접수
            </Text>
            <div className="footer-bar" />
            <Text size={12} color="#666" align="left">
              보호금융상품등록부
            </Text>
            <div className="footer-bar" />
            <Text size={12} color="#666" align="left">
              상품공시실
            </Text>
            <div className="footer-bar" />
            <Text size={12} color="#666" align="left">
              경영공시
            </Text>
            <div className="footer-bar" />
            <Text size={12} color="#666" align="left">
              공지사항
            </Text>
          </Flex>
          <Flex align="center">
            <Text size={12} color="#666" align="left">
              전자서명인증업무준칙
            </Text>
            <div className="footer-bar" />
            <Text size={12} color="#666" align="left">
              카카오뱅크 인증서 서비스 이용약관
            </Text>
            <div className="footer-bar" />
            <Text size={12} color="#000" align="left">
              카카오뱅크 인증서 서비스 개인정보처리방침
            </Text>
          </Flex>
          <Flex align="center" className="text-margin">
            <Text size={12} color="#666" align="left" className="padding">
              (주)카카오뱅크·윤호영·사업자번호 375-88-00197
            </Text>
            <Text size={12} color="#000" align="left" className="padding">
              대표전화 1599-3333
            </Text>
            <Text size={12} color="#666" align="left">
              (해외 +82-2-6420-3333)
            </Text>
          </Flex>
          <Text size={12} color="#666" align="left">
            Copyright © KakaoBank Corp. All rights reserved.
          </Text>
          <Flex align="center"></Flex>
          <Flex className="text-padding">
            <Image
              src="../../assets/images/webaccessibility.png"
              width={46}
              className="padding"
            />
            <Text size={12} color="#444" className="padding text-padding">
              웹 접근성 품질인증
            </Text>
            <Image
              src="../../assets/images/web_trust_seal.png"
              width={38}
              className="padding"
            />
            <Text size={12} color="#444" className="text-padding">
              웹 트러스트 인증
            </Text>
          </Flex>
        </Flex>
      </StyledFlex>
    </>
  );
}

export default Footer;
