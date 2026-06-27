import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardGameAdmin({
  jogo,
  confirmDelete,
  onEdit,
  onDelete,
  onRequestDelete,
  onCancelDelete,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{jogo.name}</CardTitle>
        <CardDescription>
          {Number(jogo.price) === 0
            ? "Grátis"
            : `R$ ${Number(jogo.price).toFixed(2)}/mês`}
        </CardDescription>
      </CardHeader>
      {/* <CardContent className="text-sm text-muted-foreground flex flex-col gap-1">
        <span>🔗 Até {jogo.maxLinks} links</span>
        <span>📊 Até {jogo.maxClicks.toLocaleString("pt-BR")} cliques/mês</span>
      </CardContent> */}
      <CardFooter className="flex gap-2">
        {confirmDelete === jogo.id ? (
          <>
            <span className="text-sm text-destructive flex-1">
              Confirmar exclusão?
            </span>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(jogo.id)}
            >
              Sim
            </Button>
            <Button size="sm" variant="outline" onClick={onCancelDelete}>
              Não
            </Button>
          </>
        ) : (
          <>
            <Button size="sm" variant="outline" onClick={() => onEdit(jogo)}>
              <Pencil className="size-3.5 mr-1" /> Editar
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onRequestDelete(jogo.id)}
            >
              <Trash2 className="size-3.5 mr-1" /> Excluir </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}