

const FilterButton = () => {
    return (
     <>
       {/* Open the modal using ID.showModal() method */}
<button className="btn" onClick={()=>window.my_modal_5.showModal()}>Filters</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold">Type of place</h3>
    <p>Search rooms, entire homes and more. Nightly prices dont include fees or taxes.</p>
    <div className="flex mb-2 mt-2">
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ms-1">Any Type</button>
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ms-2">Room</button>
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ms-2">Entire Home</button>
    </div>
    <hr />
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn">Clear all</button>
      <button className="btn">Show More Place!!!</button>
    </div>
  </form>
</dialog>
     
     </>
    );
};

export default FilterButton;