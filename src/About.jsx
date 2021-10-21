import usericon from "./femaleusericon.png";

const Home = () => {
    const style = {
        borderRadius:'50%'
    }
  return (
    <div className="container">
        <div className="row justify-content-between align-items-center">
      <h4 className="desc text-start col-12 col-md-6">
        Hello my name is Roaa Dahy <br /><br />and I’m a Front-End Developer
      </h4>
      <div className="col-12 col-md-6">
      <img style={style} className="w-75" src={usericon} alt="my img" />
      </div>
        </div>
    </div>
  );
};

export default Home;
