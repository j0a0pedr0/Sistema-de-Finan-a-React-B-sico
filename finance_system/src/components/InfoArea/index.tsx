import * as C from './styles';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { formatCurrentMonth } from '../../helpers/dateFilter'

type Props = {
    currentMonth: string;
}

export const InfoArea = ({ currentMonth }: Props) => {
    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow>< BsFillArrowLeftCircleFill size={30}></BsFillArrowLeftCircleFill></C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow><BsFillArrowRightCircleFill size={30}></BsFillArrowRightCircleFill></C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>

            </C.ResumeArea>
        </C.Container>
    );
}