export default () => /*html*/`
  <section class="projects-section">
    <div class="projects-content">

      <h1>My Personal Projects</h1>

      <div class="project-item">
        <div class="project-text">
          <h3>Wowpug Hatelist</h3>
          <a href="https://github.com/xfekke/WowpugAddon">Link to my project</a>
          <p>
            This is a World of Warcraft addon I developed to track player names, servers, and offenses in group activities, specifically for Mythic+ dungeons.
            <br>
            In this project, I created functionality to add players, view players, and manage a database of infractions directly within the game. The addon is implemented in Lua and integrates seamlessly with the game's API. It also features a simple interface and command system for easy usage. This project was created since it would be easier to use than using a notepad, it was a need I decided to create a solution for. I also wanted to try out LUA since I have not used it before.
          </p>
        </div>
        <div class="project-image">
          <img src="./online-cv/public/image/wowpug.png" alt="wowpug">
        </div>
      </div>

      <h1>My School Projects</h1>

      <div class="project-item">
        <div class="project-text">
          <h3>Connect Four with AI and network capabilities</h3>
          <a href="https://github.com/AlbinBjerhem/Connect_four/tree/dev_sprint4_done">Link to my project</a>
          <p>
            This assignment was to create a connect four game where you can play versus different levels of AI, external AI and also play versus a friend online.
            <br>
            In this project, I implemented online play, different bot levels, and an external AI. I also designed the CSS for the user interface and wrote tests using Cypress.io and Vitest to ensure all features function correctly. Additionally, I created and updated the documentation, which is available across all branches in the project's GitHub repository.
          </p>
        </div>
        <div class="project-image">
          <img src="./online-cv/public/image/connectFour.png" alt="connectFour">
        </div>
      </div>

      <div class="project-item">
        <div class="project-text">
          <h3>API DB Assignment</h3>
          <a href="https://github.com/xfekke/api-db-assignment">Link to my project</a>
          <p>
            This assignment was to create an API where I chose the theme of books.
            <br>
            In this project, I developed a custom API and implemented two MongoDB databases—one for storing detailed information about books and the other for author data. To ensure the API’s functionality, I employed Postman for both manual and automated testing, executing 14 of each type to evaluate performance and reliability. Additionally, I focused on creating professional documentation to facilitate understanding and usage of the API. To complement this, I set up a mock server in Postman to capture and preserve test results, ensuring accurate evaluations.
          </p>
        </div>
        <div class="project-image">
          <img src="./online-cv/public/image/postmansc.png" alt="postmansc">
        </div>
      </div>

      <div class="project-item">
        <div class="project-text">
          <h3>Cypress Website Testing</h3>
          <a href="https://github.com/xfekke/Filmvisarna">Link to my project</a>
          <p>
            This assignment was to create an API where I chose the theme of books.
            <br>
            In our recent project, we focused on testing a movie booking website using Gherkin user stories and Cypress.io. Our approach was rooted in agile methodologies and SCRUM practices, allowing for iterative development and continuous improvement. Initially, we conducted exploratory testing to familiarize ourselves with the website's functionality and identify potential issues. This foundational work guided our subsequent testing phases, where we used Gherkin for clear, behavior-driven development scenarios and Cypress.io for robust, automated testing. This methodology ensured a thorough evaluation of the website’s performance and usability.
          </p>
        </div>
        <div class="project-image">
          <img src="./online-cv/public/image/gherkinbdd.png" alt="gherkinbdd">
        </div>
      </div>

    </div>
  </section>
`;
