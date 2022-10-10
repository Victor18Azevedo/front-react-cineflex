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

  const handleCpf = function (event) {
    const { name, value } = event.target;
    const cpf = stringToCpf(value);
    setUserCpf({ [name]: cpf });

    const newBuyers = [...booking];
    newBuyers[buyerNumber].cpf = cpf;
    setBooking([...newBuyers]);
  };

  const stringToCpf = function (cpf) {
    return cpf.replace(/[^\d\.-]/g, "");
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
        minLength={"11"}
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
