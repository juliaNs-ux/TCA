CREATE DATABASE sistema_consultas;


CREATE TABLE pacientes (
    cpf VARCHAR(11) PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(150),
    nascimento DATE NOT NULL
);

CREATE TABLE medicos (
    crm VARCHAR(20) PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(150),
    especialidade VARCHAR(100) NOT NULL
);

CREATE TABLE agendamentos (
    cpf_paciente VARCHAR(11) NOT NULL REFERENCES pacientes(cpf),
    crm_medico VARCHAR(20) NOT NULL REFERENCES medicos(crm),
    data DATE NOT NULL,
    horario TIME NOT NULL
);

CREATE TABLE horarios_medicos (
????
);