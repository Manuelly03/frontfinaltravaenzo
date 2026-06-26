"use client";

import { TopbarMenu } from "@/components/topbar-menu";

export default function Informacoes() {
  return (
    <>
      <TopbarMenu />

      <h1 className="text-3xl text-center ">
        Sobre o Projeto
      </h1>

      <p className="text-gray-600 text-3xl px-10">
       Este projeto foi desenvolvido para criar uma plataforma web dinâmica, simples e interativa, onde os entusiastas de videogames podem avaliar, analisar e descobrir novos títulos. Mais do que um agregador de notas, o site funciona como um guia para a comunidade gamer: ele centraliza opiniões detalhadas, críticas de usuários e pontuações sobre jogos de diversas categorias — como ação, esporte, estratégia, RPG e terror.
Na prática, a plataforma resolve um problema comum dos jogadores: a dúvida sobre o que jogar a seguir. Ao navegar pelo site, o usuário encontra informações completas sobre o ecossistema de cada jogo. Isso inclui não apenas o jogo base, mas também a exibição de conteúdos complementares e expansões (DLCs) que estão disponíveis nas principais lojas e ecossistemas do mercado, como Steam (PC), PlayStation Store e Xbox Network.</p>

    </>
  );
}