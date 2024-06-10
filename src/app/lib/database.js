
require('dotenv').config();

const connectionStr = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.6afzkxu.mongodb.net/ProductDB?retryWrites=true&w=majority&appName=Cluster0`;

export { connectionStr };
