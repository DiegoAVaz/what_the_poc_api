import { app } from "./server/Server";

const PORT = 3037;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
