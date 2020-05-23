import React from 'react'
const Contato = ({clientes}) => {
    return (
        <div>
            <center><h1>Lista de Contato</h1></center>
            {clientes.map((cliente) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> Nome: {cliente.nome}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Sexo: {cliente.sexo}</h6>
                        <p class="card-text">Idade: {cliente.idade}</p>
                        <p class="card-text">Apto: {cliente.apto}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};
export default Contato