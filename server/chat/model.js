import mongoose from 'mongoose'

const chatMessageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  sender: {
    name: String,
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ['Expert', 'Student']
    }
  },
  receiver: {
    name: String,
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ['Expert', 'Student']
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);


const chatSessionSchema = new mongoose.Schema({
  participants: [{
    name: String,
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ['Expert', 'Student']
    }
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChatMessage'
  }]
});

const ChatSession = mongoose.model('ChatSession', chatSessionSchema);


