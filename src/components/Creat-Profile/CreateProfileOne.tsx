import React from "react";
import airbnb from "../../assets/airbnb logo.svg";
import right from "../../assets/chevron-right.svg";
import ButtonOne from "../Button/ButtonOne";
import { Link } from "react-router-dom";

function CreateProfileOne() {
  return (
    <div className="container mx-auto px-4 bg-white text-black h-[700px] w-[700px] mt-[20px]">
      <div className="pt-[40px]">
        
      <Link to="/"> <img src={airbnb} alt="" /> </Link>
      </div>

      <p className="pt-[20px]">Our community commitment</p>

      <p className="pt-[20px] font-bold text-2xl">
        Airbnb is a community where anyone can belong
      </p>

      <p className="pt-[20px]">
        To ensure this, we're asking you to commit to the following:
      </p>

      <p className="pt-[20px]">
        I agree to treat everyone in the Airbnb community regardless of their
        race, religion, nation origin, ethnicity, skin color, disability, sex,
        genderidentity, sexual orientation or age with respect, and without
        judgement or bias.
      </p>

      <div className="flex gap-[4px] pt-[10px] mb-[30px]">
        <p className="underline decoration-solid">
          <a href="">Learn more</a>
        </p>
        <p className="pt-[6px]">
          <a href="">
            <img src={right} alt="" />
          </a>
        </p>
      </div>



      <Link to="/create-profile-two"> <ButtonOne btnText="Agree and continue" /> </Link>

     

      <div className="h-[60px] w-[650px] mt-[10px] border-[3px] border-solid border-black rounded-[20px] flex items-center justify-center bg-white text-black">
        <p>Deline</p>
      </div>
    </div>
  );
}

export default CreateProfileOne;
