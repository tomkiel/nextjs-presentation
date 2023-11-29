import { Heading } from "@components/atoms/Heading/Heading";
import { Wrapper } from "@components/organisms/Wrapper/Wrapper";
import "./Feature.scss";

export function Feature(props: FeatureProps) {
  const { id, icon, title, subtitle } = props;
  return (
    <Wrapper className="feature">
      <Wrapper className="feature-icon">
        {icon}
      </Wrapper>
      <Wrapper className="feature-content">
        <Heading className="feature-title" level={2}>
          {title}
        </Heading>
        <p className="feature-subtitle">
          {subtitle}
        </p>
      </Wrapper>
    </Wrapper>
  );
}