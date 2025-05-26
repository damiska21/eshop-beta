import "./ImageGrid.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
    alt: "Košile"
  },
  {
    src: "https://images.unsplash.com/photo-1503342452485-86b7f54527dd?auto=format&fit=crop&w=600&q=80",
    alt: "Boty"
  },
  {
    src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
    alt: "Bunda"
  },
  {
    src: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=600&q=80",
    alt: "Doplňky"
  },
  {
    src: "https://images.unsplash.com/photo-1533077163758-16c6a2f370b6?auto=format&fit=crop&w=600&q=80",
    alt: "Taška"
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
    src: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=600&q=80",
    alt: "Stylový outfit"
  }
];



function ImageGrid() {
  return (
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
  );
}

export default ImageGrid;
