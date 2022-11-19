import Button from "../components/button";
import heroImage from "../media/hero-assets.png";
function HeroSection(props) {
  const handleButtonClick = (e) => {
    e.preventDefault();
    props.messageState(true);
  };

  return (
    <>
      <div className="mt-32 ml-12 z-10 text-white">
        <h1 className="text-5xl leading-tight mb-3">
          We help businesses grow <br />
          with <span className="heading-italic-font">Confidence</span>
        </h1>
        <p className="text-lg mb-5">
          Are you looking for a web developer that thrive with you and make you
          <br />
          feel at ease? We believe in you and help you grow.{" "}
        </p>
        <Button
          text="Get Connected"
          classes="px-6 py-3 bg-emerald-900	text-white hover:bg-emerald-800"
          handleButtonClick={handleButtonClick}
        />
      </div>
      <div className="absolute top-32 right-0 z-0 w-3/6">
        <img src={heroImage} alt="a complete team for your web journer" />
      </div>
    </>
  );
}
export default HeroSection;
