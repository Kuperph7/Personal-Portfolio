import "../styles/components/UIButton.scss";

export function UIButton({ name, url }) {
  return (
    <div className="info-button-general">
      <a className="info-button-decoration" href={url} target="_blank">
        {name}
      </a>
    </div>
  );
}
