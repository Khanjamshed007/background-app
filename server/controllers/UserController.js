// API Controller function to manage clerk User with database

import { Webhook } from "svix"
import userModal from "../models/userModal.js"

// http://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
    try {
        // create a Svix instance with clerk webhook secrect.
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // create a webhook
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        })

        const { data, type } = req.body

        switch (type) {
            case 'user.created': {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModal.create(userData);
                res.json({})
            }

                break;
            case 'user.deleted': {
                await userModal.findOneAndDelete({ clerkId: data.id });
                res.json({})
            }

                break;
            case 'user.updated': {
                const userData = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModal.findOneAndUpdate({ clerkId: data.id }, userData);
                res.json({})
            }

                break;

            default:
                break;
        }
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}

// Api Controller function to get the user available credits data
const getUserAvailableCredits = async (req, res) => {
    try {

        const { clerkId } = req.body;

        const userData = await userModal.findOne({ clerkId })
        res.json({ success: true, credits: userData.creditBalance })

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}


export { clerkWebhooks, getUserAvailableCredits }