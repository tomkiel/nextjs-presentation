import { Wrapper } from "@components/organisms";
import { Feature } from "@components/molecules";
import { IconBox, IconConfetti, IconCreditCard, IconMessage, IconWorld } from "@tabler/icons-react";
import "./FeatureList.scss";

export function FeatureList() {
  return (
    <Wrapper className="feature-list">
      <Feature
        icon={<IconBox />}
        title="Free Shipping"
        subtitle="Orders from all item."
      />
      <Feature
        icon={<IconCreditCard />}
        title="Secure Payments"
        subtitle="Pay with multiple cards."
      />
      <Feature
        icon={<IconConfetti />}
        title="Quality Products"
        subtitle="Explore a range of high-quality products."
      />
      <Feature
        icon={<IconMessage />}
        title="Customer Service"
        subtitle="We support online all days."
      />
      <Feature
        icon={<IconWorld />}
        title="Global Reach"
        subtitle="We deliver worldwide to your doorstep."
      />
    </Wrapper>
  );
}