export default function hobbies() {
    const pokemonCards = [
      { name: "Ampharos", file: "Ampharos.png" },
      { name: "Gengar VMAX", file: "Gengar VMAX.png" },
      { name: "Gengar", file: "Gengar.png" },
      { name: "Goomy", file: "Goomy.png" },
      { name: "Maractus", file: "Maractus.png" },
      { name: "Munchlax", file: "Munchlax.png" },
      { name: "Regirock", file: "Regirock.png" },
    ];
  
    const animations = [
      { name: "Golem Idle Animation", file: "animationGolemIdle.gif" },
      { name: "Sword Attack Animation", file: "animationSwordAttack.gif" },
      { name: "Gun Animation", file: "animationGun.gif" },
    ];
  
    return `
      <div class="hobbies-container">
        <h1>My Hobbies</h1>
        <p>
          Here are some of the full art Pokémon cards I’ve painted and designed in Adobe Photoshop. 
          This project allowed me to explore various art styles and techniques, showcasing my creativity and attention to detail.
        </p>
        <div class="hobbies-gallery">
          ${pokemonCards
            .map(
              (image) => `
            <div class="hobby-item">
              <img src="./public/image/imagesHobbies/${image.file}" alt="${image.name}" class="hobby-image">
              <p class="hobby-description">${image.name}</p>
            </div>
          `
            )
            .join("")}
        </div>
  
        <div class="animation-section">
          <h2>Some Animations I Made</h2>
          <p>
            Some animations I made in Aseprite for a game a friend was making in Godot. These were fun projects that allowed me to experiment with pixel art and animation techniques.
          </p>
          <div class="animation-gallery">
            ${animations
              .map(
                (animation) => `
              <div class="animation-item">
                <img src="./public/image/animations/${animation.file}" alt="${animation.name}" class="animation-gif">
                <p class="animation-description">${animation.name}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }
  