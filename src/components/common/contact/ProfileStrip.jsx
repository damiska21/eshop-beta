import Profile from "./Profile";
import "./ProfileStrip.css";

function ProfileStrip() {
  const profiles = [
    {
      name: "Bobby Korec",
      location: "Seattle",
      imgUrl: "https://i.pravatar.cc/300?img=1",
      bgUrl: "https://images.unsplash.com/photo-1511207538754-e8555f2bc187",
      links: [
        { icon: "codepen", url: "#" },
        { icon: "github", url: "https://github.com" },
        { icon: "linkedin", url: "https://linkedin.com" },
        { icon: "instagram", url: "https://instagram.com" },
      ],
    },
    {
      name: "Anna Nováková",
      location: "Prague",
      imgUrl: "https://i.pravatar.cc/300?img=5",
      bgUrl: "https://images.unsplash.com/photo-1503264116251-35a269479413",
      links: [
        { icon: "github", url: "https://github.com" },
        { icon: "linkedin", url: "https://linkedin.com" },
      ],
    },
    {
      name: "Lukas Schmidt",
      location: "Berlin",
      imgUrl: "https://i.pravatar.cc/300?img=8",
      bgUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
      links: [
        { icon: "instagram", url: "https://instagram.com" },
        { icon: "linkedin", url: "https://linkedin.com" },
      ],
    },
  ];

  return (
    <div className="profile-strip">
      {profiles.map((profile, index) => (
        <Profile key={index} {...profile} />
      ))}
    </div>
  );
}

export default ProfileStrip;
