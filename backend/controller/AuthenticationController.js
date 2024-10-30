const bcrypt = require('bcrypt');
const db = require('../models/main'); // Adjust path as necessary
const { createTokens, validateToken } = require('../middlewares/jwt')
const { Users } = db; 

module.exports = {
    Register: async (req, res) => {
        try {
            const { username, password, email, first_name, middle_initial, last_name, year_level, role_id, section, contact_number, status } = req.body;
            console.log("USER REGISTRATION DATA: ", req.body);

            // Hash the password
            const hash = await bcrypt.hash(password, 10);

            // Create the user
            const newUser = await Users.create({
                username,
                password: hash,
                email,
                first_name,
                middle_initial,
                last_name,
                year_level,
                role_id,
                section,
                contact_number,
                status
            });

            res.json("USER REGISTERED");
        } catch (error) {
            console.error("Error:", error.message);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    Login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await Users.findOne({ where: {username: username} });

            if (!user) {
                return res.status(400).json({ error: "User doesn't exist" });
            }

            const dbPassword = user.password;
            const match = await bcrypt.compare(password, dbPassword);

            if (!match) {
                return res.status(400).json({ error: "Wrong username and password combination" });
            }else{
                const accessToken = createTokens(user);
                // Send a success response
                res.json({
                    message: `Logged in! User ID: ${user.user_id} Username: ${user.username} User type: ${user.role_id}`,
                    accessToken: accessToken,
                    userType: user.user_type
                });
            }

        } catch (error) {
            console.error("Error:", error.message);
            res.status(500).send("Internal Server Error", error.message);
        }
    }
};
