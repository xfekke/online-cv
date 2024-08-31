export default () => /*html*/`
  <section class="projects-section">
    <div class="projects-content">
      <h1>My School Projects</h1>

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
          <img src="../public/image/postmansc.png" alt="postmansc">
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
          <img src="../public/image/gherkinbdd.png" alt="gherkinBDD">
        </div>
      </div>

    </div>
  </section>
`;
