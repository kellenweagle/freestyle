const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Reviews } = require('../../db/models');

const router = express.Router();

//backend validation for signup
const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

router.post('/', validateSignup, async (req, res, next) => {
    try {
        const { email, password, username, firstName, lastName } = req.body;

        // Check for missing fields
        if (!email || !password || !username || !firstName || !lastName) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if the email already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ email: "Email is already in use." });
        }

        // Check if the username already exists
        const existingUsername = await User.findOne({ where: { username } });
        if (existingUsername) {
            return res.status(400).json({ username: "Username is already taken." });
        }

        // Hash password before storing
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Create the new user
        const user = await User.create({ email, username, hashedPassword, firstName, lastName });

        // Prepare the safe user object (omit sensitive info)
        const safeUser = {
            id: user.id,
            email: user.email,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
        };

        // Set the token cookie for the session
        await setTokenCookie(res, safeUser);

        return res.status(201).json({ user: safeUser });

    } catch (error) {
        // Log the error for debugging
        console.error("Error during signup:", error);

        // Respond with a 500 status and a general error message
        return res.status(500).json({ message: "Something went wrong. Please try again later." });
    }
});

// Restore session user
router.get('/', (req, res) => {
    const { user } = req;
    if (user) {
        const safeUser = {
            id: user.id,
            email: user.email,
            username: user.username,
        };
        return res.json({
            user: safeUser
        });
    } else return res.json({ user: null });
});

router.get('/:userId/reviews', async(req, res, next) => {
    try {
      const reviews = await Reviews.findAll();
  
      res.status(200);
      return res.json(reviews);
    } catch (e) {
      return next(e);
    }
  })


module.exports = router;
