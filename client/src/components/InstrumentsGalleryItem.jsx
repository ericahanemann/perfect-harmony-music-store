function InstrumentsGalleryItem({ name, img, onClick }) {
  return (
    <div
      className="bg-primary flex group hover:cursor-pointer"
      onClick={onClick}
    >
      <div className="w-1/2 flex justify-center items-center pl-6">
        <p className="uppercase font-semibold ease-in-out duration-300 group-hover:scale-110 group-hover:drop-shadow-3xl">{name}</p>
      </div>
      <div className="w-1/2 p-8">
        <img
          src={img}
          alt="guitarra stratocaster"
          className="ease-in-out duration-300 group-hover:scale-110 group-hover:drop-shadow-3xl"
        />
      </div>
    </div>
  );
}

export default InstrumentsGalleryItem;
