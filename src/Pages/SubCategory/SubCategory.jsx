// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { AiFillStar } from 'react-icons/ai';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// eslint-disable-next-line react/prop-types
const SubCategory = ({item}) => {
    // eslint-disable-next-line react/prop-types
    const { title,subTitle,image1,image2,date,price,subCategory,rating } = item;
    return (
        <div style={{height:'400px',width:'310px'}} className="card w-full  bg-base-100 shadow-xl">
        <figure>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img  src={image1} alt="Shoes"  /></SwiperSlide>
        <SwiperSlide><img  src={image2} alt="Shoes"  /></SwiperSlide>
      </Swiper>
        </figure>
        <div className="card-body flex flex-col">
           <div>
           <h2 className="font-semibold">{title}</h2>
            <p>{subTitle}</p>
            <p>{date}</p>
            <p>{price}</p>
            <p>{subCategory}</p>
           </div>
           <div>
           <p style={{marginTop:'-8rem ', marginRight:'-1rem'}} className='absolute right-0 px-6 flex items-center'><AiFillStar></AiFillStar>{rating}</p>
           </div>
        </div>
    </div>
    );
};

export default SubCategory;