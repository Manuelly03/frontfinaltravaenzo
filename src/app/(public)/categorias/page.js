import { TopbarMenu } from "@/components/topbar-menu";

export default function Home() {
  const complementos = [
    {
      nome: "Phantom Liberty",
      imagem:
        "https://imgs.search.brave.com/nNpPvpuslO8nQ15DjtiN6GXt561PzzRpR3yYwFjzCTM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/Z2FtZTguY28vMzc3/NjY0Mi9jMmE2MzE4/YWE2ZTc3M2NjMDE4/YWM0NTgyMDNkZjVh/Yy5wbmcvc2hvdw",
      preco: "R$ 149,90",
      disponivel: "Steam",
    },

    {
      nome: "Shadow of the Erdtree",
      imagem:
        "https://imgs.search.brave.com/SVzyZPqCcqMNYER-A6fvwu0JdcI-fwEMdQhG2KJ9pp8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/Z2FtZTguY28vMzkx/MjY3OC83ZTU3YjEy/ZTE2OTAyMjU4NWUz/YjlhM2Q2MDNiYTRj/Zi5wbmcvc2hvdw",
      preco: "R$ 199,90",
      disponivel: "Steam",
    },

    {
      nome: "Blood and Wine",
      imagem:
        "https://imgs.search.brave.com/l36bakYO2I53NM_X_PJrN-AZ61C7kRzXUIybnDWxdkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBs/YXlncm91bmQucnUv/ZS9fRTVMbXN5OW9f/UllrT2dpQXlmMzlR/LmpwZWcud2VicD8z/OTJ4MjIw",
      preco: "R$ 39,90",
      disponivel: "Steam",
    },

    {
      nome: "Iceborne",
      imagem:
        "https://imgs.search.brave.com/nE8d-y_EVz-NUbX6ucLvpyeLyU-C4cuVDN5Vhv6TepE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L21v/bnN0ZXJodW50ZXIv/aW1hZ2VzL2MvY2Yv/TW9uc3Rlcl9IdW50/ZXJfV29ybGRfSWNl/Ym9ybmVfcmV2ZWFs/L3JldmlzaW9uL2xh/dGVzdC9zY2FsZS10/by13aWR0aC1kb3du/LzE4NT9jYj0yMDE4/MTIyODE2MDQwMg",
      preco: "R$ 129,90",
      disponivel: "Steam",
    },

    {
      nome: "The Frozen Wilds",
      imagem:
        "https://imgs.search.brave.com/oiuZT9yot7x0lstOg0SAJ4dVcUi1MnNADLjv_xvFlSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMi10/ZWNodHVkby5nbGJp/bWcuY29tL29BNV9y/Um9uTW1ZOGFraVBU/NGl5WG5UR2tmRT0v/MHgwOjE5MjB4MTA4/MC85ODR4MC9zbWFy/dC9maWx0ZXJzOnN0/cmlwX2ljYygpL2ku/czMuZ2xiaW1nLmNv/bS92MS9BVVRIXzA4/ZmJmNDhiYzA1MjQ4/Nzc5NDNmZTg2ZTQz/MDg3ZTdhL2ludGVy/bmFsX3Bob3Rvcy9i/cy8yMDE3LzcvNS9P/V0hWRGVTNHFVOU83/M0w3UHRody8wMDEu/anBn",
      preco: "R$ 49,90",
      disponivel: "PlayStation Store",
    },

    {
      nome: "Hearts of Stone",
      imagem:
        "https://imgs.search.brave.com/UzoB_5EhAn-IutHF4PU_FqL-Tg9OqyiGZYvF-fx76Q4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3dp/dGNoZXIvaW1hZ2Vz/L2QvZGIvVGhlX1dp/dGNoZXJfM19XaWxk/X0h1bnRfLV9IZWFy/dHNfb2ZfU3RvbmVf/KGV4cGFuc2lvbl90/ZWFzZXIpL3Jldmlz/aW9uL2xhdGVzdC9z/Y2FsZS10by13aWR0/aC1kb3duLzE4NT9j/Yj0yMDE3MDYxMzE5/MDMwOQ",
      preco: "R$ 29,90",
      disponivel: "Steam",
    },

    {
      nome: "Separate Ways",
      imagem:
        "https://imgs.search.brave.com/IRaemRokYZ6ZYH8WM085OjSY4t66KaGQhPfT0xfDfoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9md21l/ZGlhLmZhbmRvbXdp/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA5LzIx/MTYxMTM5L0NvcHkt/b2YtR2FtaW5nLUZl/YXR1cmVkLUltYWdl/XzIwMjMwOTIxXzIx/MTEyMF8wMDAwLnBu/Zw",
      preco: "R$ 52,90",
      disponivel: "Steam",
    },

    {
      nome: "Undead Nightmare",
      imagem:
        "https://imgs.search.brave.com/l6NdViZO0zc24naiNOT2VS2AyT0mZgSgEJ3Tb5i1QTg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNjg0/ODA4Ni5qcGc",
      preco: "R$ 39,90",
      disponivel: "Xbox Store",
    },

    {
      nome: "The Following",
      imagem:
        "https://imgs.search.brave.com/VQqb-HCe0WAjyddwEp4GyICMAVbZKGJRsagRuoW_THE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaGFy/ZWQuZmFzdGx5LnN0/ZWFtc3RhdGljLmNv/bS9zdG9yZV9pdGVt/X2Fzc2V0cy9zdGVh/bS9hcHBzLzExODMx/MDAvaGVhZGVyXzI5/MngxMzYuanBnP3Q9/MTU3Mzc1MDQ4Mw",
      preco: "R$ 59,90",
      disponivel: "Steam",
    },

    {
      nome: "Nuka-World",
      imagem:
        "https://upload.wikimedia.org/wikipedia/en/7/70/Fallout_4_cover_art.jpg",
      preco: "R$ 32,90",
      disponivel: "Steam",
    },
  ];

  return (
    <>
      <TopbarMenu />

<div className="max-w-6xl mx-auto px-4 py-10">
<h1 className="text-4xl font-bold mb-8 text-center">Complementos de Jogos</h1>

<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
{complementos.map((item, i) => (
<div
key={i}
className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">

  <img
  src={item.imagem}
  alt={item.nome}
  className="w-full h-56 object-cover"/>

  <div className="p-4">
  <h2 className="text-2xl font-bold mb-3">
  {item.nome}</h2>

  <p className="text-xl font-bold mt-3">
  {item.preco}
  </p>

  <p className="text-xl font-semibold text-gray-600 block mb-2">
  Disponível em: {item.disponivel}
    </p>
    </div>
  </div>
  ))}
  </div>
  </div>
</>
);}
