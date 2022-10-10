import { useState } from "react";
import styled from "styled-components";

export default function BuyerData({ buyerNumber, booking, setBooking }) {
  const [userName, setUserName] = useState({ [`userName-${buyerNumber}`]: "" });
  const [userCpf, setUserCpf] = useState({ [`userCpf-${buyerNumber}`]: "" });

  const handleName = function (event) {
    const { name, value } = event.target;

    setUserName({ [name]: value });

    const newBuyers = [...booking];
    newBuyers[buyerNumber].name = value.toLowerCase();
    setBooking([...newBuyers]);
  };

  const isToDelete = function (typeInput) {
    return (typeInput === "deleteContentForward") |
      (typeInput === "deleteContentBackward")
      ? true
      : false;
  };

  const handleCpf = function (event) {
    const typeInput = event.nativeEvent.inputType;
    const { name, value } = event.target;
    const newCpf = isToDelete(typeInput) ? value : formatCpfInput(value);

    setUserCpf({ [name]: newCpf });

    const newBuyers = [...booking];
    newBuyers[buyerNumber].cpf = newCpf;
    setBooking([...newBuyers]);
  };

  // ACEITA FORMATOS: 12345678911 e 123.123.123-53
  const formatCpfInput = function (cpf) {
    cpf = cpf.replace(/[^\d]/g, "");
    const cpfArray = cpf.split("");
    if (cpfArray.length > 11) {
      window.alert("CPF INVÁLIDO:\nMais de 11 algarismos númericos");
      return "";
    }
    if (cpfArray.length < 7) {
      cpf = cpf.replace(/(\d{3})/, "$1.");
    } else if (cpfArray.length < 10) {
      cpf = cpf.replace(/(\d{3})(\d{3})/, "$1.$2.");
    } else if (cpfArray.length <= 14) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");
    }
    return cpf;
  };

  return (
    <BoxBuyerData>
      <label htmlFor={`userName-${buyerNumber}`}>
        Nome do comprador (assento {booking[buyerNumber].seat}):
      </label>
      <input
        type={"text"}
        id={`userName-${buyerNumber}`}
        name={`userName-${buyerNumber}`}
        value={userName[`userName-${buyerNumber}`]}
        onChange={handleName}
        placeholder="Digite seu nome..."
        data-identifier="buyer-name-input"
        minLength={"3"}
        autoCapitalize={"words"}
        required={"required"}
      ></input>
      <label htmlFor={`userCpf-${buyerNumber}`}>
        CPF do comprador (assento {booking[buyerNumber].seat}):
      </label>
      <input
        type={"text"}
        id={`userCpf-${buyerNumber}`}
        name={`userCpf-${buyerNumber}`}
        value={userCpf[`userCpf-${buyerNumber}`]}
        onChange={handleCpf}
        placeholder="Digite seu CPF..."
        data-identifier="buyer-cpf-input"
        pattern={`([0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2})`}
        // pattern={`([0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2})|[0-9]{11}`}
        minLength={"14"}
        maxLength={"14"}
        required={"required"}
      ></input>
      <hr />
    </BoxBuyerData>
  );
}

const BoxBuyerData = styled.div`
  label {
    display: inline-block;
    font-size: 18px;
    margin: 16px 0 8px;
    &:first-child {
      margin-top: 0;
    }
  }
  input {
    display: block;
    width: 100%;
    max-width: 420px;
    height: 51px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    color: #afafaf;
    font-size: 18px;
    font-style: italic;
    padding: 0 10px;
    text-transform: capitalize;
    &:valid {
      color: #293845;
    }
  }
  hr {
    margin: 30px 0;
  }
`;
