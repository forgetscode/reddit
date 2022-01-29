import DataLoader from "dataloader";
import { User } from "../entities/User";

export const createUserLoader = () => new DataLoader< number, User > (
    async  (userId ) => {
        const users = await User.findByIds(userId as number[]);
        const userIdToUser: Record< number, User > = {};
        users.forEach(u => {
            userIdToUser[ u.id ]  = u;
        })

        return userId.map( (userId) => userIdToUser[userId]);

    }
);
