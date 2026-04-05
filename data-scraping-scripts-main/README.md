# Project Overview

This project is a prototype to fetch data from different sources and save it to storage. It currently consists of **two main sources**:

1. **Metadata** – mostly from Google Cloud Places API.
2. **Opinion** – from various platforms such as Lemon8, Facebook, Pantip, and Instagram.

---

# Environment Setup

There are **two environment files** you need to configure:

1. **Root `.env` file** (for MongoDB):
    - Set the following variables if you want authentication enabled:
      ```env
      MONGO_INITDB_ROOT_USERNAME=<your_root_username>
      MONGO_INITDB_ROOT_PASSWORD=<your_root_password>
      MONGO_INITDB_DATABASE=<your_database_name>
      ```
    - If you skip this, MongoDB will run **without authentication**.

2. **`metadata-scraping-agent/.env`** (for Node/agent):
    ```env
    GOOGLE_MAPS_API_KEY=<your_google_maps_api_key>
    DB_USER=<db_username>
    DB_PASSWORD=<db_password>
    ```

---

# Running the Project

Use Docker Compose to build and start the project:

```bash
docker compose -f docker-compose-dev.yml up -d --build
```
Once the containers are running, you can start scraping data from your target area.

---

# Accessing Data via Docker Volume

If you need to inspect the MongoDB volume mount point:

```bash
docker volume inspect <volume_name>
```
This will show you the host path where MongoDB stores its data.

---
