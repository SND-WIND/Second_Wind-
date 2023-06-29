const findMessages = async (req, res) => {
    const {
        session,
        db: { Messages },
        params: { id },
        } = req;

    const { userId, userType } = session;

    if (!userId || !userType) return res.sendStatus(401);
    
    // getConversation(senderId, recipientId)
    const messages = await Messages.getConversation(userId, id);
    console.log(messages,"messages")
    if (!messages) return res.sendStatus(404);
    res.send(messages);
};
module.exports = findMessages;
