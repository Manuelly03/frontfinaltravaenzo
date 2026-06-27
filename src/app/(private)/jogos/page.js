"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";
import CardJogoAdmin from "@/components/ui/card-jogo-admin";
import JogoForm from "@/components/ui/jogo-form";

const API = "http://localhost:5505/api/jogos";

export default function GamesAdmin() {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState(null); // null = criar, objeto = editar
  const [form, setForm] = useState({
    name: "",
    price: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);

  useEffect(() => {
    fetchJogos();
  }, []);

  async function fetchJogos() {
    setLoading(true);
    const res = await fetch(API);
    const data = await res.json();
    setJogos(data);
    setLoading(false);
  }

  function openCreate() {
    setEditing(null);
    setForm({ name: "", price: ""});
    setError("");
    setSheetOpen(true);
  }

  function openEdit(jogo) {
    setEditing(jogo);
    setForm({
      name: jogo.name,
      price: String(jogo.price),
    });
    setError("");
    setSheetOpen(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const body = {
      name: form.name,
      price: form.price,
    };

    const res = await fetch(editing ? `${API}/${editing.id}` : API, {
      method: editing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });

    setSaving(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Erro ao salvar jogo.");
      return;
    }

    setSheetOpen(false);
    fetchJogos();
  }

  async function handleDelete(id) {
    await fetch(`${API}/${id}`, { method: "DELETE", credentials: "include" });
    setConfirmDelete(null);
    fetchJogos();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Jogos</h1>
        <Button onClick={openCreate}>
          <Plus className="size-4 mr-2" />
          Novo Jogo
        </Button>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
      ) : jogos.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Nenhum jogo cadastrado ainda.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jogos.map((jogo) => (
            <CardJogoAdmin
              key={jogo.id}
              jogo={jogo}
              confirmDelete={confirmDelete}
              onEdit={openEdit}
              onDelete={handleDelete}
              onRequestDelete={setConfirmDelete}
              onCancelDelete={() => setConfirmDelete(null)}
            />
          ))}
        </div>
      )}

      <JogoForm
        editing={editing} 
        sheetOpen={sheetOpen} 
        setSheetOpen={setSheetOpen} 
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit} 
        saving={saving}
        error={error}
      />
    </div>
  );
}
