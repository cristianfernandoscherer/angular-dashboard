import { InMemoryDbService } from "angular-in-memory-web-api";
import { Categoria } from "./pages/categorias/shared/categoria.model";

export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const categorias: Categoria[] = [
            { id: 1, nome: 'Lazer', descricao: 'Cinema, Loja, Parque...' },
            { id: 2, nome: 'Culinária', descricao: 'Restaurante, Pratos, Saúde...' },
            { id: 3, nome: 'Turismo', descricao: 'Agências, Guias, Locais...' },
            { id: 4, nome: 'Esporte', descricao: 'Futebol, Basquete, Sinuca, Volêi...' },
            { id: 5, nome: 'Idioma', descricao: 'Inglês, Portugues, Francês, Espanhol, Russo...' },
            { id: 6, nome: 'Carros', descricao: 'Golf, Gol, Polo, Fusca, Jetta, Fox, Linea...' },
            { id: 7, nome: 'Animal', descricao: 'Arara, Peixe, Boi, Galinha...' }
        ];

        return { categorias }
    }
}