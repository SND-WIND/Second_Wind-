const deleteBookmarks = async (req, res) => {
    const {
        session,
        db: { Bookmark },
        body: { post_id },
    } = req;
}