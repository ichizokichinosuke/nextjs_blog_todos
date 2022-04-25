import { useContext } from "react";
import { StateContext } from "../context/StateContext";

import Cookie from "universal-cookie";
import { allowedStatusCodes } from "next/dist/lib/load-custom-routes";

const cookie = new Cookie();

export default function TaskForm({ taskCreated }) {
    const { selectedTask, setSelectedTask } = useContext(StateContext);
    const create = async (e) => {
        e.preventDefault();
        await fetch(
            `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/tasks/`,
            {
                method: "POST",
                body: JSON.stringify({ title: selectedTask.title }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `JWT ${cookie.get("access_token")}`,
            },
        }).then((res) => {
            if (res.status === 401) alert("JWT Token not valid");
        });
        // 初期化
        setSelectedTask({ id: 0, title: ""});
        // キャッシュの内容をリフレッシュ
        taskCreated();
    };


    const update = async (e) => {
        e.preventDefault();
        await fetch(
            `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/tasks/${selectedTask.id}/`,
            {
                method: "PUT",
                body: JSON.stringify({ title: selectedTask.title }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `JWT ${cookie.get("access_token")}`,
                },
            }
        ).then((res) => {
            if (res.status === 401) alert("JWT Token not valid");
        });
        setSelectedTask({ id: 0, title: "" });
        taskCreated();
    };
    return (
        <div>
            <form onSubmit={selectedTask.id === 0 ? create : update}>
                <input
                    className="text-black mb-8 px-2 py-1"
                    type="text"
                    value={selectedTask.title}
                    onChange={(e) =>
                        setSelectedTask({ ...selectedTask, title: e.target.value })
                    }
                />
                <button
                    type="submit"
                    className="bg-gray--500 ml-2 hover:bg-gray-600 text-sm px-2 py-1 rounded upperase"
                >
                    {selectedTask.id === 0 ? "CREATE" : "UPDATE"}
                </button>
            </form>
        </div>
    )
};
