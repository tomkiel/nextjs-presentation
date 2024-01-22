import { Wrapper } from "@components/organisms";
import { Heading } from "@components/atoms";
import "./Footer.scss";

export function Footer() {
  return (
    <footer className="app-footer">
      <Wrapper className="footer-container">
        <Wrapper className="footer-column">
          <Heading level={3}>About Us</Heading>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">History</a></li>
          </ul>
        </Wrapper>
        <Wrapper className="footer-column">
          <Heading level={3}>Most Visited</Heading>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </Wrapper>
        <Wrapper className="footer-column">
          <Heading level={3}>Customer Support</Heading>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping Information</a></li>
          </ul>
        </Wrapper>
        <Wrapper className="footer-column">
          <Heading level={3}>Legal and Privacy</Heading>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookies Policy</a></li>
          </ul>
        </Wrapper>
      </Wrapper>
    </footer>
  )
}