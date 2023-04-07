import React, { useEffect, useState } from "react";

function Shorten() {
  const [link, setLink] = useState("");
  const [linkInfo, setLinkInfo] = useState(null);
  const [status, setStatus] = useState(null);

  //shortenUrl

  const shortenURL = (e) => {
    e.preventDefault();
    setLinkInfo(null);

    if (!link) {
      setStatus({ error: true, info: "Please check your link and try again." });
      return;
    }

    const providedLink = link;
    setLink("");
    setStatus("Loading");

    fetch(`https://api.shrtco.de/v2/shorten?url=${providedLink}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setLinkInfo(data);
          setStatus(null);
        } else
          setStatus({
            error: true,
            info: "Please check your link and try again.!",
          });
      })
      .catch((err) => {
        setStatus({ error: true, info: "Unknown Error Occured!" });
      });
  };

  return (
    <section className="fact-bg shorten">
      <div className="container">
        <div className="">
          <form className="shorten_form">
            <input
              placeholder="Shorten your link"
              title="URL Input"
              aria-label="Please provide your URL"
              onChange={(e) => setLink(e.target.value)}
              name="url"
              value={link}
            />

            <button type="submit" onClick={shortenURL}>
              Shorten
            </button>
          </form>
          <p className="shorten_note text-ct">
            By Clicking SHORTEN, you are agreeing to Bitly's&nbsp;
            <span>Terms of Service</span>,&nbsp;
            <span>Privacy Policy,</span>&nbsp;and&nbsp;
            <span>Acceptable Use Policy</span>
          </p>
        </div>
        {linkInfo && <Shortened linkInfo={linkInfo} />}

        {status?.error && (
          <div className="error">
            {status.info}&nbsp;{" "}
            <span onClick={() => setStatus(null)}>&times;</span>
          </div>
        )}
      </div>
    </section>
  );
}

const Shortened = ({ linkInfo }) => {
  const [copied, setCopied] = useState(false);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsTablet(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleCopy = () => {
    try {
      navigator.clipboard
        .writeText(linkInfo.result.full_short_link)
        .then(setCopied(true))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="shortn flex-dir">
        <div className="shortened flex-sty">
          <div className="base_url">
            <h4>
              {isTablet && linkInfo.result.original_link.length > 40
                ? `${linkInfo.result.original_link.substring(0, 40)}...`
                : `${linkInfo.result.original_link.substring(0, 57)}...`}
            </h4>
          </div>
          <div className="shortened_rslt flex-sty">
            <h4 id="rslt_url" className="rslt_url">
              {linkInfo.result.full_short_link}
            </h4>

            {navigator.clipboard !== undefined && (
              <div
                disabled={copied}
                onClick={handleCopy}
                className={`action_btn copy ${copied && "copied"}`}
              >
                {copied ? "Copied!" : "Copy"}
              </div>
            )}
          </div>
        </div>
        {linkInfo.result.original_link.length >= 1 ? (
          <div className="note flex-sty">
            <h3>Need more redirects, custom back-half links, or QR Codes </h3>
            <p>Check out our Starter Plan</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Shorten;
