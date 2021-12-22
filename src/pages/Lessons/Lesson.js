const Lesson = (props) => {
	return (
		<>
			<div className="lessons_navigation">
				<div className="feature">
					<div>
						<a href="index.html" rel="home" aria-current="page">
							<img width="24" height="24" src="assets/go_back.svg" alt="Back" />
							<button type="button" className="button_text">Предыдущий Урок</button>
						</a>
					</div>
				</div>
				<div className="feature">
					<div>
						<button type="button" className="button_second">Пройти Тест</button>
						<a href="lesson_2.html" aria-current="page">
							<button type="button" className="button_main">Следующий Урок</button>
						</a>
					</div>
				</div>

			</div>
			<div >
				<iframe className="video" width="1400" height="788" src="https://www.youtube.com/embed/YiGTmm4LoEk"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen>
				</iframe>
			</div>
			<div className="main_banner">
				<div className="text_what_learn">
					<p>Тема 1: Основные принципы работы с цветом и текстом</p>
				</div>
			</div>

			<div className="tab_menu">
				<div className="tab-element">
					<div className="tab_text">
						<p>Описание урока</p>
					</div>
				</div>
				<div className="tab-element">
					<div className="tab_text">
						<p>Материалы урока</p>
					</div>
				</div>
				<div className="tab-element">
					<div className="tab_text">
						<p>Пройти тест</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Lesson;