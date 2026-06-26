import {Card,CardContent,CardFooter,}

from "@/components/ui/card";
export default function CardGame({ game }) {
  return (

  <Card className="overflow-hidden">

  <img
   src={game.imagem}
   alt={game.nome}
   className="w-full h-60 object-cover"/>
   
  <CardContent className="pt-4">

  <h2 className="text-xl font-bold"> {game.nome}</h2>

  <p className="text-gray-500"> {game.categoria}</p>

  </CardContent>
  <CardFooter>
  ⭐ {game.nota}
  </CardFooter>
  </Card>);}