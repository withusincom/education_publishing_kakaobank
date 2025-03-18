import styled from 'styled-components';
import Flex from './Flex';
import FlexCenter from './FlexCenter';
import Text from './Text';
import Image from './Image';
import CustomButton from './CustomButton';
import { ReactNode } from 'react';

const StyledFlexCenter = styled(FlexCenter)`
  width: 100%;
  height: 750px;
  background-color: #fff;
`;

const StyledFlex = styled(Flex)`
  width: 400px;
  margin: 0 40px;
`;

const StyledText = styled(Text)`
  margin: 25px 0;
`;

const StyledImage = styled(Image)`
  margin: 0 40px;
`;

const StyledAddImage = styled(Image)`
  margin-top: 50px;
`;

interface MainSectionProps {
  imgSrc?: string;
  imgWidth?: number;
  title?: ReactNode;
  description?: ReactNode;
  btnTexts?: string[];
  btnWidth?: number;
  layout?: string;
  additionalImageSrc?: string;
  additionalImageWidth?: number;
}

const MainSection = ({
  imgSrc,
  imgWidth,
  title,
  description,
  btnTexts = [],
  btnWidth,
  layout = 'left',
  additionalImageSrc,
  additionalImageWidth,
}: MainSectionProps) => {
  return (
    <StyledFlexCenter center>
      {layout === 'left' && imgSrc && (
        <StyledImage src={imgSrc} width={imgWidth} />
      )}
      <StyledFlex vertical>
        <Text bold={700} size={40} height={1.35}>
          {title}
        </Text>
        <StyledText bold={400} size={15} height={1.7}>
          {description}
        </StyledText>
        <Flex gap={10}>
          {btnTexts.map((text, index) => (
            <CustomButton
              key={index}
              text={text}
              btnWidth={btnWidth}
              height={55}
              gap={6}
            />
          ))}
        </Flex>
        {additionalImageSrc && (
          <StyledAddImage
            src={additionalImageSrc}
            width={additionalImageWidth}
          />
        )}
      </StyledFlex>
      {layout === 'right' && imgSrc && (
        <StyledImage src={imgSrc} width={imgWidth} />
      )}
    </StyledFlexCenter>
  );
};

export default MainSection;
