const User = require('../models/users.model');
const _ = require('lodash');
const crypto = require("crypto");

module.exports = class UserController {
    static async get(req, res, next) {
        res.json(
            await User.find()
        );
    }

    static async getOne(req, res, next) {
        res.json(
            await User.findOne({
                _id: req.params.id
            })
        );
    }

    static async create(req, res, next) {
        res.json(
            _.omit((await User.create(req.body))._doc, ['password'])
        );
    }

    static async update(req, res, next) {
        res.json(
            await User.updateOne({
                _id: req.params.id
            }, {
                $set: req.body
            })
        );
    }

    static async delete(req, res, next) {
        res.json(
            await User.remove({
                _id: req.params.id
            })
        );
    }

    static async insert(req, res, next) {
        let salt = crypto.randomBytes(10).toString("base64");
        let hash = crypto.createHmac("sha512", salt)
            .update(req.body.password)
            .digest("base64");
        req.body.password = `${salt} $ ${hash}`;
        req.body.permissionLevel = 1;
    }
}