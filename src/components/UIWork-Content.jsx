import "../styles/components/UIWorkContent.scss";

export default function UIWorkContent({ name, description, url, img }) {
  return (
    <div className="work-content">
      <p className="work-content-title">{name}</p>
      <p>{description}</p>
      <a href={url}>
        <img src={img} alt="" />
      </a>
    </div>
  );
}
