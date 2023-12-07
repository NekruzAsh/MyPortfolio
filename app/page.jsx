import Link from "next/link";
import Image from "next/image";
import profilePic from "./IMG-3442.jpg";

export default function Home() {
  return (
    <main>
      <h2>About Me</h2>
      <div class="w-64 h-64 relative overflow-hidden rounded-full">
        <Image
          src={profilePic}
          alt="Nekruz Ashrapov"
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
        />
      </div>
      <div className="card">
        <div className="card-content">
          <h3>Nekruz Ashrapov</h3>
          <p>
            awdsa
          </p>
          <p>
            awd
          </p>
          <p>
           dawdawd
          </p>
        </div>
      </div>
    </main>
  );
}
