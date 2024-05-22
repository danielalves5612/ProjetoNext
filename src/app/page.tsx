'use client'
import { useState } from "react";
import NavBar from "./components/NavBar";
import './Page.css'

type QuartoInfo = {
  tipo: string;
  hospede: string;
  cpf: string;
  dataNascimento: string;
  numeroQuarto: number;
  reserva: {
    checkIn: string;
    checkOut: string;
    valor: number;
  };
};

export default function Home() {

  const [quartoSelecionado, setQuartoSelecionado] = useState<number | null>(
    null
  );
  const [quartos, setQuartos] = useState<QuartoInfo[]>([
    {
      tipo: "Casal",
      hospede: "Daniel Alvez De Souza",
      cpf: "123.456.789-00",
      numeroQuarto: 2101,
      dataNascimento: "01/01/1980",
      reserva: {
        checkIn: "01/05/2024",
        checkOut: "05/05/2024",
        valor: 500,
      },
    },
    {
      tipo: "Master",
      hospede: "Matheus de Castro Telles",
      cpf: "987.654.321-01",
      numeroQuarto: 2102,
      dataNascimento: "01/01/1980",
      reserva: {
        checkIn: "01/05/2024",
        checkOut: "05/05/2024",
        valor: 500,
      },
    },
    {
      tipo: "Casal",
      hospede: "Carlos Roberto",
      cpf: "123.456.789-00",
      numeroQuarto: 2103,
      dataNascimento: "01/01/1980",
      reserva: {
        checkIn: "01/05/2024",
        checkOut: "05/05/2024",
        valor: 500,
      },
    },
    {
      tipo: "Casal",
      hospede: "Among us",
      cpf: "123.456.789-00",
      numeroQuarto: 2104,
      dataNascimento: "01/01/1980",
      reserva: {
        checkIn: "01/05/2024",
        checkOut: "05/05/2024",
        valor: 500,
      },
    },
    {
      tipo: "Casal",
      hospede: "Among us",
      cpf: "123.456.789-00",
      numeroQuarto: 2105,
      dataNascimento: "01/01/1980",
      reserva: {
        checkIn: "01/05/2024",
        checkOut: "05/05/2024",
        valor: 500,
      },
    },
    {
      tipo: "Casal",
      hospede: "Among us",
      cpf: "123.456.789-00",
      numeroQuarto: 2106,
      dataNascimento: "01/01/1980",
      reserva: {
        checkIn: "01/05/2024",
        checkOut: "05/05/2024",
        valor: 500,
      },
    },
  ]);

  const [novoQuarto, setNovoQuarto] = useState<QuartoInfo>({
    tipo: "",
    hospede: "",
    cpf: "",
    dataNascimento: "",
    numeroQuarto: 0,
    reserva: {
      checkIn: "",
      checkOut: "",
      valor: 0,
    },
  });

  const [mostrarForm, setMostrarForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNovoQuarto((prevState) => ({
      ...prevState,
      [name]: name.includes("reserva.") ? {
        ...prevState.reserva,
        [name.split(".")[1]]: value,
      } : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuartos([...quartos, novoQuarto]);
    setNovoQuarto({
      tipo: "",
      hospede: "",
      cpf: "",
      dataNascimento: "",
      numeroQuarto: 0,
      reserva: {
        checkIn: "",
        checkOut: "",
        valor: 0,
      },
    });
    setMostrarForm(false);
  };

  return (
    <div className="relative flex flex-col min-h-screen wrapper">
      <NavBar active="Página Inicial" />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-center">Mapa de Reservas</h2>
        <button onClick={() => setMostrarForm(true)}>Check-In</button>
        {mostrarForm && (
          <form onSubmit={handleSubmit}>
            <input name="tipo" placeholder="Tipo" value={novoQuarto.tipo} onChange={handleChange} />
            <input name="hospede" placeholder="Hóspede" value={novoQuarto.hospede} onChange={handleChange} />
            <input name="cpf" placeholder="CPF" value={novoQuarto.cpf} onChange={handleChange} />
            <input name="dataNascimento" placeholder="Data de Nascimento" value={novoQuarto.dataNascimento} onChange={handleChange} />
            <input name="numeroQuarto" placeholder="Número do Quarto" type="number" value={novoQuarto.numeroQuarto} onChange={handleChange} />
            <input name="reserva.checkIn" placeholder="Check-In" value={novoQuarto.reserva.checkIn} onChange={handleChange} />
            <input name="reserva.checkOut" placeholder="Check-Out" value={novoQuarto.reserva.checkOut} onChange={handleChange} />
            <input name="reserva.valor" placeholder="Valor" type="number" value={novoQuarto.reserva.valor} onChange={handleChange} />
            <button type="submit">Salvar</button>
          </form>
        )}
      </div>

      <main className="pagina-inicial">
        <div className="quartos">
          {quartos.map((quarto, index) => (
            <div
              key={index}
              className='w-20 h-20 bg-gray-700 mr-4 mb-4 cursor-pointer quarto'
              onClick={() => setQuartoSelecionado(index)}
            >
              <p>{quarto.numeroQuarto}</p>
            </div>
          ))}
        </div>

        <div className="info">
          {quartoSelecionado !== null && (
            <div className="">
              <p className="font-bold">{quartos[quartoSelecionado].tipo}</p>
              <p>Hóspede: {quartos[quartoSelecionado].hospede}</p>
              <p>CPF: {quartos[quartoSelecionado].cpf}</p>
              <p>Número do Quarto: {quartos[quartoSelecionado].numeroQuarto}</p>
              <p>Data de Nascimento: {quartos[quartoSelecionado].dataNascimento}</p>
              <p>Check-in: {quartos[quartoSelecionado].checkIn}</p>
              <p>Check-Out:: {quartos[quartoSelecionado].checkOut}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
