import SelectBox from "../select-box";
import "./form-box.css";

export default function FormBox() {
  return (
    <div className="Container">
      <div className="Text-Center">
        <p className="Strong-Text ">Você esta se candidatando para o cargo</p>
        <h1 className="Title">Profissional de Tradução</h1>
        <p className="Strong-Text">
          Para se candidatar para essa posição, por favor, preencha o formulário
          abaixo.
        </p>
      </div>

      <p className="Strong-Text">Selecione seu estado</p>
      <select className="Input">
        <option value="Option 1">Rio Grande do Sul</option>
        <option value="Option 2">Santa Catarina</option>
        <option value="Option 3">Paraná</option>
        <option value="Option 4">São Paulo</option>
        <option value="Option 5">Rio de Janeiro</option>
      </select>

      <p className="Strong-Text">Você possui conexão com a internet?</p>
      <SelectBox>Sim</SelectBox>
      <SelectBox>Não</SelectBox>

      <p className="Strong-Text">
        Você possui algum celular smartphone, tablet, computador ou notebook?
      </p>
      <SelectBox>Celular smartphone (android ou iphone)</SelectBox>
      <SelectBox>Tablet</SelectBox>
      <SelectBox>Computador</SelectBox>
      <SelectBox>Netbook</SelectBox>

      <p className="Strong-Text">
        Quantas horas por semana você tem disponível?
      </p>
      <input className="Input" />

      <p className="Strong-Text">Qual língua você possui mais facilidade?</p>
      <SelectBox>Inglês</SelectBox>
      <SelectBox>Espanhol</SelectBox>
      <SelectBox>Italiano</SelectBox>
      <SelectBox>Alemão</SelectBox>
      <SelectBox>
        Não sei falar nenhuma outra lingua, teria que utilizar o tradutor 100%
        das vezes
      </SelectBox>

      <p className="Text"></p>

      <input className="Input" placeholder="Digite seu nome" />
      <input className="Input" placeholder="Digite seu e-mail" />
      <input className="Input" placeholder="Digite seu telefone com DDD" />

      <button className="Button">ENVIAR</button>
    </div>
  );
}
