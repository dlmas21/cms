const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

export default async function Home() {
  const res = await fetch(`${API_URL}/api/proekties?populate=*`, {
    headers: {
      authorization: `bearer ${API_TOKEN}`,
    },
  });

  const { data } = await res.json();
  console.log('data', data)
  return (
    <div className="flex p-5 flex-col gap-4">
      Hello
    {/* {data.map((item:any) => (
      <div
        key={item.id}
        className="border border-gray-400 p-5 rounded max-w-[400px]"
      >
        <div>{item.attributes.title}</div>
        <img src={item.attributes.layout.data.attributes.url} />
      </div>
    ))} */}
  </div>
  );
}