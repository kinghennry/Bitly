import { IoCheckmarkCircleOutline } from "react-icons/io5";

function PlatformItem({ pic, facts, link, item1, item2, item3, item4, text }) {
  return (
    <div className="platform-item">
      <div className="platfrom-head">
        <div>
          <img src={pic} alt="name" />
        </div>
        <div>
          <h3>{link}</h3>
        </div>
      </div>
      <p>{text}</p>
      <div className="hr"></div>
      <div className="flex-dir gap platform_txt">
        <h4>{facts}</h4>
        <ul>
          <li>
            <span className="plat_icon">
              <IoCheckmarkCircleOutline />
            </span>
            <span className="plat_item">{item1}</span>
          </li>
          <li>
            <span className="plat_icon">
              <IoCheckmarkCircleOutline />
            </span>
            <span className="plat_item">{item2}</span>
          </li>
          <li>
            <span className="plat_icon">
              <IoCheckmarkCircleOutline />
            </span>
            <span className="plat_item">{item3}</span>
          </li>
          <li>
            <span className="plat_icon">
              <IoCheckmarkCircleOutline />
            </span>
            <span className="plat_item">{item4}</span>
          </li>
        </ul>

        <div className="flex-dir platform">
          <button className="btn-sty sm">Get Started for free</button>
          <button className="btn-sty sm blue-text">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default PlatformItem;
