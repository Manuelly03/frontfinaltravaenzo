// frontend\src\components\jogo-form.jsx
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function JogoForm({
  editing,
  sheetOpen,
  setSheetOpen,
  form,
  setForm,
  error,
  saving,
  handleSubmit,
}) {
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{editing ? "Editar Jogo" : "Novo Jogo"}</SheetTitle>
          <SheetDescription>
            {editing
              ? "Altere os dados do jogo."
              : "Preencha os dados para criar um novo jogo."}
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 px-4">
          <FieldGroup>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Field>
              <FieldLabel htmlFor="game-name">Nome do Jogo</FieldLabel>
              <Input
                id="game-name"
                placeholder="Ex: Jogo da Velha"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="game-price">Preço (R$)</FieldLabel>
              <Input
                id="game-price"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                required
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </Field>
            {/* <Field>
              <FieldLabel htmlFor="game-maxlinks">Máximo de Links</FieldLabel>
              <Input
                id="game-maxlinks"
                type="number"
                min="1"
                placeholder="10"
                required
                value={form.maxLinks}
                onChange={(e) => setForm({ ...form, maxLinks: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="game-maxclicks">
                Máximo de Cliques/mês
              </FieldLabel>
             <Input
                id="game-maxclicks"
                type="number"
                min="1"
                placeholder="1000"
                required
                value={form.maxClicks}
                onChange={(e) =>
                  setForm({ ...form, maxClicks: e.target.value })
                }
              />
            </Field>*/}
            <Field className="mt-4">
              <Button type="submit" disabled={saving}>
                {saving
                  ? "Salvando..."
                  : editing
                    ? "Salvar Alterações"
                    : "Criar Jogo"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </SheetContent>
    </Sheet>
  );
}

