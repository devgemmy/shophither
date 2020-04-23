const User = require('../models/users.model');

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
            await User.create(req.body)
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