const Heading = ({ tAlign, dAlign, hAlign, btntext,title,description,heading }) => {
  return (
    <div>
      <div className="space-y-2">
        <h5 className={`text-orange-600 text-sm font-bold text-${tAlign}`}>
          {title}
        </h5>
        <h1 className={`text-4xl font-bold text-${hAlign}`}>{heading}</h1>
        <p className={`text-gray-500 text-lg text-${dAlign}`}>{description}</p>
      </div>
      <div>
        {btntext ? <button className="btn btn-primary">{btntext}</button> : ""}
      </div>
    </div>
  );
};

export default Heading;
