const shortId = require('shortid')
const collection = require('../model/model')

const home = async (req, res) => {
    const result = await collection.find()
    res.render('index', { result })
}
const shorten = async (req, res) => {
    let orignalUrl = await req.body.link
    if (!orignalUrl.startsWith("http://") && !orignalUrl.startsWith("https://")) {
        orignalUrl = "https://" + orignalUrl;
    }
    try {
        const response = await fetch(orignalUrl, { method: 'HEAD' });
        if (response.ok) {
            const oldExist = await collection.findOne({ link: orignalUrl })
            if (!oldExist) {
                let char = shortId.generate().slice(0, 5);
                const newExist = await collection.findOne({ newLink: char })
                if (!newExist) {
                    const compress = 'https://ttrim.vercel.app/' + char
                    const generated = char
                    await collection.insertMany({ link: orignalUrl, generated: generated, newLink: compress })
                }
            }
        }
        else {
            throw new Error("URL is not reachable");
        }
    }
    catch (error) {
        console.log("fetching faild" + error)
    }
    const result = await collection.find()
    res.render('index', { result })
}

const newpage = async (req, res) => {
    const searchId = req.params.newLink
    const result = await collection.findOne({ generated: searchId })
    if (result) {
        res.redirect(result.link)
    }
    else {
        res.redirect('/')
    }
}

const remove = async (req, res) => {
    const getid = req.params.id
    await collection.deleteOne({ _id: getid })
    res.redirect('/')
}

module.exports = { home, shorten, newpage, remove }
