const VidPage = () => {
  return (
    <div className="row m-0 row-cols-1 row-cols-md-2 g-2">
      <div className="col">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/4SO0XWPWzHg"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="col">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/XFbZ6L93pDA"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default VidPage;
