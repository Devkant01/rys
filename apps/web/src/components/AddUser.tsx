import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();
export async function AddUser() {
    const newUser = await client.user.create({
        data: {
            username: "newUser",
            email: "newuser@example.com",
            password: "securePassword",
            dob: new Date("2000-01-01"),
            phoneNumber: "1234567890",
        },
    });
    alert("New user added: " + newUser);
}