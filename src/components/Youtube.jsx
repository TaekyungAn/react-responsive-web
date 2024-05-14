/* eslint-disable react/prop-types */
export default function Youtube({ youtubeId }) {
  return (
    <>
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
      />
    </>
  );
}
