const models = require('../models');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const { Op } = require('sequelize')
const express = require('express');
const app = express();


const timeline = async (req, res, next) => {
    try {
        console.log(" ")
        console.log(" ")
        console.log(" ")
        console.log(" ")
        
        console.log("entered get  timeline")

        console.log(" ")
        console.log(" ")
        console.log(" ")
        console.log(" ")
        let timeline = await models.Users.findAll({
            where: {
                userName: req.params.id
            },
            attributes: ['id', 'userName'],
            include: [
                {
                    model: models.Following,
                    where: {

                    },
                    include: [
                        {
                            model: models.Posts,
                            where: {
                                userId: models.Following.followingUserId
                            },
                            include: [
                                {
                                    model: models.Images,
                                    attributes: ['id', 'postId', 'imageUrl', 'lastModified']
                        
                                },
                                {
                                    model: models.Likes,
                                    attributes: ['id', 'postId', 'userId', 'likedUserName']
                                }
                            ]
                        }
                    ]
                },
            ]
        })

        console.log("");
        console.log("");
        console.log("");
        console.log(timeline);
        console.log("");
        console.log("");
        console.log("");
        res.send({
            timeline,
            success: true
        });



    } catch (error) {
        res.status(404).json({
            success: false
        });
        next(error);
    }
}
module.exports = exports = timeline;