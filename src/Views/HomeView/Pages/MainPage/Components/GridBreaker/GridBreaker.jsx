import { Carousel } from "antd";
import LoadingPage from "Components/LoadingPage/LoadingPage";
import React, { useEffect, useState } from "react";
import { formatPrice } from "utils/formatMoney";
import "./style/gridBreaker.scss";

function GridBreaker(props) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://60bf294c320dac0017be490f.mockapi.io/grid-breaker")
			.then((respone) => {
				if (respone.ok) {
					return respone.json();
				}
				throw respone;
			})
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) return <LoadingPage />;
	return (
		<div className="gridBreaker">
			<ul className={`gridBreaker__list list${data.length} desktop`}>
				{data?.map((item, index) => (
					<li key={index} className="gridBreaker__item container">
						<div className="container__image">
							<img src={item.mainImage} alt={item.title} />
						</div>
						<div className="container__info information">
							<div className="information__title">{item.title}</div>
							<div className="information__discription">{item.discription}</div>

							{item.price.type === "none" ? (
								<></>
							) : item.price.type === "Coming Soon" ? (
								<>
									<div className="information__price price">
										<div className="price__salePrice">Coming Soon</div>
									</div>
								</>
							) : (
								<>
									<div className="information__price price">
										<div className="price__percent">
											{Math.round(
												(1 - item.price.salePrice / item.price.oldPrice) * 100
											)}
											%
										</div>
										<div className="price__oldPrice">
											<del>{formatPrice(item.price.oldPrice)}</del>
										</div>
										<div className="price__salePrice">
											{formatPrice(item.price.salePrice)}
										</div>
									</div>
								</>
							)}
						</div>
					</li>
				))}
			</ul>

			<ul className={`gridBreaker__list list${data.length} mobile`}>
				<Carousel>
					{data?.map((item, index) => (
						<li key={index} className="gridBreaker__item container">
							<div className="container__image">
								<img src={item.mainImage} alt={item.title} />
							</div>
							<div className="container__info information">
								<div className="information__title">{item.title}</div>
								<div className="information__discription">
									{item.discription}
								</div>

								{item.price.type === "none" ? (
									<></>
								) : item.price.type === "Coming Soon" ? (
									<>
										<div className="information__price price">
											<div className="price__salePrice">Coming Soon</div>
										</div>
									</>
								) : (
									<>
										<div className="information__price price">
											<div className="price__percent">
												{Math.round(
													(1 - item.price.salePrice / item.price.oldPrice) * 100
												)}
												%
											</div>
											<div className="price__oldPrice">
												<del>{formatPrice(item.price.oldPrice)}</del>
											</div>
											<div className="price__salePrice">
												{formatPrice(item.price.salePrice)}
											</div>
										</div>
									</>
								)}
							</div>
						</li>
					))}{" "}
				</Carousel>
			</ul>
		</div>
	);
}

export default GridBreaker;
