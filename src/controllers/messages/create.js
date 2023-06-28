const createMessage = async (req, res) => {
    const {
        session,
        db: { Messages },
        body: { senderId, recipientId, text },
    } = req;
    console.log(senderId,recipientId,text)
    const { userId, userType } = session;
    if (!userId || !userType) return res.sendStatus(401);
    
    const message = await Messages.create({
        senderId,
        recipientId,
        text,
    });
    
    if (!message) return res.sendStatus(404);

    res.send(message);



};

module.exports = createMessage;