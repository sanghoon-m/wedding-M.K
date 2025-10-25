import { Map } from "./map"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <LazyDiv className="card location">
      <h2 className="english">Location</h2>
      <div className="addr">
        {LOCATION}
        <div className="detail">{LOCATION_ADDRESS}</div>
      </div>
      <Map />
      <div className="location-info">
        <div className="transportation-icon-wrapper">
          <BusIcon className="transportation-icon" />
        </div>
        <div className="heading">지하철 이용</div>
        <div />
        <div className="content">
          * 지하철 이용시
          <br />
          인천 1호선 <b>계양역 2번 출구</b> 나와서
          <br />
          → 직진으로 약 200m 이동
          <br />
          <b>CN웨딩홀</b> 도착
        </div>
      </div>
    </LazyDiv>
  )
}
