
const request = require("supertest");
const authRoutes = require("../routes/auth"); // Import your auth routes

describe("Authentication API Endpoints", () => {
  it("POST /login should authenticate and return a token", async () => {
    const app = express();
    app.use(express.json());
    app.use("/auth", authRoutes);

    const response = await request(app)
      .post("/login")
      .send({ username: "your-username", password: "your-password" }); // Replace with valid username and password

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  it("POST /login should handle invalid credentials", async () => {
    const app = express();
    app.use(express.json());
    app.use("/auth", authRoutes);

    const response = await request(app)
      .post("/login")
      .send({ username: "invalid-username", password: "invalid-password" });

    // Assertions
    expect(response.status).toBe(401);
  });

  it("POST /register should create a new user and return a token", async () => {
    const app = express();
    app.use(express.json());
    app.use("/auth", authRoutes);

    const newUser = {
      username: "new-username",
      email: "new-email@example.com",
      password: "new-password",
      role: "user", // Replace with the appropriate role
    };

    const response = await request(app).post("/register").send(newUser);

    // Assertions
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("token");
  });

  it("POST /register should handle duplicate username", async () => {
    const app = express();
    app.use(express.json());
    app.use("/auth", authRoutes);

    const duplicateUser = {
      username: "John Doe", // Replace with an existing username
      email: "email@example.com",
      password: "password",
      role: "user",
    };

    const response = await request(app).post("/register").send(duplicateUser);

    // Assertions
    expect(response.status).toBe(400);
  });
});