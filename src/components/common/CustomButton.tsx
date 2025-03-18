import Button from './Button';
import Text from './Text';
import Image from './Image';
import React from 'react';

interface CustomButtonProps {
  text?: string;
  btnWidth?: number;
  height?: number;
  gap?: number;
  color?: React.CSSProperties['color'];
  txtColor?: React.CSSProperties['color'];
}

const CustomButton = ({
  text,
  btnWidth,
  height = 55,
  gap = 6,
  color,
  txtColor,
}: CustomButtonProps) => {
  return (
    <Button width={btnWidth} height={height} gap={gap} color={color}>
      <Text size={16} color={txtColor}>
        {text}
      </Text>
      <Image src="../../assets/images/home_arr.png" width={6} />
    </Button>
  );
};

export default CustomButton;
