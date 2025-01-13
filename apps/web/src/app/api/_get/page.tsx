
export default async function Home() {
    // const data = await client.user.findMany();
    const data:any = [ {id: 1, username: "John Doe", email: ""}]
    return (
        <div className="h-screen w-screen">
            <ul className="space-y-2">
                {data.length > 0 ? (
                    data.map((user:any) => (
                        <li key={user.id} className="p-4 border rounded shadow">
                            <p>
                                <strong>Name:</strong> {user.username}
                            </p>
                            <p>
                                <strong>Email:</strong> {user.email}
                            </p>
                        </li>
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </ul><br />
            {/* <button onClick={AddUser} className="block m-2 p-4 border-2 bg-slate-500">Add user</button> */}
        </div>
    );
}