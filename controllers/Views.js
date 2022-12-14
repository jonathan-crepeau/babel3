
const root = (req, res) => {
    res.sendFile('/views/index.html', {
        root: `${__dirname}/../`
    });
};

const test = (req, res) => {
    res.json({
        status: 200,
        message: "Views Test Route & Controller successful.."
    });
};

export { test, root }