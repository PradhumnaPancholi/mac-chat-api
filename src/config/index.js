import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://pradhumna:Sleek7777@ds133291.mlab.com:33291/sleek",
  "bodyLimit": "100kb"
}
