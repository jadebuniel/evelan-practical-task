import { User } from "@/utils/types";
import Link from "next/link";

export default function User ({ id, email, first_name, last_name, avatar }: User) {
    return (
        <Link href={`/user/${id}`} className="bg-white w-full h-full rounded-xl p-12 flex items-center justify-center">
            <div className="flex gap-6 flex-col xl:flex-row">
                <div className="flex justify-center items-center min-w-[25%]">
                    <img className="rounded-full" src={avatar} alt={`${first_name} ${last_name}`} />
                </div>
                <div className="pt-4">
                    <p className="break-all">ID: {id}</p>
                    <p className="break-all">Full Name: {first_name} {last_name}</p>
                    <p className="break-all">Email: {email}</p>
                </div>
            </div>
        </Link>
    )
}