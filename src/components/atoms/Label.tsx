import { FC, ClassAttributes, LabelHTMLAttributes } from 'react';
import { css } from '@emotion/react';

type Props = ClassAttributes<HTMLLabelElement> &
  LabelHTMLAttributes<HTMLLabelElement>;

const Label: FC<Props> = ({ ...props }) => {
  return <label css={label} {...props} />;
};

const label = css`
  font-family: 'Ubuntu Mono', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  line-height: 12px;
  color: #000;
`;

export default Label;