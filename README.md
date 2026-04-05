# 🏕️ TICTA-Travelism

**TICTA-Travelism** is an intelligent, automated travel planning ecosystem designed to curate highly personalized trip itineraries. The project utilizes a microservices-inspired architecture combining web scraping, machine learning, and workflow automation to deliver the best travel experiences.

## Key Components
*   **Trip Planner Automation (`trip-planner-n8n`):** Utilizes `n8n` workflows and LLM prompts to seamlessly generate dynamic and logical travel routes based on user constraints.
*   **Data Scraping Service (`data-scraping-scripts`):** A custom Node.js agent that continuously scrapes and ingests metadata for tourist attractions, restaurants, and accommodations to ensure recommendations remain up-to-date and accurate.
*   **Decision Model Pipeline (`decision-model-pipeline`):** A Python-based data formatting and evaluation pipeline that processes the scraped data to rank, filter, and decide the best possible travel destinations for the user.
*   **Interactive Frontend (`frontend`):** A fast, responsive React + Vite web application that acts as the user interface, featuring a friendly and visually engaging theme (complete with custom wilderness assets) for users to plan their trips.