import React, { useState } from 'react';

// Dados simulados baseados em serviços essenciais
const initialServices = [
  { id: 1, title: 'IPTU 2025', department: 'Fazenda' },
  { id: 2, title: 'Alvará 2025', department: 'Desenvolvimento Econômico' },
  { id: 3, title: 'Plano Diretor', department: 'Planejamento Urbano' },
  { id: 4, title: 'Fila de Espera do SUS/TFD', department: 'Saúde' },
  { id: 5, title: 'Concurso Público', department: 'Administração' },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra os serviços com base no que foi digitado na busca
  const filteredServices = initialServices.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Central de Serviços</h1>
        <p>Encontre rapidamente o que você precisa.</p>
      </header>

      <main>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar por um serviço..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        <div style={styles.grid}>
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div key={service.id} style={styles.card}>
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <span style={styles.badge}>{service.department}</span>
                <button style={styles.button}>Acessar</button>
              </div>
            ))
          ) : (
            <p style={styles.noResults}>Nenhum serviço encontrado para "{searchTerm}".</p>
          )}
        </div>
      </main>
    </div>
  );
}

// Estilos inline simples para rodar direto sem precisar de arquivos CSS externos
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  searchInput: {
    width: '100%',
    maxWidth: '400px',
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '15px',
  },
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
  },
  cardTitle: {
    margin: '0',
    fontSize: '18px',
  },
  badge: {
    backgroundColor: '#e0f7fa',
    color: '#006064',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 'auto',
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
  noResults: {
    textAlign: 'center',
    gridColumn: '1 / -1',
    color: '#666',
  }
};