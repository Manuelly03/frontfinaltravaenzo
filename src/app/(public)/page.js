import { TopbarMenu } from "@/components/topbar-menu";

export default function Home() {
  const jogos = [
    {
      nome: "Red Dead Redemption 2",
      imagem: "https://imgs.search.brave.com/Kd6Hbs6P8scRVNP8ifQ7ztZQW3WDRjseVLqSI1AneNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFYcnhHcVBvc0wu/anBn",
      nota: 4.8,
      categoria: "Ação",
    },
    {
      nome: "FC 26",
      imagem: "https://imgs.search.brave.com/LfrR5UzDol-w1i1zf5YGjT3MJ-HK22B4-IXg_m-sw_E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFNVUZUdTE5ZEwu/anBn",
      nota: 4.2,
      categoria: "Esporte"
    },
    {
      nome: "Call of Duty MWII",
      imagem: "https://imgs.search.brave.com/katFJGRITKgAYRAQlpKamPK_zvnlPecUK0sYabEhbgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxTTFyZDFhbzVM/LmpwZw",
      nota: 4.8,
       categoria: "Ação",
    },

  {
    nome: "Call of Duty",
    imagem: "https://imgs.search.brave.com/H8RDfOx0w4Pe-Wa9_7uZNkahZepnSSbOFxzWo3Ut9Jg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaGFy/ZWQuZmFzdGx5LnN0/ZWFtc3RhdGljLmNv/bS9zdG9yZV9pdGVt/X2Fzc2V0cy9zdGVh/bS9hcHBzLzE5Mzgw/OTAvMDYxMDc2MDUz/NDg4MjAwODdiYjUx/Y2E4OWVkNjIwYzIy/ZmU1NTlhYS9oZWFk/ZXIuanBnP3Q9MTc3/NTE0NTk5NA",
    nota: 4.5,
    categoria: "Ação",
  },
  {
    nome: "GTA V",
    imagem: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    nota: 4.9,
    categoria: "Ação",
  },
  {
    nome: "Red Dead Redemption 2",
    imagem: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    nota: 5.0,
    categoria: "Ação",
  },
  {
    nome: "Fortnite",
    imagem: "https://imgs.search.brave.com/efforWYX2UXxG2jdYw0coXdUGOmzduTTI7xIjHvdgYI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYmVz/dC1mb3J0bml0ZS1t/dXNjbGUtY2hhcmFj/dGVyLXR2ampxbjM0/OTBxZ2k4dHAuanBn",
    nota: 4.5,
    categoria: "Ação",
  },
  {
    nome: "Minecraft",
    imagem: "https://imgs.search.brave.com/8pdSYL-awqc0VHEsjPHemsrIqGh5vE2Fkl700NevnlQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taW5l/Y3JhZnQud2lraS9p/bWFnZXMvdGh1bWIv/TmludGVuZG9fU3dp/dGNoX0VkaXRpb24u/cG5nLzMwMHB4LU5p/bnRlbmRvX1N3aXRj/aF9FZGl0aW9uLnBu/Zz8yZTUzOQ",
    nota: 4.9,
    categoria: "Ação",
  },

  {
    nome: "FIFA 23",
    imagem: "https://imgs.search.brave.com/cL6viPkN34EEkiYWnmjtuWha1r71W3tbNTTZHKMGPZw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yb21z/aW0uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzA0L2Vh/LXNwb3J0cy1maWZh/LTIzLW5pbnRlbmRv/LXN3aXRjaC1sZWdh/Y3ktZWRpdGlvbi1u/c3dpdGNoLWNvdmVy/LXJvbXNpbS03ODB4/NDU4LmpwZw",
    nota: 4.7,
    categoria: "Esporte",
  },
  {
    nome: "Rocket League",
    imagem: "https://imgs.search.brave.com/DBawMOXmHcXd26wUsVGdM7TBMpEDT0hqITxz_jL9Bdo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nYW1lc3RvcC5j/b20vaS9nYW1lc3Rv/cC8xMDEyOTQ1Nl8x/MDE1NTk1M18xMDE1/NzIzNF8xMDE2NjQ0/Ml8xMDE2NjQ0M19T/Q1IxMC9Sb2NrZXQt/TGVhZ3VlLUNvbGxl/Y3RvcnMtRWRpdGlv/bi0tLU5pbnRlbmRv/LVN3aXRjaD93PTEy/NTYmaD02NjQmZm10/PWF1dG8",
    nota: 4.6,
    categoria: "Esporte",
  },
  {
    nome: "NBA 2K24",
    imagem: "https://imgs.search.brave.com/bDyi_JhYPlbrM3a7j4oUNizmOu_clm_sFKk5SWfp9YI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpXSXdabU5o/TW1FdE16QXlOaTAw/TURsakxXSmtNREF0/TURKaVpXUmhZekZt/TkRSalhrRXlYa0Zx/Y0djQC5qcGc",
    nota: 4.5,
    categoria: "Esporte",
  },

  {
    nome: "Age of Empires IV",
    imagem: "https://imgs.search.brave.com/FsWjYUBDj4hQPnMFxw_k-EjaT2E1bDNVbkHcQU-_q9g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaGFy/ZWQuZmFzdGx5LnN0/ZWFtc3RhdGljLmNv/bS9zdG9yZV9pdGVt/X2Fzc2V0cy9zdGVh/bS9hcHBzLzE0NjY4/NjAvaGVhZGVyLmpw/Zz90PTE3ODA4NTQz/MzQ",
    nota: 4.7,
    categoria: "Estratégia",
  },
  {
    nome: "Civilization VI",
    imagem: "https://upload.wikimedia.org/wikipedia/en/3/3b/Civilization_VI_cover_art.jpg",
    nota: 4.8,
    categoria: "Estratégia",
  },
  {
    nome: "Clash Royale",
    imagem: "https://imgs.search.brave.com/OYWYILquOqFWAhvDBFaSghQPBTexg8p5gQ7_Ggpb9DE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Z0Y2RuLm5l/dC9pbWFnZXMvdF9h/cHAtY292ZXItcyxm/X2F1dG8vcC9mMzNj/OTY2MS00YzY4LTRh/NGMtYjc5ZC1kYmY1/M2FhOGExYzUvMjQ5/NTgyMjk1My9jbGFz/aC1yb3lhbGUtY2xh/c2gtcm95YWxlLXNj/cmVlbnNob3QtNi5q/cGc",
    nota: 4.6,
    categoria: "Estratégia",
  },

  {
    nome: "Resident Evil Village",
    imagem: "https://upload.wikimedia.org/wikipedia/en/2/2c/Resident_Evil_Village.png",
    nota: 4.6,
    categoria: "Terror",
  },
  {
    nome: "Resident Evil 4 Remake",
    imagem: "https://imgs.search.brave.com/PHKYqiglD0gWb6uG8ORNgjrGUEWSa9h2YNGjjkfyuZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDExODEy/MDAwLmpwZw",
    nota: 4.8,
    categoria: "Terror",
  },
  {
    nome: "Outlast",
    imagem: "https://imgs.search.brave.com/ymrYtgBZT9i2_GQJakpF0796j4ZfA18R4rf2OXq7o88/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZ2du/c2VtdWxhdG9yLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wOS9Eb3dubG9h/ZC1PdXRsYXN0LTIt/TlNQLVhDSS1ST00u/d2VicA",
    nota: 4.3,
    categoria: "Terror",
  },
];
  return (
    <>
  <TopbarMenu />

  <div className="max-w-6xl mx-auto px-4 py-10">

  <h1 className="text-4xl font-bold mb-8 text-center">Jogos em Destaque</h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
  {jogos.map((jogo, i) => (
  <div
  key={i}
  className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">

  <img
  src={jogo.imagem}
  alt={jogo.nome}
  className="w-full h-56 object-cover"/>

  <div className="p-4">

<h2 className="text-2xl font-bold mb-2">
    {jogo.nome}
    </h2>
<span className="text-2xl font-semibold text-gray-600 block mb-2">
    {jogo.categoria}
</span>
<span className="text-xl text-yellow-500 font-semibold">
    ⭐ {jogo.nota}
</span>
</div>
</div>))}
</div>
</div></>
);}