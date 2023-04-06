import { useEffect, useState } from "react";
import SelectBox from "../select-box";
import "./form-box.css";
import { isValidAnswers } from "./validations/answers-validations";

export default function FormBox() {
  const [answers, setAnswers] = useState({
    state: "Rio grande do Sul",
    haveInternet: null,
    device: null,
    avaliableTime: "",
    language: null,
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {}, [answers]);

  function onSelect(questionProperty, answer) {
    setAnswers({ ...answers, [questionProperty]: answer });
  }

  function onSumit() {
    const result = isValidAnswers(answers);
    if (result === true) {
      return alert("Enviado com sucesso!");
    }
    alert(result);
  }

  return (
    <div className="form-container">
      <div className="Text-Center">
        <p className="Strong-Text ">Você esta se candidatando para o cargo</p>
        <h1 className="Title">Profissional de Tradução</h1>
        <p className="Strong-Text">
          Para se candidatar para essa posição, por favor, preencha o formulário
          abaixo.
        </p>
      </div>

      <p className="Strong-Text">Selecione seu estado</p>
      <select
        onInput={(e) => onSelect("state", e.target.value)}
        className="input cursor-pointer"
      >
        <option value="Rio Grande do Sul">Rio Grande do Sul</option>
        <option value="Santa Catarina">Santa Catarina</option>
        <option value="Parané">Paraná</option>
        <option value="São Paulo">São Paulo</option>
        <option value="Rio de Janeiro">Rio de Janeiro</option>
      </select>

      <p className="Strong-Text">Você possui conexão com a internet?</p>
      <SelectBox
        questionProperty={"haveInternet"}
        onSelect={onSelect}
        selected={answers.haveInternet}
      >
        Sim
      </SelectBox>
      <SelectBox
        questionProperty={"haveInternet"}
        onSelect={onSelect}
        selected={answers.haveInternet}
      >
        Não
      </SelectBox>

      <p className="Strong-Text">
        Você possui algum celular smartphone, tablet, computador ou notebook?
      </p>
      <SelectBox
        questionProperty={"device"}
        onSelect={onSelect}
        selected={answers.device}
      >
        Celular smartphone (android ou iphone)
      </SelectBox>
      <SelectBox
        questionProperty={"device"}
        onSelect={onSelect}
        selected={answers.device}
      >
        Tablet
      </SelectBox>
      <SelectBox
        questionProperty={"device"}
        onSelect={onSelect}
        selected={answers.device}
      >
        Computador
      </SelectBox>
      <SelectBox
        questionProperty={"device"}
        onSelect={onSelect}
        selected={answers.device}
      >
        Netbook
      </SelectBox>

      <p className="Strong-Text">
        Quantas horas por semana você tem disponível?
      </p>
      <input
        className="input"
        onChange={(e) => onSelect("avaliableTime", e.target.value)}
        value={answers.avaliableTime}
        type="number"
      />

      <p className="Strong-Text">Qual língua você possui mais facilidade?</p>
      <SelectBox
        questionProperty={"language"}
        onSelect={onSelect}
        selected={answers.language}
      >
        Inglês
      </SelectBox>
      <SelectBox
        questionProperty={"language"}
        onSelect={onSelect}
        selected={answers.language}
      >
        Espanhol
      </SelectBox>
      <SelectBox
        questionProperty={"language"}
        onSelect={onSelect}
        selected={answers.language}
      >
        Italiano
      </SelectBox>
      <SelectBox
        questionProperty={"language"}
        onSelect={onSelect}
        selected={answers.language}
      >
        Alemão
      </SelectBox>
      <SelectBox
        questionProperty={"language"}
        onSelect={onSelect}
        selected={answers.language}
      >
        Não sei falar nenhuma outra lingua, teria que utilizar o tradutor 100%
        das vezes
      </SelectBox>

      <p className="Text"></p>

      <br />
      <br />

      <input
        className="input"
        placeholder="Digite seu nome"
        onChange={(e) => onSelect("name", e.target.value)}
        value={answers.name}
        type="text"
      />
      <input
        className="input"
        placeholder="Digite seu e-mail"
        onChange={(e) => onSelect("email", e.target.value)}
        value={answers.email}
        type="email"
      />
      <input
        className="input"
        placeholder="Digite seu telefone com DDD"
        onChange={(e) => onSelect("phone", e.target.value)}
        value={answers.phone}
        type="text"
      />

      <button onClick={onSumit} className="Button">
        ENVIAR
      </button>
    </div>
  );
}
