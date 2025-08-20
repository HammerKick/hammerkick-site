import { Footer, FooterLink, FooterLinkGroup } from "flowbite-react";
import CountUp from "react-countup";

function FooterSite() {
  return (
    <>
      <Footer
        container
        className="rounded-none mt-8 justify-center"
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <FooterLinkGroup>
          <FooterLink href="https://x.com/HammerKick_OW" target="_blank">Twitter</FooterLink>
          <FooterLink href="https://www.instagram.com/hammerkick" target="_blank">
            Instagram
          </FooterLink>
          <FooterLink href="https://www.youtube.com/@HammerKick" target="_blank">
            YouTube
          </FooterLink>
          <FooterLink href="https://www.tiktok.com/@hammerkick_" target="_blank">
            TikTok
          </FooterLink>
        </FooterLinkGroup>
        <div className="text-sm">| <span className="mr-4"></span>Suivi par plus de <CountUp start={0} end={20000} duration={2} /> personnes sur tous les réseaux</div>
      </Footer>
    </>
  );
}

export default FooterSite;
