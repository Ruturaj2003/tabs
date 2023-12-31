const BtnContainer = ({ jobs }) => {
  return (
    <div className="btn-contianer">
      {jobs.map((item) => {
        return (
          <button className="job-btn" key={item.id}>
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
