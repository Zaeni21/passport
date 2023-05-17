import React from "react";
import { Switch } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

const toggleIconClassName = "relative left-[2px] top-[2px] h-4 w-4 stroke-[3]";

const Toggle = ({ isChecked, onChange, disabled, ...props }: any) => {
  return (
    <Switch
      checked={isChecked}
      onChange={onChange}
      className="relative inline-flex h-7 w-12 items-center rounded-full bg-accent-2 ui-checked:bg-accent ui-selected:border"
      disabled={disabled}
      {...props}
    >
      <span
        className={`inline-block h-5 w-5 translate-x-1 transform rounded-full bg-white transition ui-checked:translate-x-6 ${
          disabled ? "opacity-25" : ""
        }`}
      >
        <XMarkIcon className={`block text-accent-2 ui-checked:hidden ${toggleIconClassName}`} />
        <CheckIcon className={`hidden text-accent ui-checked:block ${toggleIconClassName}`} />
      </span>
    </Switch>
  );
};

export default Toggle;