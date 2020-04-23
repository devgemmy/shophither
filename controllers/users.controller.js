const User = require('../models/users.model');
const _ = require('lodash');

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
}