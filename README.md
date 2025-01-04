# Wanderlust

Welcome to **Wanderlust**! This is a project designed to simulate an Airbnb-like platform, showcasing listings for travelers and hosts. This project allows users to explore properties, leave reviews, and manage their accounts with secure authentication and authorization.

---

## Features

### Core Features
- **User Authentication**:  
  - Secure registration and login.  
  - Password hashing for security.  
  - Session-based authentication.

- **Authorization**:  
  - Role-based access control (Admin, User).  
  - Restricted actions based on user roles.

- **Property Listings**:  
  - View a wide range of properties with details like location, price, and amenities.  
  - Add, edit, or delete properties (admin access only).

- **Review System**:  
  - Users can write, edit, and delete reviews for properties.  
  - View aggregated ratings and user feedback.

- **Responsive UI**:  
  - Fully responsive design for mobile, tablet, and desktop users.

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) or any other database you prefer

### Installation

1. **Clone the repository**  
   Open your terminal and run:
   ```bash
   git clone https://github.com/Umesh-Verma07/Wanderlust.git
   cd Wanderlust
   ```

2. **Install dependencies**  
   Run the following command to install all required packages:
   ```bash
   npm install
   ```

3. **Set up the environment**  
   Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   PORT=3000
   DATABASE_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUD_NAME=your_cloud_name
   CLOUD_API_KEY=cloud_api_key
   CLOUD_API_SECRET=cloud_api_secret
   ```

4. **Start the server**  
   Run the following command to start the application:
   ```bash
   npm start
   ```

---

## Technologies Used

### Frontend
- **EJS (Embedded JavaScript)**: For rendering dynamic HTML templates
- **CSS**: For styling

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Backend framework
- **MongoDB**: NoSQL database for storing user and property data

### Other Tools
- **npm password**: For secure password hashing and authentication
- **Express-Session**: For session management
- **Mongoose**: MongoDB object modeling for Node.js
- **Git/GitHub**: For version control

---

## API Endpoints

### Authentication
- `POST /api/auth/register`: Register a new user  
- `POST /api/auth/login`: User login  
- `GET /api/auth/logout`: User logout  

### Properties
- `GET /api/properties`: Fetch all properties  
- `POST /api/properties`: Add a new property (admin only)  
- `PUT /api/properties/:id`: Update a property (admin only)  
- `DELETE /api/properties/:id`: Delete a property (admin only)  

### Reviews
- `POST /api/reviews`: Add a review  
- `PUT /api/reviews/:id`: Edit a review  
- `DELETE /api/reviews/:id`: Delete a review  

