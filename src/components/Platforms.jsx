import React from "react";
import Banner from "./Banner";
import PlatformItem from "./PlatformItem";

function Platforms() {
  return (
    <>
      <div className="container spacing">
        <div className="flexbox-sty flex-dir ">
          <Banner
            header="Bitly’s Connections Platform"
            text="All the products you need to build brand connections, manage links and QR Codes, and connect with audiences everywhere, in a single unified platform."
          />
        </div>

        <div className="platform-grid">
          <PlatformItem
            pic="https://docrdsfx76ssb.cloudfront.net/static/1680205903/pages/wp-content/uploads/2022/06/link-mngt-3.svg"
            link="Link Management"
            text="A comprehensive solution to help make every point of connection between your content and your audience more powerful."
            facts="Popular Link Management Features"
            item1="URL shortening at scale"
            item2="Custom links with your brand"
            item3="URL redirects"
            item4="Advanced analytics & tracking"
          />
          <PlatformItem
            pic="https://docrdsfx76ssb.cloudfront.net/static/1680205903/pages/wp-content/uploads/2022/06/qr-code.svg"
            link="QR Codes"
            text="QR Code solutions for every customer, business and brand experience."
            facts="Popular QR Code Features"
            item1="Fully customizable QR Codes"
            item2="Dynamic QR Codes"
            item3="QR Code types & destination options"
            item4="Advanced analytics & tracking"
          />
          <PlatformItem
            pic="https://docrdsfx76ssb.cloudfront.net/static/1680205903/pages/wp-content/uploads/2022/06/link-in-bio-1.svg"
            link="Link-in-bio"
            text="Bitly Link-in-bio, powered by Bitly Link Management, to help you curate, package and track your best links."
            facts="Popular Link-in-bio Features"
            item1="Custom URLs for social media"
            item2="Customizable landing page"
            item3="Easy-to-manage links"
            item4="Link and landing page tracking"
          />
        </div>
      </div>
    </>
  );
}

export default Platforms;
