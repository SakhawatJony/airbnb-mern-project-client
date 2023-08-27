import SubCategory from "../SubCategory/SubCategory";




// eslint-disable-next-line react/prop-types
const TabCategory = ({items}) => {

    return (
        <div className='grid md:grid-cols-4 gap-5'>
       {
        // eslint-disable-next-line react/prop-types
        items.map(item=><SubCategory
        key={item._id}
        item={item}

        ></SubCategory>)
       }
        
    </div>
    );
};

export default TabCategory;