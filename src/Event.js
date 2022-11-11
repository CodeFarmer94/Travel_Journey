import "./styles.css";

import data from "./data.js";
export default function Event(props) {
  return (
    <div className="box">
      <img
        width="200px"
        className="img"
        src={props.item.imageUrl}
        alt="location"
      />
      <div class="text-section">
        <div class="location">{props.item.location}</div>
        <div class="title">{props.item.title}</div>
        <div class="period">
          {" "}
          {props.item.startDate} - {props.item.endDate}
          <div class="description">{props.item.description}</div>
        </div>
      </div>
    </div>
  );
}
