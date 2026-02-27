import React from "react";
import { Knewave } from "next/font/google";

const knewwave = Knewave({ weight: "400" });
type ThreeKeyFactsProps = {
  listofFacts: Fact[];
};
interface Fact {
  keyFact: string;
  value: string;
}
const ThreeKeyFacts = ({ listofFacts }: ThreeKeyFactsProps) => {
  return (
    <div className="p-2">
      <div
        className={
          "flex justify-center p-6 mx-2 items-center bg-[#E2E2E2] rounded-2xl"
        }
      >
        <div className={"flex w-full justify-between "}>
          {listofFacts.map((fact, index) => (
            <div key={index}>
              <h1
                className={
                  "text-center text-5xl text-green-800" +
                  " " +
                  knewwave.className
                }
              >
                {fact.keyFact}
              </h1>
              <p className={"text-center text-2xl"}>{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeKeyFacts;
