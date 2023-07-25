import React from "react";
import annuityBenefits from "../../constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Benefits = () => {
  return (
    <div>
      <ul className="space-y-4">
        {annuityBenefits.map((benefit, index) => (
          <li className="flex gap-3" key={index}>
            <FontAwesomeIcon className="mt-1" icon={faCheck} />
            <div>
              <h3>
               {benefit.title}
              </h3>
              <p className="text-sm md:text-base">{benefit.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Benefits;