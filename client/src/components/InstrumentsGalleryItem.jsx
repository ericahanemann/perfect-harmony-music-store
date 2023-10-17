function InstrumentsGalleryItem({ index, name, img, onClick }) {
  const itemContainerStyle =
    index % 2 == 0
      ? "flex-1 w-20 bg-highlights flex group hover:cursor-pointer ease-linear duration-300 hover:drop-shadow-3xl lg:w-full"
      : "flex-1 w-20 bg-primary flex group hover:cursor-pointer ease-linear duration-300 hover:drop-shadow-3xl lg:w-full";
  return (
    <div className={itemContainerStyle} onClick={onClick}>
      <div className="hidden w-1/2 justify-center items-center pl-6 lg:flex">
        <p className="uppercase font-semibold ease-in-out duration-200 group-hover:scale-105">
          {name}
        </p>
      </div>
      <div className="w-3/4 lg:w-1/2 lg:p-8">
        <img
          src={img}
          alt="guitarra stratocaster"
          className="m-4 ease-in-out duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export default InstrumentsGalleryItem;
