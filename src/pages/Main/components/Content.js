import { useContext } from "react";
import { AssetsPathContext } from "../../../Context/AssetsPath";

const Content = () => {
	const assetsPath = useContext(AssetsPathContext);;

	return (
		<>
			<div className="main_banner">
				<img width="1440" height="648" src={assetsPath + "/full_banner.svg"} alt="banner" />
			</div>

			<div className="features_block">
				<div className="feature">
					<div>
						<img width="148" height="148" src={assetsPath + "/feature_1.svg"} alt="feature_1" />
					</div>
					<div>
						<div className="feature_text_bold">
							<p>Бесплатно</p>
						</div>
						<div className="feature_text">
							<p>Полностью бесплатный курс с доступом навсегда</p>
						</div>
					</div>
				</div>
				<div className="feature">
					<div>
						<img width="148" height="148" src={assetsPath + "/feature_2.svg"} alt="feature_2" />
					</div>
					<div>
						<div className="feature_text_bold">
							<p>Трудоустройство</p>
						</div>
						<div className="feature_text">
							<p>Job Offer после успешного завершения курса</p>
						</div>
					</div>
				</div>
				<div className="feature">
					<div>
						<img width="148" height="148" src={assetsPath + "/feature_3.svg"} alt="feature_2" />
					</div>
					<div>
						<div className="feature_text_bold">
							<p>Наставники</p>
						</div>
						<div className="feature_text">
							<p>Работа с опытными преподавателями </p>
						</div>
					</div>
				</div>
			</div>

			<div className="skills_block">
				<div className="text_what_learn">
					<p>Чему Вы научитесь?</p>
				</div>
			</div>
			<div className="features_block">
				<div className="feature_learn">
					<div>
						<img width="35" height="35" src={assetsPath + "/Ellipse.svg"} alt="cyrcle" />
					</div>
					<div>
						<div className="feature_text_bold">
							<p>Создавать рекламные ролики</p>
						</div>
						<div className="feature_text">
							<p>Освойте полный цикл создания рекламных видео роликов.</p>
						</div>
					</div>
				</div>
				<div className="feature_learn">
					<div>
						<img width="35" height="35" src={assetsPath + "/Ellipse.svg"} alt="cyrcle" />
					</div>
					<div>
						<div className="feature_text_bold">
							<p>Анимировать объекты</p>
						</div>
						<div className="feature_text">
							<p>Узнаете принципы создания инфографики, персонажной 2D флэт-анимации, а также анимации логотипов.</p>
						</div>
					</div>
				</div>
				<div className="feature_learn">
					<div>
						<img width="35" height="35" src={assetsPath + "/Ellipse.svg"} alt="cyrcle" />
					</div>
					<div>
						<div className="feature_text_bold">
							<p>Работать с кадром</p>
						</div>
						<div className="feature_text">
							<p>Изучите основные принципы композиции, узнаете, как создать реалистичную картинку в статике и в динамичном кадре.</p>
						</div>
					</div>
				</div>
				<div className="feature_learn">
					<div>
						<img width="35" height="35" src={assetsPath + "/Ellipse.svg"} alt="cyrcle" />
					</div>
					<div>
						<div className="feature_text_bold">
							<p>Проектировать 3D-модели</p>
						</div>
						<div className="feature_text">
							<p>Делать реалистичные 3D-модели, создавать текстуру и прорабатывать детализацию.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="skills_block">
				<div className="text_what_learn">
					<p>Программа обучения</p>
				</div>
			</div>
		</>
	);
};

export default Content;