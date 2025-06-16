import Usuario from "../model/Usuario";
import Id from "../model/Id";

const usuarios: Usuario[] = [
  {
    id: Id.novo(),
    nome: "Ana Silva",
    email: "ana.silva@example.com",
    senha: "senha123",
  },
  {
    id: Id.novo(),
    nome: "Bruno Souza",
    email: "bruno.souza@example.com",
    senha: "bruno2023",
  },
  {
    id: Id.novo(),
    nome: "Carla Mendes",
    email: "carla.mendes@example.com",
    senha: "carla@321",
  },
  {
    id: Id.novo(),
    nome: "Diego Costa",
    email: "diego.costa@example.com",
    senha: "123diego",
  },
  {
    id: Id.novo(),
    nome: "Eduarda Lima",
    email: "eduarda.lima@example.com",
    senha: "edu123",
  },
  {
    id: Id.novo(),
    nome: "Felipe Rocha",
    email: "felipe.rocha@example.com",
    senha: "felipe_456",
  },
  {
    id: Id.novo(),
    nome: "Gabriela Nunes",
    email: "gabriela.nunes@example.com",
    senha: "gabi789",
  },
  {
    id: Id.novo(),
    nome: "Henrique Alves",
    email: "henrique.alves@example.com",
    senha: "henrique!",
  },
  {
    id: Id.novo(),
    nome: "Isabela Martins",
    email: "isabela.martins@example.com",
    senha: "isa2024",
  },
  {
    id: Id.novo(),
    nome: "João Pedro",
    email: "joao.pedro@example.com",
    senha: "joao321",
  },
  {
    id: Id.novo(),
    nome: "Karen Oliveira",
    email: "karen.oliveira@example.com",
    senha: "kar3n",
  },
  {
    id: Id.novo(),
    nome: "Lucas Ramos",
    email: "lucas.ramos@example.com",
    senha: "lucasR@2024",
  },
  {
    id: Id.novo(),
    nome: "Mariana Teixeira",
    email: "mariana.teixeira@example.com",
    senha: "marianaR@2024",
  },
];

export default usuarios;
