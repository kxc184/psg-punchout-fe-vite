// TODO: Define Error Shape for non blocking UI
interface IBanner {
  id: number;
  blocking: boolean;
  message: string;
  type: "warning" | "error" | "info" | "success" | "generic";
}

const Banner = ({ error }: { error: IBanner }) => {
  return (
    <div className={`swdc-banner sw:w-full swdc-banner--${error.type}`}>
      <div className="swdc-banner__content sw:container sw:mx-auto  sw:max-w-[1440px] sw:px-8 ">
        <div>
          <em className={`swdc-if swdc-if--${error.type}`}></em>
          <div className="swdc-banner__message">{error.message}</div>
        </div>
        <div className="swdc-banner__buttons">
          <button className="swdc-button swdc-button--text">
            {/* TODO: handle close button  */}
            <em className="swdc-if swdc-if--close"></em>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
