const knex = require("../knex"); 

class Messages {
  static tableName = "messages";

  static create({ senderId, recipientId, text }) {
    return knex(this.tableName).insert({
      sender_id: senderId,
      recipient_id: recipientId,
      text: text,
    });
  }

  static getConversation(senderId, recipientId) {
    console.log(senderId, recipientId)
    return knex(this.tableName)
      .where({ sender_id: senderId, recipient_id: recipientId })
      .orWhere({ sender_id: recipientId, recipient_id: senderId }) // To get all messages between the two users
      .orderBy('created_at', 'desc');
  }
  
}

module.exports = Messages;