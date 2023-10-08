function InstrumentsGalleryItem({ name, img, onClick }) {
  return (
    <div
      className="bg-primary flex group hover:cursor-pointer"
      onClick={onClick}
    >
      <div className="w-2/5 flex justify-center items-center">
        <p className="uppercase font-semibold">{name}</p>
      </div>
      <div className="w-3/5 p-8">
        <img
          src={img}
          alt="guitarra stratocaster"
          className="ease-in-out duration-300 group-hover:translate-x-20 group-hover:scale-125 group-hover:drop-shadow-3xl"
        />
      </div>
    </div>
  );
}

export default InstrumentsGalleryItem;
