import React from "react";
import { useParams } from "react-router-dom";
import SvgCopy from "src/assets/svg/SvgCopy";
import SvgPrint from "src/assets/svg/SvgPrint";
import SvgRoadmapA from "src/assets/svg/SvgRoadmapA";
import SvgRoadmapD from "src/assets/svg/SvgRoadmapD";
import colors from "src/utils/colors";

const Roadmap = ({ array, data }: any) => {
	console.log(data);
	const paramsURL = useParams() as any;
	return (
		<div className="roadmap">
			{paramsURL.id && (
				<div className="roadmap__information">
					<h4>
						<span className="roadmap__information__code">{data?.id}</span>
					</h4>
					<span
						className="roadmap__information__success"
						style={
							data?.transaction_status === 1
								? { background: "rgb(0,117,164)" }
								: { background: colors.accent_color_2_2 }
						}
					>
						{data?.transaction_status === 1 ? "Đang xử lý" : "Đã hoàn thành"}
					</span>
					<span className="searchButton" style={{ padding: "0px 4px", marginLeft: "8px" }}>
						<SvgCopy style={{ transform: "scale(0.7)" }} />
						&nbsp;Sao chép đơn nhập hàng
					</span>
					<span className="searchButton" style={{ padding: "0px 4px", marginLeft: "8px" }}>
						<SvgPrint style={{ transform: "scale(0.7)" }} />
						&nbsp; &nbsp;In
					</span>
				</div>
			)}

			<div className="roadmap__roadmap">
				{array.map((x: any, index: any) => (
					<div
						className={`roadmap__roadmap__child ${index === 0 ? "firstChild" : ""} ${x.status === "A" ? "active" : ""}`}
						key={index}
					>
						<div className="roadmap__roadmap__child__title">{x.title}</div>
						<div className="roadmap__roadmap__child__svg">
							{x.status === "A" ? (
								<SvgRoadmapA />
							) : (
								<SvgRoadmapD style={{ transform: "scale(1.1)", marginTop: "2px" }} />
							)}
						</div>
						{x.description ? (
							<div className="roadmap__roadmap__child__description">{x.description}</div>
						) : (
							paramsURL.id && <div className="roadmap__roadmap__child__description">&nbsp;</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Roadmap;
