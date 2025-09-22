"use client"

import { useState } from "react"

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!")
      return
    }

    console.log("Dados enviados:", formData)
    alert("Cadastro realizado com sucesso!")
    // Aqui você poderia enviar os dados para uma API ou backend
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-96 flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center">Criar Conta</h1>

        {/* Nome */}
        <input
          type="text"
          name="nome"
          placeholder="Digite seu nome"
          value={formData.nome}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Senha */}
        <input
          type="password"
          name="senha"
          placeholder="Digite sua senha"
          value={formData.senha}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Confirmar Senha */}
        <input
          type="password"
          name="confirmarSenha"
          placeholder="Confirme sua senha"
          value={formData.confirmarSenha}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Botão */}
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
