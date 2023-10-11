function InstrumentsGalleryItem({ index, name, img, onClick }) {
  const itemContainerStyle =
    index % 2 == 0
      ? "bg-highlights flex group hover:cursor-pointer ease-linear duration-300 hover:drop-shadow-3xl"
      : "bg-primary flex group hover:cursor-pointer ease-linear duration-300 hover:drop-shadow-3xl";
  return (
    <div className={itemContainerStyle} onClick={onClick}>
      <div className="w-1/2 flex justify-center items-center pl-6">
        <p className="uppercase font-semibold ease-in-out duration-200 group-hover:scale-105">
          {name}
        </p>
      </div>
      <div className="w-1/2 p-8">
        <img
          src={img}
          alt="guitarra stratocaster"
          className="ease-in-out duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export default InstrumentsGalleryItem;
