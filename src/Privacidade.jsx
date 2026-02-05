import React from 'react';
import { Link } from 'react-router-dom';

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-black italic text-red-600 mb-6">POLÍTICA DE PRIVACIDADE</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>A <strong>Borracharia Móvel Chega Rápido</strong>, em Manaus, respeita a sua privacidade.</p>
          <p><strong>1. Dados:</strong> Coletamos apenas o seu contato quando você nos chama pelo WhatsApp para solicitar um serviço.</p>
          <p><strong>2. Uso:</strong> Esses dados servem apenas para prestarmos o socorro mecânico solicitado.</p>
          <p><strong>3. Segurança:</strong> Não vendemos nem compartilhamos seus dados com ninguém.</p>
        </div>
        <Link to="/" className="mt-8 inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition">
          Voltar para o site
        </Link>
      </div>
    </div>
  );
};

export default Privacidade;