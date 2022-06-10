import "./App.css";
import { useState } from "react";

function App() {
	let [title, setTitle] = useState([
		"Best Coffee Spot",
		"Best Food Spot",
		"Best Beer Spot",
	]);

	let [thumbsUp, setThumbsUp] = useState([0, 0, 0]);
	let [modal, setModal] = useState(false);
	let [postTitle, setPostTitle] = useState(0);

	return (
		<div className="App">
			<div className="black-nav">
				<div>배log의 포틀랜드 101</div>
			</div>

			{title.map(function (글제목, i) {
				return (
					<div className="list">
						<h4
							onClick={() => {
								setModal(!modal);
								setPostTitle(i);
							}}
						>
							{글제목}{" "}
							<span
								onClick={() => {
									let copyThumb = [...thumbsUp];
									copyThumb[i] = copyThumb[i] + 1;
									setThumbsUp(copyThumb);
								}}
							>
								👍
							</span>
							{thumbsUp[i]}
						</h4>
						<p>2월 17일 발행</p>
					</div>
				);
			})}
			{/* <div className="list">
				<h4>
					{title[0]}{" "}
					<span
						onClick={() => {
							setThumbsUp(thumbsUp + 1);
						}}
					>
						👍
					</span>
					{thumbsUp}
				</h4>
				<p>2월 17일 발행</p>
			</div>

			<div className="list">
				<h4>
					{title[1]} <span>👍</span> {thumbsUp}
				</h4>
				<p>2월 17일 발행</p>
			</div>
			<div className="list">
				<h4
					onClick={() => {
						setModal(!modal);
					}}
				>
					{title[2]} <span>👍</span> {thumbsUp}
				</h4>
				<p>2월 17일 발행</p>
			</div> */}

			{modal == true ? <Modal postTitle={postTitle} title={title} /> : null}
		</div>
	);
}

function Modal(props) {
	return (
		<div className="modal">
			<h4>{props.title[props.postTitle]}</h4>
			<p>날짜</p>
			<p>상세내용</p>
			<button>글 수정</button>
		</div>
	);
}

export default App;
