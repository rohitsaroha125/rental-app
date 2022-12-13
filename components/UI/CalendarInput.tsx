import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";
import tw from "tailwind-styled-components";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

const CalendarContainer = tw.div`
  w-full
  flex
  relative
  cursor-pointer
  justify-between
  items-center
`;

const CalendarInnerContainer = tw.div`
  flex
  items-center
`;

const CalendarIcon = styled.span`
  color: red;
  height: 25px;
  width: 25px;

  svg {
    height: 25px;
  }
`;

const ArrowIcon = styled.span`
  color: #dcdcdc;
  margin-right: 20px;

  svg {
    height: 15px;
  }
`;

const CalendarPlaceHolder = tw.p`
  text-gray-400
  text-sm
  ml-2
  mt-1
`;

const CalendarInput: React.FC<{ placeholder: string; line: boolean }> = (
  props
) => {
  const [inProp, setInProp] = useState<boolean>(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setInProp((prevState: boolean) => !prevState);
  };

  return (
    <CalendarContainer
      onClick={handleToggle}
      style={props.line ? { borderRight: "1px solid #dcdcdc" } : {}}
    >
      <CalendarInnerContainer>
        <CalendarIcon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </CalendarIcon>
        <CalendarPlaceHolder>{props.placeholder}</CalendarPlaceHolder>
      </CalendarInnerContainer>
      <ArrowIcon>
        <FontAwesomeIcon icon={faChevronDown} />
      </ArrowIcon>
      <AnimatePresence>
        {inProp && (
          <motion.div
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute"
          >
            <Calendar minDate={new Date()} />
          </motion.div>
        )}
      </AnimatePresence>
    </CalendarContainer>
  );
};

export default CalendarInput;
