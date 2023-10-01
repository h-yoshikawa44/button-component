import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'div'> & {
  title: string;
  component: React.ReactNode;
};

const ComponentBox: FC<Props> = ({ title, component, ...props }) => {
  return (
    <div {...props}>
      <h6 css={subTitle} {...props}>
        {title}
      </h6>
      {component}
    </div>
  );
};

const subTitle = css`
  margin-block-start: 0;
  margin-block-end: 16px;
  font-family: 'Ubuntu Mono', sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 12px;
`;

export default ComponentBox;
