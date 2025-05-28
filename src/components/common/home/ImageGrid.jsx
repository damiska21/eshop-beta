import "./ImageGrid.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
    alt: "Košile"
  },
  {
    src: "https://cdn.pixabay.com/photo/2020/01/09/15/03/pomeranian-4752990_1280.jpg",
    alt: "Boty"
  },
  {
    src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
    alt: "Bunda"
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/12/13/17/30/fashion-design-1904690_1280.jpg",
    alt: "Doplňky"
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/01/26/00/46/model-2009477_1280.jpg",
    alt: "Taška"
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/11/01/23/38/bandana-1790048_1280.jpg",
    alt: "Pes"
  },
  {
    src: "https://cdn.pixabay.com/photo/2025/03/12/09/55/fashion-9464759_1280.jpg",
    alt: "Žena"
  },
  {
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    alt: "Módní žena"
  },
  {
    src: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    alt: "Módní doplňky"
  },
  {
    src: "https://cdn.pixabay.com/photo/2020/01/09/15/11/pomeranian-4753033_1280.jpg",
    alt: "Stylový outfit"
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/10/31/18/31/dog-4592541_1280.jpg",
    alt: "Sluneční brýle"
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/09/16/09/30/alone-4480442_1280.jpg",
    alt: "Šperky"
  },
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    alt: "Hodinky"
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/09/16/09/29/alone-4480437_1280.jpg",
    alt: "Čepice"
  }
];




function ImageGrid() {
  return (
    <>
    <h2>Galerie</h2>
    <div className="image-grid">
      {images.map((img, index) => (
        <div
          className={`grid-item grid-item-${(index % 3) + 1}`}
          key={index}
        >
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
    </>
  );
}

export default ImageGrid;
