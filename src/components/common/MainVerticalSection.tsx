import styled from 'styled-components';
import Flex from './Flex';
import FlexCenter from './FlexCenter';
import Text from './Text';
import Image from './Image';
import { ReactNode } from 'react';
import React from 'react';
import CustomButton from './CustomButton';

const LastBar = styled.div`
  width: 100px;
  height: 2px;
  background-color: #000;
  margin-top: 20px;
  margin-bottom: 100px;
`;

const TextContainer = styled(Flex)`
  width: 100%;
  max-width: 1020px;
  margin-top: 20px;
`;

const StyledTitle = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 13px;
`;

const StyledFlexCenter = styled(FlexCenter)`
  width: 100%;
  height: 1000px;
  &.sky {
    background-color: #333b58;
    height: 740px;
    padding-top: 160px;
  }
  &.card {
    height: 1060px;
    background-color: #fff;
  }
  &.last {
    background-color: #f9f9f9;
    height: 1000px;
  }
`;

const StyledFlex = styled(Flex)`
  width: 400px;
  margin-top: 63px;
`;

const StyledText = styled(Text)`
  margin: 25px 0;
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

interface TextBoxProps {
  title: string;
  description: string[];
}

const TextBox = ({ title, description }: TextBoxProps) => {
  return (
    <Flex vertical align="center" style={{ width: '25%' }}>
      <StyledTitle size={18} bold={700}>
        {title}
      </StyledTitle>
      <Text size={14} bold={200} height={1.7} color="#666" align="center">
        {description.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Text>
    </Flex>
  );
};

interface MainVerticalSectionProps {
  title?: ReactNode;
  description?: string;
  imgSrcs?: string[];
  imgWidth?: number;
  btnTexts?: string[];
  btnWidth?: number;
  bgClass?: string;
  imgClass?: string[];
  btnColor?: React.CSSProperties['color'];
  txtColor?: React.CSSProperties['color'];
  additionalTitles?: string[];
  additionalTexts?: string[];
}

const MainVerticalSection = ({
  title,
  description,
  imgSrcs = [],
  imgWidth,
  btnTexts = [],
  btnWidth,
  btnColor,
  bgClass,
  txtColor,
  imgClass = [],
  additionalTitles = [],
  additionalTexts = [],
}: MainVerticalSectionProps) => {
  return (
    <StyledFlexCenter className={bgClass} center vertical>
      <FlexCenter vertical center>
        <Text
          color={txtColor}
          size={40}
          height={1.35}
          bold={600}
          align="center"
        >
          {title}
        </Text>
        <StyledText color={txtColor} size={15} bold={200} align="center">
          {description}
        </StyledText>
      </FlexCenter>
      <Flex gap={10}>
        {btnTexts.map((text, index) => (
          <CustomButton
            key={index}
            text={text}
            txtColor={txtColor}
            btnWidth={btnWidth}
            height={55}
            gap={6}
            color={btnColor}
          />
        ))}
      </Flex>
      {additionalTexts?.length > 0 && <LastBar />}
      <StyledFlex align="center" justify="center">
        {imgSrcs.map((src, index) => (
          <StyledImage
            key={index}
            src={src}
            width={imgWidth}
            className={imgClass[index] || ''}
          />
        ))}
      </StyledFlex>
      <TextContainer justify="space-between">
        {additionalTitles.map((title, index) => (
          <TextBox
            key={index}
            title={title}
            description={additionalTexts[index]?.split('\n') || [' ']}
          />
        ))}
      </TextContainer>
    </StyledFlexCenter>
  );
};

export default MainVerticalSection;
