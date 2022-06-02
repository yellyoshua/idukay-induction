import UserIcon from "../../icons/UserIcon";

export default function PlaneCell({ cell, snake = false, walked = false }) {
    return (
        <div className={`text-white ${walked ? "bg-gray-600" : "bg-slate-800"}`}>
            {snake ? 
                <div className="m-4">
                    <UserIcon width={17} height={32} color="#fff" />
                </div>
            : <p className="m-5">{cell}</p>}
        </div>
    )
}