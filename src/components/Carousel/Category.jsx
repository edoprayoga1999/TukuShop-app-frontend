import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/styles/swiper.css";

export default function Category() {
	return (<>
		<div className="d-flex flex-column mb-5" style={{ width: "80%" }}>
			<h2>Category</h2>
			<small style={{ color: "#9B9B9B", marginBottom: "25px" }} >What are you currently looking for</small>
			<Swiper
				slidesPerView={2}
				spaceBetween={10}
				breakpoints={{
					576: {
						slidesPerView:5,
						spaceBetween:10
					}
				}}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="d-flex align-items-center justify-content-center"
						style={{
							height: "220px",
							width: "210px",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundImage: "url('/tshirt.jpg')",
							borderRadius: "10px"
						}}
					>
						<h4 style={{color: "#FFF"}}>T-Shirt</h4>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="d-flex align-items-center justify-content-center"
						style={{
							height: "220px",
							width: "210px",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundImage: "url('/tshirt.jpg')",
							borderRadius: "10px"
						}}
					>
						<h4 style={{color: "#FFF"}}>T-Shirt</h4>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="d-flex align-items-center justify-content-center"
						style={{
							height: "220px",
							width: "210px",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundImage: "url('/tshirt.jpg')",
							borderRadius: "10px"
						}}
					>
						<h4 style={{color: "#FFF"}}>T-Shirt</h4>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="d-flex align-items-center justify-content-center"
						style={{
							height: "220px",
							width: "210px",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundImage: "url('/tshirt.jpg')",
							borderRadius: "10px"
						}}
					>
						<h4 style={{color: "#FFF"}}>T-Shirt</h4>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="d-flex align-items-center justify-content-center"
						style={{
							height: "220px",
							width: "210px",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundImage: "url('/tshirt.jpg')",
							borderRadius: "10px"
						}}
					>
						<h4 style={{color: "#FFF"}}>T-Shirt</h4>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="d-flex align-items-center justify-content-center"
						style={{
							height: "220px",
							width: "210px",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundImage: "url('/tshirt.jpg')",
							borderRadius: "10px"
						}}
					>
						<h4 style={{color: "#FFF"}}>T-Shirt</h4>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="d-flex align-items-center justify-content-center"
						style={{
							height: "220px",
							width: "210px",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundImage: "url('/tshirt.jpg')",
							borderRadius: "10px"
						}}
					>
						<h4 style={{color: "#FFF"}}>T-Shirt</h4>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="d-flex align-items-center justify-content-center"
						style={{
							height: "220px",
							width: "210px",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundImage: "url('/tshirt.jpg')",
							borderRadius: "10px"
						}}
					>
						<h4 style={{color: "#FFF"}}>T-Shirt</h4>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="d-flex align-items-center justify-content-center"
						style={{
							height: "220px",
							width: "210px",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundImage: "url('/tshirt.jpg')",
							borderRadius: "10px"
						}}
					>
						<h4 style={{color: "#FFF"}}>T-Shirt</h4>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="d-flex align-items-center justify-content-center"
						style={{
							height: "220px",
							width: "210px",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundImage: "url('/tshirt.jpg')",
							borderRadius: "10px"
						}}
					>
						<h4 style={{color: "#FFF"}}>T-Shirt</h4>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="d-flex align-items-center justify-content-center"
						style={{
							height: "220px",
							width: "210px",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundImage: "url('/tshirt.jpg')",
							borderRadius: "10px"
						}}
					>
						<h4 style={{color: "#FFF"}}>T-Shirt</h4>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
		
	</>
	);
}
