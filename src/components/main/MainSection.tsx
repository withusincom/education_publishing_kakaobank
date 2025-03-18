import styled from 'styled-components';
import Flex from '../common/Flex';
import FlexCenter from '../common/FlexCenter';
import Text from '../common/Text';
import Button from '../common/Button';
import Image from '../common/Image';
import { ReactNode } from 'react';

const StyledFlexCenter = styled(FlexCenter)`
  width: 100%;
  height: 750px;
  background-color: #fff;
`;

const StyledFlex = styled(Flex)`
  width: 400px;
`;

const StyledText = styled(Text)`
  margin: 25px 0;
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
      {layout === 'left' && imgSrc && <Image src={imgSrc} width={imgWidth} />}
      <StyledFlex vertical>
        <Text bold={700} size={40} height={1.35}>
          {title}
        </Text>
        <StyledText bold={400} size={15} height={1.7}>
          {description}
        </StyledText>
        <Flex gap={10}>
          {btnTexts.map((text, index) => (
            <Button key={index} width={btnWidth} height={55} gap={6}>
              <Text size={16} color="#333">
                {text}
              </Text>
              <Image src="../../assets/images/home_arr.png" width={6} />
            </Button>
          ))}
        </Flex>
        {additionalImageSrc && (
          <Image src={additionalImageSrc} width={additionalImageWidth} />
        )}
      </StyledFlex>
      {layout === 'right' && imgSrc && <Image src={imgSrc} width={imgWidth} />}
    </StyledFlexCenter>
  );
};

export default MainSection;
