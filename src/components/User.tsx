import { User } from "@/utils/types";
import Link from "next/link";

export default function User ({ id, email, first_name, last_name, avatar }: User) {
    return (
        <Link href={`/user/${id}`} className="bg-white w-full h-full rounded-xl p-12 flex items-center">
            <div className="flex gap-6">
                <div className="rounded-full overflow-hidden">
                    <img src={avatar} alt={`${first_name} ${last_name}`} />
                </div>
                <div className="pt-4">
                    <p>ID: {id}</p>
                    <p>Full Name: {first_name} {last_name}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
        </Link>
    )
}